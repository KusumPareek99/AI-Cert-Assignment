import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTask, createTask, updateTask } from "../services/taskService";

const TaskForm = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "pending",
    dueDate: "",
  });

  useEffect(() => {
    if (id) {
      const existingTask = getTask(id);
      if (existingTask) {
        setTask(existingTask);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateTask(id, task);
    } else {
      createTask(task);
    }
    navigate("/");
  };

  return (
    <>
      <div className="container w-50 mt-3">
        <h1 className="text-center text-warning mb-3">
          {id ? "Edit Task" : "New Task"}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="row g-3 ms-3 p-3 bg-white rounded align-items-center shadow-sm"
        >
          <div className="mb-3 w-75">
            <label className="form-label">Title:</label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 w-75">
            <label className="form-label">Description:</label>{" "}
            <textarea
              className="form-control"
              name="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3 w-75">
            <label className="form-label">Status:</label>
            <select
              className="form-control"
              name="status"
              value={task.status}
              onChange={handleChange}
              required
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In-Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="mb-3 w-75">
            <label className="form-label">Due Date:</label>
            <input
              className="form-control"
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-grid gap-2 col-6">
            <button type="submit" className="btn btn-warning text-white">
              {id ? "Update Note" : "Add Note"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
