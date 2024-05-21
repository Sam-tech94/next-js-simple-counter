"use client";
import { useState } from "react";

export default function Home() {
  const [numState, setNumState] = useState<number>(0);

  const increment = () => {
    setNumState(numState + 1);
  };

  const decrement = () => {
    setNumState(numState - 1);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-[80px]">
      <p className="text-[50px]">My Counter App</p>
      <p className="font-bold">{numState}</p>
      <div className="flex items-center gap-10">
        <button onClick={increment} aria-label="Increment count">
          +
        </button>
        <button onClick={decrement} aria-label="Decrease count">
          -
        </button>
      </div>
    </div>
  );
}
