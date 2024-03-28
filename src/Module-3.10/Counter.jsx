import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);



    return (
        <div
            className="border-2 border-black px-3 py-2"
        >
            <h1>{count}</h1>
            <button 
            className="bg-indigo-500 px-2 py-1 rounded-sm text-white"
            onClick={() => setCount(count + 1)}>
                Add one
            </button>
        </div>
    );
}
