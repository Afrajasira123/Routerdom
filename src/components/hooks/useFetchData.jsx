import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchData = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, SetIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users");
        const data = response.data;
        setUsers(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return { users, isError, isLoading };
};

export default useFetchData;
