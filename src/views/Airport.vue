 /* eslint-disable */ 
<template>
  <div class="airports">
    
    
    <herotwo></herotwo>
      <div class="wrapper1">
        <div class="container1">
          <pagetitle :page-title="Page"></pagetitle> 
        </div>
      </div>  
    
    <div class="nav-map">
      <router-link to="/">Home</router-link><span>/</span><span>airport</span>
    </div>
    <div class="airport__section">
      <div class="sectionone-wrapper">
        <div class="sectionone">
          <div class="img__airports">
            <img src="../../public/airport_img/map.png" alt=""> 
          </div>      
        </div>
        <div class="sectiontwo">

            <div v-show="Current != ''" class="curent-selection">
              <div class="popup-header">
                <span class="header-span1">Current Airport:</span>
                <span class="header-span2">{{Current}}</span>
              </div>
              <div class="header-links">
                <router-link :to="Path" class="button">
                  <div  class="weather-link" data-dismiss="modal">
                      Airport information
                  </div>
                </router-link>
                
                <a :href="Currentwx" class="button" target="_blank">
                  <div class="weather-link">
                    Weather forecast
                  </div>
                </a>
                
              </div>
            </div>

          <div class="top__sectiontwo">
            <h2 v-show="Current==''">Select Your Airport</h2>
            <h2 v-show="Current != ''">Change Your Airport</h2>
          </div>
          <div class="">
            <div class="">
              <span>
                Deliver to...
              </span>
            </div>
            <div class="airport-form">
              <select placeholder="Select Airport" v-model="Selection"  class="form-control form-control-md">
                <option v-for="airport in Airports" :key="airport.name">{{airport.name}}</option>
              </select>
            
              <div>
                <button @click="changeAirport"  class="btn btn-secondary btn-lg">Set As Default</button>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div> 
    <div class="sectionthree-wrapper">   
      <div class="sectionthree-wrapper">
        <div class="airport-grid">
          <div class="airport-box">
            <router-link to="/airports/pikangikum">
              <div class="grid__wrapper">
                <div class="img__grid">
                  <img src="../../public/airport_img/pikagikum.jpg" alt="">
                </div>
                <div class="span-grid">
                  <span>Pikangikum</span>
                </div>
              </div>
            </router-link>
          </div>
          <div class="airport-box">
            <router-link to="/airports/poplarhill">
              <div class="grid__wrapper">
                <div class="img__grid">
                  <img src="../../public/airport_img/poplarhill.jpg" alt="">
                </div>
                <div class="span-grid">
                  <span>Poplar Hill</span>
                </div>
              </div>
            </router-link>
          </div>
          <div class="airport-box">
            <router-link to="/airports/deerlake">
              <div class="grid__wrapper">
                <div class="img__grid">
                  <img src="../../public/airport_img/deerlake.jpg" alt="">
                </div>
                <div class="span-grid">
                  <span>Deer Lake</span>
                </div>
              </div>
            </router-link>
          </div>
          <div class="airport-box">
            <router-link to="/airports/northspirit">
              <div class="grid__wrapper">
                <div class="img__grid">
                  <img src="../../public/airport_img/northspirit.jpg" alt="">
                </div>
                <div class="span-grid">
                  <span>Northspirit</span>
                </div>
              </div>
            </router-link>
          </div>
          <div class="airport-box">
            <router-link to="/airports/sandylake">
              <div class="grid__wrapper">
                <div class="img__grid">
                  <img src="../../public/airport_img/sandylake.jpg" alt="">
                </div>
                <div class="span-grid">
                  <span>Sandy Lake</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>  
        <div class="goods-wrapper">
          <div class="goods-title">
            <h3>Delivery goods is important to us</h3>
          </div>
          <div class="goods-paragraph">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, odio recusandae non totam commodi dolorem 
                quis cupiditate eveniet corporis ratione quibusdam optio vero ex dolore quod ipsa iusto eum voluptas 
                necessitatibus vitae magnam! Modi natus maxime consectetur laudantium saepe deserunt molestias ratione 
                laborum non illum debitis ea delectus ipsum dolor impedit id illo dolores, minima repudiandae corporis a 
                tempore! Delectus consequuntur aspernatur eveniet sequi aut incidunt voluptas ad quidem, error corrupti 
                cum totam iure in, dolores odit enim impedit perspiciatis repellat, quia ullam nobis quae pariatur aliquid 
                quaerat? Magnam quas id quae atque quidem a nisi voluptatibus eligendi, natus ipsum!
              </p>
          </div>
          
        </div>
      </div>
      
    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";



