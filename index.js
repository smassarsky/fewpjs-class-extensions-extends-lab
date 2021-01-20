class Polygon {

  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((perimeter, side) => perimeter + side)
  }

}

class Triangle extends Polygon {

  get isValid() {
    if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0]) {
      return true
    } else {
      return false
    }
  }

}

class Square extends Polygon {

  get area() {
    return this.sides[0] ** 2
  }

  get isValid() {
    return this.sides.every(side => side === this.sides[0])
  }
}