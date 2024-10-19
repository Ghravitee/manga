import meme1 from "../assets/meme-1.png";
import { RiTwitterXFill } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div>
      <img src={meme1} alt="" className="mx-auto" />
      <div className="flex flex-col justify-center mt-8 mb-12">
        <h1 className="text-5xl lg:text-7xl mx-auto mb-12">
          Nah, I&apos;d Win!
        </h1>
        <h2 className="text-5xl lg:text-7xl mx-auto">ca: </h2>
      </div>
      <div className="flex gap-8 items-center justify-center my-6 mb-12">
        <a
          href="#"
          className=""
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
        >
          <RiTwitterXFill color="black" className="text-6xl " />
        </a>
      </div>
      <div className="flex justify-center mt-8 mb-12">
        <h1 className="text-5xl lg:text-7xl mx-auto mb-6">Would you lose?</h1>
      </div>
    </div>
  );
};

export default Hero;
