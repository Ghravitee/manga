import meme2 from "../assets/meme-2.JPG";
import meme3 from "../assets/meme-3.JPG";
import meme4 from "../assets/meme-4.JPG";
import meme5 from "../assets/meme-5.JPG";
import meme6 from "../assets/meme-6.JPG";
import meme7 from "../assets/meme-7.JPG";

const Memes = () => {
  return (
    <div style={styles.gridContainer}>
      <img src={meme2} alt="meme2" style={styles.image} />
      <img src={meme3} alt="meme3" style={styles.image} />
      <img src={meme4} alt="meme4" style={styles.image} />
      <img src={meme5} alt="meme5" style={styles.image} />
      <img src={meme6} alt="meme6" style={styles.image} />
      <img src={meme7} alt="meme7" style={styles.image} />
    </div>
  );
};

const styles = {
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px", // Space between images
  },
  image: {
    width: "100%", // Ensures images fit the grid cells
    height: "auto",
  },
};

export default Memes;
