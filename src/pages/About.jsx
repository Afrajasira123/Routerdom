import React, { useState } from "react";
import Nav from "../components/navbar/Nav";
import { Multiplereturns } from "../components/about/Multiplereturns";
import MultipleFetch from "../components/about/MultipleFetch";

const About = () => {
  const [person, setPerson] = useState({
    name: "Afra",
    place: "Qatar",
    greet: "Halaa",
  });
  function handleChange() {
    setPerson({ ...person, greet: "hello World" });
  }
  return (
    <div className="p-3 text-xl gap-2 flex flex-col items-center">
      <p className="font-bold">Name : {person.name}</p>
      <p>Place : {person.place}</p>
      <p>{person.greet}</p>
      <button onClick={handleChange} className="p-3 rounded-lg bg-green-500 text-white mt-5">
        Next Person
      </button>
      <Multiplereturns />
      <MultipleFetch />
    </div>
  );
};

export default About;
