import React, { useContext, useEffect } from "react";
import { userContext } from "../context/UserContext";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const Calander = ({ setRedirectPathAfterLogin }) => {
  const { userData, setUserData } = useContext(userContext);

  useEffect(() => {
    setRedirectPathAfterLogin("/calander");
    if (userData.userId === undefined) {
      return;
    }
    fetch(`http://localhost:4000/api/v1/users/${userData.userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, [setRedirectPathAfterLogin, setUserData, userData]);

  return (
    <div className=" bg-purple">
      <h1 className=" text-4xl p-4  text-white">Calander</h1>

      {userData?.activities?.map((activity) => (
        <div
          key={activity.id}
          className="bg-white text-black p-4 m-4 rounded-xl"
        >
          <h2>{activity?.name}</h2>
          <p>
            {activity.weekday} {activity?.time}
          </p>
        </div>
      ))}
      {userData.userId === undefined && (
        <Link
          to="/login"
          className="w-48 m-auto mt-4 mb-4 rounded-xl h-14 flex justify-center p-6 items-center text-center  text-white text-xl pb-8 bg-pink"
        >
          Log ind
        </Link>
      )}
      <Navigation />
    </div>
  );
};

export default Calander;
