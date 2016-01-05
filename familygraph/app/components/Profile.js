var React = require('react');
var Router = require('react-router');
var Person = require('./Person/Person');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({

  mixins: [ReactFireMixin], 

  getInitialState: function(){
    return{
      person:{}
    }
  },

  componentDidMount: function(){
    this.ref = new Firebase('https://family-graph.firebaseio.com/');
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsObject(childRef, 'person');

  },

  componentWillUnmount: function(){
    this.unbind('person');
  },

  handleAddPerson: function(newPerson){
    var ref = new Firebase('https://family-graph.firebaseio.com/');
    // ref.push(newPerson);
    var childRef = this.ref.child(this.props.params.username);
    childRef.set(newPerson)

  },

  render: function(){
		return(
          <Person 
              username={this.props.params.username} 
              person={this.state.person} 
              addPerson = {this.handleAddPerson} />

		)
	}
})

module.exports = Profile;

/*

            <div className="card-image">
             <img src="images/sample-1.jpg"/>
              <span className="card-title">
                 </span>
*/