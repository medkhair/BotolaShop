function getProductIdByUrl() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"));
}

const ide = getProductIdByUrl();
console.log(ide);
const productsUrl = "http://localhost:8030/products";

async function fetchProduct(id) {
  const response = await fetch(productsUrl+"/"+id);
  const data = await response.json();
  console.log(data);
  var jerseyImg = document.querySelector(".jerseyImg");
  var productTilte = document.querySelector(".productTilte");
  var productDesription = document.querySelector(".productDesription");
  var productPrice = document.querySelector("#aPrice");
  var playerOptions = document.querySelector(".playerOptions");
  var playerOption = document.querySelector(".playerOption");
  

  jerseyImg.setAttribute("style", "background-image: url(../"+data.image+");");
  productTilte.innerHTML = data.productName;
  productDesription.innerHTML = data.shortDescription;
  productPrice.innerHTML = data.price + "MAD";
  while (playerOptions.firstChild) {
    playerOptions.removeChild(playerOptions.lastChild);
  }
  if (data.productPlayers.length) {
    for (var i = 0; i < data.productPlayers.length; i++) {
      var newPlayer = playerOption.cloneNode(true);
      newPlayer.innerHTML = data.productPlayers[i].playerName;
      newPlayer.setAttribute("value", data.productPlayers[i].id);
      playerOptions.appendChild(newPlayer);
    }
  }
}

fetchProduct(ide);