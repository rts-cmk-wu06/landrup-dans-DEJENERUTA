import { createContext, useState } from "react";
export const userContext = createContext(null);
const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null); // store the user data in the state
  return (
    <userContext.Provider value={{ userData, setUserData }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
