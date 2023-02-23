import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TaskDialog from "../../components/Dialog/TaskDialog";
import Tabledata from "./Tabledata";

const Task = () => {
  const [open, setOpen] = React.useState(false);
  const url = "http://localhost:4000/task";
  const [taskData, settaskData] = useState({
    userid: "",
    id: "",
    title: "",
    completed: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    const { value, id } = e.target;
    settaskData({ ...taskData, [id]: value });
  };

  const handleformSubmit = () => {
    fetch("http://localhost:4000/task", {
      method: "POST",
      body: JSON.stringify(taskData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        handleClose();
      });
  };

  return (
    <div>
      <Navbar />
      <div
        className="mt-5 text-center"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          overflow: "auto",
          height: "420px",
        }}
      >
        <Tabledata />
      </div>
      <div
        className="col-10"
        style={{
          margin: "0 auto",
        }}
      >
        <button
          onClick={handleClickOpen}
          class="danger text-white border-0 mt-3"
          style={{
            background: "blue",
            borderRadius: "5px 5px",
            padding: "3px 15px",
          }}
        >
          Add Task
        </button>
        <TaskDialog
          open={open}
          handleClose={handleClose}
          data={taskData}
          onChange={onChange}
          handleformSubmit={handleformSubmit}
        />
      </div>
    </div>
  );
};

export default Task;
