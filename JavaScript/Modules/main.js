import Student,{ sayHi, sayBye } from "./student.js";

const stu = new Student('Dave',45);

stu.printName();
stu.printAge();

sayHi('Derek');
sayBye('Bilbo');