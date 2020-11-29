function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

logo = getRandomInt(15)

class NavComponent extends HTMLElement {

	connectedCallback(){
		this.innerHTML = '\
		<div class="container"> \
    		<div class="row" style="margin-top: 5%">\
      			<div class="six columns">\
        		<img class="logo" src="./images/Return to Zehnder-'+logo+'.png">\
      			</div>\
      			<div class="six columns nav__links">\
		        <a href="index.html" class = "nav__link hvr-grow">home</a>\
		        <a href="about.html" class = "nav__link hvr-grow">about</a>\
		        <a href="contact.html" class = "nav__link hvr-grow">contact</a>\
      			</div>\
    		</div>\
 	 	</div>';
	}
}

customElements.define('nav-component', NavComponent);

const article = document.querySelector('#electric-cars');

console.log("hey")

console.log(article)

/*
Add new pages later
		        <a href="writing.html" class = "nav__link hvr-grow">writing</a>\
		        <a href="reading.html" class = "nav__link hvr-grow">reading</a>\


*/