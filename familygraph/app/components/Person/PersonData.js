var React = require('react');

var PersonData = React.createClass({
	render: function(){
		var person = this.props.person.map(function(data, index){
			return <li key={index}>{data['.value']}</li>
		})
		return(
			<ul>
			{person}
			</ul>

			)

		

	}


});

module.exports = PersonData;
