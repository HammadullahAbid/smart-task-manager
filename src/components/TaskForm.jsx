// src/components/TaskForm.jsx
import React from 'react';
import { useState, useEffect } from "react";

const categories = ["Work", "Personal", "Learning"];

export default function TaskForm({ onAdd, onUpdate, editingTask, clearEdit }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [deadline, setDeadline] = useState("");

  // Populate form if editing
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setCategory(editingTask.category);
      setDeadline(editingTask.deadline || "");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const taskData = { title, category, deadline };

    if (editingTask) {
      onUpdate(editingTask.id, taskData);
    } else {
      onAdd(taskData);
    }

    // Reset form
    setTitle("");
    setCategory(categories[0]);
    setDeadline("");
    clearEdit(); // Reset editing mode
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task title" required />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(cat => <option key={cat}>{cat}</option>)}
      </select>
      <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} />
      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
      {editingTask && (
        <button type="button" onClick={clearEdit}>Cancel</button>
      )}
    </form>
  );
}
