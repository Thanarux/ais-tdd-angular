angular.module('Contactical', [])
	.service('ContactService', function($http){
		var self = this
		this.getContacts = function(){
			$http.get('http://localhost:9001/contacts')
			.then(function(respond){
				self.contacts = respond.data
			},function(respond){

			})
		}

	})