<template>
  <div class="inputBox">
      <input type="text" v-model="newTodoItem"  v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn" aria-hidden="true"></i>
      </span>
      <Modal v-if="showModal" @close="showModal = false">
        <!--
          you can use custom content here to overwrite
          default content
        -->
        <h3 slot="header">{{ header }}
          <i class="closeModalBtn fa fa-times" 
            aria-hidden="true" 
            @click="showModal = false">
          </i>
        </h3>
        <h3 slot="body">{{ body }}</h3>
      </Modal>
  </div>
</template>

<script>
/* eslint-disable no-console */
import Modal from './common/Modal.vue';

export default {
    data () {
        return {
            message : '',
            newTodoItem : '',
            showModal : false,
            header : '',
            body : '',
            footer : 'copyright'
        }
    },
    methods : {
        addTodo () {
            if (this.newTodoItem !== '') {
              // this.$emit('addItem', this.newTodoItem);
              this.$store.commit('addOneItem', this.newTodoItem);
              this.clearInput();
            } else {
              this.header = '정보확인';
              this.body = '할일을 입력하세요.';
              this.showModal = !this.showModal;
            }
            
        },
        clearInput () {
            this.newTodoItem = '';
        }
    },
    components : {
      Modal
    }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>