// 1. Hàm khai báo (Function Declaration)
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Nam"));

// 2. Hàm biểu thức (Function Expression)
const sum = function (a, b) {
  return a + b;
};
console.log("Sum:", sum(3, 4));

// 3. Arrow function (Hàm mũi tên)
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(5, 6));

// Arrow function có 1 tham số
const square = x => x * x;
console.log("Square:", square(7));

// Arrow function không có tham số
const sayHi = () => "Hi there!";
console.log(sayHi());

// 4. Hàm không return (chỉ thực thi logic)
function logMessage(msg) {
  console.log("Log:", msg);
}
logMessage("Hello world");

// 5. Hàm có return (trả kết quả để xử lý tiếp)
function double(x) {
  return x * 2;
}
const d = double(10);
console.log("Double result:", d);

// 6. Hàm lồng nhau (Nested functions)
function outerFunction(a) {
  function innerFunction(b) {
    return a + b;
  }
  return innerFunction(5);
}
console.log("Nested function result:", outerFunction(3));

// 7. Scope: Biến toàn cục và cục bộ
let globalVar = "I’m global";

function scopeTest() {
  let localVar = "I’m local";
  console.log(globalVar); // OK
  console.log(localVar);  // OK
}
scopeTest();
// console.log(localVar); // ❌ lỗi: localVar không tồn tại ở đây

// 8. Closure: Hàm "nhớ" được biến bên ngoài
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
const add5 = makeAdder(5);
console.log("Closure:", add5(3)); // 8

// 9. Default Parameters
function greetUser(name = "Guest") {
  return `Welcome, ${name}!`;
}
console.log(greetUser("Linh"));
console.log(greetUser());

// 10. Rest Parameters (...args)
function total(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}
console.log("Total:", total(1, 2, 3, 4, 5));

// 11. Callback Function
function processUserInput(callback) {
  const name = "Minh";
  callback(name);
}
processUserInput(function(name) {
  console.log("Callback Hello", name);
});
