import React, { useContext } from "react";
import { userContext } from "../context/UserContext";

const Calander = () => {
  const { userData, setUserData } = useContext(userContext);
  console.log(userData);
  return (
    <div>
      <h1>Calander</h1>
    </div>
  );
};

export default Calander;
