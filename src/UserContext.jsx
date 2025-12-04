import { createContext, useState } from "react";

export const UserContext = createContext();
function UserContextProvider({ children }) {
  const [username, setUsername] = useState("Afra");
  return <UserContext.Provider value={{ username, setUsername }}>{children}</UserContext.Provider>;
}
export default UserContextProvider;
