const lampColor = document.querySelectorAll(".lamp");
var shadowcolor = "";
var btn = 0;
var mainTime;
var clearTime;

function pickColor(){ //generates random color
	var x,y,z,z1,color;
	
	x=Math.round(0xffffff * Math.random()).toString(16);
	y=(6-x.length);
	z="000000";
	z1 = z.substring(0,y);
	color= "#" + z1 + x;
  
	return color;
}

function changeGradient(prop){ //takes rand color from pickColor and applies to an element

	var firstColor = pickColor();
	var secondColor = pickColor();
	shadowcolor = firstColor;

	prop = prop.replace(/[\D]0/, firstColor);
	prop = prop.replace(/[^#\d\w]0{1}/g, secondColor);

	return prop;
}

function addShadow(){

	var style = "10px -5px 15px #fff";
	style = style.replace(/#fff/g, shadowcolor);

	return style;
}

function main(){
		
	var string = "linear-gradient(-45deg, 0, 0)";
		
	for(let i = 0; i < lampColor.length; i++){
	  lampColor[i].style.backgroundImage = changeGradient(string);
	  lampColor[i].style.boxShadow = addShadow();
	}	

	mainTime = setTimeout(main, 1995);
	
}


function clear(){
	
	for(let i = 0; i < lampColor.length; i++){
	  	lampColor[i].style.backgroundImage = "linear-gradient(-45deg, #fff, #fff)";
	  	lampColor[i].style.boxShadow =  "none";
	}
	
	clearTime = setTimeout(clear, 1995);
}

function clicked(){
	
	if(btn == 1)
	{
		btn = 0;
		clearTimeout(mainTime);
		clear();
	}
	else if(btn == 0)
	{
		btn = 1;
		clearTimeout(clearTime);
		main();
	}
}	