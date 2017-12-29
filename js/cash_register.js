console.log('helloWorldAgain')
//startModule up
let calculatorMod = calculatorModule();
//tracks operation input;
let operation = null;

let display = ''
//holds number value
let num1 = 0;
let num2 = 0;


//forLoop though buttons by class. Adds click. value wont work????
// var allTheButtons = document.getElementsByClassName('numButton');
// for(var i = 0; i < allTheButtons.length ;i++){
//    allTheButtons[i].addEventListener('click', ()=>{
//     var bottomBox = document.getElementById('lowDisplayBox');  
//     updateContent(this.value);
//  },true)
// }

//display when website is fired up.
let displayContent = document.getElementById('displayBox');
displayContent.innerHTML = display;

//data passed in arguement when numbers are pressed. Adds numbers to innerHtml
let updateContent = (d)=>{
    var newDisplay = document.getElementById('displayBox');
    newDisplay.innerHTML = newDisplay.innerHTML + d;
}



function resetDisplay(){
    let calculatorDisplay = document.getElementById('displayBox');
    calculatorDisplay.innerHTML = display;
}

let add = document.getElementById('add').addEventListener('click',()=>{
    num1 = parseFloat(updateContent.innerHTML);
    operation = '+';
    calculatorMod.load(num1) 
    resetDisplay('');
})

let subtract = document.getElementById('subtract').addEventListener('click',()=>{
    operation = '-';
    num1 = parseFloat(updateContent.innerHTML);
    calculatorMod.load(num1) 
    resetDisplay('');
})

let multiply = document.getElementById('multiply').addEventListener('click',()=>{
    operation = '*';
    num1 = parseFloat(updateContent.innerHTML);
    calculatorMod.load(num1) 
    resetDisplay('');
})

let divide = document.getElementById('divide').addEventListener('click',()=>{
    operation = '/';
    num1 = parseFloat(updateContent.innerHTML);
    calculatorMod.load(num1) 
    resetDisplay('');
})

// let clear = document.getElementById('clear').addEventListener('click',()=>{
//     operation = null,
//     loadNum = null,
//     num2 = null,
//     resetDisplay('')
// })

let equal = document.getElementById('equals').addEventListener('click',()=>{
    num2 = parseFloat(updateContent.innerHTML);

        switch(operation){
        case'+':
        calculatorMod.add(num2);
        break;
        case '-':
        calculatorMod.subtract(num2);
        break;
        case '/':
        calculatorMod.divide(num2);
        break;
        case '*':
        calculatorMod.multiply(num2);
        break;
    }
    startDisplay.innerHTML = calculatorMod.getTotal;
}
)









//button with added onclick.
let one = document.getElementById('butt1').addEventListener('click',()=>{
    updateContent('1');
})
let two = document.getElementById('butt2').addEventListener('click',()=>{
    updateContent('2');
})
let three = document.getElementById('butt3').addEventListener('click',()=>{
    updateContent('3')
})
let four = document.getElementById('butt4').addEventListener('click',()=>{
    updateContent('4');
})
let five = document.getElementById('butt5').addEventListener('click',()=>{
    updateContent('5')
})
let six = document.getElementById('butt6').addEventListener('click',()=>{
    updateContent('6');
})
let seven = document.getElementById('butt7').addEventListener('click',()=>{
    updateContent('7');
})
let eight = document.getElementById('butt8').addEventListener('click',()=>{
    updateContent('8');
})
let nine = document.getElementById('butt9').addEventListener('click',()=>{
    updateContent('9');
})
let zero = document.getElementById('butt0').addEventListener('click',()=>{
    updateContent('0');
})
let zeroZero = document.getElementById('butt00').addEventListener('click',()=>{
    updateContent('00');
})


