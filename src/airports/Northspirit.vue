 /* eslint-disable */ 
<template>
  <div class="Northspirit">
    <airportpage 
      :Page='Page'
      :AirportImg='ImgAirport'
      :Distance='Distance'
      :Orientation='Orientation'
      :Coordinates='Coordinates'
      :Icao='Icao'
      :AirportOwner='AirportOwner'
      :MapImg='MapImg'
      :Wxpath='Wxpath'
      :Paragraphs='Paragraphs'
      
    ></airportpage>
  </div>
</template>

<script>
// @ is an alias to /src
// import AirportPage from "@/components/AirportPage.vue";

export default {  
  name: "Northspirit",

  data(){
    return {
      // Name of Airport in Title Case / String
      Page: 'Northspirit',
      // Name img that will be displayed / Object
      ImgAirport:{
        // img link path is <img :src="require(`../../public/airport_img/${AirportImg.img}`)" alt=""> / String
        img : 'northspirit.jpg',
        // Name of the Author of the image if applicable / String
        author : 'www.destinationnunavut.ca',
        // link to the website of author "requires http:// or https://" / Stirng
        website : 'http://www.destinationnunavut.ca',
      },
      // Distance of the Airport from the Community it'll aslo be converted to km --> ({{((Distance*10) * 19)/100}}km) / Number
      Distance: 1,
      // Orientation from cummunity --> north - northeast - east - southeast - south - southwest - weast - northwest <-- / String
      Orientation: 'northeast',
      // Coordinates inside back ticks --> `N51°49.18' / W93°58.40'` / String
      Coordinates: `N51°49.18' / W93°58.40'`,
      // ICAO Code ex: 'CYPM' for pikangikum / String
      Icao: 'CPV7',
      // Owner of the airport / String
      AirportOwner: 'Govt of Ontario',
      //  image link for the map of the aiport <img :src="require(`../../public/airport_img/${MapImg}`)" alt=""> / String
      MapImg: 'ypm.svg',
      // link to weather "requires http:// or https://" / Stirng
      Wxpath: 'https://weather.gc.ca/city/pages/on-55_metric_e.html',
      
      // Description about the community use back tick [`-->TEXT HERE<--`, `-->TEXT HERE`<--] / Array
      Paragraphs: [
              `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod maxime 
                ratione, quisquam saepe voluptatibus voluptate temporibus. Natus 
                expedita quod quos minus ipsam. Itaque maiores tempora autem aut unde 
                consequuntur exercitationem eligendi voluptatibus, sint sit non 
                similique ab earum dolores esse ea optio nesciunt expedita nulla. 
                Quasi nihil cupiditate et, est provident aliquid assumenda soluta 
                necessitatibus voluptate cumque autem fugiat quam perspiciatis illum 
                voluptas, aliquam dolor molestiae, dignissimos nemo eligendi. Porro'`,

                `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod maxime 
                ratione, quisquam saepe voluptatibus voluptate temporibus. Natus 
                expedita quod quos minus ipsam. Itaque maiores tempora autem aut unde 
                consequuntur exercitationem eligendi voluptatibus, sint sit non 
                similique ab earum dolores esse ea optio nesciunt expedita nulla.`
                ]
      
    }
    
  }
};

</script>

<style lang="scss">
// General Styling

</style>
