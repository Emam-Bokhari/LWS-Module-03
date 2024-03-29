import { useState } from "react";

export default function Counter({ person }) {

    const [score, setScore] = useState(0);
  
    return (
      <div
        className="border-2 border-black w-[150px] h-[100px] px-5 text-center hover:bg-pink-500 hover:text-white"
      >
        <h1 >{person}'s score: {score}</h1>
        <button 
        className="bg-indigo-500 px-3 py-1 rounded-sm text-white"
        onClick={() => setScore(score + 1)}>
          Add one
        </button>
      </div>
    );
  }
  