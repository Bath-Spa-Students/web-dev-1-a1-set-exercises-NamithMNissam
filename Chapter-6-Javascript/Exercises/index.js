function calculate() {
    let distance = parseFloat(document.getElementById('distance').value);
    let efficiency = parseFloat(document.getElementById('efficiency').value);
    let price = parseFloat(document.getElementById('price').value);

    if (isNaN(distance) || isNaN(efficiency) || isNaN(price)) {
        alert('Please enter valid numbers.');
        return;
    }

    let totalFuelCost = (distance / efficiency) * price;
    document.getElementById('result').innerHTML = `Total Fuel Cost: AED${totalFuelCost.toFixed(2)}`;
}