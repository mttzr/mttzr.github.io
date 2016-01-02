var React = require('react');

var AddNote = React.createClass({
propTypes: {
	username: React.PropTypes.string.isRequired,
	addNote: React.PropTypes.func.isRequired
},

setRef: function(ref){

		this.note = ref;

	},

handleSubmit: function(){

		var newNote = this.note.value;
		this.note.value = '';
		this.props.addNote(newNote)

	},
render: function(){

	var divStyle = {

		height: '200px'

	};

	return (

		<div className ='row'>
			<div className = "col s12 m12">
				<div className = "card white" style = {divStyle}>
					<div className = "card-content grey-text text-darken-4">
						<span className = "card-title">Add a note</span>
								<div className="input-field col s12">
          						<input placeholder="Note here" id="add_note" type="text" className="validate" ref={this.setRef} />
         				 		<label for="add_note">Add Note</label>
          						<a className="waves-effect waves-light btn" onClick={this.handleSubmit}>submit</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)

	}

});

module.exports = AddNote;