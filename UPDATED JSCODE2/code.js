var f=[3,5,4,6,7,9,12,11];
console.log("1.to perform binary search the Given Array:");
console.log(f);
console.log("Array after sorting");
f.sort(function(a,b){return a-b;});
console.log(f);

let BinarySearch=function(arr,element,s,e){
    if(s>e){
        return false;
    }
    let mid=Math.floor((s+e)/2);
    if(arr[mid]==element){
            return true;
    }
    else if(arr[mid]>element){
        return BinarySearch(arr,element,s,mid-1);
    }
    else{
        return BinarySearch(arr,element,mid+1,e);
    }
}
var k=f.length;
let o=9;
console.log("Key element is "+o);
if(BinarySearch(f,o,0,k-1)){
    console.log("Element is found in the Array");
}
else{
    console.log("Element Not found in the Array");
}

o=12;
console.log("Key element is "+o);
if(BinarySearch(f,o,0,k-1)){
    console.log("Element is found in the Array");
}
else{
    console.log("Element Not found in the Array");
}

o=15;
console.log("Key element is "+o);
if(BinarySearch(f,o,0,k-1)){
    console.log("Element is found in the Array");
}
else{
    console.log("Element Not found in the Array");
}
console.log("");
console.log("");
console.log("");

console.log("2.program for concatenation of input arrays");
var l=[[1,2],[4,5],[6,7,8],[0,9,18]];
console.log(l);
console.log("method 1")
var o1=l.flat(1);
console.log(o1);

console.log("method 2");
var o2=[].concat.apply([],l)
console.log(o2);

console.log("Method 3");
l=l.reduce((a,b)=>a.concat(b),[])
console.log(l);
console.log("");
console.log("");
console.log("");

console.log("3.program for even and odd of digits");
function vc(g){
var f2=0;
var g1=parseInt(g);
    while(g1>0){
        f2+=g1%10;
        g1=Math.floor(g1/10);
    }
return ((f2)%2==0)?("Evenish"):("Oddish");
}

console.log(vc("1001"));
console.log(vc("1211"));
console.log(vc("9099"))

