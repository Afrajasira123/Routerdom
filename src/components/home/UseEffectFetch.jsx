import useFetchData from "../hooks/useFetchData";

const UseEffectFetch = () => {
  const { users, isLoading, isError } = useFetchData();
  return isLoading ? (
    <p>Loading.....</p>
  ) : isError ? (
    <p>Something went wrong..</p>
  ) : (
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
