import { useState } from "react";

function App() {
  const [color, setColor] = useState("#ED5565");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{
        background: color, // Changed from backgroundColor to background
        width: "100vw",
        height: "100vh",
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-2 rounded-xl">
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ background: "linear-gradient(to right, #00bdfc, #f9fd50)" }}
            onClick={() => {
              setColor("linear-gradient(to right, #00bdfc, #f9fd50)");
            }}
          >
            BG-01
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ background: "linear-gradient(to right, #DEB0DF, #A16BFE)" }}
            onClick={() => {
              setColor("linear-gradient(to right, #DEB0DF, #A16BFE)");
            }}
          >
            BG-02
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ background: "linear-gradient(to right, #A16BFE, #BC3D2F)" }}
            onClick={() => {
              setColor("linear-gradient(to right, #A16BFE, #BC3D2F)");
            }}
          >
            BG-03
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ background: "linear-gradient(to right, #3d6cb9, #00fff0)" }}
            onClick={() => {
              setColor("linear-gradient(to right, #3d6cb9, #00fff0)");
            }}
          >
            BG-04
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ background: "linear-gradient(to right, #4ef037, #00b7c2)" }}
            onClick={() => {
              setColor("linear-gradient(to right, #4ef037, #00b7c2)");
            }}
          >
            BG-05
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ background: "linear-gradient(to right, #8f71ff, #8bffff)" }}
            onClick={() => {
              setColor("linear-gradient(to right, #8f71ff, #8bffff)");
            }}
          >
            BG-06
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ background: "linear-gradient(to right, #C1E3FF, #ABC7FF)" }}
            onClick={() => {
              setColor("linear-gradient(to right, #C1E3FF, #ABC7FF)");
            }}
          >
            BG-07
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ background: "linear-gradient(to right, #F8C390, #D279EE)" }}
            onClick={() => {
              setColor("linear-gradient(to right, #F8C390, #D279EE)");
            }}
          >
            BG-08
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ background: "linear-gradient(to right, #14ED8E, #41C7AF)" }}
            onClick={() => {
              setColor("linear-gradient(to right, #14ED8E, #41C7AF)");
            }}
          >
            BG-09
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;