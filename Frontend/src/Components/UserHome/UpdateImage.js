import React from 'react'
import { connect } from "react-redux";
import { actionsImage } from "../../Redux/Actions/ImgeActions";
import  "./user.css";
function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        image: state.imageReducer.image,
    }
}
const mapDispatchToProps = (dispatch) => (

    {
        setAlbumId: (albumId) => dispatch(actionsImage.setAlbumId(albumId)),
        setId: (id) => dispatch(actionsImage.setId(id)),
        setTitle: (title) => dispatch(actionsImage.setTitle(title)),
        setUrl: (url) => dispatch(actionsImage.setUrl(url)),
        setThumbnailUrl: (thumbnailUrl) => dispatch(actionsImage.setThumbnailUrl(thumbnailUrl)),
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(function (props) {
    const { reset, image, setAlbumId, setId, setTitle, setUrl, setThumbnailUrl, submitting, valid, pristine } = props
    function updateImage(image) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: JSON.stringify(image),
            redirect: 'follow'
        };

        fetch(`http://localhost:5000/images/updateImage/${image._id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }
    return (
        <>
            <div className="container-fluid">
                <div className="row main-content bg-success text-center">
                    <div className="col-4 text-center company__info gg">
                        {/* <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                            <h4 className="company_title"></h4> */}
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                            </div>
                            <div className="row">
                                <div className="row">
                                    <input name="albumId" type="number" value={image.albumId} id="albumId" className="form__input" placeholder="enter albumId" onChange={e => setAlbumId(e.target.value)}></input>
                                </div>

                                <div className="row">
                                    <span className="fa fa-lock"></span>
                                    <input type="number" name="id" id="id" value={image.id} className="form__input" placeholder="enter id" onChange={e => setId(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <input name="title" type="text" id="title" value={image.title} className="form__input" placeholder="enter your title" onChange={e => setTitle(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <input name="url" type="text" id="url" value={image.url} className="form__input" placeholder="enter url" onChange={e => setUrl(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <input name="thumbnailUrl" type="text" value={image.thumbnailUrl} id="thumbnailUrl" className="form__input" placeholder="enter thumbnailUrl" onChange={e => setThumbnailUrl(e.target.value)}></input>
                                </div>

                                <br></br>
                                <div className="row col-8">
                                    <button  className="btn" onClick={()=>updateImage(image)}>save</button>
                                    <button className="btn" onClick={reset}>reset</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <input type="number" name="albumId" id="albumId" value={image.albumId} onChange={(e) => setAlbumId(e.target.value)}></input>
            <input type="number" name="idd" id="idd" value={image.id} onChange={(e) => setId(e.target.value)}></input>
            <input type="text" name="title" id="title" value={image.title} onChange={(e) => setTitle(e.target.value)}></input>
            <input type="text" name="url" id="url" value={image.url} onChange={(e) => setUrl(e.target.value)}></input>
            <input type="text" name="thumbnailUrl" value={image.thumbnailUrl} id="thumbnailUrl" onChange={(e) => setThumbnailUrl(e.target.value)}></input>
            <button onClick={() => updateImage(image)}>Uptade</button> */}
        </>
    )
})

//     return (
//         <>
//             <div>
//                 <form onSubmit={handleSubmit((values) => { updateImage(values) })}>
//                     <table>
//                         <tbody>
//                             <tr>
//                                 <td>
//                                     <label>albumId:</label>
//                                 </td>
//                                 <td>
//                                     <Field
//                                         name="albumId"
//                                         type="number"
//                                         component={input}
//                                         id="albumId"
//                                         placeholder="enter albumId"
//                                         value={image.albumId}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <label>id:</label>
//                                 </td>
//                                 <td>
//                                     <Field
//                                         name="id"
//                                         type="number"
//                                         component={input}
//                                         id="id"
//                                         placeholder="enter id"
//                                         value={image.title} />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <label>title:</label>
//                                 </td>
//                                 <td>
//                                     <Field

//                                         name="title"
//                                         type="text"
//                                         component={input}
//                                         id="title"
//                                         placeholder="enter your title"
//                                         value={image.title} />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <label>url:</label>
//                                 </td>
//                                 <td>
//                                     <Field
//                                         name="url"
//                                         type="text"
//                                         component={input}
//                                         id="url"
//                                         placeholder="enter url" />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <label>thumbnailUrl:</label>
//                                 </td>
//                                 <td>
//                                     <Field
//                                         name="thumbnailUrl"
//                                         type="text"
//                                         component={input}
//                                         id="thumbnailUrl"
//                                         placeholder="enter thumbnailUrl" />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td><button type="submit"
//                                     disabled={!valid || pristine || submitting}
//                                 >Submit</button></td>
//                                 <td><button type="button" onClick={reset}>Reset</button></td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </form>
//             </div>
//             {user.id}<br></br>
//             {user.name}<br></br>
//             {user.pass}<br></br>
//             {image.title}
//         </>
//     )
// })


// export default reduxForm({
//     form: "ApdateImage",
//     validate: formValidatorHelper
// })
//     (ApdateImage)
