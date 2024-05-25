import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTask } from "../services/taskService";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchedTask = getTask(id);
    setTask(fetchedTask);
    console.log(fetchedTask);
  }, [id]);

  if (!task) {
    return (
      <div className="container d-flex flex-column vh-100  align-items-center">
        <img
          className="rounded-circle mb-4 mt-4"
          height={200}
          width={200}
          src="../assets/error_img.svg"
          alt="no-todo"
        />
        <p className="lead">No task found!</p>
      </div>
    );
  }

  return (
    <>
      {task && (
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div
            className="card text-bg-light mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">Your Todo</div>
            <div className="card-body">
              <h5 className="card-title text-capitalize fw-semibold">
                {task.title}
              </h5>
              <div className="card-text">
                <p className="fw-semibold">
                  Description:{" "}
                  <span className="fw-normal">{task.description}</span>
                </p>
                <p className="fw-semibold">
                  Status: <span className="fw-normal">{task.status}</span>
                </p>
                <p className="fw-semibold">
                  Due Date: <span className="fw-normal">{task.dueDate}</span>
                </p>
              </div>
              <div className="text-center">
                <Link className="btn btn-warning text-white " to="/">
                  Back to Task List
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskDetails;
