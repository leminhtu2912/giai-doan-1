Destructuring Javascript là gì?
Destructuring assignment là một biểu thức JavaScript dùng để lấy ra (destructure) giá trị của một hay nhiều phần tử rong mảng hoặc đối tượng đồng thời gán các giá trị này cho các biến cho trước.. Điều này có thể làm giảm đáng kể các dòng mã cần thiết để thao tác dữ liệu trong các cấu trúc này. Có hai loại Destructuring: Destructuring Objects và Destructuring Arrays.
Khi nói đến phép gán thông thường, chúng ta thường thấy các cú pháp về mảng hay object xuất hiện ở phía bên phải ) của phép gán và được gọi là assigning values.
let  array = [1, 2, 3]
Tuy nhiên như bạn có thể thấy ở ví dụ trên, khi destructure một mảng hay một đối tượng, các cú pháp trên sẽ xuất hiện phía bên trái (left-hand side - LHS) của phép gán; trong khí đó RHS của phép gán sẽ là giá trị cần destructuring.
const [a, b, c] = [1, 2, 3]
// expected output: a: 1, b: 2, c: 3

Như vậy, hiểu một cách đơn giản, Destructuring Assignment sẽ là sự đảo ngược của Normal Assignment? Hay hiểu đơn giản hơn nữa, chúng ta lấy một phép gán thông thường và flip nó, kết quả thu được sẽ là một Destructuring Assignment. Với object destructuring, khi không có var/let/const để khai báo, thì ta phải bọc phép gán vào trong một cặp ( ), bởi vì { } ở bên trái phép gán sẽ được hiểu thành một block chứ không phải một object.
Destructuring Objects
Destructuring Objects cho phép bạn tạo ra một hay nhiều new variables sử dụng những property của một Objects. Xem ví dụ dưới đây:
let user = {
    name: 'Name',
    age: 20,
    address: 'HN'
}
Theo cách truyền thống thì chúng ta sẽ lấy ra những giá trị như cú pháp sau:
let name = user.name // name = 'Name'
let age = user.age // age = 20
let  job = user.address // address = 'HN'
Nhưng với việc sử dụng object destructuring chúng ta có thể get được những giá trị ấy miễn là trùng tên của thuộc tính trong object là được:
let { name, age,address } = user // name = 'Name', age = 20, address = 'HN'
Hai đoạn code trên sẽ cho kết quả tương tự nhau, rõ ràng việc sử dụng Destructuring Assignment là ngắn gọn hơn và nếu chúng ta muốn sử dụng tên biến khác với tên của thuộc tính bên trong Object, chẳng hạn:
let userName = user.name
let userAge = user.age
let userJob =  user.address

let { name: userName, age: userAge, job: userJob } = user 
// name = 'Name', age = 24, job='dev'
Destructuring Arrays
Array destructuring cho phép bạn tạo ra một new variables bằng cách sử dụng giá trị mỗi index của Array. Hãy cùng xem ví dụ dưới đây nhé
let animals = [
    "Dog",
    "Cat",
    "Pig",
];
Như ở Object thì ta lần lượt lấy giá trị của mỗi item theo index
// Create variables from the Array items
const dog = animals[0]
const cat = animals[1]
const pig = animals[2]
Nhưng giờ đây với việc sử dụng Array Destructuring thì công việc sẽ trở nên dế dàng hơn nhiều
// Destructure Array values into variables
let [dog, cat, pig] = animals;
// dog: 'Dog', cat: 'Cat', pig: 'Pig'
Arrow Functions
Arrow functions là dạng viết ngắn gọn cho một hàm trong ES6. Một arrow function được hình thành bơi một danh sách các parameter ( ... ), theo sau là => để đánh đấu sau nó là body function. Đối với hàm chỉ có một parameter thì có thể bỏ qua cặp dấu ngoặc tròn.
// Classical Function Expression
function addition(a, b) {
  return a + b;
}

// Implementation with arrow function
const addition = (a, b) => a + b;

// With single argument, no parentheses required
const add5 = a => 5 + a;
Lưu ý ví dụ ở bên trên, addition arrow function được implement với "concise body" có nghĩa là nó khong cần phải đặt trong cặp dấu { } sau => vì phần body của nó chỉ có một câu lệnh.
Dưới đây là một ví dụ sử dụng "block body" thông thường.
const arr = ["apple", "banana", "orange"];

const breakfast = arr.map(fruit => {
  return fruit + "s";
});

