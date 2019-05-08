<template>
  <div>
    <div class="color-picker">
      <input v-model="color" type="color"></input>
    </div>
    <div class="todo-list-component">
      <div class="add-todo-container">
        <v-text-field :label="setTodoListLabel" v-model="todo" v-on:keyup.enter="handleAddTodo" box hide-details />
      </div>
      <div v-if="getTodos.length > 0" class="todo-list-container">
        <transition-group name="move" class="list" tag="ul">
          <li v-for="(todo, index) in getTodos" :key="todo.id" :style="{ background: index % 2 === 1 ? color : '#ffff'}">
            <v-layout align-start fill-height>
              <v-flex class="list-text" xs10>
              {{ `${index+1}.` }} {{ todo.text }}
              </v-flex>
              <v-flex xs2>
                <v-btn @click="handleRemoveTodo(index)" icon small>
                  <v-icon color="red">
                    delete
                  </v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import uuidv4 from 'uuid/v4';

export default {
  name: 'TodoList',
  data() {
    return {
      color: '#d3d3d3'
      todos: []
      todo: '',
    }
  },
  computed: {
    getTodos() {
      return this.todos;
    },
    // When the label 'changed' i.e. a todo is added to an empty todo list, update the label
    setTodoListLabel() {
      return this.getTodos.length === 0 ? "Todo" : `Todos (${this.getTodos.length})`;
    }
  },
  methods: {
    handleAddTodo() {
      if (this.todo) {
        // Add the Todo
        this.todos = [{ text: this.todo, id: uuidv4() }, ...this.todos];
        // Reset the text for adding a todo
        this.todo = '';
      }
    },
    handleRemoveTodo(index) {
      this.todos = this.todos.filter((todo, i) => {
        if(index !== i) {
          return todo;
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.todo-list-component
  position: absolute
  top: 10vh
  left: 30vw
  height: auto
  max-height: 59.8vh
  width: 32vw
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)
  .todo-list-container
    position: absolute
    height: auto
    max-height: 59.8vh
    width: 100%
    overflow-y: hidden
    z-index: 2
    .list
      width: 100%
      margin: 0
      list-style: none
      position: relative
      height: auto
      max-height: 59.8vh
      overflow-y: auto
      overflow-x: hidden
      padding-left: 0
      z-index: 1
      border-right:  1px solid rgba(0, 0, 0, 0.1)
      border-left:  1px solid rgba(0, 0, 0, 0.1)
      border-bottom: 1px solid rgba(0, 0, 0, 0.1)
      border-bottom-left-radius: 25px
      /* Scroll Bar Styles */
      &::-webkit-scrollbar
        width: 2px
      &::-webkit-scrollbar-track
        background: rgba(0, 0, 0, .1)
      &::-webkit-scrollbar-thumb
        background: rgba(0,0,0,.8)
      /* Padding specifically for the list text */
      .list-text
        padding: 1em
      li
        position: relative
        z-index: 1
        height: 3.5vh
        min-height: 50px
        width: auto
        &:nth-child(2n)
          background: #d3d3d3

/* Todo List Animations */
.move-enter-active
  opacity: 0.2
  transform: translate(-40px, 0)
  transition: ease-in
  transition-duration: 100ms
  transition-delay: 0ms
.move-leave-active
  opacity: 0.01
  transform: translate(40px, 0)
  transition: all 300ms ease-in
</style>
