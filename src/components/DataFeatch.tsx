import React, { useState, useEffect } from "react";

export const DataFeatch = () => {
  const [user, setUser] = useState<null | {
    name: { first: string; last: string };
  }>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();
    const [item] = data.results;

    setUser(item);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <h1>
          {user?.name.first}
          {user?.name.last}
        </h1>
      )}
    </div>
  );
};
