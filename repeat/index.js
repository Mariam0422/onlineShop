// this bind call ... 
// binding
// class ES6 ES5
// Promise 
// implement


// this --> keyword

// typeof this //object or function


// const CarCreator = (model, mark, price, color) => {
//     this.x = 10;
// }


// CarCreator.prototype.foo = function() {
//     this.x = 10; //this
// }

// const newCreator = (Constructor) => {
//     const obj = Object.create(Constructor.prototype);
//     Constructor.call(obj);
//     return obj;
// };



// const car1 = newCreator(CarCreator);
// console.log(car1, '>>>>');

// const car1 = new CarCreator('Tesla', 'Y', 30000, 'black'); //__proto__ = CarCreator.Prototype
// const car2 = new CarCreator('Tesla', 'Y', 30000, 'black'); //__proto__ = CarCreator.Prototype


// console.log(car2.foo());

class Car {
    constructor() {
        this.x = 1000000;
    }
    globalMethod() {
        console.log('globalMethod')
    }
}
class CarCreator extends Car{
    constructor(model, mark, price, color) {
        super();
        this.model = model;
        this.mark = mark;
        this.price = price;
        this.color = color;
    }

    going() {

    }

    globalMethod() {
        console.log('globalMethod')
    }
}

const car1 = new CarCreator('Tesla', 'Y', 30000, 'black')