console.log("JavaScript Loaded");

document.getElementById('exchangeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var amount = document.getElementById('amount').value;
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    var exchangeRates = {
        'USD': {'EUR': 0.85, 'GBP': 0.75, 'ZAR': 14.5, 'BWP': 11.0},
        'EUR': {'USD': 1.18, 'GBP': 0.88, 'ZAR': 17.0, 'BWP': 13.0},
        'GBP': {'USD': 1.33, 'EUR': 1.14, 'ZAR': 19.2, 'BWP': 15.0},
        'ZAR': {'USD': 0.069, 'EUR': 0.059, 'GBP': 0.052, 'BWP': 0.078},
        'BWP': {'USD': 0.091, 'EUR': 0.077, 'GBP': 0.067, 'ZAR': 1.28}
    };

    console.log(`Converting ${amount} ${fromCurrency} to ${toCurrency}`);

    var convertedAmount = 0;

    if (fromCurrency === toCurrency) {
        convertedAmount = amount;
    } else {
        convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    }

    var resultMessage = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}.`;
    document.getElementById('result').innerHTML = resultMessage;
    console.log(resultMessage);
});
