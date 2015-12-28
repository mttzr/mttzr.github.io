var React = require('react');

var PersonData = React.createClass({
	render: function(){
		var fulldata = this.props.person.map(function(data, index){
			return <li key={index}>{data['.value']}</li>
		})
		return(
			<ul>
				{fulldata}
			</ul>

		)

	}

});

module.exports = PersonData;