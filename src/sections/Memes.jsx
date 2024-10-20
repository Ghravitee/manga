// import meme2 from "../assets/nah-1.webp";
// import meme3 from "../assets/nah-2.webp";
// import meme4 from "../assets/nah-3.webp";
// import meme5 from "../assets/nah-4.webp";
// import meme6 from "../assets/nah-5.webp";
// import meme7 from "../assets/nah-6.webp";

// const Memes = () => {
//   return (
//     <div className="grid grid-cols-3 gap-[40px] lg:gap-12 py-20">
//       <img src={meme2} alt="meme2" style={styles.image} />
//       <img src={meme3} alt="meme3" style={styles.image} />
//       <img src={meme4} alt="meme4" style={styles.image} />
//       <img src={meme5} alt="meme5" style={styles.image} />
//       <img src={meme6} alt="meme6" style={styles.image} />
//       <img src={meme7} alt="meme7" style={styles.image} />
//     </div>
//   );
// };

// const styles = {
//   image: {
//     width: "100%", // Ensures images fit the grid cells
//     height: "fit",
//   },
// };

// export default Memes;

import nahVideo from "../assets/nah-video.mp4";

const Memes = () => {
  return (
    <div className="grid grid-cols-1 gap-[40px] lg:gap-12 py-20 ">
      <video
        src={nahVideo}
        controls
        autoPlay
        loop
        muted
        className="animate-fadeIn delay-[200ms]"
        style={styles.video}
      />
    </div>
  );
};

const styles = {
  video: {
    width: "100%", // Ensures video fits the grid cell
    height: "",
  },
};

export default Memes;
