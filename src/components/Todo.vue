<template>
  <div class="hello">
    <h1>Todo App</h1>

    <input @keyup.enter="add" type="text" v-model="title" placeholder="What to do">
    <button @click="add">Add To List</button>  

    <ul>
      <li v-for="(todo,index) in todos" :key="todo">{{todo}}
        <span @click="remove(index)">&times;</span> 
      </li>
      
    </ul>

  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    msg: String
  },

  data(){
    return{
      title: '',
      todos:[
        'Go to Shop'
      ]
    }
  },

  methods: {
    add(){
      if(this.title != ""){
      this.todos.unshift(this.title);
      this.title = ""  
      }
      
    },
    remove(id){
      // console.log(id);
      // this.todos.splice(id,1);
      this.$delete(this.todos, id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

ul span {
  padding-left: 10px;
  color: red;
}
ul span:hover {
  cursor: pointer;
}
</style>
