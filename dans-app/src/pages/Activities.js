import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/activities")
      .then((response) => response.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div className="bg-purple text-white gap-4">
      <h1 className="text-4xl p-8 ml-3">Aktiviteter</h1>
      {activities.map((activity) => (
        <Link to={"/ActivityDetails/" + activity?.id}>
          <div className="w-72 m-auto relative">
            <img
              className="rounded-bl-3xl rounded-tr-3xl rounded-tl-3xl mb-8"
              src={activity.asset.url}
              alt={activity.name}
            />
            <div className="absolute bottom-0 left-0 right-0 w-full p-4 bg-pink rounded-bl-2xl rounded-tr-2xl text-black text-xl">
              <h2>{activity.name}</h2>
              <p>
                {activity.minAge} - {activity.maxAge} år
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Activities;
