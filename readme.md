## 设计模式

## NO_01  面向对象

- 环境的初始化搭建

```bash

npm install webpack webpack-cli --save-dev

npm install webpack-dev-server html-webpack-plugin --save-dev

npm install babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest --save-dev  

```

###  面向对象的继承

- 三要素-继承
>People是父类，公共的，不仅仅服务于Student
继承可将公共方法抽离出来，提高服用，减少冗余

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


### 面向对象的封装

- 三要素-封装

> public 完全开放

> protected 对子类开放

> private 对自己开发

>（ES6 尚不支持，可以用TypeScript来演示）
  
> 减少耦合，不该外露的不外露

> 利于数据、接口的权限管理

> ES6目前不支持，一般认为_开头的属性是private
  
  
```typescript

    //www.typescriptlang.org/play/
    
    class People {
    
        name
    
        age
    
        protected weight
    
        constructor(name, age) {
    
            this.name = name
    
            this.age = age
    
            this.weight = 120
    
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
        number
    
        private girlfriend
    
        constructor(name, age, number) {
    
            super(name, age)
    
            this.number = number
    
            this.girlfriend = 'xiaoli'
    
        }
        study(){
            alert(` ${this.name}  study`)
        }
        getWeight(){
            alert(` weight  ${this.weight}`)
        }
    }
    
    let xiaoming = new Student('xiaoming', 10, 'A1')
    
    xiaoming.getWeight()
    
    // alert(xiaoming.girlfriend)

```

### 面向对象的多态

- 三要素-多态

>  同一个接口，不同的表现

>  JS应用极少

>  需要结合Java等语言的接口、重写、重载等功能

>  保持子类的开发性和灵活性

>  面向接口编程

> （JS引用极少，了解即可）
  
```javascript

    class People {
        constructor(name){
            this.name = name
        }
        saySomething(){
    
        }
    }
    
    class  A extends People{
        constructor(name){
            super(name)
        }
        saySomething(){
            alert('I am A')
        }
    }
    
    class  B extends People{
        constructor(name){
            super(name)
        }
        saySomething(){
            alert('I am B')
        }
    }
    
    let a = new A('a')
    
    a.saySomething()
    
    let b = new B('b')
    
    b.saySomething()

```

### UML类图2

- UML类图2-关系

![Image](./NO_01/assets/images/UML001.png)


// People  A  B  House
```javascript



```
