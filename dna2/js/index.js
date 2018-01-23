
function createA()
{
	var newSpan = document.createElement("span");
	newSpan.setAttribute("id", "A");
	var aContent = document.createTextNode("A");
	newSpan.appendChild(aContent);
	return newSpan;
}

function createT()
{
	var newSpan = document.createElement("span");
	newSpan.setAttribute("id", "T");
	var aContent = document.createTextNode("T");
	newSpan.appendChild(aContent);
	return newSpan;
}

function createC()
{
	var newSpan = document.createElement("span");
	newSpan.setAttribute("id", "C");
	var aContent = document.createTextNode("C");
	newSpan.appendChild(aContent);
	return newSpan;
}

function createG()
{
	var newSpan = document.createElement("span");
	newSpan.setAttribute("id", "G");
	var aContent = document.createTextNode("G");
	newSpan.appendChild(aContent);
	return newSpan;
}


function randomBp() 
{

	var randomNum = Math.floor(Math.random() * 4) + 1;

	if (randomNum == 1)
		{
			newSpan = createA();
		}

	else if (randomNum == 2)
		{
			newSpan = createT();
		}

	else if (randomNum == 3)
		{
			newSpan = createC();
		}

	else if (randomNum == 4) 
		{
			newSpan = createG();
		}
	return newSpan;
}


function init() {

	var elArray = ['bp1','bp2','bp3','bp4','bp5','bp6','bp7','bp8'];

	var itr = 0;

	while (itr < 8)
	{
		var current = document.getElementById(elArray[itr]);
		var newSpan = randomBp();
		current.appendChild(newSpan);
		var newSpan = randomBp();
		current.appendChild(newSpan);
		itr=itr+1;	
	}
}


function refresh() {

	var elArray = ['bp1','bp2','bp3','bp4','bp5','bp6','bp7','bp8'];

	var itr = 0;

	while (itr < 8)
	{
		var current = document.getElementById(elArray[itr]);
		var child = current.childNodes[0];
		current.removeChild(child);
		var child = current.childNodes[0];
		current.removeChild(child);
		var newSpan = randomBp();
		current.appendChild(newSpan);
		var newSpan = randomBp();
		current.appendChild(newSpan);
		itr=itr+1;	
	}
}

function moveDown()
{
	var elArray = ['bp1','bp2','bp3','bp4','bp5','bp6','bp7','bp8'];
	var itr = 7;

	while (itr > 1)
	{
		var current = document.getElementById(elArray[itr]);
		var currentChild1 = current.childNodes[0];
		current.removeChild(currentChild1);
		var currentChild2 = current.childNodes[0];
		current.removeChild(currentChild2);
		var previous = document.getElementById(elArray[itr-1]);
		console.log(previous);
		var previousChild1 = previous.childNodes[0];
		previous.removeChild(previousChild1);
		var previousChild2 = previous.childNodes[0];
		previous.removeChild(previousChild2);

		while (current.firstChild)
		{
			current.removeChild(current.firstChild);
		}

		current.appendChild(previousChild1);
		current.appendChild(previousChild2)
		itr-1;
	}
	if (itr == 0)
	{
		var current = document.getElementById(elArray[itr]);
		var newSpan = randomBp();
		current.appendChild(newSpan);
		var newSpan = randomBp();
		current.appendChild(newSpan);	
	}

}

function scroll()
{
	init();
	setInterval(refresh,500);

}