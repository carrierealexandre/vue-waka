/* eslint-disable */ 
<template>
  <div class="numberInput">
    <div class="unit-wrapper"> 
      <div @click="addDolarValue()"  class="cercle-button">
        <span class="next"></span>
      </div>
      <div @click="subDolarValue()" class="cercle-button">
        <span class="prev"></span> 
      </div>
      
      <div id ="box">
        
        <input @change="limiteDolarValue" type="number" :value="num" @input="changeNumber">
        
      </div>
      
    </div>
    
  </div>
</template>

<script>

export default {
  name: "numberInput",
  props:{
    num:{
      type:Number,
      default:0
    }
  }
  ,
  data() {
      return{
      number:0
    }
    
  },
  methods:{
    changeNumber(event){
      let change = parseInt(event.target.value)
      if(isNaN(change)){
        this.number = 0 ;
        this.$emit('numberChanged', this.number)
      }else{
        this.number = change ;
        this.$emit('numberChanged', this.number)
      }
      
    },
    addDolarValue(){
      if(this.number > 99998 ){
       this.number = 99999;
       this.$emit('numberChanged', this.number)
      }else{
        this.number += 1
        this.$emit('numberChanged', this.number)
        
      }

        
        
        
        
      
      
    },
    subDolarValue(){
      if(this.number < 1 ){
        this.number = 0
        this.$emit('numberChanged', this.number)
      }else{
        this.number -= 1
        this.$emit('numberChanged', this.number)
      }
      
    },
    limiteDolarValue(){
      
      if(this.number > 99999){
        this.number = 99999
        this.$emit('numberChanged', this.number)
        
      }
      if(this.number < 0){
        this.number = 0
        this.$emit('numberChanged', this.number)
        
      }

      if(this.number == ""){
        this.number = 0
        this.$emit('numberChanged', this.number)
      }
      
    },

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
  margin: 0 ;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
// spinner style start
.unit-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.unit-wrapper{
  position: relative;
  width: 140px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid var(--primary);
  background-color: white;
  transition: 0.5s;
}


.unit-wrapper .next{
  position: absolute;
  top:13px;
  right: 20px;
  width: 12px;
  height: 12px;
  border-top: 2px solid var(--dark);
  border-left: 2px solid var(--dark);
  z-index: 1;
  transform: rotate(135deg);
  cursor: pointer;
  opacity: 0.3;
  transition: 0.5s;
}
.next::before, .prev::before{
  position: absolute;
  content: "";
  right: -16px;
  top: -18px;
  width: 42px;
  height: 42px;
  border-radius: 42px;
  transform: rotate(135deg);
  background-color: transparent;
  
  
}
.cercle-button{
 position: relative;
}
.unit-wrapper:hover .next{
  opacity: 1;
  right: 20px;
}
.prev{
  position: absolute;
  top:13px;
  left: 20px;
  width: 12px;
  height: 12px;
  border-top: 2px solid var(--dark);
  border-left: 2px solid var(--dark);
  z-index: 1;
  transform:  rotate(315deg);
  cursor: pointer;
  opacity: 0.3;
  transition: 0.5s;
}
.unit-wrapper:hover .prev{
  opacity: 1;
  left: 20px;
}
#box input{
  outline: none;
  background: transparent;
  border: none;
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 35px;
  /*display: none;*/
  color:var(--blue1);
  font-size: 1.2rem;
  font-weight: 600;
  // user-select:none;
}
/* Chrome, Safari, Edge, Opera */
#box input::-webkit-outer-spin-button,
#box input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
#box input[type=number] {
  -moz-appearance: textfield;
}
// spinner style end
</style>
