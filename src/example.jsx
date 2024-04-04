import React from "react";

const CreateTodo = () => {
  const tasks = 5;
  const hideButton = true;
  const styles = {
    backgroundColor: "red",
  };
  const CountTasks = () => {
    return tasks > 0 ? `Task: ${tasks}` : "No Task Available";
  };
  return (
    <>
      <h1 style={styles}>{CountTasks()}</h1>
      <button className="btn" disabled={hideButton} value="Add Task">
        Add Task
      </button>
    </>
  );
};

export default CreateTodo;
