/* eslint-disable */ 
<template>
  <div class="airportslink">
    <div class="aside">

      <div class="title">
        <span>Airports</span>
      </div>
      <div class="list">
        <ul>
          <li><router-link to="/airports/pikangikum">Pikangikum</router-link></li>
          <li><router-link to="/airports/poplarhill">Poplar Hill</router-link></li>
          <li><router-link to="/airports/deerlake">Deer Lake</router-link></li>
          <li><router-link to="/airports/northspirit">Northspirit</router-link></li>
          <li><router-link to="/airports/sandylake">Sandy Lake</router-link></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "AirportsLinks",
  props: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// styling aside styling start
.aside{
  padding-top: 30px;
  padding-left: 50px;
}
.title{
  display: flex;
  width: 100%;
  height: 50px;
  font-size: 2rem;
  border-bottom: 1px solid var(--primary);
}
.list{
 width: 100%;
 height: auto;
 padding-top: 25px;
}
.list li {
  padding: 5px 0 5px 0;
}
// MEDIA STYLING START

// large tablette styling start
@media (max-width: 991px) {
  // General Styling
  // styling aside styling start
  .aside{
  display: none;
  }
  // styling aside styling finish


}
// large tablette styling end

// MEDIA STYLING END
// styling aside styling end
</style>
