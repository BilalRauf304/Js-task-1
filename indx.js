
        document.getElementById("button-1").addEventListener('click', function () {
            const age = parseFloat(document.getElementById('input').value);
            if (!age || age <= 0) {
                document.getElementById('result').textContent = "Please enter Valid Age.";
                return;
            }
            const days = Math.floor(age * 365.25);
            document.getElementById('result').textContent = ` You Are ${days} days. `;
        })
        //////////////////////                   ///////////////////////////

        document.getElementById('button-2').addEventListener('click', function () {
            const hours = parseFloat(document.getElementById('input-sec').value);
            if (!hours || hours <= 0) {
                document.getElementById('result-2').textContent = "Enter Below Than 24";
                return
            }
            else {
                document.getElementById('result-2').textContent = "Enter Above Than 2";
            }
            const second = hours * 3600;
            document.getElementById('result-2').innerHTML = `its ${second} second `;
        })

        ///////////////////////////////////////////////////////////
        const array = [10, 20, 30, 40, 50];
        function aryFun() {
            const value = parseFloat(document.getElementById("input-o").value);
            const index = array.indexOf(value);
            if (index === -1) {
                document.getElementById("result-3").innerText = "Number not found in array.";
            } else if (index < array.length - 1) {
                document.getElementById("result-3").innerText = "Next number in array is: " + array[index + 1];
            } else {
                document.getElementById("result-3").innerText = "This is the last number in the array.";
            }
        }
        function findNextNumber() {
            const input = document.getElementById("userNumber").value;

            if (!input) {
                document.getElementById("userResult").innerText = "Please enter a number.";
                return;
            }

            const num = parseFloat(input);
            if (isNaN(num)) {
                document.getElementById("userResult").innerText = "Invalid number.";
                return;
            }

            if (Number.isInteger(num)) {
                document.getElementById("userResult").innerText = "Next integer is: " + (num + 1);
            } else {
                document.getElementById("userResult").innerText = "Next float is: " + (num + 1);
            }
        }
        //////////////////////////////////////////////////////////////////
        function calculateBMI() {
            const weight = parseFloat(document.getElementById("weightInput").value);
            const height = parseFloat(document.getElementById("heightInput").value);
            const resultEl = document.getElementById("bmiResult");

            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                resultEl.innerText = "Please enter valid positive numbers for both weight and height.";
                return;
            }

            const bmi = weight / (height * height);
            let category = "";

            if (bmi < 18.5) category = "Underweight";
            else if (bmi < 24.9) category = "Normal weight";
            else if (bmi < 29.9) category = "Overweight";
            else category = "Obese";

            resultEl.innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
        }
        document.getElementById('button-4').addEventListener('click', function () {
            const uperCas = toUpperCase(document.getElementById('input-feild').value);
            const lowercase = uperCase * toUpperCase;
            document.getElementById('result-4').innerHTML = `converting ${done} done`;
        })
















      
    