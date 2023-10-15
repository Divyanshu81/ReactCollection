// src/Table.js

import React from "react";
import "./Table.css";

const Table = () => {
  
  const data = [
    { Task: "Task 1", RepoLink: "https://github.com/Divyanshu81/React-Task1", deplink: "https://divyanshu81.github.io/React-Task1/" },
    { Task: "Task 2", RepoLink: "https://github.com/Divyanshu81/React-Task2", deplink: "https://divyanshu81.github.io/React-Task2/" },
    { Task: "Task 3", RepoLink: "https://github.com/Divyanshu81/React-Task3", deplink: "https://divyanshu81.github.io/React-Task3/" },
    { Task: "Task 4", RepoLink: "https://github.com/Divyanshu81/React-Task4", deplink: "https://divyanshu81.github.io/React-Task4/" },
    { Task: "Task 5", RepoLink: "https://github.com/Divyanshu81/React-Task5", deplink: "https://divyanshu81.github.io/React-Task5/" },
    { Task: "Task 6", RepoLink: "https://github.com/Divyanshu81/React-Task1", deplink: 22 },
  ];

  return (
    <div className="table-container">
      <table className="centered-table">
        <thead>
          <tr>
            <th>Task Number</th>
            <th>Repo Link </th>
            <th>Deploy Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.Task}>
              <td>{item.Task}</td>
              <td><a href={item.RepoLink}>{item.RepoLink}</a></td>
              <td><a href={item.deplink}>{item.deplink}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;