console.log('helloWorldAgain')
//startModule up
let calculatorMod = calculatorModule();
//tracks operation input;
let operation = null;
let display = '';
//holds number value
let num1 = 0;
let num2 = 0;


// forLoop though buttons by class. Adds click. 
var allTheButtons = document.getElementsByClassName('numButton');
for(var i = 0; i < allTheButtons.length ;i++){
   allTheButtons[i].addEventListener('click', function(){
    var bottomBox = document.getElementById('lowDisplayBox');  
    updateContent(this.value);
 },true)
}

var opertatorButtons = document.getElementsByClassName('operators');
for(var i = 0; i < opertatorButtons.length; i++){
    opertatorButtons[i].addEventListener('click', function(){
        num1 = parseFloat(displayContent.innerHTML);
        operation = this.value;
        calculatorMod.load(num1)
        resetDisplay();
    },true)
}



//display when website is fired up.
let displayContent = document.getElementById('displayBox');
displayContent.innerHTML = display;

//data passed in arguement when numbers are pressed. Adds numbers to innerHtml
let updateContent = (d)=>{
    var newDisplay = document.getElementById('displayBox');
    
    newDisplay.innerHTML +=  d;
}

let resetDisplay = () => {
    let calculatorDisplay = document.getElementById('displayBox');
    calculatorDisplay.innerHTML = display;
}


let clearAll = document.getElementById('clear').addEventListener('click',()=>{
    operation = null,
    num1 = null,
    num2 = null,
    resetDisplay()
})

let balance = document.getElementById('balance').addEventListener('click',()=>{
    displayContent.innerHTML = calculatorMod.recallMemory();
})

let deposit = document.getElementById('deposit').addEventListener('click',()=>{
    calculatorMod.saveMemory(parseFloat(displayContent.innerHTML));
    resetDisplay();
})

let withdraw = document.getElementById('withdraw').addEventListener('click',()=>{
    calculatorMod.feedMemory(parseFloat(displayContent.innerHTML));
    resetDisplay();
})



let equal = document.getElementById('equals').addEventListener('click',()=>{
    num2 = parseFloat(displayContent.innerHTML);

        switch(operation){
        case '+':
            calculatorMod.add(num2);
        break;
        case '-':
            calculatorMod.subtract(num2);
        break;
        case '*':
            calculatorMod.multiply(num2);
        break;
        case '/':
            calculatorMod.divide(num2);
    
      }
    displayContent.innerHTML = calculatorMod.getTotal();
}
)




