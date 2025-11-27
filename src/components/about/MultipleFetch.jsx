import axios from "axios";
import React, { useEffect, useState } from "react";

const MultipleFetch = () => {
  const [user, setUser] = useState(null);
  const [isLoading, SetIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/QuincyLarson");
        const data = response.data;
        setUser(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        SetIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) return <p>Loading.....</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.company}</p>
      <img src={user.avatar_url}></img>
      <p>{user.location}</p>
    </div>
  );
};

export default MultipleFetch;
