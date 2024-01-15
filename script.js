function validateInput() {
    let temperatureInput = document.getElementById('temperature').value;
    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        document.getElementById('temperature').value = '';
    }
}

function convertTemperature() {
    let temperatureInput = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let resultDisplay = document.getElementById('result');

    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        document.getElementById('temperature').value = '';
        resultDisplay.innerHTML = '';
        return;
    }

    let convertedTemperature;

    switch (unit) {
        case 'celsius':
            convertedTemperature = (temperatureInput - 32) * (5 / 9);
            break;
        case 'fahrenheit':
            convertedTemperature = (temperatureInput * 9 / 5) + 32;
            break;
        case 'kelvin':
            convertedTemperature = temperatureInput + 273.15;
            break;
        default:
            break;
    }

    resultDisplay.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit.toUpperCase()}`;
}
