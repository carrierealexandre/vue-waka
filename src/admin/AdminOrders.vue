/* eslint-disable */ 
<template>
  <div class="">
    <div class="orders">
    
      <whenempty class="orders"
      :ImgSource='ImgSource'
      :AdminPage='AdminPage'
      :AdminPageContent='AdminPageContent'
      ></whenempty>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Orders",
  props: {
    
  },
  data() {
    return {
      ImgSource: 'public/admin_img/orders.svg',
      AdminPage: 'Orders',
      AdminPageContent: `Lorem ipsum dolor, sit amet consectetur adipisicing 
                         elit. Laudantium dolorum sint nobis ex illo inventore autem consectetur 
                         aspernatur possimus exercitationem.`
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
