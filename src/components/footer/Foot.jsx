import React from "react";

const Foot = () => {
  const date = new Date();
  return (
    <div className="h-20 bg-blue-200 flex justify-around items-center">
      copyright@afrajasira {date.getFullYear()}
    </div>
  );
};

export default Foot;
