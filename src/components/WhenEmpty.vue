/* eslint-disable */ 
<template>
  <div class="whenempty">
    
      <div class="overview__wrapper">
        <h1>
            {{AdminPage}}
        </h1>  
        <div class="overview__img">
            <img :src="require(`../../${ImgSource}`)" alt="">
        </div>
        <div class="overview__p">
            <p>{{AdminPageContent}}</p>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "WhenEmpty",
  props: {
    ImgSource: String,
    AdminPage: String,
    AdminPageContent: String
  },
  data() {
    return {
      // EXEMPLE OF REQUIRED CONTENT ***** 
      // ImgSource: 'overview.svg',
      // AdminPage: 'Overviews',
      // AdminPageContent: `Lorem ipsum dolor, sit amet consectetur adipisicing 
      //                    elit. Laudantium dolorum sint nobis ex illo inventore autem consectetur 
      //                    aspernatur possimus exercitationem.`
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.overview__wrapper{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 
  display: flex;
  height: 99vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.center-center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.overview__wrapper h1{
  color: var(--blue);
  font-size: 3rem;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overview__p {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
}
.overview__p p {
  text-align: center;
  color: var(--dark);
}

.overview__img img{
  width: 400px;
  height: 400px;
 
}

 

</style>
