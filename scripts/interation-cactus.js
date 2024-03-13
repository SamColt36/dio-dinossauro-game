"use strict";
import { randomNumberInterval } from "./random-number.js";
import { isJumping } from "./interation-dino.js";
import { main, points } from "./dom.js";
import { gameOver } from "./game-over.js";

let points__value = 0;
const number__max__obstacles = 3;

const createCactus = function () {
  const div = document.createElement("div");
  div.classList.add("cactus");

  const cactus__sprites = [];

  insertImagesInArrayTemp: for (
    let e = 0;
    e < randomNumberInterval(1, number__max__obstacles);
    e++
  ) {
    cactus__sprites.push(document.createElement("img"));
  }

  let cactusPositionInitial = window.innerWidth;
  div.style.left = cactusPositionInitial + "px";

  stylizeImage: cactus__sprites.forEach((sprite) => {
    sprite.setAttribute(
      "src",
      `/images/sprites/obstacles/${randomNumberInterval(1, 11)}.png`
    );
    sprite.setAttribute("alt", "Sprite cactus");
    sprite.style = {
      width: 60,
      height: "auto",
    };
  });

  insertImagesInDiv: cactus__sprites.forEach((sprite) => {
    div.appendChild(sprite);
  });

  main.appendChild(div);
};

createCactus();

const moveCactus = function (duration = 100) {
  const cactus__sprite = document.querySelector(".cactus");

  if (cactus__sprite === null) {
    return false;
  }

  let position = window.innerWidth;

  const leftInterval = setInterval(() => {
    is__cactus__visible: if (position > 0) {
      position -= 80;
      cactus__sprite.style.left = position + "px";
      detect__collision: if (position <= 60 && !isJumping) {
        gameOver(leftInterval, points__value);
      }
      points__incremented: if (position <= 60 && isJumping) {
        points__value += 10;
        points.textContent = points__value;
      }
    } else {
      clearInterval(leftInterval);
      cactus__sprite.remove();

      loopCactus: setTimeout(() => {
        createCactus();
        moveCactus();
      }, Math.random() * 1000);
    }
  }, duration);
};

moveCactus();
