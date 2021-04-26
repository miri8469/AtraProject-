import React, { useState } from 'react'
import { reduxForm, Field } from "redux-form";
import { formValidatorHelper } from "../Redux_form/formValidator";
import { input } from "../Redux_form/inputControl";
import { connect } from "react-redux";
import "../images.css";
import "../Login/login.css";
import "./user.css";

import { AiOutlineAndroid, AiOutlinePicCenter, AiOutlinePicture, AiOutlineUserAdd } from "react-icons/ai";

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
    }
}

const NewImage = connect(mapStateToProps)(function (props) {
    const { user, handleSubmit, reset, pristine, submitting, valid } = props
    // const [handleFileInput, setHandleFileInput] = useState('');
    const [explanation, setExplanation] = useState(0);
    const [hdurl, setHdurl] = useState('');
    const [mediaType, setMediaType] = useState('');
    const [serviceVersion, setServiceVersion] = useState('');
    const [url, setUrl] = useState('');
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    function createMyImage() {
        fetch('http://localhost:5000/Images/createMyImage',
            {
                method: 'POST',
                body: JSON.stringify(
                    {
                        "date": date,
                        "explanation": explanation,
                        "hdurl": hdurl,
                        "title": title,
                        "url": url,
                        "serviceVersion": serviceVersion,
                        "mediaType": mediaType,
                        "user_id": user.id
                    }
                ),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then(response => {

                response.json()
            })
            .then(json => { })
            .catch((err) => {
                console.log("err" + err);
            })


        // (url ולא רק העתקת) העלאת תמונה לשרת באופן ממשי

        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        // var formdata = new FormData();
        // formdata.append("albumId", albumId);
        // formdata.append(" id", id);
        // formdata.append("title", title);
        // formdata.append("thumbnailUrl", thumbnailUrl);
        // formdata.append("user_id", user_id);
        // formdata.append("image", fileInput.files[0], "/C:/Users/This_user/Pictures/Saved Pictures/menorah.png");

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: formdata,
        //     redirect: 'follow'
        // };

        // fetch("http://localhost:5000/images/upload", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
    }

    const onChangeHandlerProfile = (event) => {
        // seturlp(event.target.result.url);
        //  console.log('event.target.result.url',event.target.result.url)
        const fileReader = new FileReader();
        const file = event;
        fileReader.onload = (e) => {
            console.log('reader.result', fileReader.result)
            setImg(e.target.result);
            console.log(img, 'img')
            //משתנה ביוזסטייט
        };
        fileReader.readAsDataURL(file);
        // setFile(file);
    }
    return (


        <>
            <div className="container-fluid col-8">
                <div className="row main-content bg-success text-center">
                    <div className="col-4 text-center company__info gg">                        <h4 className="company_title"><AiOutlinePicCenter /></h4>

                    </div>

                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                                <h5><AiOutlinePicCenter /> Up load your image</h5>
                            </div>
                            <div className="row">

                                <div>
                                    <input className="btn btn-primary" type="file" id="dorzki-image" name="dorzki-image" accept=".jpg,.jpeg,.png,.mp4" onChange={(e) => onChangeHandlerProfile(e.target.files[0])} />
                                    {<img className="img_person conversation-photo" width="30%" high="1000px" referrerpolicy="no-referrer" src={img} />}

                                </div>
                                <br></br>
                                <div className="row">
                                    <input name="date" type="date" id="date" className="form__input" placeholder="enter date" onChange={e => setDate(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <span className="fa fa-lock"></span>
                                    <input type="text" name="explanation" id="explanation" className="form__input" placeholder="enter explanation" onChange={e => setExplanation(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <input name="hdurl" type="text" id="hdurl" className="form__input" placeholder="enter your hdurl" onChange={e => setHdurl(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <input name="url" type="text" id="url" className="form__input" placeholder="enter url" onChange={e => setUrl(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <input name="media_type" type="text" id="media_type" className="form__input" placeholder="enter media_type" onChange={e => setMediaType(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <input name="service_version" type="text" id="service_version" className="form__input" placeholder="enter service_version" onChange={e => setServiceVersion(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <input name="title" type="text" id="title" className="form__input" placeholder="enter title" onChange={e => setTitle(e.target.value)}></input>
                                </div>
                                <br></br>
                                <div className="row col-8">
                                    <button type="submit" value="Submit" className="btn" onClick={() => createMyImage()}>save</button>
                                    <button className="btn" onClick={reset}>reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
})


export default reduxForm({
    form: "NewImage",
    validate: formValidatorHelper
})
    (NewImage)




