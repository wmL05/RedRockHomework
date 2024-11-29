//使用Object()构造函数
let obj1 = new Object();
obj1.name = '1';
obj1.age = '11';
console.log(obj1);

//使用对象字面量
let obj2 = {
    name: '2',
    age: '22'
}
console.log(obj2);

//使用构造函数创建一个对象
function Person(name, age) {
    this.name = name
    this.age = age
    this.sayname = () => {
        console.log(this.name)
    }
}
const p1 = new Person('BBH', 30)
const p2 = new Person('star', 19)
console.log(p1);
console.log(p2);