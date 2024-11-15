var productsUrl = "http://localhost:8030/products";

var products = document.querySelectorAll(".products")[0];
var product = document.querySelector(".product");
console.log(product);


function getProductsIdByUrl() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"));
}

var pId = getProductsIdByUrl();

console.log(pId);


async function fetchProductsById() {
	const response = await fetch(productsUrl);
	const data = await response.json();
	console.log(data);
	var j = 0;
	for (var i = 0; i < data.length; i++) {
		if (data[i].productClub.id ==  pId) {
			console.log(data[i]);
			var productClone = product.cloneNode(true);
			products.appendChild(productClone);

			var productImg = document.querySelectorAll(".jerseyImg")[j+1];
			var productTitle = document.querySelectorAll(".title")[j+1];
			var price = document.querySelectorAll(".price")[j+1];
			console.log(productImg);
			productClone.setAttribute("href", `product.html?id=${data[i].id}`);
			productImg.setAttribute("style", "background-image: url('../"+data[i].image+"');");
			productTitle.innerHTML = data[i].productName;
			price.innerHTML = data[i].price + " MAD";
			j++;
		}else{
			continue;
		}
		
	}
	products.removeChild(product);
} 


async function fetchProducts() {
	const response = await fetch(productsUrl);
	const data = await response.json();
	console.log(data);
	for (var i = 0; i < data.length; i++) {
		var productClone = product.cloneNode(true);
		products.appendChild(productClone);

		var productImg = document.querySelectorAll(".jerseyImg")[i+1];
		var productTitle = document.querySelectorAll(".title")[i+1];
		var price = document.querySelectorAll(".price")[i+1];

		productClone.setAttribute("href", `product.html?id=${data[i].id}`);
		productImg.setAttribute("style", "background-image: url(../"+data[i].image+");");
		productTitle.innerHTML = data[i].productName;
		price.innerHTML = data[i].price + " MAD";
	}
	products.removeChild(product);
} 


if (isNaN(pId)) {
  fetchProducts();
}else{
	fetchProductsById();
}


