/*


Function that takes an input (item clicked) and "side effect" that changes the image of the specified diff

*/

function defaultPic()
{
	var element = document.getElementById("photo");
	element.style.backgroundImage = "url('./images/selfie.png')";
	element.classList.remove("wobble");
	element.classList.add("pulse");

}

function grailPic() 
{
	var element = document.getElementById("photo");
	element.style.backgroundImage = "url('./images/grail.jpg')";
	element.classList.add("animated");
	element.classList.add("wobble");

}

function uberPic()
{
	var element = document.getElementById("photo");
	element.style.backgroundImage = "url('./images/grail.jpg')";
	element.classList.add("animated");
	element.classList.add("wobble");
}

function googlePic()
{
	var element = document.getElementById("photo");
	element.style.backgroundImage = "url('./images/grail.jpg')";
	element.classList.add("animated");
	element.classList.add("wobble");
}

function mskccPic()
{
	var element = document.getElementById("photo");
	element.style.backgroundImage = "url('./images/grail.jpg')";
	element.classList.add("animated");
	element.classList.add("wobble");
}

function catPic()
{
	var element = document.getElementById("photo");
	element.style.backgroundImage = "url('./images/grail.jpg')";
	element.classList.add("animated");
	element.classList.add("wobble");
}