import React, { useState } from "react";
import Nav from "../components/navbar/Nav";
import { peoplesData } from "../utils/data";
import { MdDeleteForever } from "react-icons/md";

const Course = () => {
  const [people, setPeople] = useState(peoplesData);

  function handleRemove(id) {
    const newPoeple = people.filter((item) => item.id !== id);
    setPeople(newPoeple);
  }

  return (
    <div className=" flex flex-col gap-5">
      {people.map((item) => (
        <div
          key={item.id}
          className="p-3 m-4 rounded-lg bg-black text-white flex gap-2 items-center w-fit"
        >
          <h3>{item.name}</h3>
          <p>
            <button onClick={() => handleRemove(item.id)}>
              <MdDeleteForever />
            </button>
          </p>
        </div>
      ))}
      <button className="p-5 rounded-lg bg-red-500 " onClick={() => setPeople([])}>
        CLEAR ALL
      </button>
    </div>
  );
};

export default Course;
