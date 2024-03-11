"use strict";
import { dino__sprite } from "./dom.js";

let isJumping = false;

const handleKeyUp = function (e) {
  if (e.code === "Space" && !isJumping) {
    jump();
  }
  return false;
};

const jump = function () {
  let position = 0;
  const maxHeight = 140;

  upMove(position, maxHeight);
  downMove(maxHeight);
};

const upMove = function (position, maxHeight, duration = 50) {
  isJumping = true;
  let upInterval = setInterval(() => {
    if (position < maxHeight) {
      position += 20;
      dino__sprite.style.bottom = position + "px";
    } else {
      clearInterval(upInterval);
    }
  }, duration);
};

const downMove = function (position, duration = 50) {
  let downInterval = setInterval(() => {
    if (position > 0) {
      position -= 20;
      dino__sprite.style.bottom = position + "px";
    } else {
      clearInterval(downInterval);
      isJumping = false;
    }
  }, duration);
};

document.addEventListener("keydown", (e) => handleKeyUp(e));
