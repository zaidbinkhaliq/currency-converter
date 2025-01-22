async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const apiKey = '3d8c9289fdc83e4c88a62128';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/EUR/${amount}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const convertedAmount = data.conversion_result;
        document.getElementById('result').innerText = convertedAmount.toFixed(2) + ' EUR';
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('result').innerText = 'Conversion error';
    }
}
