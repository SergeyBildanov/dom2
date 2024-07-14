import Table from "./table";

document.addEventListener("DOMContentLoaded", () => {
  let table = new Table(document.querySelector(".table-body"));
  let index = 0;
  let arr = [
    {
      id: 26,
      title: "Побег из Шоушенка",
      imdb: 9.3,
      year: 1994,
    },
    {
      id: 25,
      title: "Крёстный отец",
      imdb: 9.2,
      year: 1972,
    },
    {
      id: 27,
      title: "Крёстный отец 2",
      imdb: 9.0,
      year: 1974,
    },
    {
      id: 1047,
      title: "Тёмный рыцарь",
      imdb: 9.0,
      year: 2008,
    },
    {
      id: 223,
      title: "Криминальное чтиво",
      imdb: 8.9,
      year: 1994,
    },
  ];
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
