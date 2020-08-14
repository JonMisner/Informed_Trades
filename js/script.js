var stockSearch = document.querySelector('#searchButton');

function getStockInfo(ticker) {
    var queryURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + ticker + "&apikey=1R7O28U5BHPJZSE7"

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (res) {
      console.log(res);
        var dataPoint = $('<div>')
        var dataPointPrice = $('<div>')
        var symbol = $('<p>').text("Ticker: " + res['Global Quote']['01. symbol']);
        console.log(res['Global Quote']['01. symbol']);
        var open = $('<p>').text("Open: " + res['Global Quote']['02. open']);
        console.log("open: " + res['Global Quote']['02. open']);
        var high = dataPoint.text(("High: " + res['Global Quote']['03. high']));
        console.log("high: " + res['Global Quote']['03. high']);
        var low = $('<p>').text("Low: " + res['Global Quote']['04. low']);
        console.log("price: " + res['Global Quote']['03. high']);
        var price = $('<p>').text(res['Global Quote']['04. low']);
        console.log("current price: " + res['Global Quote']['05. price']);
        var lastTradingDay = $('<p>').text("Last Trading Day: " + res['Global Quote']['07. latest trading day']);
        console.log("last trading day: " + res['Global Quote']['07. latest trading day']);
        dataPoint.append(symbol,open,high,low,lastTradingDay)
        dataPointPrice.append(price)
        $('#data').append(dataPoint)
        $('#currentPrice').append(dataPointPrice)
      });
}

$(stockSearch).on('click', function (event) {
    // Preventing the button from trying to submit the form
    console.log('Search Button Clicked');
    event.preventDefault();
    // Getting ticker symbol from search input field
    var ticker = $('#userInput').val().trim();
    console.log(ticker);

    getStockInfo(ticker);
});