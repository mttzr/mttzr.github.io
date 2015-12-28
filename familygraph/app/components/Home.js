var React = require('react');

var Home = React.createClass({
	render: function(){
		return(
		
		<div className="container"> 
      		<div className="row">
        		<div className="col s12 m12">   
            		<div className="card green">
            			<div className="card-content white-text">
            				<span className="card-title">Welcome</span>
              				<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            			</div>
          			</div>
        		</div>
      		</div>
    	</div>


		)
	}

});

module.exports = Home;