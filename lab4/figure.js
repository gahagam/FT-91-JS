
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


const circle = new Circle(0, 0, 4);
console.log(`Круг: Центр (${circle.x}, ${circle.y}), Радиус ${circle.r}`);
console.log(`Площадь круга: ${circle.square().toFixed(2)}`);

const rectangle = new Rectangle(1, 2, 3, 4);
console.log(`Прямоугольник: Центр (${rectangle.x}, ${rectangle.y}), Высота ${rectangle.h}, Ширина ${rectangle.w}`);
console.log(`Площадь прямоугольника: ${rectangle.square()}`);
