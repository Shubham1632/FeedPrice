const ethdata = () => {
  fetch("https://api.coinbase.com/v2/exchange-rates?currency=ETH")
    .then((data) => data.json())
    .then((priceData) => {
      let eth_to_inr = priceData.data.rates.USD;
      let ethp = Math.round(eth_to_inr);
      let price = document.getElementById("eth");
      price.innerHTML = ethp;
    });
};

ethdata();

const changedata = () => {
  console.log("clicked");
  fetch("https://api.coinbase.com/v2/exchange-rates?currency=ETH")
    .then((data) => data.json())
    .then((priceData) => {
      let eth_to_inr = priceData.data.rates.INR;
      let ethp = Math.round(eth_to_inr);
      let price = document.getElementsByTagName("button");
      price.innerHTML = ethp;
    });
};
