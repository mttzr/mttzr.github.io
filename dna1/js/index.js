
function scroll()
{
	var outerElement = document.querySelector(".outer");
	var height = outerElement.offsetHeight;

	var innerElement = document.querySelector(".inner");
	var top = parseInt(getComputedStyle(innerElement)["top"]);

	console.log(innerElement);
	console.log(top);
	console.log(height);
	console.log(top < height);

	/*innerElement.addEventListener("animationend", scroll(), false)*/

	if(top < height)
	{
		innerElement.animate([
		{ transform: 'translateY(0px)'},
		{ transform: 'translateY(300px)' }
		], {
			duration: 5000
		});
	}
	else
	{
		console.log("reset");
		innerElement.style.top = -height;
		scroll();
	}

}