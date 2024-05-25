// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskDetails from "./components/TaskDetails";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/task/new" element={<TaskForm />} />
      <Route path="/task/edit/:id" element={<TaskForm />} />
      <Route path="/task/:id" element={<TaskDetails />} />
    </Routes>
  );
};

export default App;
