import { useState } from "react";
import meme1 from "../assets/meme-1.png";
import { RiTwitterXFill } from "react-icons/ri";
import pump from "../assets/pump-black-white.PNG";
// import { Typewriter } from "react-simple-typewriter";
import { FaRegCopy } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";

const Hero = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("0x0000000000000000");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <div>
      <img src={meme1} alt="" className="mx-auto" />
      <div className="flex flex-col justify-center mt-8 mb-12">
        <h1 className="text-5xl lg:text-7xl mx-auto ">Nah, I&apos;d Win!</h1>
      </div>
      <div
        onClick={handleCopy}
        className="flex justify-center gap-4 items-center"
      >
        <h2 className="text-3xl lg:text-6xl">0x0000000000000000 </h2>
        <div>
          {hasCopied ? (
            <FaCopy className="text-3xl lg:text-6xl" />
          ) : (
            <FaRegCopy className="text-3xl lg:text-6xl" />
          )}
        </div>
      </div>
      <div className="flex items-center justify-center my-6 mb-12">
        <a
          href="https://x.com/winnersonsolana"
          className=""
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
        >
          <RiTwitterXFill color="black" className="text-6xl mb-4" />
        </a>
        <a href="" className="">
          <img
            src={pump}
            alt=""
            width={110}
            className="aspect-square object-cover my-auto"
          />
        </a>
      </div>
      <div className="flex justify-center mt-8 mb-12">
        <h1 className="text-5xl lg:text-7xl mx-auto mb-6">Would you lose?</h1>
      </div>
    </div>
  );
};

export default Hero;
