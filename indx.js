
       //////////////////// task 1 //////////
       document.getElementById('convertBtn').addEventListener('click', function() {
    const age = parseFloat(document.getElementById('ageInput').value);
    if (!age || age <= 0) {
        document.getElementById('result').textContent = "Please enter a valid age.";
        return;
    }
    const days = Math.floor(age * 365.25);
    document.getElementById('result').textContent = `That is approximately ${days} days.`;
});
////////////////////// task-2 ////////////////////
 
document.getElementById('convertBtnn').addEventListener('click', function() {
    const hours = parseFloat(document.getElementById('hoursInput').value);
    if (!hours || hours <= 0) {
        document.getElementById('resultt').textContent = "Please enter a valid number of hours.";
        return;
    }
    
    const seconds = hours * 3600;
    document.getElementById('resultt').textContent = `${hours} hours is ${seconds} seconds.`;
});
                ///////////////////////// task - 3 //////////////////
      const array = [10, 20, 30, 40, 50];
 
        function findNextInArray() {
            const input = parseInt(document.getElementById("arrayInput").value);
            const index = array.indexOf(input);
            const resultSpan = document.getElementById("arrayResult");
 
            if (index !== -1 && index < array.length - 1) {
                resultSpan.textContent = array[index + 1];
            } else if (index === array.length - 1) {
                resultSpan.textContent = "No next element (it's the last one)";
            } else {
                resultSpan.textContent = "Number not found in array";
            }
        }
        function findNextGeneral() {
            const inputVal = document.getElementById("numberInput").value;
            const number = parseFloat(inputVal);
            const result = document.getElementById("generalResult");
 
            if (isNaN(number)) {
                result.textContent = "Invalid input";
                return;
            }

            if (Number.isInteger(number)) {
                result.textContent = number + 1;
            } else {
                result.textContent = (number + 0.1).toFixed(2);
            }
        }
              ////////////////   task -4 //////////////
              
function displayCapitalizedName() {
    const name = document.getElementById("nameInput").value.trim();
    if (!name) {
        document.getElementById("nameResult").innerText = "Please enter a name.";
        return;
    }
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    document.getElementById("nameResult").innerText = `Capitalized Name: ${capitalized}`;
}

////////////////////        task - 5 //////////////////////

        function calculateBMI() {
            const weight = parseFloat(document.getElementById("weight").value);
            const height = parseFloat(document.getElementById("height").value);
            const resultBox = document.getElementById("bmiResult");
 
            if (weight > 0 && height > 0) {
                const bmi = weight / (height * height);
                resultBox.value = bmi.toFixed(2); // round to 2 decimal places
            } else {
                resultBox.value = "Invalid input";
            }
        }
   
        /////////////////////////////      task -6 /////////////////
        function generateArray() {
            // Generate random array of 5 to 10 numbers between 1 and 100
            const length = Math.floor(Math.random() * 6) + 5; // length between 5–10
            const randomArray = [];
 
            for (let i = 0; i < length; i++) {
                randomArray.push(Math.floor(Math.random() * 100) + 1);
            }
 
            // arry display
            document.getElementById("arrayDisplay").textContent = `[ ${randomArray.join(", ")} ]`;
 
            // Pick and display first & last elements
            document.getElementById("firstElement").textContent = randomArray[0];
            document.getElementById("lastElement").textContent = randomArray[randomArray.length - 1];
        }

        //////////////////////    task - 7 //////////////////////

        const inputOne = document.getElementById("inputOne");
        const inputTwo = document.getElementById("inputTwo");
        const outputResult = document.getElementById("outputResult");
 
        inputOne.addEventListener("input", function () {
            outputResult.value = "NaN";  
        });
        inputTwo.addEventListener("input", function () {
            const num1 = parseInt(inputOne.value);
            const num2 = parseInt(inputTwo.value);
 
            if (!isNaN(num1) && !isNaN(num2)) {
                const sum = num1 + num2;
                outputResult.value = sum;  
            } else {
                outputResult.value = "NaN";  
            }
        });
 

    

    // document.getElementById('btn').addEventListener('click' ,function () {
    //     document.getElementById("qwe").innerText = new Date();
    // })
//   

// document.getElementById('btn').addEventListener('click' , function hello () {
//     document.getElementsById("qwe").innerText= (qwe.toLocaleString);
// })
let car ={price:"1200k" , color:"red", Modle:"2010"}
document.write(car["Modle"])
const cars = ["Saab", "Volvo", "BMW"]; 
 cars[2] = 'truk';
 cars.push('hino')
console.log(cars .length )





//////////////////////////////////////////////////////////////////////////////
// var  bulb = document.querySelector('#circle');
// var  btn1 = document.querySelector('#btn1');
  
// btn1.addEventListener("click" ,function () {
//     bulb.style.backgroundColor ="green";
// })


////      this function in normal function 

const objEct = {
    fName: 'ali',
    lName: 'azam',
    contact: '123123123',
    getName: function (){
        console.log('ali')
    }
}
const ob2 ={
     fName: 'khan',
    lName: 'zzzzz',
    contact: '0000000',
    getName: function ( ) {
      console.log(khan)
    }
}
const ob3 ={
     fName: 'zamil',
    lName: 'wwww',
    contact: '11111111',
    getName: function ( ) {
      console.log(zami)
    }
}


console.log(ob3.contact)

function printName (){


}
  ////      this function in constructor   
function Sayello (fName , lName , contact   ) {
  this.fName = fName ;
  this.lName = lName ;
  this.contact = contact ;
  this.getName = function () {
 console.log(this.fName ,this.lName)
  };
  this.getContact = function(){
    console.log(this.contact)
  }
}
const person1 = new Sayello("ali" , "azam","888888");
const person2 = new Sayello("khan","azd", "77777");
const person3 =new Sayello("not", "yes","4444");
// console.log(this.getName)
person2.getContact();
  let botel = ["blue", "1-liter","100Rs" ]
   console.log(botel);






















      
    