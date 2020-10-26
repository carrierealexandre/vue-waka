/* eslint-disable */ 
<template>
  <div class="decimalInput">
    <div class="unit-wrapper"> 
      <div @click="addDecimalValue()"  class="cercle-button">
        <span class="next"></span>
      </div>
      <div @click="subDecimalValue()" class="cercle-button">
        <span class="prev"></span> 
      </div>
      
      <div id ="box">
        
        <input @change="limiteDecimalValue" type="number" :value="dec" @input="changeNumber">
        
      </div>
      
    </div>
    
  </div>
</template>

<script>

export default {
  name: "decimalInput",
  props:{
    dec:{
      type:[Number,String],
      default:'00'
    }
  }
  ,
  data() {
      return{
      decimal:'00'
    }
    
  },
  methods:{
    changeNumber(event){
      
      let change = parseInt(event.target.value)
      
      if(isNaN(change)){
        this.decimal = "00" ;
        this.$emit('numberChanged', this.decimal)
      }else{
        this.decimal = change ;
        this.$emit('numberChanged', this.decimal)
      }
      
    },
    addDecimalValue(){
      
      const decimal = this.decimal.toString() ;
      

      if(decimal == "0" ||decimal == "00" || decimal == "01" || decimal == "02" || decimal == "03" 
      || decimal == "04" || decimal == "05" || decimal == "06" || decimal == "07" || decimal == "08"
      || decimal == "09" || decimal == "10" ){
        
        console.log(`${decimal} ${decimal.length}`);
        if(decimal.length == 2){
          if(decimal == "09"){
            this.decimal = "10"
            this.$emit('numberChanged', this.decimal)

          }else{
            
            var number = parseInt(this.decimal.charAt(1));
            var i;
            for (i = 0; i < 10; i++){
              
              console.log("got in the lenght");
              if( i === number){
                
                console.log(this.decimal = "0" + number);
                this.decimal = "0" + (i+1);
                this.$emit('numberChanged', this.decimal)
              }
                    }  
          }
          
        }else{
          // console.log(decimal.lenght = 2);
          console.log('else');
          console.log(decimal.length == 2);
          console.log(`${decimal} ${decimal.length}`);
          this.decimal = "0" + 1;
          this.$emit('numberChanged', this.decimal)
        }

        
      }
      if(this.decimal > 98){
        this.decimal = 0
        this.$emit('numberChanged', this.decimal)
      }else{
        if(this.decimal > 10){
          this.decimal += 1
          this.$emit('numberChanged', this.decimal)
        }
        if(decimal == 10 ){
          this.decimal = parseInt(decimal) + 1;
          this.$emit('numberChanged', this.decimal)
        }
        
      }
      

        
        
        
        
      
      
    },
    subDecimalValue(){
      
      const decimal = this.decimal.toString() ;
      

      if(decimal == "0" ||decimal == "00" || decimal == "01" || decimal == "02" || decimal == "03" 
      || decimal == "04" || decimal == "05" || decimal == "06" || decimal == "07" || decimal == "08"
      || decimal == "09" || decimal === "10" ){
        console.log(`${decimal} ${decimal.length}`);
        if(decimal == "00"){
          return "00"
          
        }
        
        if(decimal.length == 2){
          if(decimal == "01"){
            this.decimal = "00"
            this.$emit('numberChanged', this.decimal)
          }else{
            
            var number = parseInt(decimal.charAt(1));
            var i;
            for (i = 0; i < 10; i++){
              console.log("got in the lenght");
              if( i === number){
                console.log(this.decimal = "0" + number);
                this.decimal = "0" + (i-1);
                this.$emit('numberChanged', this.decimal)
              }
                    }  
          }
          
        }else{
          // console.log(decimal.lenght = 2);
          console.log('else');
          console.log(decimal.length == 2);
          console.log(`${decimal} ${decimal.length}`);
          this.decimal = "0" - 1;
          this.$emit('numberChanged', this.decimal)
        }

        
      }
      if(this.decimal < 0){
        this.decimal = 99
        this.$emit('numberChanged', this.decimal)
      }else{
        if(this.decimal > 10){
          this.decimal -= 1
          this.$emit('numberChanged', this.decimal)
        }
        if(decimal == 10 ){
          this.decimal = "09";
          this.$emit('numberChanged', this.decimal)
        }
        
      }
      
      
    },
    limiteDecimalValue(){
      // if(this.decimal == "01"){

      // }
      if(this.decimal == 0){
        this.decimal = "00"
        this.$emit('numberChanged', this.decimal)
      } 
      if(this.decimal == 1){
        this.decimal = "01"
        this.$emit('numberChanged', this.decimal)
      }
      if(this.decimal == 2){
        this.decimal = "02"
        this.$emit('numberChanged', this.decimal)
      }
      if(this.decimal == 3){
        this.decimal = "03"
        this.$emit('numberChanged', this.decimal)
      }
      if(this.decimal == 4){
        this.decimal = "04"
        this.$emit('numberChanged', this.decimal)
      }
      if(this.decimal == 5){
        this.decimal = "05"
        this.$emit('numberChanged', this.decimal)
      }
      if(this.decimal == 6){
        this.decimal = "06"
        this.$emit('numberChanged', this.decimal)
      }
      if(this.decimal == 7){
        this.decimal = "07"
        this.$emit('numberChanged', this.decimal)
      }
      if(this.decimal == 8){
        this.decimal = "08"
        this.$emit('numberChanged', this.decimal)
      }
      if(this.decimal == 9){
        this.decimal = "09"
        this.$emit('numberChanged', this.decimal)
      }
      if(this.decimal < 0){
        this.decimal = "00"
        this.$emit('numberChanged', this.decimal)
      }
      if(this.decimal === ""){
        this.decimal = 0 + "0"
        this.$emit('numberChanged', this.decimal)
      }
      
      if(this.decimal > 99){
        this.decimal = 99
        this.$emit('numberChanged', this.decimal)
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
  width: 120px;
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
  color: var(--blue1);
  font-size: 1.2rem;
  font-weight: 600;
  // user-select:none;
}/* Chrome, Safari, Edge, Opera */
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
