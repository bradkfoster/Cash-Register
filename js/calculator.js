console.log('helloWorld');


 
var calculatorModule = (function(){

    var register = 0; var total = 0;
  
  
  
   //loads the first number after operator is pressed.
    function load(x){
     validate(x);
     total = x;
     return total;
    }
  
  //returns total after equal
    function getTotal(){
     return total;
    }
  
  //adds loaded number to new number.
    function add(x){
     validate(x);
     total += x;
     return total;
    }
  
//Subtracts
    function subtract(x){
     validate(x);
     total -= x;
     return total;
    }
  
//multiply
    function multiply(x){
     validate(x);
     total *= x;
     return total;
    }
  
//divide
    function divide(x){
     validate(x);
     total /= x;
     return total;
    }
  
//Gets balance
    function recallMemory(){
     return register;
    }

//stores amount in display to the cash registor
    function saveMemory(x){
    register += x;
      return register;
    }
  
 //clears cash register
    function clearMemory(){
    register = 0;
     return register;
    }

    function feedMemory(x){
      if(x>register){
        throw new Error("Request Invalid");
      }else{
        register -= x;
      }
    }
  
//make sure that number is valid.
    function validate(x){
     if (typeof x !== "number"){
     throw new Error("Request Invalid");
     }
  }
  
   return {
     load: load,
     getTotal: getTotal,
     add: add,
     subtract: subtract,
     multiply: multiply,
     divide: divide,
     recallMemory: recallMemory,
     saveMemory: saveMemory,
     clearMemory: clearMemory,
     feedMemory: feedMemory,
  
  };
  
  });