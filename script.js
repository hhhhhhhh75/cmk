function slide(n, s) {
	var slides = ["images/dog.jpeg", "images/dog2.jpg", "images/dog3.jpg", "images/dog4.jpg", "images/dog5.jpg"];
	var slidesid = ["slide1", "slide2", "slide3", "slide4", "slide5"];
	var current = 0;
	
	
	for (let i = 0; i < slides.length; i++){
		if (document.getElementById('slide'+i).style.display === "flex"){
			current = i;
		}
	}
	
	if (n >= 99){

		if (n === 101){
			if (current === slides.length-1){
				current = 0;
				document.getElementById('slide'+current).style.display = "flex";
				for (let i = 0; i < slides.length; i++){
				if (i === current){
					document.getElementById(current).style.backgroundColor = "white";
					document.getElementById(current).style.width = "12px";
					document.getElementById(current).style.height = "12px";
					
				}
				else {
					document.getElementById(i).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
					document.getElementById(i).style.width = "10px";
					document.getElementById(i).style.height = "10px";
					document.getElementById('slide'+i).style.display = "none";
				}
			}
			}
			else {
			current = current + 1;
			document.getElementById('slide'+current).style.display = "flex";
			for (let i = 0; i < slides.length; i++){
				if (i === current){
					document.getElementById(current).style.backgroundColor = "white";
					document.getElementById(current).style.width = "12px";
					document.getElementById(current).style.height = "12px";
					
				}
				else {
					document.getElementById(i).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
					document.getElementById(i).style.width = "10px";
					document.getElementById(i).style.height = "10px";
					document.getElementById('slide'+i).style.display = "none";
				}
			}
			}
		}
		else {
			if (current === 0){
				current = slidesid.length - 1;
			document.getElementById('slide'+current).style.display = "flex";
			for (let i = 0; i < slides.length; i++){
				if (i === current){
					document.getElementById(current).style.backgroundColor = "white";
					document.getElementById(current).style.width = "12px";
					document.getElementById(current).style.height = "12px";
					
				}
				else {
					document.getElementById(i).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
					document.getElementById(i).style.width = "10px";
					document.getElementById(i).style.height = "10px";
					document.getElementById('slide'+i).style.display = "none";
				}
			}
			}
			
			else {
			current = current - 1;
			document.getElementById('slide'+current).style.display = "flex";
			for (let i = 0; i < slides.length; i++){
				if (i === current){
					document.getElementById(current).style.backgroundColor = "white";
					document.getElementById(current).style.width = "12px";
					document.getElementById(current).style.height = "12px";
					
				}
				else {
					document.getElementById(i).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
					document.getElementById(i).style.width = "10px";
					document.getElementById(i).style.height = "10px";
					document.getElementById('slide'+i).style.display = "none";
				}
			}
			}
		}
	}
	else {
	current = n;
	document.getElementById('slide'+n).style.display = "flex";
			for (let i = 0; i < slides.length; i++){
				if (i === current){
					document.getElementById(current).style.backgroundColor = "white";
					document.getElementById(current).style.width = "12px";
					document.getElementById(current).style.height = "12px";
					
				}
				else {
					document.getElementById(i).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
					document.getElementById(i).style.width = "10px";
					document.getElementById(i).style.height = "10px";
					document.getElementById('slide'+i).style.display = "none";
				}
			}
	}
}



function answer(s) {
	const element = document.getElementById(s.id);
	const ans = element.querySelectorAll("div");
	const plus = element.querySelectorAll("span");
		
	if (ans[1].style.display != "flex") {
		ans[1].style.display = "flex";
		plus[0].style.transform = "rotate(45deg)";
	}
	
	else{
	
		ans[1].style.display = "none";
		plus[0].style.transform = "rotate(0deg)";
	
	}
}

function toggleMenuOn(){
	document.getElementById("side-menu").style.display="flex";

	document.getElementById("side-menu").style.marginRight="0px";
}

function toggleMenuOff(){
	document.getElementById("side-menu").style.display="flex";
	document.getElementById("side-menu").style.marginRight="-100%";
	
	const drop2 = document.getElementById("dl2");
	const d = document.getElementById("d2")
	dropArrow2 = d.querySelectorAll("span");
	
	const drop1 = document.getElementById("dl1");
	const e = document.getElementById("d1")
	dropArrow1 = e.querySelectorAll("span");
	
	
	drop2.style.display = "none";
    dropArrow2[0].style.transform = "rotate(0deg)";
		
	drop1.style.display = "none";	
	dropArrow1[0].style.transform = "rotate(0deg)";
}

function toggleDropdown(s){
	const element = document.getElementById(s.id);
	const dropdown = element.querySelectorAll("div");
	const dropdownArrow = element.querySelectorAll("span");
	
	const drop2 = document.getElementById("dl2");
	const d = document.getElementById("d2")
	dropArrow2 = d.querySelectorAll("span");
	
	const drop1 = document.getElementById("dl1");
	const e = document.getElementById("d1")
	dropArrow1 = e.querySelectorAll("span");
	
	if(dropdown[0].id === "dl1"){
		drop2.style.display = "none";
	    dropArrow2[0].style.transform = "rotate(0deg)";
	}
	else {
		drop1.style.display = "none";	
		dropArrow1[0].style.transform = "rotate(0deg)";
	}
	
	if (dropdown[0].style.display != "flex") {
		dropdown[0].style.display = "flex"
		dropdownArrow[0].style.transform = "rotate(180deg)";
	}
	
	else{	
		dropdown[0].style.display = "none";
		dropdownArrow[0].style.transform = "rotate(0deg)";
	}
	
}

function testSlideshow(s, num){
	const element = document.getElementById(s);
	const imgs = element.querySelectorAll("img");
	const slideshow = document.getElementById(s);
	var current = "";
	var change = parseInt(num);
	
	if (num === 1 && current === imgs[imgs.length-1]){
		num = 0;
	}
	
	for (let i = 0; i < imgs.length; i++){
		if(imgs[i].style.display === "flex"){
			alert(imgs[i + change].src);
			alert(imgs[i + change].style.display);
			imgs[i + change].style.display = "flex";
			imgs[i].style.display = "none";
			
			
		}
		else {
			imgs[i].style.display = "none";
		}
	}
	
		
	
	
}