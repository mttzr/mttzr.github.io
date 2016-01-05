var React = require('react');
var Firebase = require('Firebase');

var PersonData = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    person: React.PropTypes.object.isRequired
  },
  render: function(){
//  	console.log("hey: " + this.props.person);
    return (
      <div>
        {this.props.person.firstName && <li>First Name: {this.props.person.firstName}</li>}
        {this.props.person.lastName && <li>Last Name: {this.props.person.lastName}</li>}
        {this.props.person.profilePic && <li> <img src={this.props.person.profilePic}/></li>}
        {this.props.person.id && <li>ID: {this.props.person.id}</li>}
        {this.props.person.edgesTo && <li>Edges: {this.props.person.edgesTo}</li>}
      </div>
    )
  }
})
module.exports = PersonData;

/*
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
*/

//{this.props.person.avatar_url && <li className="list-group-item"> <img src={this.props.bio.avatar_url} className="img-rounded img-responsive"/></li>}
