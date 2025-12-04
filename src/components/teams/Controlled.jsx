import React, { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [isMarried, setIsMarried] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = { name, contact, email, isMarried };
    console.log("data");
    setName("");
    setContact("");
    setEmail("");
    e.target.reset();
  }

  return (
    <div className="py-5 px-[120px]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input
            type="text"
            className="p-3 bg-gray-200 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label>Contact</label>
          <input
            type="text"
            className="p-3 bg-gray-200 rounded-md"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Name"
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label>isMarried</label>
          <input
            type="checkbox"
            // className="p-3 bg-gray-200 rounded-md"
            checked={isMarried}
            onChange={(e) => setContact(e.target.checked)}
            // placeholder="Enter Name"
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            type="text"
            className="p-3 bg-gray-200 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Name"
          ></input>
        </div>
        <button className="bg-black text-white rounded-md p m-3 px-2">SUBMIT</button>
      </form>
    </div>
  );
};

export default Controlled;
