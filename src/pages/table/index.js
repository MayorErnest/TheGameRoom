import React from "react";
import "./table.css";

function Table() {
  return (
    <main className="app-container">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => (
            <tr key={index}>
              <td>1</td>
              <td>Ezra</td>
              <td>20</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <h2>Class Identification</h2>
        <ul>
          <li>Class A</li>
          <li>Class B</li>
          <li>Class C</li>
          <li>Class D</li>
        </ul>
      </div>
    </main>
  );
}

export { Table };
