import React, { useState } from "react";
import Nav from "../components/navbar/Nav";
import Course from "./Course";
import UseEffect from "../components/home/UseEffect";
import UseEffectMultiple from "../components/home/UseEffectMultiple";
import UseEffectFetch from "../components/home/UseEffectFetch";

const Home = () => {
  const [count, setCount] = useState(0);
  // function handleClick() {
  //   setCount(count + 1);
  // }
  // function presentCount() {
  //   setCount(count - 1);
  // }
  function handleClick() {
    setTimeout(() => {
      setCount((currentState) => {
        const newState = currentState + 1;
        return newState;
      });
    });
  }
  return (
    <div className="h-screen bg-blue-100">
      <div className=" flex justify-center items-center gap-3">
        <p>Count: {count} </p>
        <button onClick={handleClick} className="p-2 bg-black text-white rounded-md">
          Increase
        </button>
        {/* <button onClick={presentCount} className="p-2 bg-black text-white rounded-md">
          Decrease
        </button> */}
      </div>
      <UseEffect />
      <UseEffectMultiple />
      <UseEffectFetch />
    </div>
  );
};

export default Home;