console.log(breakfast); // ['apples', 'bananas', 'oranges']
Kìa! Còn nhiều hơn thế...
Arrow functions không chỉ làm code của bạn ngắn hớn. Chúng còn có liên kết chặt chẽ với việc binding this.
Mỗi function trong Javascript đều định nghĩa ngữ cảnh của nó là từ khoá this. Việc sử dụng arrow function có thể làm thay đổi ngữ cảnh này, nó sẽ thảnh đổi this trỏ vào ngữ cảnh gần nó nhất. Hãy kiếm tra đoạn ví dụ dưới đây:
function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;

  setInterval(function growUp() {
    // In non-strict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}
var p = new Person();
Trong ECMAScript 3/5, vấn đề này đã được khắc phục bằng cách gán giá trị trong this cho một biến có thể được đóng lại.
function Person() {
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}
Như đã đề cập ở trên, các arrow function nắm bắt giá trị này của ngữ cảnh kèm theo gần nhất, do đó đoạn mã sau hoạt động như mong đợi, ngay cả với các arrow function lồng nhau.
function Person() {
  this.age = 0;

  setInterval(() => {
    setTimeout(() => {
      this.age++; // `this` properly refers to the person object
    }, 1000);
  }, 1000);
}

let p = new Person();


Template Literal và Delimiters
ES6 giới thiệu một cách dễ dàng hơn để thêm các phép interpolations được đánh giá tự động.
•	`${ ... }` được sử dụng để hiển thị các biến.
•	` backtick được sử dụng như dấu phân cách.
let user = "Kevin";
console.log(`Hi ${user}!`); // Hi Kevin!
Classes trong ES6
ES6 giới thiệu cú pháp class mới. Cần chú ý răng Class trong ES6 không phải là mô hình thừa kế hướng đối tượng mới. Chúng chỉ đóng vai trò là đường tổng hợp so với kế thừa dựa trên nguyên mẫu hiện có của JavaScript.
Class trong ES6 chỉ sử dụng cú pháp mới để làm việc với prototypes và cấu trúc hàm mà chúng sử dụng trong ES5.
Định nghĩa các hàm sử dụng từ khoá static để implement static/class functions trong class.
class Task {
  constructor() {
    console.log("task instantiated!");
  }

  showId() {
    console.log(23);
  }

  static loadAll() {
    console.log("Loading all tasks..");
  }
}

console.log(typeof Task); // function
const task = new Task(); // "task instantiated!"
task.showId(); // 23
Task.loadAll(); // "Loading all tasks.."
Thừa kế và super trong classes
Theo dõi đoạn code dưới đây:
class Car {
  constructor() {
    console.log("Creating a new car");
  }
}

class Porsche extends Car {
  constructor() {
    super();
    console.log("Creating Porsche");
  }
}

let c = new Porsche();
// Creating a new car
// Creating Porsche
extends cho phép class con thừa kế từ class cha trong ES6. Điều quan trọng cần lưu ý là hàm tạo dẫn xuất phải gọi super().
Tuy nhiên bạn cũng có thể gọi phương thức của class cha trong class con bằng cách sử dụng phương thức super.parentMethodName()
Một vài cần lưu ý:
•	Khai báo Class không phải hoisted. Trước tiên bạn cần khai báo lớp của mình và sau đó truy cập vào nó, nếu không nó sẽ ném ra ReferenceError.
•	Không cần sử dụng từ khoá functionkhi định nghĩa functions bên trong một định nghĩa class.
Promises
ES6 có hỗ trợ riêng cho các promises. Một promise là một đối tượng mà nó sẽ chờ cho một hoạt động không đồng bộ hoàn thành, và khi toán tử hoàn thành, promise sẽ trả về hoặc là fulfilled(resolved) hoặc là rejected.
Cách tiêu chuẩn để tạo một promise là sử dụng cấu trúc new Promise() và nó sẽ nhận hai parameter. Tham số đầu tiên (thường được đặt tên là resolve) là một hàm được gọi khi xử lý xong và thành công, tham số thứ hai (thường được đặt tên là reject) được gọi khi xử lý xong và và thất bại:
const p = new Promise((resolve, reject) => {
    if (/* condition */) {
        resolve(/* value */);  // fulfilled successfully
    } else {
        reject(/* reason */);  // error, rejected
    }
});
Mọi promise đều có một phương thức là then nó nhận một cặp của callbacks.
p.then(
  val => console.log("Promise Resolved", val),
  err => console.log("Promise Rejected", err)
);
Giá trị được return bởi then trước sẽ chuyển vào parameter của then sau. Hãy nhìn ví dụ dưới đây:
const hello = new Promise((resolve, reject) => {
  resolve("Hello");
});

hello
  .then(str => `${str} World`)
  .then(str => `${str}!`)
  .then(str => console.log(str)); // Hello World!
Khi trả về một promise, giá trị resolved của promise sẽ được truyền vào call back tiếp theo để nối chúng lại với nhau. Đây là một kỹ thuật đơn giản để tránh "callback hell".
const p = new Promise((resolve, reject) => {
  resolve(1);
});

const eventuallyAdd1 = val =>
  new Promise((resolve, reject) => {
    resolve(val + 1);
  });

p.then(eventuallyAdd1)
  .then(eventuallyAdd1)
  .then(val => console.log(val)); // 3
