class Utilities {
    static camelCase(str) {
     var string= str.split(" ").join("")
     return string.charAt(0).toLowerCase() + string.slice(1);
    }
  }
  console.log(Utilities.camelCase("hello there i'm using js"))
  console.log(Utilities.camelCase("I would like to learn react"))
  console.log(Utilities.camelCase("Divakar and jaga placed in kaartech"))
  console.log(Utilities.camelCase("Cause you are the believe in fate you are my paradise"));