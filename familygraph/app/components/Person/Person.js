var React = require('react');
//var PersonData = require('./PersonData');

/*
var Person = React.createClass({
	render: function(){
		console.log('Person Data:', this.props.person)
		return(
			<div> 
			<h3>Person Data</h3>
			Notes for ID: {this.props.username}
			<PersonData person={this.props.person} />
			<br />
			</div>
		)
	}
})

*/


var Person = React.createClass({
	render: function(){
		console.log("Person Details:", this.props.person)
	
	return(
		<div>
		<h3>Person Data</h3>
		Username: {this.props.username}
		<br />
		First Name: {this.props.person.firstname}
		</div>
		)
	}


});

module.exports = Person;