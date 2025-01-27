import React, { useState, useEffect } from "react";

const GlitchEffect = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [text, setText] = useState("IM LINUS"); // Displayed text
  const originalText = "IM LINUS"; // The text to glitch back to
  const [intervalId, setIntervalId] = useState(null);

  const handleMouseOver = () => {
    let iteration = 0;

    clearInterval(intervalId); // Clear any existing interval
    const newInterval = setInterval(() => {
      setText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return originalText[index]; // Return the correct letter
            }
            return letters[Math.floor(Math.random() * letters.length)]; // Random letter
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        clearInterval(newInterval);
      }

      iteration += 1 / 3;
    }, 30);

    setIntervalId(newInterval); // Save interval ID to clear later
  };

  return (
    <h1
      className="cursor-pointer text-black text-[clamp(3rem,10vw,10rem)] font-mono p-[clamp(1rem,2vw)] rounded-[clamp(0.4rem,0.75vw,1rem)] hover:bg-[#ccd5ae] hover:text-black transition-colors"
      onMouseOver={handleMouseOver}
    >
      {text}
    </h1>
  );
};

export default GlitchEffect;
