import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Hiding from "../assets/sound/hiding.mp3";

function Audio() {
  return <ReactAudioPlayer src={`${Hiding}`} autoPlay controls loop />;
}

export default Audio;
