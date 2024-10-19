import meme1 from "../assets/meme-1.png";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";

const Hero = () => {
  return (
    <div>
      <img src={meme1} alt="" className="mx-auto" />
      <div className="flex justify-center">
        <h1 className="text-5xl mx-auto">Nah, I&apos;d Win!</h1>
      </div>
      <div className="flex gap-3 items-center justify-center my-6">
        <a
          href="#"
          className=""
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
        >
          <RiTwitterXFill color="black" className="text-6xl" />
        </a>
        <a
          href=""
          className=""
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="600"
        >
          <BiLogoTelegram color="black" className="text-6xl" />
        </a>
      </div>
      <div className="flex justify-center">
        <h1 className="text-5xl mx-auto">Would you lose?</h1>
      </div>
    </div>
  );
};

export default Hero;
