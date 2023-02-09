var arr="my name is akilesh";
console.log(arr);
var a=arr.split(" ");
for(var i=0;i<a.length;i++){
    a[i]=a[i].split("").reverse().join("");
}
console.log("output for the 1st program:");
console.log(a.join(" "));

console.log("");
console.log("");

console.log("2.program to empty an array");
var a=[1,2,3,4,5]
console.log(a)
var l=a.length;
for(var i=0;i<l;i++){
    a.pop()
}
console.log("output:");
console.log(a)

console.log("");
console.log("");

console.log("3.program for enque and deque");
var enq = [];
var deq = [];

function enque(value){
    enq.push(value);
}

function deque(){
    if(deq.length == 0){
        while(enq.length > 0){
            deq.push(enq.pop());
        }
    }
    return deq.pop();
}

enque("1");
enque("2");
enque("3");
console.log(deque());
console.log(deque());
console.log(deque());

console.log("");
console.log("");


console.log("4.program for printing fizz and buzz divisble by 3 and 5");
for(let i=0;i<100;i++){
    (i%3==0 && i%5==0)?console.log("fizzbuzz"):(i%3==0)?console.log("fizz"):(i%5==0)?console.log("buzz"):false;
}

console.log("");
console.log("");
console.log("5.program for checking of anagrams");
var g1="Mary".toLowerCase();
var g2="Army".toLowerCase();
var h1=[...g1]
var h2=[...g2]
console.log(h1.sort().join("")==h2.sort().join(""))

console.log("");
console.log("");
console.log("6.program for Validating the name:");
var nn="H.Wells"
  var ar1 = nn.split(".");
  let length=ar1.length;
  function isLowerCase(str) {
    return str === str.toLowerCase();
}
    if(length==1||ar1[0].length>1){
        console.log("false");
        
    }
    else if(isLowerCase(ar1[ar1.length-1].charAt(0))){
        console.log("false");
        
    }
    else if((ar1[0].length>=1 && isLowerCase(ar1[0]))){
        console.log("false");
       
    }
    else if((ar1[1].length!=1 || (ar1[1].length==1 && isLowerCase(ar1[1].charAt(0))))&&ar1.length>=3){
        console.log("false");
     
    }
    else{
        console.log("true");
    }

