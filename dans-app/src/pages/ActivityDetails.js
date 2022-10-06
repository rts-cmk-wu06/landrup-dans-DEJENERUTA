import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";

const ActivityDetails = () => {
  const navigate = useNavigate();
  const { activityId } = useParams();
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/activities/${activityId}`)
      .then((response) => response.json())
      .then((data) => setActivity(data));
  }, [activityId]);
  console.log(activity);

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
      <Navigation />
    </div>
  );
};

export default ActivityDetails;
