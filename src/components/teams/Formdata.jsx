import React from "react";

const Formdata = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);
    data.isMarried = formdata.get("isMarried") === "on" ? true : false;
    console.log(data);
  }
  return (
    <div className="py-5 px-[120px]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input
            type="text"
            name="username"
            className="p-3 bg-gray-200 rounded-md"
            placeholder="Enter Name"
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label>Contact</label>
          <input
            type="text"
            name="contact"
            className="p-3 bg-gray-200 rounded-md"
            placeholder="Enter Name"
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label>isMarried</label>
          <input type="checkbox" name="isMarried"></input>
        </div>
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            type="text"
            className="p-3 bg-gray-200 rounded-md"
            name="email"
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

export default Formdata;
