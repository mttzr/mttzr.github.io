var React = require('react');
var Graph = require('./Graph');

var Home = React.createClass({

editURLParam: function(){
  var href = window.location.href;
  var regex = new RegExp("[&\\?]");
  var results = window.location.href = href.replace(regex, "edit")
  console.log(results);

},


	render: function(){
		return(
		
		<div className="container"> 
      <Graph />
      
      <a className="waves-effect waves-light btn" onClick={this.editURLParam}>Edit Graph</a>
    </div>
		)
	}

});

module.exports = Home;