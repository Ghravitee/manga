import { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import Memes from "./sections/Memes";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audioElement = document.querySelector("#audio");

    const unmuteAudio = () => {
      if (audioElement && audioElement.muted) {
        audioElement.muted = false;
      }
      // Optionally, remove the event listener after it has been triggered once.
      window.removeEventListener("click", unmuteAudio);
      window.removeEventListener("keydown", unmuteAudio);
      window.removeEventListener("touchstart", unmuteAudio);
    };

    // Add event listeners for various types of user interactions.
    window.addEventListener("click", unmuteAudio);
    window.addEventListener("keydown", unmuteAudio);
    window.addEventListener("touchstart", unmuteAudio);

    return () => {
      // Clean up event listeners when the component unmounts.
      window.removeEventListener("click", unmuteAudio);
      window.removeEventListener("keydown", unmuteAudio);
      window.removeEventListener("touchstart", unmuteAudio);
    };
  }, []);

  const toggleAudio = () => {
    const audioElement = document.querySelector("#audio");
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      {/* Background music with muted initially set to true */}
      <audio autoPlay loop muted id="audio">
        <source
          src={`${import.meta.env.BASE_URL}manga.mp3`}
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleAudio}
        style={{ margin: "20px", padding: "10px", fontSize: "16px" }}
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>

      <Hero />
      <Memes />
    </div>
  );
};

export default App;
