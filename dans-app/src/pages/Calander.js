import React, { useContext, useEffect } from "react";
import { userContext } from "../context/UserContext";
import Navigation from "../components/Navigation";

const Calander = () => {
  const { userData, setUserData } = useContext(userContext);

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/users/${userData.userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        console.log(data);
      });
  });

  return (
    <div className="bg-purple">
      <h1 className="text-4xl p-4 ml-3 text-white">Calander</h1>

      {userData?.activities?.map((activity) => (
        <div className="bg-white text-black p-4 m-4 rounded-xl">
          <h2>{activity?.name}</h2>
          <p>
            {userData?.weekday} {userData?.time}
          </p>
        </div>
      ))}
      <Navigation />
    </div>
  );
};

export default Calander;
