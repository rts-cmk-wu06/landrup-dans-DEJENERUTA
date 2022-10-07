import { createContext, useState, useEffect } from "react";
export const userContext = createContext(null);
const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  return (
    <userContext.Provider value={{ userData, setUserData }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
