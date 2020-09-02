/* eslint-disable */ 
<template>
  <div class="airportpage">
    <herotwo></herotwo>  
     
    <div class="nav-map">
      <router-link to="/">Home</router-link><span>/</span><router-link to="/airports">Airport</router-link><span>/</span><span>{{Page}}</span>
    </div>
    
    <div class="">
      <div class="page-divider">

        <div class="airports-content-wrapper">
          <div>
            <pagetitle :page-title="Page" :wx-path="Wxpath"></pagetitle> 
            <div class="airport-img">
              <img :src="require(`../../public/airport_img/${AirportImg.img}`)" alt="">
            </div>
            <!-- <airportinfo
              :text-info="Paragraphs"></airportinfo> -->
            <a :href="AirportImg.website"  target="_blank">Photo: {{AirportImg.author}} </a>
            <div class="text">
              <p v-for="(paragraph) in Paragraphs" :key="paragraph">{{paragraph}}</p>
              
            </div>
            <div class="directions">
              <div class="location">
                <div class="title__location">
                  <span>{{Page}} Airport</span>
                </div>
                <span class="details__location">{{Page}} Airport, is located {{Distance}} nautical 
                  mile ({{((Distance*10) * 19)/100}}km) {{Orientation}} of the First Nations community of 
                  {{Page}}, Ontario, Canada.
                </span>
                <div class="location__wrapper">
                  <div class="coordinate">
                    <span>Coordinates: </span>
                    <span>{{Coordinates}}</span>
                  </div>
                  <div class="icao-name">
                    <span>ICAO: </span>
                    <span>{{Icao}}</span>
                  </div>
                  <div class="airport-contact">
                    <div class="owner">
                      <span>Owner: </span>
                      <span>{{AirportOwner}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="map">
                <img :src="require(`../../public/airport_img/${MapImg}`)" alt="">
              </div>
            </div>
            <cargoinfo></cargoinfo>
          </div>
        </div>
        <aside>
          <airportslink></airportslink>
        </aside>

      </div>
    </div>
  </div>
</template>

<script>
import AirportPage from "@/components/AirportPage.vue";

export default {
  name: "AirportPage",
  props: {
    Page: String,
    AirportImg: Object,
    Distance: Number,
    Orientation: String,
    Coordinates: String,
    Icao: String,
    AirportOwner: String,
    MapImg: String,
    Wxpath: String,
    Paragraphs: Array
  },
  components: {
    AirportPage
  },
  data() {
    return {

    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// General Styling
.nav-map{
  display: flex;
  width: auto;
  margin: 0 60px 10px 60px;
  height: 30px;
  background-color: var(--lightwhite1);
  justify-content: flex-start;
  align-items: center;
  
}
.nav-map > span{
  margin: 0 5px 0 5px;
}
p, span, a {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.page-divider{
  margin: 0 60px 30px 60px;
  display: grid;
  grid-template-columns: 75% 25%;
}
// styling content start
.airports-content-wrapper {
  padding: 30px 10px 10px;
  border-right: 1px solid var(--primary);
}
.airport-img img{
  margin-top: 30px;
  width: 100%;
  border-radius: 5px;
  box-shadow: var(--shadow);
  
}
.text{
  margin-top: 30px;
  font-size: 1.1rem;
  color: var(--blue);
}
.title__location{
  font-weight: bolder;
  font-size: 1.5rem;
}
.details__location{
  font-size: 1.1rem;
}
.location__wrapper{
  margin-top: 10px;
}

// tyling content end

// styling map directions start
.map{
  width: 300px;
  height: 300px;
}
// styling directions end

// MEDIA STYLING START

// large tablette styling start
@media (max-width: 991px) {
  // General Styling
  .page-divider{
  margin: 0 60px 0 60px;
  display: grid;
  grid-template-columns: 100%;
  }
  .airports-content-wrapper {
    
    border-right: none;
  }

}
// large tablette styling end

// MEDIA STYLING END
</style>
