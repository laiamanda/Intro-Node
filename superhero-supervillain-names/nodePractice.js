/*const fs = require("fs");

fs.copyFileSync("file1.txt","file2.txt"); //make copy of file1 and makes new file

*/

var superheroes = require("superheroes");
const supervillains = require("supervillains");

var mySuperHeroName = superheroes.random();
var mySuperVillain =supervillains.random();

console.log("Superhero Name: " + mySuperHeroName);
console.log("Supervillain Name: " + mySuperVillain);
