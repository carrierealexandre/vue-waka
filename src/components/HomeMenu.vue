/* eslint-disable */ 
<template>
  <div>
    <nav class="homenav">

      <menu class="homemenu">
        <ul class="link__homemenu">
          <li><router-link to="/airports">Airports</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/delivery">Cargo</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
        </ul>
      </menu>

      <div class="airport">
        <div class="wrapper__airport">
          <button class="btn__wrapper" type="button" data-toggle="modal" data-target="#myModal">
        
            <div class="icon__airport">
              <fa-icon class="plane" :icon="['fa', 'plane']" />
              <fa-icon class="planeLanded" :icon="['fa', 'plane-arrival']" />
            </div>
            <div class="select__airport">
              <span class="top__select">Deliver to...</span>
              <span class="bottom__select">{{Current}}</span>
              <span class="bottom__select" v-show="Current ==''">Select your airport</span>
            </div>
          </button>
          <!-- popup start -->
          <div class="modal" id="myModal">
            <div class="popup modal-dialog">
              <div class=" modal-content">
              
                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">Delivering to</h4>
                  <button type="button"  data-dismiss="modal">&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class="modal-body">
                  
                  <div >
                    <div v-show="Current != ''" class="current-selection">
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
                    <div class="airportSel-content">
                      <div class="">
                        <div class="">
                          <div class="change-span">
                            <span><span v-show="Current == ''">Select</span><span v-show="Current != ''">Change</span> Your Airport</span>
                          </div>
                          <span>
                            Deliver to...
                          </span>
                        </div>
                        <div class="airport-form">
                          <select placeholder="Select Airport" v-model="Selection"  class="form-control form-control-md">
                            <option v-for="airport in Airports" :key="airport.name" >{{airport.name}}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Modal footer -->
                <div class="modal-footer">
                  <button type="button" @click="changeAirport" class="btn" data-dismiss="modal">Save Changes</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="search_container"><!-- search bar container Begin -->
        <div class="search-bar-wrapper" id="search"><!-- collapse clearfix Begin -->
          <form method="get" action="result.php" class="navbar-form"><!--navbar-form Begin -->
            <div id="search-group" class="input-group "><!-- input-group Begin -->
              <input type="text" class="form-control" placeholder="Search..." name="user_query" required>
              <div class="input-group-btn"><!--input-group-btn begin -->
                <button id="sm-search-btn" type="submit" name="search" value="search" class="btn-search">
                  <fa-icon :icon="['fa', 'search']"/>
                </button>
              </div><!--input-group-btn Finish -->
            </div><!--input-group Finish -->
          </form><!-- navbar-form Finish -->
        </div><!-- collapse clearfix finish -->
      </div><!-- search bar container finish -->




    </nav>
  </div>
</template>

<script>

export default {
  name: "HomeMenu",
  props:{
    Current: String,
    Currentwx: String,
    Path: String,
    Airports: Array,
    // changeAirport: Function
    
  },
  data(){
    return {
      Selection: ''
    }
  },
  methods:{
    changeAirport: function(){
      console.log('clicked in header');
      localStorage.current = this.Selection
      this.Airports.forEach((airport) => {
        if(airport.name == this.Current){
          this.Path = `airport/${this.Current}`;
          this.Currentwx = airport.wx
          
        }

      })
        
      window.location.reload(); 
    },

    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// GENERAL STYLING START
* {
  margin: 0;
}
.homenav{
  width: 100%;
  height: 40px;
  background-color: var(--dark);
  
  display: grid;
  grid-template-columns: auto auto;
}
.airport{
  display: flex;
  justify-content: center;
  align-items: center;
}
.search_container{
  display: none;
}
// GENERAL STYLING END

// Popup Windows

.popup{
  margin: auto;
  margin-top: 10vh;
}
.modal-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-header h4{
  font-size: 2rem;
  padding-left: 10px;
  color: var(--blue);
}
.modal-header button{
  width: 50px;
  font-size: 1.8rem;
  background-color: white;
  border: none;
}
.popup-header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
}
.current-selection{
  margin-bottom: 20px;
  padding: 10px 0 10px 0;
  border:  1px solid var(--orange);
}
.popup-header span{
  display: flex;
  justify-content: center;
  width: 200px;
  color: var(--dark);
  
}
.change-span{
  font-size: 1.5rem;
  margin-top: 10px;
  padding: 0 0 20px 0;
  color: var(--brown);
}
.airportSel-content{
  
  padding: 10px;

  background-color: var(--lightwhite);
}
.header-span1{
  color: var(--gray);
  border-bottom: 1px solid var(--dark);
  font-size: 1.0rem;
}
.header-span2{
  font-size: 1.8rem;
  padding: 20px 0 20px 0;
  color: var(--darkblue) !important;
}
.header-links{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.weather-link{
  display: flex;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.95rem;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 200px;
}
.airport-form{
  width: 80%;
  border: none;
}
// AIRPORT SELECT START
.planeLanded{
  display: none;
}
.airport{
  display: flex !important;
  justify-content: center !important;
}
.btn__wrapper{
  height: 40px;
  width: 200px;
  outline: none;
  display: flex;
  border: none;
  border-left: 1px solid var(--primary) ;
  border-right: 1px solid var(--primary) ;
  background-color: var(--dark);
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--lightwhite1);
}
.btn__wrapper:hover{
  color: var(--dark);
  outline: none;
  
  background-color: var(--primary);
  .planeLanded{
  display: flex;
  }
  .plane{
  display: none;
}
}
.icon__airport{
  margin-right: 10px;
  font-size: 1.5rem;
}
.select__airport{
  display: flex;
  flex-direction: column;
  line-height: 1rem;
}
.top__select{
  font-size: 0.8rem;
}
.bottom__select{
  font-size: 1.0rem;
  font-weight: 700;
}
.modal-footer button ,.button{
  background-color: var(--dark);
  border: none;
  color: var(--lightwhite1);
}


// AIRPORT SELECT END

// HOMEMENU START
.homemenu{
  display: flex;
  align-items: center;
  height: 100%;
}
.link__homemenu{
  display: grid;
  height: 100%;
  grid-template-columns: repeat(5,150px);
  justify-content: start;
  align-items: center;
}
.link__homemenu > li {
  margin: 0 12.5px;
}
.link__homemenu > li a{
  text-decoration: none;
  height: 100%;
  padding: 7px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  color: var(--lightwhite1);
}
.link__homemenu > li a:hover{
  font-weight: 800;
  
}
// HOMEMENU END

// MD HOMEMENU START
@media (max-width: 790px){

  .homemenu{
    display: none;
  }
  
  .homenav{
    grid-template-columns: 1fr;
  }

  // navbar__search_container start
  .search_container{
    display: flex;
    justify-content: center;
  }
  .search-bar-wrapper{
    width: 100%;
  }
  .form-control{
    border-right: none;
    height: 40px;
    border-radius: 0;
    border: none;
    border-top: 1px solid var(--lightwhite);
    border-bottom: 1px solid var(--lightwhite);
  }

  .input-group-btn{
    display: flex;
    align-items: center;
    height: 40px;
    background-color: white;
    border: 1px solid var(--lightwhite);
    border-left: none;
  }
  .input-group-btn button{
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  width: 40px;
  font-size: 1.2rem;
  border: none;
  height: 80%;
  border-left: 1px solid var(--lightwhite);
  color: var(--blue);
  background: none;
  }
  // navbar__search_container end
}

// MD HOMEMENU END
</style>
