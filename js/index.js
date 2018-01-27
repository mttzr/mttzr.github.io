
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


function nextBp()
{

}

function init() {

	d3.csv("./SNPs.txt", function(data){
		console.log(data);
	});

	data.forEach(function(d)
	{
		d.
	}

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

	var zero = document.getElementById(elArray[0]);
	var one = document.getElementById(elArray[1]);
	var two = document.getElementById(elArray[2]);
	var three = document.getElementById(elArray[3]);
	var four = document.getElementById(elArray[4]);
	var five = document.getElementById(elArray[5]);
	var six = document.getElementById(elArray[6]);
	var seven = document.getElementById(elArray[7]);

	seven.innerHTML = six.innerHTML;
	six.innerHTML = five.innerHTML;
	five.innerHTML = four.innerHTML;
	four.innerHTML = three.innerHTML;
	three.innerHTML = two.innerHTML;
	two.innerHTML = one.innerHTML;
	one.innerHTML = zero.innerHTML;
	while(zero.firstChild)
	{
		zero.removeChild(zero.firstChild);
	}
	var newSpan = randomBp();
	zero.appendChild(newSpan);
	var newSpan = randomBp();
	zero.appendChild(newSpan);

	var zero = document.getElementById(elArray[0]);
	return zero;
}

function scroll()
{
	init();
	var scrollRate = 500;
	var a = setInterval(moveDown,scrollRate);
	setTimeout(function() {
		console.log('changing time');
		scrollRate = 4000;
		clearInterval(a);
		var b = setInterval(moveDown, 500);
	}, 2000); 


}