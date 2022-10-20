const { random } = require("superheroes")
const superheroes = require("superheroes")
const supervillains = require("supervillains")

let randomHeroe = superheroes.random()
let randomVillain = supervillains.random()

console.log(randomVillain + "Has arraived the city, he will destroy us all.")
console.log("¡Don't Worry " + randomHeroe + " will save gotham!")   