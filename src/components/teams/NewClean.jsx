import React, { useEffect } from "react";

const NewClean = () => {
  useEffect(() => {
    const data = setInterval(() => {
      console.log("hiiiii");
    }, 2000);
    return () => {
      clearInterval(data);
    };
  }, []);
  return <div>NewClean</div>;
};

export default NewClean;
