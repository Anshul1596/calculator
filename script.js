document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculator-form');
    const resultDiv = document.getElementById('result');

    document.getElementById('add-btn').addEventListener('click', function() {
        calculateResult('add');
    });

    document.getElementById('sub-btn').addEventListener('click', function() {
        calculateResult('sub');
    });

    document.getElementById('per-btn').addEventListener('click', function() {
        calculateResult('per');
    });

    document.getElementById('mul-btn').addEventListener('click', function() {
        calculateResult('mul');
    });

    function calculateResult(operation) {
        const no1 = parseFloat(document.getElementById('no1').value);
        const no2 = parseFloat(document.getElementById('no2').value);
        let sol;

        if (operation === 'add') {
            sol = no1 + no2;
            resultDiv.innerHTML = `Your sum is ${sol}, Happy Calculating!`;
        } else if (operation === 'sub') {
            sol = no1 - no2;
            resultDiv.innerHTML = `Your difference is ${sol}, Happy Calculating!`;
        } else if (operation === 'mul') {
            sol = no1 * no2;
            resultDiv.innerHTML = `Your Product is ${sol}, Happy Calculating!`;
        } else if (operation === 'per') {
            if (no2 === 0) {
                resultDiv.innerHTML = `Cannot divide by zero!`;
                return;
            }
            sol = (no1 / no2) * 100;
            resultDiv.innerHTML = `Your percentage solution is ${sol}%, Happy Calculating!`;
        }
    }
});
