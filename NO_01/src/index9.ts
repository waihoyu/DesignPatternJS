
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

alert(xiaoming.girlfriend)

