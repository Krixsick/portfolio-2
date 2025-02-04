import linus from "../assets/linus.png";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="grid h-[1200px] grid-cols-1 grid-rows-[200px_100px_100px_300px_1fr] mt-[50px] w-full">
      {/*first grid item*/}
      <div className="flex justify-center">
        <motion.img
          src={linus}
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

      {/* Facts Part */}
      <div className="flex justify-around align-center mt-[50px] h-[100%]">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex rounded-[30px] w-lg h-full flex-column bg-[#fefae0] flex-col shadow-2xl justify-center items-center"
        >
          <div className="flex h-2/15 w-2xs justify-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-4xl font-bold font-sans pt-[6px]"
            >
              Hobbies
            </motion.h1>
          </div>
          <div className="flex h-4/6 w-sm mt-7">
            Currently, I enjoy playing tennis, reading, running, coding various
            projects, and spending time with my friends/family. I'm always down
            to try out new activities and learn new things.
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex rounded-[30px] w-lg h-full flex-column bg-[#fefae0] flex-col shadow-2xl justify-center items-center"
        >
          <div className="flex h-2/15 w-2xs justify-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-4xl font-bold font-sans"
            >
              Socials
            </motion.h1>
          </div>
          <div className="flex h-3/4 w-sm flex-col">
            <div className="flex items-center group p-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#0A66C2] mr-3"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
              <div className="flex-1">
                <p className="text-sm text-gray-500">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/linus-gao-5474b723b/"
                  className="text-gray-900 hover:text-[#0A66C2] transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linus Gao
                </a>
              </div>
            </div>
            <div className="flex items-center group p-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-500 mr-3"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
                />
              </svg>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-900 hover:text-red-600 transition-colors font-medium"
                >
                  linusgao123@gmail.ca
                </a>
              </div>
            </div>
            <div className="flex items-center group p-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-800 mr-3"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.419-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              <div className="flex-1">
                <p className="text-sm text-gray-500">GitHub</p>
                <a
                  href="https://github.com/Krixsick"
                  className="text-gray-900 hover:text-gray-700 transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Krixsick
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
