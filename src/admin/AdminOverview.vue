/* eslint-disable */ 
<template>
  <div class="overview">
    
      <whenempty
      :ImgSource='ImgSource'
      :AdminPage='AdminPage'
      :AdminPageContent='AdminPageContent'
      ></whenempty>
    
  </div>
</template>

<script>
export default {
  name: "Overview",
  props: {
    
  },
  data() {
    return {
      ImgSource: 'public/admin_img/overview.svg',
      AdminPage: 'Overviews',
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
