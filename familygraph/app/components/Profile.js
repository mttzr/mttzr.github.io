var React = require('react');
var Router = require('react-router');
var Person = require('./Person/Person');
// var helpers = require('../utils/helpers');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({

  mixins: [ReactFireMixin], 

  getInitialState: function(){
    return{
      person:[1,2,3]
    }
  },

  componentDidMount: function(){
    this.ref = new Firebase('https://family-graph.firebaseio.com/');
    console.log(this.props.params.username);
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'person');
  


  //helpers.getUserInfo(this.props.params.username).then(function(data){
    //this.setState({
       // photo: data.photo,
       // detailTwo: data.detailTwo
      //})

    //}.bind(this))

  },

  

  componentWillUnmount: function(){
    this.unbind('person');

  },

  handleAddNote: function(newNote){
    // update firebase, with newNote
    this.ref.child(this.props.params.username).child(this.state.person.length).set(newNote)

  },

  render: function(){
    
		return(
          <Person 
              username={this.props.params.username} 
              person={this.state.person} 
              addNote = {this.handleAddNote} />
		)
	}
});

module.exports = Profile;

/*

            <div className="card-image">
             <img src="images/sample-1.jpg"/>
              <span className="card-title">
                 </span>
*/