import {
  c
}
from './canvas';

export default class Spike {
  constructor(x, y, image) {
    this.position = {
      x,
      y
    };
    this.image = image;
    this.width = this.image.width;
    this.height = this.image.height;

  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);

  }
}
