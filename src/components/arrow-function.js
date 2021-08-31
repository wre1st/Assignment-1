
function funcHero(){
    return "Okay Sir";
}

var func1 = function() {
    return "Calling Function";
  }
  console.log(func1); 

  //With Arrow Function:
  var func2 = () => {
    return "Calling function using arrow function!";
  }
  console.log( func2 ); 

  
//  Arrow Functions Return Value by Default:
  var func3 = () => "Defaul Value!";
  console.log(func3); 

  //Arrow Function With Parameters:
var  func4 = (val) => "func " + val;
console.log(func4); 

//  Arrow Function Without Parentheses:
 let func5 = val => "func " + val;
 console.log(func5); 



  // ES5
var x1 = function(x, y) {
    return x * y;
}
console.log(x1); 
 // ES6
 const x2 = (x, y) => x * y;
 console.log(x2);