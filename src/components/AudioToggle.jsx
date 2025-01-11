"use client";

import React, { useRef, useState, useEffect } from "react";

const AudioToggle = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const handleUserInteraction = () => {
    setHasUserInteracted(true);
    const audio = audioRef.current;
    if (!isPlaying) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    }
  };

  useEffect(() => {
    if (hasUserInteracted) {
      const audio = audioRef.current;
      audio.play().catch(console.error); // Autoplay after interaction
    }
  }, [hasUserInteracted]);

  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
      onClick={handleUserInteraction}
    >
      {/* Audio element */}
      <audio ref={audioRef} src={src} />

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className={`relative flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white focus:outline-none focus:ring-4 focus:ring-purple-300 
        transition-transform transform ${
          isPlaying ? "scale-90" : "hover:scale-110"
        }`}
      >
        <span className="text-lg font-bold">
          {isPlaying ? "Pause" : "Play"}
        </span>
      </button>
    </div>
  );
};

export default AudioToggle;
