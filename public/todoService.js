angular.module('scotchTodo').service('todoObjs',function($q,$http) {
	

	 this.GetAllTodos = function () {
	 		var deferred = $q.defer();
            $http.get('/api/todos')
            	.success(function(data) {
                    // The promise is resolved once the HTTP call is successful.
                    deferred.resolve(data);
                })
                .error(function(reason) {
                    // The promise is rejected if there is an error with the HTTP call.
                    deferred.reject(reason);
                });

            return deferred.promise;

     },
     this.CreateTodo = function(formData){
     		 var deferred = $q.defer();
     	    $http.post('/api/todos', formData)
            	.success(function(data) {
                    // The promise is resolved once the HTTP call is successful.
                    deferred.resolve(data);
                })
                .error(function(reason) {
                    // The promise is rejected if there is an error with the HTTP call.
                    deferred.reject(reason);
                });

            return deferred.promise;

     },
     this.DeleteTodo = function(id){
     		 var deferred = $q.defer();
     	    $http.delete('/api/todos/' + id)
            	.success(function(data) {
                    // The promise is resolved once the HTTP call is successful.
                    deferred.resolve(data);
                })
                .error(function(reason) {
                    // The promise is rejected if there is an error with the HTTP call.
                    deferred.reject(reason);
                });

            return deferred.promise;

     } 
    
});
