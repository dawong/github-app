'use strict';

angular.module('shiptchallengeApp')

.controller('MainCtrl', ['$scope', 'UserService', function($scope, UserService) {
	$scope.user = {};
	$scope.user.followers = [];
	$scope.user.name = "";
	$scope.canLoadMore = false;
	$scope.showError = false;
	var pageCounter = 1;
	var totalFollowers = 0;
	var followersPerPage = 2;
	var currentUser = "";

	$scope.getUserInfo = function() {
		if (!$scope.user.name) {
			//if no name entered
			$scope.showError = true;
			return false;
		} else if ($scope.user.name == currentUser) {
			//if searching for same name again
			return false;
		}

		UserService.getUserInfo($scope.user.name).then(function(data) {
			if (!data) {
				$scope.showError = true;
				return false;
			} else {
				$scope.showError = false;
				$scope.user.followers = [];
				$scope.userData = data;
				currentUser = $scope.userData.login;
				pageCounter = 1;
				totalFollowers = data.followers;

				UserService.getFollowersInfo(currentUser).then(function(followersData) {
					//check if all followers are loaded on first load
					var numFollowers = followersData.length;
					if (numFollowers < followersPerPage || numFollowers == totalFollowers) {
						$scope.canLoadMore = false;
					} else {
						$scope.canLoadMore = true;
						pageCounter++;
					}
					$scope.user.followers = followersData;
				});
			}
		});
	};

	$scope.loadMore = function() {
		UserService.getNextFollowersInfo(currentUser, pageCounter).then(function(nextFollowersData) {
			//check if all followers have been loaded
			var numCurrentFollowers = $scope.user.followers.length;
			var numFollowers = nextFollowersData.length;
			if (numFollowers < followersPerPage || (numCurrentFollowers + numFollowers) == totalFollowers) {
				$scope.canLoadMore = false;
			} else {
				$scope.canLoadMore = true;
				pageCounter++;
			}
			$scope.user.followers = $scope.user.followers.concat(nextFollowersData);
		});
	};
	
}]);
