
document.getElementById('slider-left').onclick=sliderLeft;
var left=0;
function sliderLeft() {
	var polosa = document.getElementById('polosa');
	left = left - 128;
	if(left<-512){
		left=0;
	}
polosa.style.left=left+'px';
} 
var xhttp = new XMLHttpRequest();
xhttp.open("GET","https://api.hebron-academy.com/itacademyhebron/api/academy/get_students_news/",false);
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText)
        console.log(data);
    }
}
xhttp.send(); 