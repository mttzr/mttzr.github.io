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
        		<a href="index.html"><img class="logo" src="./images/return_to_zehnder.png"></a>\
      			</div>\
      			<div class="six columns nav__links">\
		        <a href="about.html" class = "nav__link hvr-grow">about</a>\
		        <a href="contact.html" class = "nav__link hvr-grow">contact</a>\
      			</div>\
    		</div>\
 	 	</div>';
	}
}

customElements.define('nav-component', NavComponent);
/*
class FooterComponent extends HTMLElement {

	connectedCallback(){
		this.innerHTML = '\
		<div class="footer">\
			<div class="container"> \
    		<div class="row" style="margin-top: 5%">\
      			<div class="offset-by-ten columns">\
        		<a href="index.html">link</a>\
      			</div>\
      		</div>\
    		</div>\
 	 	</div>';
	}
}

customElements.define('footer-component', FooterComponent);
*/
/*
Add new pages later
		        <a href="writing.html" class = "nav__link hvr-grow">writing</a>\
		        <a href="reading.html" class = "nav__link hvr-grow">reading</a>\


*/


/* Random Logo 

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
        		<a href="index.html"><img class="logo" src="./images/Return to Zehnder-'+logo+'.png"></a>\
      			</div>\
      			<div class="six columns nav__links">\
		        <a href="index.html" class = "nav__link hvr-grow">home</a>\
		        <a href="about.html" class = "nav__link hvr-grow">about</a>\
		        <a href="loves.html" class = "nav__link hvr-grow">things i &#128153;<a>\
		        <a href="contact.html" class = "nav__link hvr-grow">contact</a>\
      			</div>\
    		</div>\
 	 	</div>';
	}
}

customElements.define('nav-component', NavComponent);

*/
