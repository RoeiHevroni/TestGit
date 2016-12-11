scotchTodo.component('todoList', {
  
   controller: function (todoObjs) {
    var cn = this;
    this.$onInit = function() {
         todoObjs.GetAllTodos().then(function(data){
          cn.allList = data;
      })  
    }

   },
  templateUrl : '/allToDo.html'
   
});
  