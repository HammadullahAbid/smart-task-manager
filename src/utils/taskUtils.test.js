const { filterTasks } = require('./taskUtils');
const dayjs = require('dayjs');

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const mockTasks = [
  { title: "Work Task", category: "Work", deadline: today },
  { title: "Learn React", category: "Learning", deadline: tomorrow },
  { title: "Groceries", category: "Personal", deadline: null },
];

test("filters by category", () => {
  const result = filterTasks(mockTasks, { category: "Work", deadline: "All" });
  expect(result).toHaveLength(1);
  expect(result[0].title).toBe("Work Task");
});

test("filters by today deadline", () => {
  const result = filterTasks(mockTasks, { category: "All", deadline: "Today" });
  expect(result).toHaveLength(1);
  expect(result[0].title).toBe("Work Task");
});

test("filters by upcoming deadline", () => {
  const result = filterTasks(mockTasks, { category: "All", deadline: "Upcoming" });
  expect(result).toHaveLength(1);
  expect(result[0].title).toBe("Learn React");
});
