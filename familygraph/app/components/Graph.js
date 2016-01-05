var React = require('react');
var Router = require('react-router');


var graphStyle = {

		width: '600px',
        height: '400px',
        border: '1px solid lightgray'

	};

var Graph = React.createClass({

componentDidMount: function() {

	var ref = new Firebase('https://family-graph.firebaseio.com/');
	var fdata = {};
	ref.once("value", function(snapshot){

		var fdata = snapshot.val();

		return fdata;

	});

	console.log(fdata);



	var nodesNewResult = [];


	var nodesNew = function(fdata){

		for (var familyMember in fdata){
			nodesNewResult.push({id:fdata.familyMember.id,label:fdata.familyMember.username});
		};

		return nodesNewResult;
	};
	
	//console.log(nodesNew);

	//console.log(nodesNewResult);
/*
	create a variable that is an array of objects, id to edges for each object in data
	for each object in data
	for each edge in edges
	add to variable userid, edge	

*/

	// create an array with nodes
	var nodes = new vis.DataSet([
	    {id: 1, label: 'Matt'},
	    {id: 2, label: 'Trevor'},
	    {id: 3, label: 'Erica'},
	    {id: 4, label: 'Shelly'},
	    {id: 5, label: 'Paul'},
	    {id: 6, label: 'Nancy'},
	    {id: 7, label: 'John'},
	    {id: 8, label: 'Chuck'},
	    {id: 9, label: 'Toto'},
	    {id: 10, label: 'Sandra'},
	    {id: 11, label: 'Staci'}
	    ]);

// // create an array with edges
	var edges = new vis.DataSet([
	    {from: 1, to: 4},
	    {from: 2, to: 4},
	    {from: 3, to: 4},
	    {from: 1, to: 5},
	    {from: 2, to: 5},
	    {from: 3, to: 5},
	    {from: 5, to: 6},
	    {from: 5, to: 7},
	    {from: 4, to: 8},
	    {from: 4, to: 9},
	    {from: 10, to: 8},
	    {from: 10, to: 9},
	    {from: 11, to: 8},
	    {from: 11, to: 9}
	]);

// // create a network
	var container = document.getElementById('mynetwork');

	// // provide the data in the vis format
	var data = {
	    nodes: nodes,
	    edges: edges
	};
	var options = {};

	// // initialize your network!
	var network = new vis.Network(container, data, options);

},

render: function(){


	return(
	<div>
		<h1>test</h1>
		<h1>Graph</h1>
		<div style={graphStyle} id="mynetwork">
		</div>
	</div>

	)
}

});

module.exports = Graph;
