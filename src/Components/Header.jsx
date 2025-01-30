import waveGif from "../assets/wave-unscreen.gif";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#fefae0] min-w-[800px] min-h-[75px] max-w-[800px] rounded-[30px] mt-[10px] border-2 border-[#faedcd]/30 flex justify-between content-center shadow-[0_4px_20px_-5px_rgba(214,164,101,0.3)]">
        {/*Left side of header */}
        <div className="flex ml-[30px]">
          <img src={waveGif} alt="waving hand" className="max-w-[75px]" />
        </div>
        {/*Right side of header containing the buttons */}
        <div className="flex gap-[10px] mr-[30px]">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="btn"
            onClick={() => navigate("/")}
          >
            <Link to="/" className="btn flex">
              Home
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="btn"
            onClick={() => navigate("/about")}
          >
            <Link to="/" className="btn flex">
              About
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="btn"
            onClick={() => navigate("/experience")}
          >
            <Link to="/" className="btn flex">
              Experience
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="btn"
            onClick={() => navigate("/projects")}
          >
            <Link to="/" className="btn flex">
              Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Header;
