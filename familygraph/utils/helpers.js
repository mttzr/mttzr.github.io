var axios = require('axios');

function getPhoto(username){
	return axios.get("URL" + username + "URL");
};

function getDetailTwo(username){
	return axios.get("URL" + username + "URL");
}

var helpers = {

	getUserInfo: function(username){

		return axios.all([getPhoto(username), getDetailTwo(username)])
		.then(function(arr){

		return {
			photo: arr[0].data,
			detailTwo: arr[1].data

		}

		});
	}
};

module.exports = helpers;