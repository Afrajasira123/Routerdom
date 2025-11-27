import React, { useState } from "react";

export const Multiplereturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return <p>Loadinggggg</p>;
  }
  return (
    <div className="my-10">
      <p>Multiplereturns</p>
    </div>
  );
};
