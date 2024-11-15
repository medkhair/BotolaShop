


var clubsUrl = "http://localhost:8030/clubs";


var clubs = document.querySelector(".clubs");
var club = document.querySelector(".club");

async function fetchClubs() {
	const response = await fetch(clubsUrl);
	const data = await response.json();
	console.log(data);
	for (var i = 0; i < data.length; i++) {
		var clubClone = club.cloneNode(true);
		clubs.appendChild(clubClone);
		clubClone.setAttribute("style", "background-image: url(../"+data[i].clubImage+");");
		clubClone.setAttribute("href", `products.html?id=${data[i].id}`);
		if (data[i].division === 1) {
			clubClone.setAttribute("class", "clubCircle club cover premier");
		}else{
			clubClone.setAttribute("class", "clubCircle club cover deuxieme");
		}
		
	}
	var pro = document.querySelectorAll(".premier");
	var deuxieme = document.querySelectorAll(".deuxieme");
	const first = document.getElementById("firstDivision");
	const second = document.getElementById("secondDivision");

	first.addEventListener("click", function(){
		for(var i=0; i<deuxieme.length; i++){
			deuxieme[i].style.display = "none";
		}
		for(var i=0; i<pro.length; i++){
			pro[i].style.display = "block";
		}
	});

	second.addEventListener("click", function(){
		for(var i=0; i<pro.length; i++){
			pro[i].style.display = "none";
		}
		for(var i=0; i<deuxieme.length; i++){
			deuxieme[i].style.display = "block";
		}
	});
	clubs.removeChild(club);
}





fetchClubs();

