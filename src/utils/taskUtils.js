// src/utils/taskUtils.js
const dayjs = require("dayjs");

function filterTasks(tasks, filters) {
  const today = dayjs().format("YYYY-MM-DD");

  return tasks.filter(task => {
    const matchesCategory =
      filters.category === "All" || task.category === filters.category;

    const matchesDeadline = (() => {
      if (!task.deadline) return filters.deadline === "All";
      if (filters.deadline === "Today") return task.deadline === today;
      if (filters.deadline === "Upcoming")
        return dayjs(task.deadline).isAfter(today);
      return true;
    })();

    return matchesCategory && matchesDeadline;
  });
}

module.exports = { filterTasks };
