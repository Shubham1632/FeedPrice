const ethdata = () => {
  const doc = document.getElementById("content");
  let htmlstring = "";
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  )
    .then((data) => data.json())
    .then((priceData) => {
      for (let i = 0; i < 10; i++) {
        htmlstring += `<div> <img class="logo" src="${priceData[i].image}" alt="nothing"  height="20" width="20"> <span class="text"> ${priceData[i].name} : ${priceData[i].current_price} Rs.</span> </div> </br>`;
      }
      doc.innerHTML = htmlstring;
    });
};

ethdata();

function redirect() {
  var url = "https://shubham1632.github.io/schange-full-stack/";
  window.location(url);
}
