import { IoSchoolSharp } from "react-icons/io5";

function Experience() {
  return (
    <div className="flex justify-center h-full w-full bg-[#e9edc9] p-0 m-0">
      <div className="timeline p-0 m-0">
        {/* First Box */}
        <div className="timeline-container timeline-left">
          <div className="timeline-picture flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-[#d4a373]">
            <IoSchoolSharp className="h-[25px] w-[25px]" />
          </div>
          <div className="timeline-textbook">
            <h2 className="timeline-title">WE Auto Pilot</h2>
            <small>2024-2025</small>
            <p>
              I'm current apart of the Red Autonomy team. I'm working on the
              machine learning component for our team's autonomous car.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        {/* Second Box */}
        <div className="timeline-container timeline-right">
          <div className="timeline-picture flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-[#d4a373]">
            <IoSchoolSharp className="h-[25px] w-[25px]" />
          </div>
          <div className="timeline-textbook">
            <h2 className="timeline-title">Chinese Student Association</h2>
            <small>2023-2024</small>
            <p>
              I was an events executive for Western's Chinese Student
              Association. We hosted our main event "Western Voice", a singing
              competition featuring Katherine Li.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        {/* Third Box */}
        <div className="timeline-container timeline-left">
          <div className="timeline-picture flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-[#d4a373]">
            <IoSchoolSharp className="h-[25px] w-[25px]" />
          </div>
          <div className="timeline-textbook">
            <h2 className="timeline-title">TurtleHacks</h2>
            <small>2022-2023</small>
            <p>
              I was the Director of Moderation, I was in charge of overseeing
              the event and helping out sponsors/hackers with any questions.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        {/* Fourth Box */}
        <div className="timeline-container timeline-right">
          <div className="timeline-picture flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-[#d4a373]">
            <IoSchoolSharp className="h-[25px] w-[25px]" />
          </div>
          <div className="timeline-textbook">
            <h2 className="timeline-title">JFSS Investment Club</h2>
            <small>2018-2019</small>
            <p>
              I was an executive of the JFSS Investment Club, helping with
              planning activities and taking meeting notes.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
