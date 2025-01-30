import snoopy2 from "../assets/snoopy2.webp";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="grid grid-cols-1 grid-rows-[200px_100px_100px_300px_200px] mt-[50px] w-full">
      {/*first grid item*/}
      <div className="flex justify-center">
        <motion.img
          src={snoopy2}
          alt="Snoopy"
          className="max-w-[400px] max-h-[400px] rounded-3xl shadow-lg "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
      {/*second grid item*/}
      <div className="flex justify-center align-center mt-[20px]">
        <div className="flex justify-start items-center w-3/4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-5xl font-bold font-sans opacity-100"
          >
            Hello! I'm Linus
          </motion.h1>
        </div>
      </div>
      {/*third grid item*/}
      <div className="flex justify-center align-center mt-[20px] ">
        <div className="flex justify-start items-center w-3/4 ">
          <p className="text-base md:text-lg lg:text-xl">
            I'm a full-stack developer studying Computer Science @ Western
            University! I specialize in React, Node.js, Python, and I am
            familiar with databases. My enthusiasm stems from creating random
            projects, thriving in thinking creatively. I code to create
            innovative solutions to everyday problems.
          </p>
        </div>
      </div>
      {/*fourth grid item*/}
      <div className="flex justify-center items-center w-full mt-[50px]">
        <div className="flex justify-between items-center w-3/4 h-full bg-[#fefae0] gap-[10px] rounded-3xl">
          <div className="flex flex-col w-1/2 m-[20px] gap-[15px] h-full">
            {/* First progress bar */}
            <div className="flex justify-between mb-1 mt-[10px]">
              <span className="text-base font-medium text-blue-700 dark:text-black">
                Python
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-black">
                90%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>

            {/* Second progress bar */}
            <div className="flex justify-between mb-1 mt-[10px]">
              <span className="text-base font-medium text-blue-700 dark:text-black">
                React
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-black">
                75%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
            {/* Third progress bar */}
            <div className="flex justify-between mb-1 mt-[10px]">
              <span className="text-base font-medium text-blue-700 dark:text-black">
                React
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-black">
                75%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          {/* Right Side progress bar */}
          <div className="flex flex-col w-1/2 m-[20px] gap-[15px] h-full">
            {/* First progress bar */}
            <div className="flex justify-between mb-1 mt-[10px]">
              <span className="text-base font-medium text-blue-700 dark:text-black">
                Firebase
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-black">
                75%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>

            {/* Second progress bar */}
            <div className="flex justify-between mb-1 mt-[10px]">
              <span className="text-base font-medium text-blue-700 dark:text-black">
                Java
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-black">
                75%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>

            {/* Third progress bar */}
            <div className="flex justify-between mb-1 mt-[10px]">
              <span className="text-base font-medium text-blue-700 dark:text-black">
                NodeJS
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-black">
                75%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
