const companies = [
  {
    id: 1,
    name: "Alpha Corp",
    employees: [
      { id: 1, name: "Alice", role: "Dev" },
      { id: 2, name: "Bob", role: "QA" },
    ],
  },
  {
    id: 2,
    name: "Beta Ltd",
    employees: [
      { id: 3, name: "Charlie", role: "PM" },
      { id: 4, name: "David", role: "Dev" },
    ],
  },
  {
    id: 3,
    name: "Gamma Group",
    employees: [
      { id: 1, name: "Eve", role: "QA" },
      { id: 5, name: "Frank", role: "Dev" },
    ],
  },
  {
    id: 4,
    name: "Delta Inc",
    employees: [
      { id: 6, name: "Grace", role: "Dev" },
      { id: 7, name: "Heidi", role: "QA" },
    ],
  },
  {
    id: 5,
    name: "Epsilon LLC",
    employees: [
      { id: 8, name: "Ivan", role: "PM" },
      { id: 9, name: "Judy", role: "Dev" },
    ],
  },
];
function log(log) {
  console.log(log);
}
// Cập nhật role của nhân viên có id = 1 trong công ty có id = 3 thành "Leader"
const updatedRole = companies.map((c) => {
  if (c.id != 3) return c;
  return {
    ...c,
    employees: c.employees.map((emp) =>
      emp.id === 1 ? { ...emp, role: "Leader" } : emp
    ),
  };
});
// Đổi name của công ty có id = 2 thành "NewTech"
const updateComp = companies.map((c) =>
  c.id === 2 ? { ...c, name: "NewTech" } : c
);
// Thêm một nhân viên mới vào công ty có id = 5, với id = 99, name = "Kaito", role = "Intern"
const addEmp = companies.map((c) => {
  if (c.id !== 5) return c;
  return {
    ...c,
    employees: [
      ...c.employees,
      {
        id: 99,
        name: "Kaito",
        role: "Intern",
      },
    ],
  };
});
// Xóa nhân viên có id = 2 trong công ty có id = 1
const deleteEmp = companies.map((c) => {
  if (c.id != 1) return c;
  return {
    ...c,
    employees: c.employees.filter((emp) => emp.id !== 2),
  };
});
// Tăng thêm hậu tố " Inc." vào tên tất cả các công ty
const newNameComp = companies.map((c) => {
  return { ...c, name: c.name + " Inc." };
});
// Tìm tất cả nhân viên có role = "QA" trong toàn bộ công ty
const roleQA = companies
  .flatMap((c) => c.employees)
  .filter((emp) => emp.role === "QA");
// Đếm tổng số nhân viên đang làm trong tất cả các công ty
const countEmp = companies.reduce((count, c) => {
  return count + c.employees.length;
}, 0);
