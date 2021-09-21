import { useState, useEffect } from "react";

/**
 * Making a GET request to https://randomuser.me/api/?results=50
 * returns the information of 50 users.
 *
 * In this sandbox, you are required to convert some
 * of that information into a table.
 *
 * The columns of the table are mentioned in
 * the sandbox below.
 */

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then(({ results }) => {
        setUsers(results);
      });
  }, []);

  const tableData = users.map((item) => (
    <tr key={item.cell}>
      <td>{item.name.first}</td>
      <td>{item.location.city}</td>
      <td>{item.location.state}</td>
      <td>{item.location.country}</td>
      <td>{item.login.username}</td>
      <td>{item.phone}</td>
      <td>{item.location.coordinates.latitude}</td>
      <td>{item.location.coordinates.longitude}</td>
    </tr>
  ));

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
      <p>Sample Object: </p>
      <pre>{JSON.stringify(users[0], 0, 2)}</pre>
    </>
  );
}
