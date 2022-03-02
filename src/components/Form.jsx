import React, { useState } from "react";
const initialState = { task: "", hr: "" };
const weeklyHours = 168;

export const Form = ({ addNewTask, total }) => {
  const [newTask, setNewTask] = useState(initialState);
  //handeling on change
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setNewTask({
      ...newTask,
      [name]: name === "hr" ? +value : value,
    });
  };
  // to add to the newtask we create this function
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (newTask.hr < 1) {
      return alert("oops! Time-traveler");
    }
    if (newTask.hr > weeklyHours) {
      return alert("cannot add");
    }
    if (newTask.hr + total > weeklyHours) {
      return alert("cannot add");
    }
    console.log("hello");

    addNewTask(newTask);
    setNewTask(initialState);
  };
  //to not allow to add more than 168 hours a week

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          name="task"
          type="text"
          required
          onChange={handleOnChange}
          value={newTask.task}
          placeholder="enter Tasks"
        />
        <input
          name="hr"
          type="number"
          required
          onChange={handleOnChange}
          value={newTask.hr}
          placeholder="enter hours allocated"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
