<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearItems="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  data : function () {
    return {
      todoItems : []
    }
  },
  created: function() { //vue instance life cycle
    if (localStorage.length > 0) {
        for (let index = 0; index < localStorage.length; index++) {
            if (localStorage.key(index) !== 'loglevel:webpack-dev-server') {
                //this.todoItems.push(localStorage.key(index));

                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
            }
        }
    }
  },
  methods : {
    addOneItem : function (todoItem) {
      if (todoItem !== '') {
          var obj = {
              completed: false,
              item: todoItem
          };

          localStorage.setItem(todoItem, JSON.stringify(obj));
          this.todoItems.push(obj);
          //this.clearInput();
      }
    },
    removeOneItem : function (todoItem, index) {
      this.todoItems.splice(index, 1); //배열을 삭제후 새로운 배열을 반환
      localStorage.removeItem(todoItem.item);
    },
    toggleOneItem : function (todoItem, index) {
      //todoItem.completed = !todoItem.completed ;
      this.todoItems[index].completed = !this.todoItems[index].completed;

      //localStorage remove, new add -> removeItem, setItem
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems : function () {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  components : {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }
}
</script>

<style> 
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 300px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
