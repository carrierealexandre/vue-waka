/* eslint-disable */ 
<template>
  <div class="herotwo">
    <div class="hero-wrapper">
      <div class="airport-page-title">
        <h1>{{hero}}</h1>
      </div>
      <div class="airport-bottom-title">
        <span>Photo by <a href="https://unsplash.com/@danrusson?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Dan Russon</a> on <a href="https://unsplash.com/s/photos/boreal-aurora?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
      </div>     
    </div>
  </div>
</template>

<script>
export default {
  name: "herotwo",
  props: {
    hero:{
      type: String,
      default: 'Here To Deliver'
    }
  },
  data() {
    return {
      
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.hero-wrapper{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(../../public/airport_img/wecan.jpg);
  overflow-x: hidden;
  overflow-y: hidden;
  object-fit: cover;
  background-size: cover;
  width: 100%;
  height: 440px;
}
.airport-page-title{
  position: absolute;
  display: flex;
  width: 600px;
  border-left:  3px solid var(--lightwhite);
  border-right:  3px solid var(--lightwhite);
  justify-content: center;
  color: var(--lightwhite1);
  margin-bottom: 20px;
}
.airport-page-title h1{
  font-size: 4rem;
  font-weight: 500;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  letter-spacing: 2px;
}
.airport-bottom-title{
  display: flex;
  font-size: 0.6rem;
  color: var(--boxes);
  position: absolute;
  bottom: 5px;
  justify-content: flex-end;
  right: 5px;
}

@media (max-width: 790px){
  .airport-page-title h1{
  font-size: 2.5rem;
  }
  .airport-page-title{
  width: 400px;
  }
}

</style>
