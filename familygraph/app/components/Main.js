var React = require('react');
var Search = require('./Search');

var Main = React.createClass({
	render: function(){
	return(
		<div>
			<nav>
        <div className="nav-wrapper light-blue darken-2">
          <a href="#" className="brand-logo right hide-on-med-and-down" styles="margin-right:10px;">Family Graph Editor</a>
          <Search />
        </div>
      </nav>
		  {this.props.children}    
		</div>
		)
	}
});

module.exports = Main;

/*

          <div className="fixed-action-btn" styles="bottom: 45px; right: 24px;">
            <a className="btn-floating btn-large red">
                <i className="large material-icons">add</i>
            </a>
            <ul>
                <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
                <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
                <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
                <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
            </ul>
          </div>     

*/