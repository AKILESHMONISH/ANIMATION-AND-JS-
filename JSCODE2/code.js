var f=[3,5,4,6,7,9,12,11];
console.log("Given Array:");
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
