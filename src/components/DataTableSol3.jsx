import { useState, useEffect } from "react";

/**
 *
 * Implement a sort and filter functionality
 * which satisfies the following conditions:
 *
 *
 * FOR SORT:
 * 1. The data is unsorted on page load
 * 2. Clicking on a column header sorts
 *      that column in an ascending manner.
 * 3. Clicking the same column header again
 *      sorts that column in the descending order.
 * 4. Clicking the same column header again
 *      for the third time resorts it in an
 *      ascending manner. That is, the data is
 *       unsorted only on page load.
 * 5. The table should remember how each column
 *      is sorted. For example: Clicking on "First Name"
 *      should sort the data according to the
 *      first name in an ascending manner. Then
 *      clicking on "City" should sort the data
 *      _*only on*_ "City" in an ascending fashion.
 *      However, reclicking on "First Name" should
 *      sort the table on First Name in the
 *      descending order.
 *
 * FOR FILTER:
 * 1. When the user writes anything in the
 * input field, the table should only contain
 * rows which have the string in any of the columns.
 *
 * 2. Filtering is case in sensitive.
 *
 *
 */

export default function App() {
  const [users, setUsers] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [input, setInput] = useState("");
  const [colIdx, setColIdx] = useState({});
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then(({ results: userApiData }) => {
        setUsers(userApiData);
        const selectedFields = userApiData.map(
          ({ name, location, login, phone }) => [
            name.first,
            location.city,
            location.state,
            location.country,
            login.username,
            phone,
            location.coordinates.latitude,
            location.coordinates.longitude,
          ]
        );
        setTableData(selectedFields);
      });
  }, []);

  const filter = (data, search) => {
    return data.filter((item) =>
      item.some((row) => row.toLowerCase().includes(search))
    );
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const sortData = (columnIdx, direction) => {
    direction === "asc"
      ? setTableData(
          tableData.sort((itemA, itemB) => {
            return itemA[columnIdx] < itemB[columnIdx] ? -1 : 1;
          })
        )
      : setTableData(
          tableData.sort((itemA, itemB) => {
            return itemB[columnIdx] < itemA[columnIdx] ? -1 : 1;
          })
        );
  };

  const sortColumn = (columnIdx) => {
    let previousColumnIdxs = { ...colIdx };
    if (colIdx[columnIdx] === undefined) {
      sortData(columnIdx, "asc");
      previousColumnIdxs[columnIdx] = true;
    } else {
      if (colIdx[columnIdx] === false) {
        sortData(columnIdx, "asc");
      } else {
        sortData(columnIdx, "desc");
      }
      previousColumnIdxs[columnIdx] = !colIdx[columnIdx];
    }
    setColIdx(previousColumnIdxs);
  };

  return (
    <>
      <input value={input} onChange={(e) => handleChange(e)} />
      <table>
        <thead>
          <tr>
            <th onClick={() => sortColumn(0)}>First name</th>
            <th onClick={() => sortColumn(1)}>City</th>
            <th onClick={() => sortColumn(2)}>State</th>
            <th onClick={() => sortColumn(3)}>Country</th>
            <th onClick={() => sortColumn(4)}>Username</th>
            <th onClick={() => sortColumn(5)}>Phone</th>
            <th onClick={() => sortColumn(6)}>Latitude</th>
            <th onClick={() => sortColumn(7)}>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {filter(tableData, input).map((user, userIdx) => (
            <tr key={userIdx}>
              {user.map((cellValue, cellValueIdx) => (
                <td key={`${userIdx}-${cellValueIdx}`}>{cellValue}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
