import React from "react";
import baking from "./baking.mp4";
import './VideoBanner.css'
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
        <h1>hello world</h1>
        <p>This is where the fun begin</p>
      </div>
    </div>
  );
}
