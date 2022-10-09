import React, { useEffect, useState } from "react";
import Activity from "../components/Activity";
import Navigation from "../components/Navigation";
const Search = () => {
  const [activities, setActivities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/activities")
      .then((response) => response.json())
      .then((data) => setActivities(data));
  }, []);

  const filteredActivities = activities.filter((activity) => {
    console.log(activity);
    return activity.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  console.log(filteredActivities);

  return (
    <div className="bg-purple text-white gap-4">
      <h1 className="text-4xl p-4 ml-3">Søg</h1>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        className="m-4 w-80 p-4 bg-gray border-none outline-none text-white"
        type="text"
        placeholder="Search"
      />
      <div>
        {filteredActivities.map((activity) => (
          <Activity activity={activity} />
        ))}
        <Navigation />
      </div>
    </div>
  );
};

export default Search;
