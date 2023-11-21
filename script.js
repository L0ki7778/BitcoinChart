const API_KEY = "8DTRVZ2BTVWHO46U";

async function loadChart(){
    let url = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=EUR&apikey=" + API_KEY;
    let response = await fetch(url);
    if(!response.ok){
        alert("error")
    }
    let data = await response.json()
    console.log(data)
    let price = await data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
    let fixedPrice = Math.round(price*100)/100;
    console.log(fixedPrice)
}

loadChart()