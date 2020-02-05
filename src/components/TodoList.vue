<template>
  <div>
      <ul>
        <li v-for=" (todoItem, index) in todoItems" class="shadow" v-bind:key="todoItem.item">
            <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
            <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
            <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                <i class="removeBtn fas fa-trash-alt"></i>
            </span>
        </li>
      </ul>
  </div>
</template>

<script>
/* eslint-disable no-console */

export default {
    data : function() {
        return {
            message : '',
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
        removeTodo: function(todoItem, index) {
            console.log(todoItem, index);
            this.todoItems.splice(index, 1); //배열을 삭제후 새로운 배열을 반환
            localStorage.removeItem(todoItem);
        },
        toggleComplete : function (todoItem, index) {
            console.log(todoItem, index);
            todoItem.completed = !todoItem.completed ;

            //localStorage remove, new add -> removeItem, setItem
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }
    }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>