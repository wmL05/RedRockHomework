var a = { n: 1 };       //创建一个对象{n: 1}并将其赋值给a
var b = a;              //将a的值赋值给b
a.c = a = { n: 2 }      //给对象a新增属性x，并将{n: 2}赋值给a，同时赋给新增属性x
//.的运算优先级高于=

console.log(a)
console.log(b)
a.n = 3                 //将a的n属性值修改为3
console.log(b)
// 知识点参考引用值的复制



//输出结果：
// { n: 2 }
// { n: 1, x: { n: 2 } }
// { n: 1, x: { n: 3 } }