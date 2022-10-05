import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ActivityDetails = () => {
  const { activityId } = useParams();
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/activities/${activityId}`)
      .then((response) => response.json())
      .then((data) => setActivity(data));
  }, [activityId]);
  console.log(activity);

  /* useEffect(() => {
    fetch(`http://localhost:4000/api/v1/activities/${activityItem?.id}`)
      .then((response) => response.json())
      .then((data) => setActivityItem(data.items));
  }, [activityItem?.id]);
  console.log(activityItem); */

  return (
    <div>
      <div className="relative">
        <img src={activity?.asset?.url} alt={activity.name} />
        <Link
          to="/login"
          className="absolute bottom-12 w-48 m-auto rounded-xl h-14 flex justify-center p-6 items-center text-center right-0 left-0 text-white text-xl pb-8 bg-purple"
        >
          Tilmeld
        </Link>
      </div>
      <div className="bg-purple p-6 text-white">
        <h2>{activity.name}</h2>
        <p>
          {activity.minAge} - {activity.maxAge}
        </p>
        <p>{activity.description}</p>
      </div>
    </div>
  );
};

export default ActivityDetails;
