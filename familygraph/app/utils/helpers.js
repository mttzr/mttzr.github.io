var axios = require('axios');

function getFirstName(username){
	return axios.get("https://family-graph.firebaseio.com/" + username +"/firstName");
}

function getLastName(username){
	return axios.get("https://family-graph.firebaseio.com/" + username + "/lastName");	
}

var helpers = {

	getAllUserInfo: function(username){

		return axios.all([getFirstName(username), getLastName(username)])
		.then(function(arr){

		return {
			person: arr.data
		}

		})
	}
}

module.exports = helpers;