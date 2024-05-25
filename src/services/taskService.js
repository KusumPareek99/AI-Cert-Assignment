export const getTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return tasks.sort((a, b) => b.id - a.id);
};

export const getTask = (id) => {
  const tasks = getTasks();
  return tasks.find((task) => task.id === id);
};

export const createTask = (task) => {
  const tasks = getTasks();
  task.id = new Date().getTime().toString();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const updateTask = (id, updatedTask) => {
  let tasks = getTasks();
  tasks = tasks.map((task) => (task.id === id ? updatedTask : task));
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const deleteTask = (id) => {
  let tasks = getTasks();
  tasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
