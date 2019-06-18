//on terminal download the npm
//!!! make sure you or the folder!!!

//need these
let randomstring = require
("randomstring");

let gradien = require
("gradient-string");

let nerds = require
('nerds');


// let iponmap = require
// ("iponmap")





let multiPoke = nerds.resolve('Pokemon', 1).include(['name', 'type', 'hp']).asArray();
console.log(multiPoke);

//These are methods used on those npms
//gradient-string
const gradient = require('gradient-string');
 
console.log(gradient('cyan', 'pink','red', 'blue')('Hello world!' + randomstring.generate(100) +  multiPoke ));


//random string 
(function(){
    console.log(randomstring.generate(100))
}) ();


//Type 
//node index.js









