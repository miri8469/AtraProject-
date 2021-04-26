import React, { useEffect, useState } from 'react'
import './Login/login.css'
import { connect } from "react-redux";
import './images.css'

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
    }
}
export default connect(mapStateToProps)(function Images(props) {
    const { user } = props;
    var mone = true;
    const [image, setImage] = useState([])

    useEffect(
        () => {
            fetch('https://api.nasa.gov/planetary/apod?api_key=l9qlCUbnGof4MaTH8MnqIVrahBSkd8J9C7iiVCxL')
                .then(response => response.json())
                .then(json => { console.log(json); setImage(json) })
                .catch(err => { console.log('error', err) })
        }, [])


    function showImage() {
        image["user_id"] = user.id
        console.log(image);
        fetch('http://localhost:5000/Images/createMyImage',
            {
                method: 'POST',
                body: JSON.stringify(
                    image
                ),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then(response => { response.json() })
            .catch((err) => {
                console.log("err:===" + err);
            })

    }
  
    showImage();

    return (
        <>
            <div><h2>The pictuer of the Day</h2>
                <img src={image.url} controls="controls" width="454" height="193" autoPlay="autoPlay" className="dayI" ></img>
                <br></br>
            </div>
        </>
    )
})

