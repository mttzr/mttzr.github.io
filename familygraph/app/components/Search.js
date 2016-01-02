var React = require('react');
var Router = require('react-router');

var Search = React.createClass({
	mixins: [Router.History],

	getRef: function(ref){
		this.usernameRef = ref;
	},

	handleSubmit: function(){

		var username = this.usernameRef.value;
		this.usernameRef.value = '';
		this.history.pushState(null, "profile/" + username)

	},

	render: function(){

		return(
			<div className="col-sm-12">
				<form onSubmit={this.handleSubmit}>
					<div className="input-field">
						<input id="search" type="search" placeholder="Search for family member" ref={this.getRef} />
						<label for="search"><i className="material-icons">search</i></label>
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>

			)

	}


});

module.exports = Search;