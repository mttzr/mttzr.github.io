var React = require('react');
var PersonData = require('./PersonData');
var AddNote = require('./AddNote');


var Person = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		person: React.PropTypes.array.isRequired,
		addNote: React.PropTypes.func.isRequired,
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
		<AddNote username={this.props.username} addNote={this.props.addNote} />
	</div>	
		)
	}

});

module.exports = Person;

