var namesarray=["akilesh","divakar","jagadish","anto","hari","chandru","aadhi"];
console.log("1.Output for displaying names array using foreach loop");
namesarray.forEach(function(a){
    console.log(a);
})
console.log("");
console.log("");
console.log("");
console.log("2.program for squaring elements in array using map");
var nums=[1,2,3,4,5,6,7,9,10]
var squarearr=nums.map(number=>Math.pow(number,2));
console.log(squarearr);
console.log("");
console.log("");
console.log("");
console.log("3.program for finding E letter name in array using filter ");
var nam=["English","Iran","divakar","pakistan","Europe","England"]
var filtertedArray=nam.filter((val) => val.startsWith('E'));
console.log(filtertedArray);
console.log("");
console.log("");
console.log("");
console.log("3.Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.");
var f=["langford","lauren","gaLgadot",1234,"henrycavil",1877];
var modified=f.filter(val => typeof(val)=='string');
console.log(modified)
console.log("");
console.log("");
console.log("");
console.log("4.Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries");
const country = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const updatedcountries = country.reduce((j, i, ind) => {
  if (ind === country.length - 1) {
    return j + "and " + i + " are north European countries.";
  } else {
    return j + i + ", ";
  }
}, "");
console.log(updatedcountries);
console.log("");
console.log("");
console.log("");
console.log("Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)");
const oldarray=["Finland","Fiji","France","Denmark","Turkey","Estonia","Europe","SouthAsia"];
var Initial,ind,initialarray={};
for(ind=0;ind<oldarray.length;ind++){
    let first=oldarray[ind][0];
    if(initialarray[first]){
        initialarray[first]++;
    }
    else{
        initialarray[first]=1;
    }
}
let max1=0
let freq='';
for(let i in initialarray){
    if(max1<initialarray[i]){
        max1=initialarray[i];
        freq=i;
    }
}
console.log(`"${freq}" occured ${max1} times.`);
console.log("");
console.log("");
console.log("");
console.log("Assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.-using destruction");
let  e, pi, gravity, humanBodyTemp, waterBoilingTemp;
[...waterBoilingTemp]=[45,3.14,9.8,98.4,100]
console.log( waterBoilingTemp)
console.log("");
console.log("");
console.log("set,map and their functions");
const elements = new Set();
for (let i = 0; i <= 10; i++) {
  elements.add(i);
}
console.log(elements);
elements.delete(5);
console.log(elements)
elements.clear();
console.log(elements);
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland', 'Estonia'];
console.log(countries);
const names= new Set(countries.slice(0, 2));
console.log(names);
const array = ['Finland', 'Sweden', 'Norway'];
const countryMap = new Map();
for (const country of array) {
  countryMap.set(country, country.length);
}
console.log(countryMap);
console.log("");
console.log("");
console.log("excersies:2");
const array1 = [1,2,3,9,0,6];
const array2 = [2,3,4,8,8,8];
const union = [...new Set([...array1, ...array2])];
console.log(union);
const array3 = [1,2,3,7,8,9,0];
const array4 = [2,3,4,8,9,10];
const intersection = array3.filter(x => array4.includes(x));
console.log(intersection);
const array5 = [1,45,2,3,4,5,6];
const array6 = [2,3,4,5,6,7];
const difference = array5.filter(x => !array6.includes(x));
console.log(difference);






