/* eslint-disable */ 
<template>
  <div class="">
    <div class="orders">
    
      <!-- <whenempty class="orders"
      :ImgSource='ImgSource'
      :AdminPage='AdminPage'
      :AdminPageContent='AdminPageContent'
      ></whenempty> -->
      <numberInput :num="number" @numberChanged="number = $event"
      
      ></numberInput>
      <numberInput :num="numberOne" @numberChanged="numberOne = $event"
      
      ></numberInput>
      <numberInput :num="numberTwo" @numberChanged="numberTwo = $event"
      
      ></numberInput>
      <decimalInput :dec="decimal" @numberChanged="decimal = $event"
      
      ></decimalInput>
      


      <!-- <decimalInput
      :decimal='decimal'
      ></decimalInput> -->
    </div>
    
  </div>
</template>

<script>
import numberInput from '../components/numberInput'
import decimalInput from '../components/decimalInput'
export default {
  name: "Orders",
  props: {
    
  },
  data() {
    return {
      decimal:"00",
      number:0,
      numberOne:0,
      numberTwo:0,
      ImgSource: 'public/admin_img/orders.svg',
      AdminPage: 'Orders',
      AdminPageContent: `Lorem ipsum dolor, sit amet consectetur adipisicing 
                         elit. Laudantium dolorum sint nobis ex illo inventore autem consectetur 
                         aspernatur possimus exercitationem.`
    }
  },
  components:{
    'numberInput': numberInput,
    'decimalInput': decimalInput
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
