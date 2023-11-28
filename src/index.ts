import "./styles.scss";
import P5 from "p5";
import MyCircle from "./mycircle";

const sketch = (p5: P5) => {
  const myCircles: MyCircle[] = [];

  p5.setup = () => {
    const canvas = p5.createCanvas(400, 400);
    canvas.parent("sketch");
    p5.background(255);

    for (let i = 1; i < 4; i++) {
      const p = p5.width / 4;
      const circlePos = p5.createVector(p * i, p5.height / 2);
      const size = i % 2 !== 0 ? 48 : 64;
      myCircles.push(new MyCircle(p5, circlePos, size));
    }

  }

  p5.draw = () => {
    myCircles.forEach(circle => circle.draw());
  };

}

new P5(sketch);