var React = require('react');
var PersonData = require('./PersonData');
var AddPerson = require('./AddPerson');


var Person = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		person: React.PropTypes.object.isRequired,
	},
	render: function(){	
	return(
	<div className = "container">	
		<div className = "row">
			<div className = "col s12 m12">
				<div className = "card white">
					<div className = "card-content grey-text text-darken-4">
					<span className="card-title">Data for {this.props.username}</span>
					<PersonData person={this.props.person} />
					</div>
				</div>
			</div>
		</div>
		<AddPerson addPerson ={this.props.addPerson} />

	</div>	
		)
	}

});

module.exports = Person;

