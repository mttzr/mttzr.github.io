function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

logo = getRandomInt(15)

class FavIconComponent extends HTMLElement {

	connectedCallback(){
		this.innerHTML = '\
		<link rel="apple-touch-icon" sizes="180x180" href="images/favicon_io/apple-touch-icon.png">\
		<link rel="icon" type="image/png" sizes="32x32" href="images/favicon_io/favicon-32x32.png">\
		<link rel="icon" type="image/png" sizes="16x16" href="images/favicon_io/favicon-16x16.png">\
		<link rel="manifest" href="images/favicon_io/site.webmanifest">';
	}
}

customElements.define('favicon-component', FavIconComponent);

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


/*
Add new pages later
		        <a href="writing.html" class = "nav__link hvr-grow">writing</a>\
		        <a href="reading.html" class = "nav__link hvr-grow">reading</a>\


*/