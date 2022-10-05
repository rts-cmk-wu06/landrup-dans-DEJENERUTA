import React, { useEffect, useState } from "react";
import Activity from "../components/Activity";
import Navigation from "../components/Navigation";

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
        <Activity activity={activity} />
      ))}
      <Navigation />
    </div>
  );
};

export default Activities;
