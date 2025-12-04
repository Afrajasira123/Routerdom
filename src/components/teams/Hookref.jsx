import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../UserContext";

const Hookref = () => {
  const [value, setvalue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  function handleSubmit(e) {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
  }

  useEffect(() => {
    if (isMounted.current === false) {
      isMounted.current = true;
      return;
    }
    console.log("hiiii");
  }, [value]);
  const { username } = useContext(UserContext);
  return (
    <div>
      <p>{username}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" ref={refContainer} className="p-2 bg-gray-300"></input>
        <button type="submit" className="p-2 bg-black text-white">
          Submit
        </button>
      </form>
      <div>
        <p>Count: {value}</p>
        <button className="p-2 bg-black text-white" onClick={() => setvalue(value + 1)}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default Hookref;
