import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Components/Header";
function App() {
  return (
    <>
      <div className="bg-[#e9edc9] place-items-center min-h-screen grid grid-cols-1 grid-rows-[100px] justify-center">
        <Header></Header>
      </div>
    </>
  );
}

export default App;
