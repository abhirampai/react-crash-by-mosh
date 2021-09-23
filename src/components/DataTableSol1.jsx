/**
 * Make a GET request to
 * https://randomuser.me/api/?results=20
 * and sequentially display for each user
 * their full name and their picture.
 *
 */

import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const usersData = await fetch("https://randomuser.me/api/?results=20");
    const data = await usersData.json();
    setUsers(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <>Loading...</>;

  return (
    <>
      {users.map((item) => (
        <div key={item.cell}>
          <h1>
            {item.name.title} {item.name.first} {item.name.last}
          </h1>
          <span>
            <img src={item.picture.thumbnail} alt="dp" />
          </span>
        </div>
      ))}
    </>
  );
}
