/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/table.js
class Table {
  constructor(element) {
    this._element = element;
  }
  fillTable(arr) {
    for (let str of arr) {
      let el = document.createElement("tr");
      el.classList.add("row");
      for (let key of Object.keys(str)) {
        el.dataset[key] = str[key];
        let child = document.createElement("td");
        child.textContent = str[key];
        el.appendChild(child);
      }
      this._element.appendChild(el);
    }
  }
  arrangeTable(key, up) {
    let rows = Array.from(this._element.querySelectorAll(".row"));
    let length = rows.length;
    let newRows = [];
    if (up > 0) {
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i; j++) {
          let min = arrayMin(rows, key);
          for (let row of rows) {
            if (row === min) {
              newRows.push(row);
              rows = rows.filter(r => {
                return r !== row;
              });
            }
          }
        }
      }
    } else {
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i; j++) {
          let max = arrayMax(rows, key);
          for (let row of rows) {
            if (row === max) {
              newRows.push(row);
              rows = rows.filter(r => {
                return r !== row;
              });
            }
          }
        }
      }
    }
    this._element.innerHTML = "";
    for (let row of newRows) {
      this._element.appendChild(row);
    }
  }
}
function arrayMin(arr, key) {
  let minValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(minValue.dataset[key])) {
      if (Number(arr[i].dataset[key]) < Number(minValue.dataset[key])) {
        minValue = arr[i];
      }
    } else {
      if (arr[i].dataset[key] < minValue.dataset[key]) {
        minValue = arr[i];
      }
    }
  }
  return minValue;
}
function arrayMax(arr, key) {
  let maxValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(maxValue.dataset[key])) {
      if (Number(arr[i].dataset[key]) > Number(maxValue.dataset[key])) {
        maxValue = arr[i];
      }
    } else {
      if (arr[i].dataset[key] > maxValue.dataset[key]) {
        maxValue = arr[i];
      }
    }
  }
  return maxValue;
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  let table = new Table(document.querySelector(".table-body"));
  let index = 0;
  let arr = [{
    id: 26,
    title: "Побег из Шоушенка",
    imdb: 9.3,
    year: 1994
  }, {
    id: 25,
    title: "Крёстный отец",
    imdb: 9.2,
    year: 1972
  }, {
    id: 27,
    title: "Крёстный отец 2",
    imdb: 9.0,
    year: 1974
  }, {
    id: 1047,
    title: "Тёмный рыцарь",
    imdb: 9.0,
    year: 2008
  }, {
    id: 223,
    title: "Криминальное чтиво",
    imdb: 8.9,
    year: 1994
  }];
  table.fillTable(arr);
  setInterval(() => {
    let keys = Object.keys(arr[0]);
    table.arrangeTable(keys[index], 1);
    setTimeout(() => {
      table.arrangeTable(keys[index], -1);
      index = (index + 1) % keys.length;
    }, 5000);
  }, 5000);
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;