import useFetchPerson from "../hooks/useFetchPerson";
// import React, { useEffect, useState } from "react";

// if (isLoading) return <p>Loading.....</p>;
// if (isError) return <p>Something went wrong</p>;

export default function MultipleFetch() {
  const { user, isLoading, isError } = useFetchPerson();
  return isLoading ? (
    <p>Loading.....</p>
  ) : isError ? (
    <p>Something went wrong..</p>
  ) : (
    <div>
      <p>{user.name}</p>
      <p>{user.company}</p>
      <img src={user.avatar_url}></img>
      <p>{user.location}</p>
    </div>
  );
}
