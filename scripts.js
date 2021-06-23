/*
1. Need buttons & input fields to be able to create four types of shapes:
    a. Square (1 input-field: length of side)
    b. Rectangle (2 input fields: width & height)
    c. Circle (1 input field: radius)
    d. Triangle (1 input field: height or width)

2. Below buttons, there will be two separate areas next to each other:
    a. Shape Info Panel, which will display:
        Shape Name: 
        Width: 
        Height: 
        Radius: 
        Area: 
        Perimeter:
    b. Draw Area
        Height & Width of 600px
        Shapes show up here when created and stay within bounds.
            * Clicking on Shapes in this area will display their information in the aforementioned Shape Info Panel.
            * Dbl-Clicking on Shapes will remove them.
            * Circles should be purple, Squares should be red, Triangles should be yellow, and Rectangles should be green

*/

// Lots of global variables to grab via DOM

const shapeContainer = document.getElementById('draw-area')

const squareButton = document.getElementById('square-button')
const rectangleButton = document.getElementById('rectangle-button')
const circleButton = document.getElementById('circle-button')
const triangleButton = document.getElementById('triangle-button')

let squareLength = document.getElementById('squareLength')
let rectangleWidth = document.getElementById('rectangleWidth')
let rectangleHeight = document.getElementById('rectangleHeight')
let circleRadius = document.getElementById('circleRadius')
let triangleHeight = document.getElementById('triangleHeight')

const infoPanel = document.getElementById('info-panel')
const shapeInfo = document.getElementById('info-panel-shape-name');
const widthInfo = document.getElementById('info-panel-width');
const heightInfo = document.getElementById('info-panel-height');
const radiusInfo = document.getElementById('info-panel-radius');
const areaInfo = document.getElementById('info-panel-area');
const perimeterInfo = document.getElementById('info-panel-perimeter');


// overarching Shape class
class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        if (this.width > 600 && this.height > 600) {
            alert('Shape is too wide and tall. Dimensions must be less than 600.');
        } else if (this.height > 600) {
            alert('Height is too tall! Must be less than 600!');
        } else if (this.width > 600) {
            alert('Width is too wide! Must be less than 600!');
        } else {
            this.div = document.createElement('div');
            this.div.style.width = `${this.width}px`;
            this.div.style.height = `${this.height}px`;
            this.div.className = "shape";
            shapeContainer.appendChild(this.div);
            let x = (getRandomNumber() - this.height);
            let y = (getRandomNumber() - this.width);
            this.div.style.left = `${x}px`;
            this.div.style.top = `${y}px`;
            this.div.addEventListener('click', () => this.getInfo()); // method is right below
            this.div.addEventListener('dblclick', () => this.delete()); // method is right below
        };

    }

    getInfo() { // Fills out Side Panel Info (has event listener above for single click)

    }

    delete() { // Removes shape from shapeContainer (has event listener above for double click)
        this.div.remove();
        shapeInfo.innerText = 'Shape Name: ';
        widthInfo.innerText = `Width: `;
        heightInfo.innerText = `Height: `;
        radiusInfo.innerText = `Radius: `;
        areaInfo.innerText = `Area: `;
        perimeterInfo.innerText = `Perimeter: `;
    }
}



// Square class, extended from Shape
class Square extends Shape {
    constructor(width, height) {
        super(width, height);
        if (this.div) {
            this.div.classList.add('square');
            this.div.addEventListener('click', () => this.getInfo()); // method is right below
        }
    }
    getInfo() {
        shapeInfo.innerText = 'Shape Name: Square';
        widthInfo.innerText = `Width: ${this.width}`;
        heightInfo.innerText = `Height: ${this.height}`;
        radiusInfo.innerText = `Radius: N/A`;
        areaInfo.innerText = `Area: ${this.height * this.height}`;
        perimeterInfo.innerText = `Perimeter: ${this.height * 4}`;
    }
}


// Rectangle class, extended from Shape
class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        if (this.div) {
            this.div.classList.add('rectangle');
            this.div.addEventListener('click', () => this.getInfo());
        }
    }
    getInfo() {
        shapeInfo.innerText = 'Shape Name: Rectangle';
        widthInfo.innerText = `Width: ${this.width}`;
        heightInfo.innerText = `Height: ${this.height}`;
        radiusInfo.innerText = `Radius: N/A`;
        areaInfo.innerText = `Area: ${this.height * this.height}`;
        perimeterInfo.innerText = `Perimeter: ${this.height * 2 + this.height * 2}`;
    }
}

// Circle class, extended from Shape
class Circle extends Shape {
    constructor(width, height) {
        super(width, height);
        if (this.div) {
            this.div.classList.add('circle');
            this.div.addEventListener('click', () => this.getInfo());
        }
    }
    getInfo() {
        shapeInfo.innerText = 'Shape Name: Circle';
        widthInfo.innerText = `Width: ${this.width}`;
        heightInfo.innerText = `Height: ${this.height}`;
        radiusInfo.innerText = `Radius: ${circleRadius.value}`;
        areaInfo.innerText = `Area: ${Math.floor(Math.PI * this.height * this.height)}`;
        perimeterInfo.innerText = `Perimeter: ${Math.floor(2 * Math.PI * this.height)}`;
    }
}

// Triangle class, extended from Shape
class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
        if (this.div) {
            this.div.classList.add('triangle');
            this.div.style.borderBottom = `${this.width}px solid yellow`;
            this.div.style.borderRight = `${this.height}px solid transparent`;
            this.div.addEventListener('click', () => this.getInfo());
        }
    }
    getInfo() {
        shapeInfo.innerText = 'Shape Name: Triangle';
        widthInfo.innerText = `Width: ${this.width}`;
        heightInfo.innerText = `Width: ${this.height}`;
        radiusInfo.innerText = `Radius: N/A`;
        areaInfo.innerText = `Area: ${.5 * this.height * this.height}`;
        perimeterInfo.innerText = `Perimeter: ${Math.floor((2 * this.height) + (Math.sqrt(2) * this.height))}`;
    }
}


function getRandomNumber() {
    return Math.floor((Math.random() * 599)+1);
};


// Button Click Listeners
squareButton.addEventListener('click', function newSquare() {
    console.log("Square Button Clicked");
    new Square(squareLength.value, squareLength.value);
});

rectangleButton.addEventListener('click', function newRectangle() {
    console.log("Rectangle Button Clicked");
    new Rectangle(rectangleWidth.value, rectangleHeight.value);
});

circleButton.addEventListener('click', function newCircle() {
    console.log("Circle Button Clicked");
    new Circle(circleRadius.value, circleRadius.value);
});

triangleButton.addEventListener('click', function newCircle() {
    console.log("Triangle Button Clicked");
    new Triangle(triangleHeight.value, triangleHeight.value);
});