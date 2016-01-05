var Fake = React.createClass({
	propTypes: {
		username: React.propTypes.string.isRequired,
		fake: React.PropTypes.array.isRequired

	},

/*

var UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
  render: function(){
    return (
      <div>
        {this.props.bio.avatar_url && <li className="list-group-item"> <img src={this.props.bio.avatar_url} className="img-rounded img-responsive"/></li>}
        {this.props.bio.name && <li className="list-group-item">Name: {this.props.bio.name}</li>}
        {this.props.bio.login && <li className="list-group-item">Username: {this.props.bio.login}</li>}
        {this.props.bio.email && <li className="list-group-item">Email: {this.props.bio.email}</li>}
        {this.props.bio.location && <li className="list-group-item">Location: {this.props.bio.location}</li>}
        {this.props.bio.company && <li className="list-group-item">Company: {this.props.bio.company}</li>}
        {this.props.bio.followers && <li className="list-group-item">Followers: {this.props.bio.followers}</li>}
        {this.props.bio.following && <li className="list-group-item">Following: {this.props.bio.following}</li>}
        {this.props.bio.following && <li className="list-group-item">Public Repos: {this.props.bio.public_repos}</li>}
        {this.props.bio.blog && <li className="list-group-item">Blog: <a href={this.props.bio.blog}> {this.props.bio.blog}</a></li>}
      </div>
    )
  }
})
	

*/


	render: function(){
		var fake = this.props.fake.map(function(fake,index){



			return (

				<li key={index}>
				</li>

				)

//mapping over fake data. first param callback function map takes is the item itself (the repospitor). The second is the index. return a <li> and. whenever you are mapping over anything you need these keys. you need a key for every item in the array. it's how react optimizes when you take something out of a list. if repo.html_url properly, then render h4 with link to it. and the link will take us to {repo.html_url}. Not every repository has a URL associated, so this is making sure if does. Code looks like this (tricky if statement): (fake.html_url && <h4><a href={fake.html_url}>{fake.name}</h4>).

		});
	return (

		<div>
		<p> FAKE </p>
		</div>

		)

	}


})