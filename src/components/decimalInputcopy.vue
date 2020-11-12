/* eslint-disable */ 
<template>
  <div class="numberInput">
    <div class="unit-wrapper"> 
      <span @click="addDecimalValue()" class="next"></span>
      <span @click="subDecimalValue()" class="prev"></span>
      <div id ="box">
        
        <input placeholder="00" @change="limiteDecimalValue()" type="number" v-model.number="datadecimal" >
        
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "numberInput",
  props: {
    decimal: {
      type: String,
      require: true
    }
  },
  data(){
    return{
     dataDecimal: "00"
    };
    

  },
  
  methods:{
    addDecimalValue(){
      
      const datadecimal = this.datadecimal.toString() ;
      

      if(datadecimal == "0" ||datadecimal == "00" || datadecimal == "01" || datadecimal == "02" || datadecimal == "03" 
      || datadecimal == "04" || datadecimal == "05" || datadecimal == "06" || datadecimal == "07" || datadecimal == "08"
      || datadecimal == "09" || datadecimal == "10" ){
        
        console.log(`${datadecimal} ${datadecimal.length}`);
        if(datadecimal.length == 2){
          if(datadecimal == "09"){
            
            return this.decimal = "10"
          }else{
            
            var number = parseInt(this.datadecimal.charAt(1));
            var i;
            for (i = 0; i < 10; i++){
              
              console.log("got in the lenght");
              if( i === number){
                
                console.log(this.datadecimal = "0" + number);
                return this.decimal = "0" + (i+1);
              }
                    }  
          }
          
        }else{
          // console.log(datadecimal.lenght = 2);
          console.log('else');
          console.log(datadecimal.length == 2);
          console.log(`${datadecimal} ${datadecimal.length}`);
          return this.decimal = "0" + 1;
        }

        
      }
      if(this.datadecimal > 98){
        return this.decimal = 0
      }else{
        if(this.datadecimal > 10){
          return this.decimal += 1
        }
        if(datadecimal == 10 ){
          return this.decimal = parseInt(datadecimal) + 1;
        }
        
      }
      
    },
    // subDecimalValue(){
    //   // const datadecimal = parseFloat(this.datadecimal);
    //   // if(datadecimal < 1 && datadecimal > 0){
    //   //   this.datadecimal = datadecimal - 0.01;
    //   // }
    //   const datadecimal = this.datadecimal.toString() ;
      

    //   if(datadecimal == "0" ||datadecimal == "00" || datadecimal == "01" || datadecimal == "02" || datadecimal == "03" 
    //   || datadecimal == "04" || datadecimal == "05" || datadecimal == "06" || datadecimal == "07" || datadecimal == "08"
    //   || datadecimal == "09" || datadecimal === "10" ){
    //     console.log(`${datadecimal} ${datadecimal.length}`);
    //     if(datadecimal == "00"){
    //       return "00"
    //     }
        
    //     if(datadecimal.length == 2){
    //       if(datadecimal == "01"){
    //         this.datadecimal = "00"
    //       }else{
            
    //         var number = parseInt(datadecimal.charAt(1));
    //         var i;
    //         for (i = 0; i < 10; i++){
    //           console.log("got in the lenght");
    //           if( i === number){
    //             console.log(this.datadecimal = "0" + number);
    //             this.datadecimal = "0" + (i-1);
    //           }
    //                 }  
    //       }
          
    //     }else{
    //       // console.log(datadecimal.lenght = 2);
    //       console.log('else');
    //       console.log(datadecimal.length == 2);
    //       console.log(`${datadecimal} ${datadecimal.length}`);
    //       this.datadecimal = "0" - 1;
    //     }

        
    //   }
    //   if(this.datadecimal < 0){
    //     this.datadecimal = 99
    //   }else{
    //     if(this.datadecimal > 10){
    //       this.datadecimal -= 1
    //     }
    //     if(datadecimal == 10 ){
    //       this.datadecimal = "09";
    //     }
        
    //   }
      
    // },
    // limiteDecimalValue(){
    //   // if(this.datadecimal == "01"){

    //   // }
    //   if(this.datadecimal == 0){
    //     this.datadecimal = "00"
    //   } 
    //   if(this.datadecimal == 1){
    //     this.datadecimal = "01"
    //   }
    //   if(this.datadecimal == 2){
    //     this.datadecimal = "02"
    //   }
    //   if(this.datadecimal == 3){
    //     this.datadecimal = "03"
    //   }
    //   if(this.datadecimal == 4){
    //     this.datadecimal = "04"
    //   }
    //   if(this.datadecimal == 5){
    //     this.datadecimal = "05"
    //   }
    //   if(this.datadecimal == 6){
    //     this.datadecimal = "06"
    //   }
    //   if(this.datadecimal == 7){
    //     this.datadecimal = "07"
    //   }
    //   if(this.datadecimal == 8){
    //     this.datadecimal = "08"
    //   }
    //   if(this.datadecimal == 9){
    //     this.datadecimal = "09"
    //   }
    //   if(this.datadecimal < 0){
    //     this.datadecimal = "00"
    //   }
    //   if(this.datadecimal === ""){
    //     this.datadecimal = 0 + "0"
    //   }
      
    //   if(this.datadecimal > 99){
    //     this.datadecimal = 99
    //   }
    // },
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
  
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid var(--darkT);
  transition: 0.5s;
}
.unit-wrapper:hover{
  width: 140px;
  border: 2px solid var(--dark);
}
.unit-wrapper .next{
  position: absolute;
  top:35%;
  
  right: 13px;
  width: 12px;
  height: 12px;
  border-top: 2px solid var(--dark);
  border-left: 2px solid var(--dark);
  z-index: 1;
  transform: rotate(135deg);
  cursor: pointer;
  opacity: 0;
  transition: 0.5s;
}
.unit-wrapper:hover .next{
  opacity: 1;
  right: 20px;
}
.prev{
  position: absolute;
  top:35%;
  
  left: 13px;
  width: 12px;
  height: 12px;
  border-top: 2px solid var(--dark);
  border-left: 2px solid var(--dark);
  z-index: 1;
  transform:  rotate(315deg);
  cursor: pointer;
  opacity: 0;
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
  color: #00deff;
  font-size: 22px;
  font-weight: 600;
  user-select:none;
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
