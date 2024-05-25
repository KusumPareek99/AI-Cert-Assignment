import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTasks, deleteTask } from "../services/taskService";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleDelete = (id) => {
    deleteTask(id);
    setTasks(getTasks());
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">To-Do List</h1>
      <div className="mb-2">
        <Link to="/task/new" style={{ textDecoration: "none", color: "black" }}>
          <span className="ms-2">
            <IoMdAddCircle cursor={"pointer"} size={"40px"} /> Create New Todo
          </span>
        </Link>
      </div>
      <div className="row g-4 mb-4">
        {tasks.length === 0 && (
          <div className="container d-flex flex-column vh-100  align-items-center">
            <img
              className="rounded-circle mb-4 mt-4"
              height={200}
              width={200}
              src="./assets/todo_img.svg"
              alt="no-todo"
            />
            <p className="lead">
              Once You add a note it will be displayed here
            </p>
          </div>
        )}
        {tasks.map((task) => (
          <div className="col-sm-6" key={task.id}>
            <div className="card border-dark shadow-sm">
              <div className="card-body">
                <div className="d-flex flex-column ">
                  <div className="d-flex justify-content-around mt-3">
                    <div className="">
                      <h5 className="card-title">
                        <Link
                          style={{ textDecoration: "none", color: "purple" }}
                          to={`/task/${task.id}`}
                        >
                          {task.title}
                        </Link>
                      </h5>
                      <p className="card-text">{task.description}</p>
                    </div>
                    <div className="d-flex">
                      <div className="me-4">
                        <span className="badge rounded-pill p-2 text-bg-info">
                          {task.status}
                        </span>
                      </div>
                      <div>
                        <span className="badge rounded-pill p-2 text-bg-dark">
                          {task.dueDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-evenly mt-4">
                    <Link
                      to={`task/edit/${task.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <MdOutlineModeEdit
                        cursor={"pointer"}
                        color="green"
                        size={"30px"}
                      />
                    </Link>
                    <Link
                      textDecoration="none"
                      onClick={() => handleDelete(task.id)}
                    >
                      <MdDeleteOutline
                        cursor={"pointer"}
                        color="red"
                        size={"30px"}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
