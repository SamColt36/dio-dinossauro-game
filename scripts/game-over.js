"use strict";
import { main, h1__title, h2__pontuation, header__img } from "./dom.js";

const gameOver = function (interval, points) {
  clearInterval(interval);
  h1__title.textContent = "Game Over!";
  h2__pontuation.textContent = `Total points: ${points}`;
  header__img.setAttribute("src", "./images/sprites/reloded.png");
  main.remove();
  restartPage();
};

const restartPage = function () {
  header__img.addEventListener("click", () => location.reload());
};

export { gameOver };
