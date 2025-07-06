import React from "react";

const categories = ["All", "Work", "Personal", "Learning"];
const deadlines = ["All", "Today", "Upcoming"];

export default function FilterPanel({ filters, setFilters }) {
  return (
    <div style={{ margin: "1rem 0" }}>
      <label>
        Category:
        <select
          value={filters.category}
          onChange={(e) =>
            setFilters((f) => ({ ...f, category: e.target.value }))
          }
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>

      <label style={{ marginLeft: "20px" }}>
        Deadline:
        <select
          value={filters.deadline}
          onChange={(e) =>
            setFilters((f) => ({ ...f, deadline: e.target.value }))
          }
        >
          {deadlines.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