export default {
  
  
  name: "Airports",
  
  components: {
    HelloWorld,
    
  },
  props:{
    // Page: 'Airport',
    Current: String,
    Currentwx: String,
    Path: String,
    Airports: Array,
    // changeAirport: Function
    
  },
  
  data(){
    return {
      Page: 'Airports',
      Selection: ''
    }
  },

 
    
  
  // mounted() {
  //       if (localStorage.path) {
  //         this.Path = localStorage.path;
  //         console.log('I running local storage');
  //       }
  //       if (localStorage.current) {
  //         this.Current = localStorage.current;
  //         console.log('I running current');
  //       }
  //       if (localStorage.airport) {
  //         this.Airport = localStorage.airport;
  //         console.log('I running airport');
  //       }
  //     },
  // watch: {
  //   Path(newName) {
  //   localStorage.path = newName;
  //   },
  //   Current(newName) {
  //   localStorage.current = newName;
  //   },
  //   Airport(newName) {
  //   localStorage.airport = newName;
  //   }
  //  },
  methods:{
    changeAirport: function(){
      localStorage.current = this.Selection
      window.location.reload();

      // this.Airports.forEach((airport,index) => {
      //   if(airport.name == this.Current){
      //     this.Path = `airport/${this.Current}`;
      //     this.Currentwx = airport.wx
          
      //   }

      //   })
        
        
    },

    
  }
};

</script>

<style lang="scss">
// General Styling
.nav-map{
  display: flex;
  width: auto;
  margin: 0 130px 0 130px;
  height: 30px;
  border-bottom: 1px solid var(--primary);
  background-color: var(--lightwhite1);
  justify-content: flex-start;
  align-items: center;
  
}
.page-wrapper-secondairay{
  padding: 30px 0 0 60px;
}

// Airport selection styling start
.curent-selection{
  margin-bottom: 20px;
  border: 1px solid var(--orange);
  padding: 40px;
}
.popup-header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.popup-header span{
  display: flex;
  justify-content: center;
  width: 400px;
  color: var(--dark);
}
.header-span1{
  color: var(--gray);
  border-bottom: 1px solid var(--dark);
  font-size: 1.5rem;
}
.header-span2{
  font-size: 3.5rem;
  padding: 20px 0 20px 0;
  color: var(--orange) !important;
}
.header-links{
  display: flex;
  align-items: center;
  justify-content: center;
}

.weather-link{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 200px;
}
.button{
  background-color: none;
  border: none;
  font-size: 1.25rem;
  color: var(--blue);
  text-decoration: underline;
}
// Airport selection styling end


.sectionone{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.sectionone-wrapper{
  position: relative;
  display: grid;
  margin-top: 40px;
  border-bottom: 1px solid var(--primary);
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
  justify-content: center;
  height: auto;
  background-color: var(--lightwhite1);
}
.img__airports{
  display: flex;
  justify-content: center;
  
}
.airport__section{
  display: flex;
  justify-content: center;
}


.top__sectiontwo{
  padding-top: 40px;
}

.airport-form{
  display: flex;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--primary);
}
.airport-form button{
  width: 190px;
  margin-left: 20px;
}
// airport grid styling with photos
.sectionthree-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
}
.airport-grid{
  display: grid;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  grid-gap: 10px;
  justify-content: center;
  grid-template-columns: repeat( 3, minmax(200px, 400px) );
}
.airport-box{
  box-shadow: var(--shadow);
}
.grid__wrapper{
  position: relative;
}
.span-grid{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  bottom: 5px;
  left: 5px;
  color: var(--dark);
  background-color: var(--beigeT);
}
.span-grid span{
  font-weight: 700;
}

.airport-grid > div{
  display: flex;
  justify-content: center;
}
.img__grid img{
  width: 100%;
}
.goods-wrapper{
  width: 80%;
  padding: 0 20px 0 20px;
  margin: 40px 0 40px 0;
}
.goods-title{
  width: 80%;
  padding-bottom: 20px;
}
.goods-title h3 {
  font-family: Verdana, Geneva, Tahoma, sans-serif; 
}
.goods-paragraph{
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
  width: 100%;
  margin: 0;
}
.goods-paragraph p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;  
}

@media (max-width: 1250px) {
  
  .sectionone-wrapper{
    grid-template-columns: 1fr;
  }
  .airport-grid{
    justify-content: center;
    grid-template-columns: repeat( 2, minmax(200px, 500px) );
  }
  .sectiontwo{
  background-color: var(--lightwhite1);
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  }
  .top__sectiontwo{
    border-top: 1px solid var(--primary);
    width: 100%;
    text-align: center;
    padding-top: 40px;
  }
  .airport-form{
  border-bottom: none;
  }
 
}
@media (max-width: 950px) {
  .sectiontwo{
    align-items: center;
  }
  .airport__section{
    grid-template-columns: repeat(1, 1fr);
  }
  .callus__wrapper{
    grid-template-columns: auto;
  }
  .at{
    padding:0;
    text-align: center;
  }
  .airport-grid{
    grid-template-columns: repeat(1, minmax(200px, 500px));
  }  
 
}
</style>
