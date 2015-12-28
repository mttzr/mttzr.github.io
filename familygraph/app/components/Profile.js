var React = require('react');
var Router = require('react-router');
var Person = require('./Person/Person');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({

  mixins: [ReactFireMixin], 

  getInitialState: function(){
    return{
      person: {
        name: 'Bob',
        firstName: "FIRST",
        lastName: 'LAST',
        id: 'ID',
        profilePic: 'www.google.com',
        edgesTo:[]
      }
    }
  },

  componentDidMount: function(){
    this.ref = new Firebase('https://family-graph.firebaseio.com/');
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'person');
  },
	
  componentWillUnmount: function(){
    this.unbind('person');

  },

  render: function(){
    
		return(
		 <div className="container"> 
      <div className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-image">
              <img src="images/sample-1.jpg"/>
              <span className="card-title">
              {this.props.params.username}
              </span>
            </div>
            <div className="card-content">
              <Person username={this.props.params.username} person={this.state.person} />
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
		)
	}
})

module.exports = Profile;