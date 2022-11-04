import React, { useEffect, useState } from "react";

const select = (id, e) => {
  if (sessionStorage.getItem(id)) {
    e.target.innerText = "select";

    sessionStorage.removeItem(id);
  } else {
    e.target.innerText = "selected";
    sessionStorage.setItem(id, true);
  }
};

const chackSelect = (id) => {
  // console.log("hoiiiiii")
  if (sessionStorage.getItem(id)) {
    return "selected";
  } else {
    return "select";
  }
};

const Record = (props) => (
  <tr >
    <td>{props.index}</td>
    <td>{props.record.name}</td>
    <td>₹ {props.record.price}</td>
    <td>
      <img
        src={props.record.imgUrl}
        alt={props.record.name}
        style={{ height: "100px" }}
      />
    </td>
    <td >
      <button
        className="btn btn-primary"
        style={{ width: "100px" }}
        
        
        onClick={(e) => {
          select(props.record._id, e);
        }}
      >
        {chackSelect(props.record._id )}
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  function recordList() {
    return records.map((record, index) => {
      return <Record record={record} index={index + 1} key={record._id} />;
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>Product List</h3>
      <table
        className="table table-striped"
        style={{ marginTop: 20, width: "100%", textAlign: "left" }}
      >
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Product name</th>
            <th>Price(₹)</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
