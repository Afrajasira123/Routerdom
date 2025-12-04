import axios from "axios";
import React, { useEffect, useState } from "react";
const useFetchPerson = () => {
  const [user, setUser] = useState(null);
  const [isLoading, SetIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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
  useEffect(() => {
    fetchData();
  }, []);
  return { user, isError, isLoading };
};

export default useFetchPerson;
