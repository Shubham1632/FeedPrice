const ethdata = () => {
  const doc = document.getElementById("content");
  let htmlstring = "";
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  )
    .then((data) => data.json())
    .then((priceData) => {
      for (let i = 0; i < 10; i++) {
        htmlstring += `<div> <img class="logo" src="${priceData[i].image}" alt="nothing"  height="20" width="20"> <span class="text"> ${priceData[i].name} : ${priceData[i].current_price} Rs.</span> <span class="change" id="change${i}">${priceData[i].price_change_percentage_24h}</span> </div> </br>`;
      }
      doc.innerHTML = htmlstring;
      for (let i = 0; i < 10; i++) {
        if (priceData[i].price_change_percentage_24h < 0) {
          document.getElementById(`change${i}`).style.color =
            "rgb(250, 41, 41)";
        } else {
          document.getElementById(`change${i}`).style.color =
            "rgb(53, 243, 120)";
        }
      }
    });
};

ethdata();

// function redirect() {
//   var url = "https://shubham1632.github.io/schange-full-stack/";
//   window.location(url);
// }
