"use strict";

const randomNumberInterval = function (a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
};

export { randomNumberInterval };
