import snoopy1 from "../assets/snoopy2.jpg";
import { motion } from "framer-motion";
import GlitchEffect from "./GlitchEffect";
import { Typewriter } from "react-simple-typewriter";

function Homebody() {
  return (
    <>
      <div className="flex min-w-full h-screen justify-around mt-[100px]">
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="ml-[9px] text-6xl font-bold font-sans"
          >
            Hey
          </motion.h1>
          <div>
            <GlitchEffect></GlitchEffect>
          </div>
          <div className="flex gap-x-2">
            <p className="text-3xl font-bold ml-[15px]">I am a</p>
            <h1 className="text-3xl font-bold">
              <span className="text-[#d4a373]">
                <Typewriter
                  words={[
                    "Coder!",
                    "Full-Stack Developer",
                    "Builder, Creator, Innovator",
                    "Computer Science Student @UWO",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={60}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
        </div>
        <div>
          <div className="">
            <motion.img
              src={snoopy1}
              alt="Snoopy"
              className="max-w-[400px] max-h-[400px] rounded-3xl shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homebody;
