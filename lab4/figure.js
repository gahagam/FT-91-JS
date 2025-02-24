class Figure {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    square() {
        console.log("Площадь фигуры: ");
        return undefined; 
    }
}

class Circle extends Figure {
    #r;

    constructor(x, y, r) {
        super(x, y);
        this.#r = r;
    }

    square() {
        super.square();
        return Math.PI * this.#r * this.#r;
    }
}

class Rectangle extends Figure {
    #h;
    #w;

    constructor(x, y, h, w) {
        super(x, y);
        this.#h = h;
        this.#w = w; 
    }

    square() {
        super.square();
        return this.#h * this.#w;
    }
}


const x1 = new Circle(0, 0, 4);
let a = x1.square();
console.log(`Круг с радиусом 4: ${a}`);
console.log(" "); 

const x2 = new Rectangle(0, 0, 4, 10);
a = x2.square();
console.log(`Прямоугольник со сторонами 4 и 10: ${a}`);
console.log(" "); 