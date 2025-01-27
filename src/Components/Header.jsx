import waveGif from "../assets/wave-unscreen.gif";
import { motion } from "motion/react";

function Header() {
  return (
    <>
      <div className="bg-[#fefae0] min-w-[800px] min-h-[75px] max-w-[800px] rounded-[30px] mt-[10px] border-2 border-[#faedcd]/30 flex justify-between content-center shadow-[0_4px_20px_-5px_rgba(214,164,101,0.3)]">
        {/*Left side of header */}
        <div className="flex ml-[30px]">
          <img src={waveGif} alt="waving hand" className="max-w-[75px]" />
        </div>
        {/*Right side of header containing the buttons */}
        <div className="flex gap-[10px] mr-[30px]">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="btn"
          >
            Home
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="btn"
          >
            About
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="btn"
          >
            Experience
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="btn"
          >
            Projects
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default Header;
