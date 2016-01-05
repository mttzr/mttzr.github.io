var React = require('react');

var AddPerson = React.createClass({
propTypes: {
	addPerson: React.PropTypes.func.isRequired
},

// setRef: function(ref){

// 	this.person = ref;

// },

handleSubmit: function(){
		
		var username = $('#add_username').val();

		var firstName = $('#add_firstname').val();

		var lastName = $('#add_lastname').val();

		var id = $('#add_id').val();

		var profilePic = $('#add_profilepic').val();

		var edges = $('#add_edges').val();

		var newPerson = {username, firstName, lastName, id, profilePic, edges};

		console.log(newPerson);

		$('#add_username').val('');
		$('#add_firstname').val('');
		$('#add_lastname').val('');
		$('#add_id').val('');
		$('#add_profilepic').val('');
		$('#add_edges').val('');

		this.props.addPerson(newPerson);


	},

render: function(){

	var divStyle = {

		height: '600px'

	};

	return (

		<div className ='row'>
			<div className = "col s12 m12">
				<div className = "card white" style = {divStyle}>
					<div className = "card-content grey-text text-darken-4">
						<span className = "card-title">Add a Person</span>
						<form id="newPersonForm">
						<div className="input-field col s12">
          					<input placeholder="Username" id="add_username" type="text" className="validate" field="userName" />
         				 	<label for="add_username">Add Username</label>
     				 	</div>
     				 	<div className="input-field col s12">
          					<input placeholder="First Name" id="add_firstname" type="text" className="validate" field="firstName" />
         				 	<label for="add_firstname">Add First Name</label>
     				 	</div>
     				 	<div className="input-field col s12">
          					<input placeholder="Last Name" id="add_lastname" type="text" className="validate" field="lastName" />
         				 	<label for="add_lastName">Add Last Name</label>
     				 	</div>   

          				<div className="input-field col s12">
          					<input placeholder="ID Here" id="add_id" type="text" className="validate" field="id" />
         				 	<label for="add_id">Add ID Number</label>
     				 	</div>
     				 	<div className="input-field col s12">
          					<input placeholder="Profile Picture URL" id="add_profilepic" type="text" className="validate" field="profilePic" />
         				 	<label for="add_profilepic">Add Profile Picture URL</label>
     				 	</div> 
     				 	<div className="input-field col s12">
          					<input placeholder="Edges" id="add_edges" type="text" className="validate" field="edges" />
         				 	<label for="add_edges">Add Edges</label>
     				 	</div> 

          					<div>
          					<a className="waves-effect waves-light btn" onClick={this.handleSubmit}>submit</a>
          					</div>
          					</form>
					</div>
				</div>
			</div>
		</div>
		)

	}

});

module.exports = AddPerson;