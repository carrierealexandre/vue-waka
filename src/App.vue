<template>
  <div id="app">
    <navbar v-if="!$route.meta.hideNavigation"></navbar>
    <!-- <homemenu 
      v-if="!$route.meta.hideNavigation"
      v-bind:Airports="Airports"
      v-bind:Current="Current"
      v-bind:Currentwx="Currentwx"
      v-bind:Path="Path"
      
      ></homemenu> -->
    <router-view
      v-bind:Airports="Airports"
      v-bind:Current="Current"
      v-bind:Currentwx="Currentwx"
      v-bind:Path="Path"
      
    />
    <callus v-if="!$route.meta.hideNavigation"></callus>
    <wakafooter v-if="!$route.meta.hideNavigation"></wakafooter>
    
  </div>
</template>
<script>
export default {
  
  

  data() {
    return {
      
      Current: '',
      Airport: '',
      Currentwx: '',
      Path:'',
      Airports: [
        {
          name: 'Pikangikum',
          wx: 'https://weather.gc.ca/city/pages/on-55_metric_e.html',
          path: '/airports/pikangikum',
          Page: name
        },
        {
          name: 'Poplar Hill',
          wx: 'https://weather.gc.ca/city/pages/on-55_metric_e.html',
          path: '/airports/poplarhill',
          random: 'Random'
        },
        {
          name: 'Deer Lake',
          wx: 'https://weather.gc.ca/city/pages/on-129_metric_e.html',
          path: '/airports/deerlake'
        },
        {
          name: 'Northspirit',
          wx: 'https://weather.gc.ca/city/pages/on-129_metric_e.html',
          path: '/airports/northspirit'
        },
        {
          name: 'Sandy Lake',
          wx: 'https://weather.gc.ca/city/pages/on-129_metric_e.html',
          path: '/airports/sandylake'
        }
      ]

    }
  },
mounted() {
    // if (localStorage.path) {
      
    // }
   
    if (localStorage.current) {
      this.Current = localStorage.current;
      console.log('I running current');
      this.Airports.forEach((airport,index) => {
        if(airport.name == this.Current){
          console.log(this.$route.name);
          this.Path = this.Airports[index].path;
          console.log(this.Airports[index].wx);
          this.Currentwx = this.Airports[index].wx
          
        }

      })
    }
    if (localStorage.wx) {
      this.Airport = localStorage.airport;
      console.log('I running airport');
    }
  },
watch: {
  // Path(newName) As param
    Path() {
    localStorage.path = this.Path;
    },
    // Path(newName) As param
    Current() {
    localStorage.current = this.Current;
    },
    // Path(newName) As param
    Currentwx() {
    localStorage.wx = this.Currentwx;
    }
  },
  methods:{
    
    

    
  }

}
</script>
<style lang="scss">

</style>
