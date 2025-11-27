import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  function sayHello() {
    console.log("Helloooooo");
  }
  useEffect(() => {
    sayHello();
    console.log("Helloo useEffect");
  }, []);
  return (
    <div className="my-10 mx-10">
      <p>UseEffect basics</p>
      <p>Count : {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="p-3 rounded-lg bg-green-500 text-white mt-5"
      >
        Increase
      </button>
    </div>
  );
};

export default UseEffect;
