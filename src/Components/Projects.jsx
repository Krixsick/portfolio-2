import { motion } from "framer-motion";
import snoopy1 from "../assets/snoopy2.jpg";
import todolist from "../assets/ToDoList.png";
import spotify_script1 from "../assets/spotify-script1.png";
function Projects() {
  return (
    <div className="grid h-[1050px] w-full grid-cols-3 grid-rows-2 p-[40px] gap-[30px]">
      {/*First Box */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        className="project-fadein flex bg-[#fefae0] flex-col rounded-2xl"
      >
        <div className="h-60 relative overflow-hidden">
          <motion.img
            src={snoopy1}
            alt="snoopy"
            className="w-full h-full object-cover rounded-t-2xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex justify-start pl-[15px] h-[40%] flex-col">
          <h2 className="text-2xl font-bold text-black mb-1 ">Portfolio V1</h2>
          <p className="text-sm text-gray-500">January 2025</p>
          <div className="flex flex-wrap gap-2 mt-[10px]">
            {["ReactJS", "Tailwind", "Framer Motion"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm shadow-sm bg-gray-700 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-[15px] text-black leading-relaxed ">
            My first attempt at making my own portfolio website, featuring
            smooth animations and responsive design.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://github.com/Krixsick/portfolio-2"
              target="_blank"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors dark:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.419-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://linusgao.netlify.app/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors dark:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.497 1.17-2.497 2.637 0 1.468 1.103 2.638 2.497 2.638 1.511 0 2.055-.997 2.152-1.543h-2.152v-1.416h3.554c.036.204.064.408.064.638.001 2.332-1.563 3.988-3.62 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z"
                />
              </svg>
              <span className="text-sm font-medium">Project Link</span>
            </a>
          </div>
        </div>
      </motion.div>
      {/*Second box */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        className="project-fadein flex bg-[#fefae0] flex-col rounded-2xl"
      >
        <div className="h-60 relative overflow-hidden">
          <motion.img
            src={todolist}
            alt="snoopy"
            className="w-full h-full object-cover rounded-t-2xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex justify-start pl-[15px] h-[40%] flex-col">
          <h2 className="text-2xl font-bold text-black mb-1 ">To Do List</h2>
          <p className="text-sm text-gray-500">December 2024</p>
          <div className="flex flex-wrap gap-2 mt-[10px]">
            {["ReactJS", "Tailwind", "Firebase"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm shadow-sm bg-gray-700 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-[15px] text-black leading-relaxed ">
            Created a to-do list that has an authentication system and stores
            tasks of the user
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://youtu.be/wxPCeu4pf0E"
              target="_blank"
              className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors dark:text-red-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
              <span className="text-sm font-medium">Demo</span>
            </a>
          </div>
        </div>
      </motion.div>
      {/*Third Box I set */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        className="project-fadein flex bg-[#fefae0] flex-col rounded-2xl"
      >
        <div className="h-60 relative overflow-hidden">
          <motion.img
            src={spotify_script1}
            alt="spotify script"
            className="w-full h-full object-cover rounded-t-2xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex justify-start pl-[15px] h-[40%] flex-col">
          <h2 className="text-2xl font-bold text-black mb-1 ">
            Spotify Script
          </h2>
          <p className="text-sm text-gray-500">October 2024</p>
          <div className="flex flex-wrap gap-2 mt-[10px]">
            {["Python", "Spotipy"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm shadow-sm bg-gray-700 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-[15px] text-black leading-relaxed ">
            Can help automate the process of several actions by running this in
            your terminal
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://github.com/Krixsick/spotify-script"
              target="_blank"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors dark:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.419-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://youtu.be/fnRdi28CkgM"
              target="_blank"
              className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors dark:text-red-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
              <span className="text-sm font-medium">Demo</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
