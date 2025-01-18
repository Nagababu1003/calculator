import React,{useState} from 'react';
import "./App.css";

function App() {
  const [input,setInput]=useState("");
  const handleClear=()=>{
    setInput("");
  }

  const handleBack=()=>{
    setInput(input.slice(0,-1));
  }

  const handleSolve=(value)=>{
    setInput(input+value);
  }

  const handleResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error"); 
    }
  };
  return (
    <>
      <div>
        <h1 className='text-4xl text-center font-title relative top-16 font-bold drop-shadow-[3px_2px_rgba(255,255,255,0.9)]'>Simple Calculator</h1>
        <div className='border-2 rounded-2xl shadow-lg shadow-sky-500 bg-white m-auto my-36 text-center w-64 py-5'>
          <input className='w-48 h-10 border-2 border-gray-400 text-right pr-4 rounded-lg text-xl font-title my-6' disabled id="screen" value={input} />
          <br />
          <button className="text-lg m-1 w-10 h-10 bg-red-500 text-white rounded-lg" onClick={handleClear}>C</button>
          <button className="text-lg m-1 w-10 h-10 bg-red-500 text-white rounded-lg" onClick={handleBack}>←</button>
          <button className="text-lg m-1 w-10 h-10 bg-blue-500 text-white rounded-lg" onClick={() => handleSolve("%")}>%</button>
          <button className="text-lg m-1 w-10 h-10 bg-blue-500 text-white rounded-lg" onClick={() => handleSolve("/")}>/</button>

          <br />
          <button className="text-lg m-1 w-10 h-10 bg-black text-white rounded-lg" onClick={() => handleSolve("1")}>1</button>
          <button className="text-lg m-1 w-10 h-10 bg-black text-white rounded-lg" onClick={() => handleSolve("2")}>2</button>
          <button className="text-lg m-1 w-10 h-10 bg-black text-white rounded-lg" onClick={() => handleSolve("3")}>3</button>
          <button className="text-lg m-1 w-10 h-10 bg-blue-500 text-white rounded-lg" onClick={() => handleSolve("+")}>+</button>
          <br />
          <button className="text-lg m-1 w-10 h-10 bg-black text-white rounded-lg" onClick={() => handleSolve("4")}>4</button>
          <button className="text-lg m-1 w-10 h-10 bg-black text-white rounded-lg" onClick={() => handleSolve("5")}>5</button>
          <button className="text-lg m-1 w-10 h-10 bg-black text-white rounded-lg" onClick={() => handleSolve("6")}>6</button>
          <button className="text-lg m-1 w-10 h-10 bg-blue-500 text-white rounded-lg" onClick={() => handleSolve("-")}>-</button>
          <br />
          <button className="text-lg m-1 w-10 h-10 bg-black text-white rounded-lg" onClick={() => handleSolve("7")}>7</button>
          <button className="text-lg m-1 w-10 h-10 bg-black text-white rounded-lg" onClick={() => handleSolve("8")}>8</button>
          <button className="text-lg m-1 w-10 h-10 bg-black text-white rounded-lg" onClick={() => handleSolve("9")}>9</button>
          <button className="text-lg m-1 w-10 h-10 bg-blue-500 text-white rounded-lg" onClick={() => handleSolve("*")}>*</button>
          <br />
          <button className="text-lg m-1 w-10 h-10 bg-black text-white rounded-lg" onClick={() => handleSolve(".")}>.</button>
          <button className="text-lg m-1 w-10 h-10 bg-black text-white rounded-lg" onClick={() => handleSolve("0")}>0</button>
          <button className="text-lg m-1 w-10 h-10 bg-black text-white rounded-lg" onClick={() => handleSolve("00")}>00</button>
          <button className="text-lg m-1 w-10 h-10 bg-green-500 text-white rounded-lg" onClick={handleResult}>=</button>
        </div>
      </div>
    </>
  )
}

export default App;
