import P5 from "p5";

export default class MyCircle {
  _p5: P5;
  _pos: P5.Vector;
  _size: number;

  constructor(p5: P5, atPosition: P5.Vector, size: number) {
    this._p5 = p5;
    this._pos = atPosition;
    this._size = size;
  }

  draw() {
    this._p5.push();
    this._p5.translate(this._pos);
    this._p5.noStroke();
    this._p5.fill("orange");
    this._p5.ellipse(0, 0, this._size);
    this._p5.pop();
  }
}
