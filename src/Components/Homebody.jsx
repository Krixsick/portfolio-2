import snoopy1 from "../assets/snoopy2.jpg";
import { motion } from "motion/react";
import GlitchEffect from "./GlitchEffect";

function Homebody() {
  return (
    <>
      <div className="flex min-w-full min-h-[600px] justify-around mt-[100px]">
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
