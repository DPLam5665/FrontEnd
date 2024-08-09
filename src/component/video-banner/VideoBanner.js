import React from "react";
import baking from "./baking.mp4";
import './VideoBanner.css'
import logo from './logo3.png'
export default function VideoBanner() {
  return (
    <div className="background-video">
      <video
        src={baking}
        type="video/mp4"
        id="baking-background"
        autoPlay
        loop
        muted
      />
      <div className="video-banner">
        <h1 className="hideVidBanner1">Welcome to </h1>
        <img src={logo} width={300}/>
        <hr/>
        <p className="hideVidBanner2">Whether you are looking for some delightful pastries to satisfy your sweet tooth, or try making one, you have come to the right place, my dear hungry soul.</p>
      </div>
    </div>
  );
}
