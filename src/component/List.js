import React from "react";
import '../styles/styles.css';

const List = ({ students, removeNote }) => {
  return (
    <>
      {students.map((elm, index) => (
        <div className="display">
          <div className="student-list"><span>{elm.number}</span></div>
          <div className="student-list"><span>{elm.name}</span></div>
          <div className="student-list"><span>{elm.email}</span></div>
          <button className="btn btn-danger" onClick={() => removeNote(index)} >Remove</button>
        </div>
      ))}
    </>
  );
}
export default List;