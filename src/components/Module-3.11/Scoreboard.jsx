import { useState } from 'react';
import Counter from './Counter';

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>

      {isPlayerA && <Counter person="Taylor" />}

      {!isPlayerA && <Counter person="Sarah" />}
      
      <button
        className='bg-indigo-500 text-white px-3 py-1 rounded-sm mt-3 ml-5'
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}>
        Next player!
      </button>
    </div>
  );
}

