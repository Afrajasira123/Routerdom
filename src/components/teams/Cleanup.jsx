import React, { useState } from "react";
import NewClean from "./NewClean";

const Cleanup = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        onClick={() => setToggle(!toggle)}
        className="px-4 py-2 bg-black text-white rounded-md"
      >
        Toggle Component
      </button>
      {toggle && <NewClean />}
    </div>
  );
};

export default Cleanup;
