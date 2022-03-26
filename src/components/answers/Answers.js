import React from "react";
import "./Answers.css";

function Answers() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Answer Section.</h1>
      <h3>1. How React works?</h3>
      <p>
        React is a Javascript library which creates by facebook. It is used to
        create user interface. it contains reusable JS code snippet called
        component.
        <br />A react app usually have a dom root. Rendering an element into the
        Dom will change the user interface. React Dom use a virtual dom to
        improve the performance. while we change something React make a virtual
        dom based on changed code. Then it compare it with browser dom and then
        set the only changes.
      </p>
      <h3>2. Props vs State.</h3>
      <p>
        Props: while we call a component and pass some data as a
        parameter/attribute is called props. props are immutable. it cannot be
        changed onced assigned.
        <br />
        State: states are used to store data to use and change them based on
        condition. states are not immutable.
      </p>
    </div>
  );
}

export default Answers;
