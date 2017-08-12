'use strict';

angular.module('shiptchallengeApp')

.service('UserService', ['$http', function($http) {
	
	this.getUserInfo = function(username) {
		var uri = "https://api.github.com/users/" + username;

		return $http.get(uri).then(
			function(response) {
				return response.data;
			},
			function(error) {
				console.log(error.status + ": " + error.statusText);
			}
		);
	};

	this.getFollowersInfo = function(username) {
		var uri = "https://api.github.com/users/" + username + "/followers?per_page=2";

		return $http.get(uri).then(
			function(response) {
				return response.data;
			},
			function(error) {
				console.log(error.status + ": " + error.statusText);
			}
		);
	};

	this.getNextFollowersInfo = function(username, page) {
		var uri = "https://api.github.com/users/" + username + "/followers?per_page=2&page=" + page;

		return $http.get(uri).then(
			function(response) {
				return response.data;
			},
			function(error) {
				console.log(error.status + ": " + error.statusText);
			}
		);
	};

}]);