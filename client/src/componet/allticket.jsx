
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import "../componet/ticket.css"


function DataTable() {
  const [ticket, setTicket] = useState([]);

const getTicket = async () => {
  const response = await fetch("http://localhost:3001/")
  let data = await response.json()
 
  setTicket(data.data)
}

  useEffect(() => {

     getTicket()

  }, []);

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>ProjectName</th>
          <th>priority</th>
          <th>Reporter</th>
          <th>Status</th>
          <th>Description</th>
          <th>summary</th>
          <th>dueDate</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(ticket) && ticket.map((item) => {
             console.log(item)
          return (
          <tr key={item.Number}>
            <td>{item.Number}</td>
            <td>{item.projectName}</td>
            <td>{item.priority}</td>
            <td>{item.Reporter}</td>
            <td>{item.Status}</td>
            <td>{item.Description}</td>
            <td>{item.summary}</td>
            <td>{item.dueDate}</td>
          </tr>
          )
})}
      </tbody>
    </table>
    </div>
  );
}

export default DataTable;

