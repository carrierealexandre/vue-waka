/* eslint-disable */ 
<template>
  <div class="pagetitle">
    <div class="title-wrapper">
      <div class="airport-page-title">
        <h1>{{fullText}}</h1>
      </div> 
      <a v-show="wxLink !== ''" class="currentWeather" :href="wxLink" target="_blank">
        <div class="weathericon">
          <fa-icon :icon="['fa', 'snowflake']"/>
        </div>
        <div  class="content">
          <span>Current Weather Conditions</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagetitle",
  props: {
    pageTitle : {
      type: String
    },
    wxPath : {
      type: String,
      default: ''
    }
  },
  computed: {
    fullText(){
      return this.pageTitle
    },
    wxLink(){
      return this.wxPath
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

.title-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: var(lightwhite1);
}
.airport-page-title{
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
  color: var(--dark);
  
}
.airport-page-title h1{
  font-size: 3rem;
  font-weight: 500;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 500;
  letter-spacing: 2px;
}
.currentWeather{
  color: var(--blue);
  display: flex;
  font-size: 0.9rem;
  width: auto;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  height: 100%;
  
  background-color: var(--lightwhite);
  
}
.currentWeather > div {
  padding: 10px;
  display: flex;
}
.currentWeather > div span {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
