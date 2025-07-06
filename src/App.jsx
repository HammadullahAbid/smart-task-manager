import React, { useState } from "react";
import useTasks from "./hooks/useTasks";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterPanel from "./components/FilterPanel";
import dayjs from "dayjs";

import { useAuth } from "./AuthProvider";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  const { user } = useAuth(); // Check user auth
  const { tasks, addTask, deleteTask, updateTask } = useTasks();
  const [editingTask, setEditingTask] = useState(null);
  const [filters, setFilters] = useState({ category: "All", deadline: "All" });

  const toggleCompletion = (id) => {
    const task = tasks.find((t) => t.id === id);
    updateTask(id, { completed: !task.completed });
  };

  const applyFilters = () => {
    return tasks.filter((task) => {
      const matchesCategory =
        filters.category === "All" || task.category === filters.category;

      const matchesDeadline = (() => {
        if (!task.deadline) return filters.deadline === "All";
        const today = dayjs().format("YYYY-MM-DD");

        if (filters.deadline === "Today") return task.deadline === today;
        if (filters.deadline === "Upcoming")
          return dayjs(task.deadline).isAfter(today);

        return true;
      })();

      return matchesCategory && matchesDeadline;
    });
  };

  const filteredTasks = applyFilters();

  // Show login if no user
  if (!user) return <Login />;

  // Show the app if user is logged in
  return (
    <div className="container">
      <h1>Smart Task Manager</h1>
      <TaskForm
        onAdd={addTask}
        onUpdate={updateTask}
        editingTask={editingTask}
        clearEdit={() => setEditingTask(null)}
      />
      <FilterPanel filters={filters} setFilters={setFilters} />
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleCompletion}
        onEdit={setEditingTask}
      />
      <Logout />
    </div>
  );
}

export default App;
