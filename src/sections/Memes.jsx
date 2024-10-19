import meme2 from "../assets/meme-2.PNG";
import meme3 from "../assets/meme-3.PNG";
import meme4 from "../assets/meme-4.PNG";
import meme5 from "../assets/meme-5.PNG";
import meme6 from "../assets/meme-6.PNG";
import meme7 from "../assets/meme-7.PNG";

const Memes = () => {
  return (
    <div className="grid grid-cols-3 gap-[40px] lg:gap-12 py-20">
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
  image: {
    width: "100%", // Ensures images fit the grid cells
    height: "fit",
  },
};

export default Memes;
