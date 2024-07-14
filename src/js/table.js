export default class Table {
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
              rows = rows.filter((r) => {
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
              rows = rows.filter((r) => {
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

export function arrayMin(arr, key) {
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

export function arrayMax(arr, key) {
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
