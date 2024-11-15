

var productsUrl = "http://localhost:8030/products";
var clubsUrl = "http://localhost:8030/clubs";

var clubs = document.querySelectorAll(".myList")[0];
var club = document.querySelector(".club");

var products = document.querySelectorAll(".myList")[1];
var product = document.querySelector(".clubJersey");
console.log(product);


async function fetchProducts() {
	const response = await fetch(productsUrl);
	const data = await response.json();
	console.log(data);
	for (var i = 0; i < 4; i++) {
		var productClone = product.cloneNode(true);
		products.appendChild(productClone);

		var productImg = document.querySelectorAll(".jerseyImg")[i+1];
		var productTitle = document.querySelectorAll(".title")[i+1];
		var price = document.querySelectorAll(".price")[i+1];

		productClone.setAttribute("href", `pages/product.html?id=${data[i].id}`);
		productImg.setAttribute("style", "background-image: url("+data[i].image+");");
		productTitle.innerHTML = data[i].productName;
		price.innerHTML = data[i].price + " MAD";
	}
	products.removeChild(product);
} 

async function fetchClubs() {
	const response = await fetch(clubsUrl);
	const data = await response.json();
	console.log(data);
	var more = document.getElementById("more");
	clubs.removeChild(more);
	for (var i = 0; i <= 3; i++) {
		var clubClone = club.cloneNode(true);
		clubs.appendChild(clubClone);
		clubClone.setAttribute("style", "background-image: url("+data[i].clubImage+");");
		clubClone.setAttribute("href", `pages/products.html?id=${data[i].id}`);
	}
	club.setAttribute("style","display: none;");
	clubs.appendChild(more);
}

fetchProducts();
fetchClubs();