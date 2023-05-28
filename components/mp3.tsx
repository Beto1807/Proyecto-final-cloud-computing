import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import audioFile from '../public/audio.mp3';


const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      <ReactAudioPlayer src={audioFile} autoPlay={isPlaying} controls />
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
};

export default Player;
