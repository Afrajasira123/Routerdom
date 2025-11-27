import React, { useEffect, useState } from "react";

const UseEffectMultiple = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    console.log("Hey from first effect");
  }, [first]);
  useEffect(() => {
    console.log("Hey from second effect");
  }, [second]);
  return (
    <div className="my-10 mx-10">
      <h1>Multiple Effects</h1>
      <p>{first}</p>
      <button className="p-1 rounded-md bg-black text-white" onClick={() => setFirst(first + 1)}>
        Increase
      </button>
      <p>{second}</p>
      <button className="p-1 rounded-md bg-black text-white" onClick={() => setSecond(second + 1)}>
        Increase
      </button>
    </div>
  );
};

export default UseEffectMultiple;
