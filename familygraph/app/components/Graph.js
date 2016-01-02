var React = require('react');
var Router = require('react-router');


var Graph = React.createClass({

render: function(){

var graphStyle = {

		width: '600px',
        height: '400px',
        border: '1px solid lightgray'

	};

	return(
	<div>
		<h1>Graph</h1>
		<div style={graphStyle} id="mynetwork">
		</div>
	</div>

	)
}

});

module.exports = Graph;