import React, { useEffect, useState, useContext, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { userContext } from "../context/UserContext";

const ActivityDetails = ({ setRedirectPathAfterLogin }) => {
  const { userData } = useContext(userContext);

  const { activityId } = useParams();
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    setRedirectPathAfterLogin(`/ActivityDetails/${activityId}`);
    fetch(`http://localhost:4000/api/v1/activities/${activityId}`)
      .then((response) => response.json())
      .then((data) => setActivity(data));
  }, [activityId, setRedirectPathAfterLogin]);

  const addUser = useCallback(() => {
    fetch(
      `http://localhost:4000/api/v1/users/${userData.userId}/activities/${activityId}`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        fetch(`http://localhost:4000/api/v1/activities/${activityId}`)
          .then((response) => response.json())
          .then((data) => setActivity(data));
      });
  }, [activityId, userData]);

  const removeUser = useCallback(() => {
    fetch(
      `http://localhost:4000/api/v1/users/${userData.userId}/activities/${activityId}`,

      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        fetch(`http://localhost:4000/api/v1/activities/${activityId}`)
          .then((response) => response.json())
          .then((data) => setActivity(data));
      });
  }, [activityId, userData]);

  const isUserSignedUp = activity.users?.some(
    (line) => line.id === userData.userId
  );

  return (
    <div>
      <div className="relative">
        <img src={activity?.asset?.url} alt={activity.name} />
        {userData.userId === undefined && (
          <Link
            to="/login"
            className="absolute bottom-12 w-48 m-auto rounded-xl h-14 flex justify-center p-6 items-center text-center right-0 left-0 text-white text-xl pb-8 bg-purple"
          >
            Log ind
          </Link>
        )}
        {userData.userId !== undefined && !isUserSignedUp && (
          <button
            className="absolute bottom-12 w-48 m-auto rounded-xl h-14 flex justify-center p-6 items-center text-center right-0 left-0 text-white text-xl pb-8 bg-purple"
            onClick={addUser}
          >
            Tilmeld
          </button>
        )}

        {userData.userId !== undefined && isUserSignedUp && (
          <button
            className="absolute bottom-12 w-48 m-auto rounded-xl h-14 flex justify-center p-6 items-center text-center right-0 left-0 text-white text-xl pb-8 bg-purple"
            onClick={removeUser}
          >
            Forlad
          </button>
        )}
      </div>
      <div className="bg-purple p-6 text-white">
        <h2>{activity.name}</h2>
        <p>
          {activity.minAge} - {activity.maxAge}
        </p>
        <p>{activity.description}</p>
      </div>
      <Navigation />
    </div>
  );
};

export default ActivityDetails;
