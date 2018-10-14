## 设计模式

## NO_01  面向对象

- 环境的初始化搭建

```bash

npm install webpack webpack-cli --save-dev

npm install webpack-dev-server html-webpack-plugin --save-dev

npm install babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest --save-dev  

```

- 面向对象的继承

```javascript

class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName(){
        return this.name
    }
    eat(){
        alert(`${this.name} eat something`)
    }
    speak(){
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}

let zhang = new People("zhang",20)

zhang.eat()

zhang.speak()

let wang = new People("wang",21)

wang.eat()

wang.speak()

// 子类 继承父类

class Student extends  People
{
    constructor(name, age, number) {
        super(name, age)
        this.number = number
    }
    study(){
        alert(`${this.name} study`)
    }
}

let xiaoming = new Student('xiaoming', 10, 'A1')

xiaoming.study()

alert(xiaoming.number)

xiaoming.eat()

let xiaohong  = new Student('xiaohong',11,'A2')

xiaohong.study()

alert(xiaohong.number)

xiaohong.speak()

```
