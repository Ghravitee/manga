import Hero from "./sections/Hero";
import Memes from "./sections/Memes";
// import music from "../src/assets/manga.mp3";

const App = () => {
  return (
    <div>
      <audio autoPlay loop>
        <source src="/manga.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* <audio id="audio_tag" src={music} /> */}

      <Hero />
      <Memes />
    </div>
  );
};

export default App;
