var scotchTodo = angular.module('scotchTodo',['ngRoute']);

scotchTodo.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '/tempTemplate.html',
            controller  : 'MainController as main',
            resolve: {
                myList:function(todoObjs) {
                    return todoObjs.GetAllTodos();
                }
            }
        })
        .when('/Todos', {
            /*templateUrl : '/allToDo.html',
            controller  : 'MainController as main',
            resolve: {
                myList:function(todoObjs) {
                    return todoObjs.GetAllTodos();
                } 
            }*/
            template: '<todo-list></todo-list>'

        })

        // route for the about page
});


 

function MainController(todoObjs,myList) {
    //var main = this;
    //main.formData = {};
    var vm = this;
    vm.text34 = 'SomeText';
    vm.todos = myList;
         
    
    
    // when submitting the add form, send the text to the node API
    vm.createTodo = function() {
        todoObjs.CreateTodo(vm.formData).then(function(data){
            vm.formData = {}; // clear the form so our user is ready to enter another
            vm.todos = data;
            console.log(data); 
        }),
        function(reason) {
            //$scope.error = 'There has been an error: ' + reason;
        }   
    };


    // delete a todo after checking it
    vm.deleteTodo = function(id) {
       todoObjs.DeleteTodo(id).then(function(data){
            vm.todos = data;
            console.log(data);
       }),
        function(reason) {
            //$scope.error = 'There has been an error: ' + reason;
    
        }
    };

}
 
scotchTodo.controller("MainController", ["todoObjs","myList",MainController]);

