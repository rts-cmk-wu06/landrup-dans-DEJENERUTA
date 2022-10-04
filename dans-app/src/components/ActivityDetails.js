import React, { useEffect, useState, useParams } from "react";

const ActivityDetails = () => {
  const { ActivityId } = useParams();
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/assets/${ActivityId}`)
      .then((response) => response.json())
      .then((data) => setActivity(data));
  }, []);
  console.log(activity);

  return (
    <div>
      <h1>ActivityDetails</h1>
    </div>
  );
};

export default ActivityDetails;
