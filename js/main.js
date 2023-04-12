document.addEventListener("DOMContentLoaded", function(event) {
    fetch('http://feedsapi.safe-installation.com/api/GetJackpotTotalAmount?CurrencyCode=USD&currencySymbol=$&BrandID=0')
    .then((response) => response.json())
    .then(function (data) {
        var totalAmount = data.entity.totalAmount;
        console.log(totalAmount);
        
        var min = 0.01;
        var max = 0.10;
        var randomNumber = Math.random() * (max - min) + min;
        var roundedNum=Math.round(randomNumber*100)/100;
        console.log(roundedNum);

        totalAmount = parseFloat(totalAmount).toLocaleString('en');
        document.querySelector('.jackpot').innerHTML = '$' + totalAmount;
        totalAmount = parseFloat(totalAmount.replace(/,/g,''));
        function increment() {
            totalAmount += roundedNum;
            roundedTotalAmount=Math.round(totalAmount*100)/100;
            roundedTotalAmount = parseFloat(roundedTotalAmount).toLocaleString('en');
            document.querySelector('.jackpot').innerHTML = '$' + roundedTotalAmount;
            roundedTotalAmount = parseFloat(roundedTotalAmount.replace(/,/g,''));
        }
        setInterval(increment, 2000);
        
        
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
    });
});