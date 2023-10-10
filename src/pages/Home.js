import React from 'react';
import "./Home.css";
import "../App.css";
import vid from "./rtvideo.mp4";

function Home() {
  return (
    <div className='hero-container'>
        <video src = {vid} autoPlay loop muted/>
        <h1 style={{color:"white"}}> Delicacy en route!</h1>
    </div>
  )
}

export default Home