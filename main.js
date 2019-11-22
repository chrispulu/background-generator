//h3 selector so it can output our desired color
const css = document.querySelector("h3");
//class selector to select color
const color1 = document.querySelector(".color1");
//same thing as above sample
const color2 = document.querySelector(".color2");
//to add or select the background
const body = document.getElementById("gradient");
//declare button to generate random colors
const btn = document.querySelector("a");
//change the color from the input field using random color generator
const css1 = document.querySelector("h4");

//check to see if we did our selector right
//added them together since its only to check
//console.log(css,color1,color2);
//console.log(body);

//to add or select the background so we could change it
//using .style.background to change background
//body.style.background = "color1.value";

//shortcut for body.style.background
//Always remember DRY (Do not Repeat Yourself)
function setGradient() {
	//console.log again to see if it works
	// console.log(color1.value)
	body.style.background = 
	//add linear gradient to our background
	"linear-gradient(to right, " 
	//and set the background value as our color1.value
	//using + to add values we can also literals
	+ color1.value
	//added to add another value
	+ ", " 
	+ color2.value
	//added this to end our css style 
	+ ")";

	//add rgba to html goes straight to our h3
	//using textContent to add strings to a tag
	//instead of innerHTML that changes whats inside
	// css.innerHTML = body.style.background + ";";
	css.textContent = body.style.background + ";";
}

//HTML parsing is basically: taking in HTML code and 
//extracting relevant information like the title of 
//the page, paragraphs in the page, headings in 
//the page, links, bold text etc.
//and parsing stops when it recognize a tag then assign
//it before continuing to the end after that
//it starts to load assets like images

//** This is a lot more extensible compare to adding
//** inline javascript in our html
//add an event to listen when we have an input
//just call the function at the end of listener
//like adding a parameter instead of having it
//below inside a curly bracket
//make it called everytime we trigger input
//color1.addEventListener("input", setGradient);
//we don't need to call the function since
//input gets triggered and the second parameter
//automatically gets run after it is triggered
// color2.addEventListener("input", setGradient);

//add random color generator using hexcode
function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colorGen() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
	css1.textContent = "Left Hexcode Color: " 
	+ color1.value 
	+ "  ------  " 
	+ "Right Hexcode Color: " + color2.value 
	+ ";";
}



// add random color generator
// we use Math.floor and Math.random to generate
// the random numbers
// function colorGen() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   const rgb = "rgb(" + r + "," + g + "," + b + ")"; 
//   const r1 = Math.floor(Math.random() * 256);
//   const g1 = Math.floor(Math.random() * 256);
//   const b1 = Math.floor(Math.random() * 256);
//   const rgb1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
//   body.style.background = "linear-gradient(to right, "  + rgb + ", " + rgb1 + ")";
//   css.textContent = body.style.background + ";";
// }

btn.addEventListener("click", colorGen);

































