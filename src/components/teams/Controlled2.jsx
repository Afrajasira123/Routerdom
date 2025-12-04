import React, { useState } from "react";

const Controlled2 = () => {
  const [state, setState] = useState({
    name: "",
    contact: "",
    email: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
    state({
      name: "",
      contact: "",
      email: "",
    });
  }
  return (
    <div className="py-5 px-[120px]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input
            type="text"
            className="p-3 bg-gray-200 rounded-md"
            value={state.name}
            onChange={(e) => {
              setState({ ...state, name: e.target.value });
            }}
            placeholder="Enter Name"
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label>Contact</label>
          <input
            type="text"
            className="p-3 bg-gray-200 rounded-md"
            value={state.contact}
            onChange={(e) => {
              setState({ ...state, contact: e.target.value });
            }}
            placeholder="Enter Name"
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label>Isma</label>
          <input
            type="text"
            className="p-3 bg-gray-200 rounded-md"
            value={state.contact}
            onChange={(e) => {
              setState({ ...state, contact: e.target.value });
            }}
            placeholder="Enter Name"
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            type="text"
            className="p-3 bg-gray-200 rounded-md"
            value={state.email}
            onChange={(e) => {
              setState({ ...state, email: e.target.value });
            }}
            placeholder="Enter Name"
          ></input>
        </div>
        <button type="submit" className="bg-black text-white rounded-md p m-3 px-2">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Controlled2;
