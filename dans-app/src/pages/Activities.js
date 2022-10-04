import React, { useEffect, useState } from "react";
/* import { Link } from "react-router-dom"; */

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/activities")
      .then((response) => response.json())
      .then((data) => setActivities(data));
  }, []);
  console.log(activities);
  return (
    <div className="flex bg-red-500">
      <h1>Aktiviteter</h1>
      <div key={activities.id}>
        {activities.map((activity) => (
          <img src={activity.url} alt={activity.name} />
        ))}
      </div>
    </div>
  );
};

export default Activities;
