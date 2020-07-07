// fetch API

const res = await fetch("https://swapi.dev/api/films/");
const myData = await res.json();

console.log(myData);
