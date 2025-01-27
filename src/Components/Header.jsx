import waveGif from "../assets/wave-unscreen.gif";

function Header() {
  return (
    <>
      <div className="bg-[#fefae0] min-w-[800px] min-h-[75px] max-w-[800px] rounded-[30px] mt-[10px] border-0 flex justify-between content-center">
        {/*Left side of header */}
        <div className="flex ml-[10px]">
          <img src={waveGif} alt="waving hand" className="max-w-[75px]" />
        </div>
        {/*Right side of header containing the buttons */}
        <div className="flex gap-[10px]">
          <button>Home</button>
          <button>About</button>
          <button>Experience</button>
          <button>Projects</button>
        </div>
      </div>
    </>
  );
}

export default Header;
