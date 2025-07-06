import React from "react";
import dayjs from "dayjs";

export default function TaskItem({ task, onDelete, onToggle, onEdit }) {
  const getReminder = () => {
    if (!task.deadline || task.completed) return "";

    const today = dayjs().format("YYYY-MM-DD");
    const dueDate = dayjs(task.deadline);

    if (task.deadline === today) return "⚠ Due today!";
    if (dueDate.diff(today, "day") === 1) return "⏳ Due tomorrow";
    if (dueDate.isBefore(today)) return "❗ Overdue";

    return "📅 Upcoming";
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "8px 0", padding: "8px" }}>
     <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        style={{
          width: "20px",
          height: "20px",
          marginRight: "15px",
          cursor: "pointer"
        }}
      />
      {task.completed && (
          <div style={{ fontSize: "0.8rem", color: "green" }}>
            ✅ Completed
          </div>
        )}
      <strong style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </strong>{" "}
      – <em>{task.category}</em> – Due: {task.deadline || "No deadline"}
      <div style={{ fontSize: "0.85rem", color: "#555", marginTop: "4px" }}>
        {getReminder()}
      </div>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
      <button onClick={() => onEdit(task)} style={{ marginLeft: "5px" }}>
        Edit
      </button>
    </div>
  );
}
