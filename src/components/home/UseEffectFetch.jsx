import React, { useEffect, useState } from "react";

import axios from "axios";

const UseEffectFetch = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users");
        const data = response.data;
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="my-5">
      <p>Use effect fetch data</p>
      {users.map((item) => (
        <div key={item.id} className="flex gap-3 items-center p-5 bg-gray-500 my-2">
          <img src={item.avatar_url} className="w-14 rounded-full object-cover"></img>
          <div>
            <p>{item.login}</p>
            <p>{item.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UseEffectFetch;
