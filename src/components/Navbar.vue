/* eslint-disable */ 
<template>
  <div class="main-container">

    <div class="navbar__main-content"><!-- top-page-container Begin -->

      

      
      <router-link to="/" class="companie-logo" href="index.html">
        
        <div class="logoText__Wrapper">
          <div class="logoText">
            <span>Wakabox</span>
          </div>
        </div>

      </router-link> 
      
    
      <div class="header__content">

        <div class="header__content--left-section">

          <div class="header__top">
            <!-- SearchBox -->
            <div class="search_container"><!-- search bar container Begin -->
              <div class="search-bar-wrapper" id="search"><!-- collapse clearfix Begin -->
                <form method="get" action="result.php" class="navbar-form"><!--navbar-form Begin -->
                  <div id="search-group" class="rich-input "><!-- input-group Begin -->
                    <input type="text" class="search__input" placeholder=" I'm looking for" name="user_query" required>
                    <div class="input-group-btn"><!--input-group-btn begin -->
                      <button id="search-btn" type="submit" name="search" value="search" class="btn-search">
                        <fa-icon :icon="['fa', 'search']"/>
                      </button>
                    </div><!--input-group-btn Finish -->
                  </div><!--input-group Finish -->
                </form><!-- navbar-form Finish -->
              </div><!-- collapse clearfix finish -->
            </div><!-- search bar container finish -->
          </div>

          <!-- Select you Airport:  -->
          <div class="selectAirport">
            <button @click="dropAirportMenu">
              <span>Going to:</span>
              <div class="selectAirport__Current--Airport ">
                <span>Pikangikum</span>
                <div class=" nav-utility__icon--arrow-down ">
                  <fa-icon class="chevron-down"  :icon="['fa', 'chevron-down']" size="1x"/>
                </div>
              </div>
            </button>
            <ul class="drop-menu">
              <li><a href="#">Drop-menu 1</a></li>
              <li><a href="#">Drop-menu 2</a></li>
              <li><a href="#">Drop-menu 3</a></li>
              <li><a href="#">Drop-menu 4</a></li>
            </ul>
          </div>

        </div>

        <nav role="nav" class="nav-utility">
          <ul>
            <li>
              <!-- Help -->
              <button class="nav-button">

                <div class="nav-utility__icon nav-utility__icon--help">
                  <fa-icon :icon="['fa', 'question-circle']" size="1x"/>
                </div>
                <span class="nav-utility__label">
                  Help
                </span>
                <div class="nav-utility__icon nav-utility__icon--arrow-down">
                  <fa-icon class="chevron-down" :icon="['fa', 'chevron-down']" size="1x"/>
                </div>

              </button>
            </li>
            <li>
              <!-- Account -->
              <button class="nav-button" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                <div class="nav-utility__icon nav-utility__icon--acount">
                  <fa-icon v-show="User" :icon="['fa', 'user-circle']" size="1x"/>
                  <fa-icon v-show="!User" :icon="['fa', 'sign-in-alt']" size="1x"/>
                </div>
                <span class="nav-utility__label">
                  Account
                </span>
                <div class="nav-utility__icon nav-utility__icon--arrow-down">
                  <fa-icon class="chevron-down"  :icon="['fa', 'chevron-down']" size="1x"/>
                </div>

              </button>
              <div>
                <div class="dropdown-menu sub-menu-links" aria-labelledby="dropdownMenuLink">
                  <a v-show="!User"><modallogin class="sub-menu-links-a" ></modallogin></a>
                  
                  <a v-show="!User"><modalregister class="sub-menu-links-a"
                  :menuTitle='Register'
                  ></modalregister></a>

                  <a v-show="User" href="#" @click="logout" class="sub-menu-links-a">{{LogOut}}</a>
                  
                  <a class="sub-menu-links-a" href="#">Settings</a>           
                  <router-link to="/admin" class="sub-menu-links-a"><span>Admin</span></router-link>

                  

                  
                </div>
              </div>
            </li>
            <li>
              <!-- Cart -->
              <router-link to="/cehckout" class="nav-button nav-button--utility" href="index.html">

                <div class="nav-utility__icon nav-utility__icon--cart">
                  <fa-icon :icon="['fa', 'shopping-cart']" size="1x"/>
                </div>
                <span>
                  Cart
                </span>
                <span class="badge--count nav-utility__cart-badge">1</span>
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="header__bottom">
          <nav class="navigation-menu-primary">
            <ul class="nav-primary__item-list">
              <!-- Shop -->
              <li class="mega-menu-item mega-menu-item--grocery ">
                <button id="shopBtn" @click="groceryMegaMenu" class="nav-button">
                  <span>Shop</span>
                  <fa-icon id="shopMegaMenuicon" class="np-menu__chervron chevron-down "  :icon="['fa', 'chevron-down']" size="1x"/>
                </button>
                <div id="shopMegaMenuBox" class="mega-box ">
                  
                  <div class="content">
                    <div class="row">
                      <img src="../../public/home_img/cart.jpg"  alt="">
                    </div>
                    <div class="row">
                      <header>Grocery</header>
                      <ul class="mega-links">
                        <li>
                          <router-link class="mega-links__a" to="/cehckout">Frozen</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Refridgerated</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Health & Beauty</router-link>
                        </li>

                      </ul>
                    </div>
                    <div class="row">
                      <header class="not-visible">Invisible</header>
                      <ul class="mega-links">
                        <li>
                          <router-link  to="/cehckout">Beverage</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Clening Supply</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Chips</router-link>
                        </li>

                      </ul>
                    </div>
                    <div class="row last-row">
                      
                      <ul class="mega-links">
                        <li>
                          <router-link  to="/cehckout">Shop all</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">deals</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">New</router-link>
                        </li>

                      </ul>
                    </div>
                  </div>

                </div>
                
                
              </li>
              <!-- Services -->
              <li class="mega-menu-item mega-menu-item--cargo ">
                <button id="cargoBtn" @click="cargoMegaMenu" class="nav-button">
                  <span>Services</span>
                  <fa-icon id="cargoMegaMenuicon" class="np-menu__chervron chevron-down"  :icon="['fa', 'chevron-down']" size="1x"/>
                </button>
                <div id="cargoMegaMenuBox" class="mega-box ">
                  
                  <div  class="content">
                    <div class="row">
                      <img src="../../public/home_img/delivery.jpg"  alt="">
                    </div>
                    <div class="row last-row">
                      <header>Cargo Delivery</header>
                      <ul class="mega-links">
                        <li>
                          <router-link class="mega-links__a" to="/cehckout">Shipping rate</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">System delivery</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Limitation</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Notifications</router-link>
                        </li>

                      </ul>
                    </div>
                    <div class="row last-row">
                      <header>Community</header>
                      <ul class="mega-links ">
                        <li>
                          <router-link  to="/cehckout">Receiving</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Airports</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Weather</router-link>
                        </li>

                      </ul>
                    </div>
                    <div class="row last-row">
                      <header>Support</header>
                      <ul class="mega-links ">
                        <li>
                          <router-link  to="/cehckout">Assistance</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Freight tracking</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">recals</router-link>
                        </li>

                      </ul>
                    </div>
                  </div>

                </div>
              </li>
              <!-- About Us -->
              <li class="mega-menu-item mega-menu-item--charter ">
                <button id="charterBtn" @click="charterMegaMenu" class="nav-button">
                  <span>Covid-19 info</span>
                </button>
                <!-- <div id="charterMegaMenuBox" class="mega-box ">
                  
                  <div  class="content">
                    <div class="row">
                      <img src="../../public/home_img/delivery.jpg"  alt="">
                    </div>
                    <div class="row">
                      <header>Grocery</header>
                      <ul class="mega-links">
                        <li>
                          <router-link class="mega-links__a" to="/cehckout">Frozen</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Refridgerated</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Health & Beauty</router-link>
                        </li>

                      </ul>
                    </div>
                    <div class="row">
                      <header class="not-visible">Invisible</header>
                      <ul class="mega-links">
                        <li>
                          <router-link  to="/cehckout">Beverage</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Clening Supply</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Chips</router-link>
                        </li>

                      </ul>
                    </div>
                    <div class="row last-row">
                      
                      <ul class="mega-links">
                        <li>
                          <router-link  to="/cehckout">Shop all</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">deals</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">New</router-link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div> -->
              </li>
              
              <!-- About Us -->
              <li class="mega-menu-item mega-menu-item--about-us ">
                <button id="aboutUsBtn" @click="aboutUsMegaMenu" class="nav-button">
                  <span>About Us</span>
                  <fa-icon id="aboutUsMegaMenuIcon" class="np-menu__chervron chevron-down"  :icon="['fa', 'chevron-down']" size="1x"/>
                </button>
                <div id="AboutUsMegaMenuBox" class="mega-box ">
                  
                  <div  class="content">
                    <div class="row">
                      <img src="../../public/home_img/delivery.jpg"  alt="">
                    </div>
                    <div class="row">
                      <header>Grocery</header>
                      <ul class="mega-links">
                        <li>
                          <router-link class="mega-links__a" to="/cehckout">Frozen</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Refridgerated</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Health & Beauty</router-link>
                        </li>

                      </ul>
                    </div>
                    <div class="row">
                      <header class="not-visible">Invisible</header>
                      <ul class="mega-links">
                        <li>
                          <router-link  to="/cehckout">Beverage</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Clening Supply</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">Chips</router-link>
                        </li>

                      </ul>
                    </div>
                    <div class="row last-row">
                      
                      <ul class="mega-links">
                        <li>
                          <router-link  to="/cehckout">Shop all</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">deals</router-link>
                        </li>
                        <li>
                          <router-link  to="/cehckout">New</router-link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </div> 

      <!-- <div class="menu-wraper__navbar">nav-bar__right-wraper start
        <ul class="menu-bar-lis"> --> 

          



          <!-- <li  class="menu-bar__account dropdown show ">
            <a class="bugger menu-bar__account-a" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <fa-icon v-show="User" :icon="['fa', 'user-circle']" size="2x"/>
              <fa-icon v-show="!User" :icon="['fa', 'sign-in-alt']" size="2x"/>
              <span v-show="User">Account<div><fa-icon :icon="['fa', 'chevron-down']" size="1x"/></div></span>
              
              <span v-show="!User">Sing In</span>
            </a>
            <div>
              <div class="dropdown-menu sub-menu-links" aria-labelledby="dropdownMenuLink">
                <a v-show="!User"><modallogin class="sub-menu-links-a" ></modallogin></a>
                
                <a v-show="!User"><modalregister class="sub-menu-links-a"
                :menuTitle='Register'
                ></modalregister></a>

                <a v-show="User" href="#" @click="logout" class="sub-menu-links-a">{{LogOut}}</a>
                
                 <a class="sub-menu-links-a" href="#">Settings</a>           
                <router-link to="/admin" class="sub-menu-links-a"><span>Admin</span></router-link>

                

                
              </div>
            </div>
            

          </li> -->

          <!-- <li class="menu-bar__cart">
            <a class="bugger" href="#">
              <div>
                <fa-icon :icon="['fa', 'shopping-cart']" size="3x"/>
                <span>Cart</span>
                <div class="cart-count">0</div>
              </div>
            </a>
          </li> -->
        <!-- </ul> -->


        
      <!-- </div> -->

    <!-- </div> navbar container finish -->
    
    <!-- <div class="sm__navbar">wrapper__nav-bar Begin -->
      <!-- <div class="top-header-wrapper">
          
        <nav class="nav-bar">
          <div class="burger-wraper">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>

          <div class="nav-menu-container">
            <ul class="nav-menu-container__selector">
              <li><a href="#">Airports</a></li>
              <li><a href="#">Shopping</a></li>
              <li><a href="#">Alert System</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">conctact</a></li>
              <li><a href="#">About us</a></li>
            </ul>
          </div>

          <div id="navLogoContainer" class="nav-bar_companie-logo">
            <a href="index.html">
              <i class="fas fa-tree fa-3x"></i>
              <h1>WC</h1>
            </a> 
          </div>

          <div class="nav-bar__right-wraper">
            <ul class="menu-bar-lis">
                
              <li id="phoneSearchIcon" class="menu-bar__search">
                <button role="button" class="search_trigger nav-button">
                  <div class="search-trigger__icon">
                    <i class="fas fa-search fa-2x"></i>
                    <span>Search</span>
                  </div>
                </button>
              </li>
              <li class="menu-bar__help">
                <button role="button" class="help_trigger nav-button">
                  <div class="help-trigger__icon">
                    <i class="far fa-question-circle fa-2x"></i>
                    <span>Help</span>
                  </div>
                </button>
              </li>
              <li class="menu-bar__cart">
                <button role="button" id="show-cart-btn" class="cart_trigger nav-button">
                  <div class="cart-trigger__icon">
                    <i class="fas fa-shopping-cart fa-2x"></i>
                    <span>Cart</span>
                  </div>
                </button>
              </li>
              <li  class="menu-bar__account">
                <button role="button" class="account_trigger nav-button">
                  <div class="account-trigger__icon">
                    <i class="fas fa-user-circle fa-2x"></i>
                    <span>Account</span>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div> -->

  </div>
</template>

<script>
// import ModalLogin from './ModalLogin.vue';
import {fb} from '../firebase'
import $ from 'jquery'

// import logout from '../admin/Admin'

export default {
  
  
  name: "Navbar",
  components:{
    // ModalLogin
  },
  data() {
     
    return {
      showModal: false,
      LogOut:'Logout',
      Register:'Register',
      User:false
      
    }
  },
  methods: {
    groceryMegaMenu: function(){
      $("#shopBtn").toggleClass("nav-button-active")
      $("#shopMegaMenuBox").toggleClass("content-active")
      $("#shopMegaMenuicon").toggleClass("rotate-menu-icon")
    },
    cargoMegaMenu: function(){
      $("#cargoBtn").toggleClass("nav-button-active")
      $("#cargoMegaMenuBox").toggleClass("content-active")
      $("#cargoMegaMenuicon").toggleClass("rotate-menu-icon")
    },
    charterMegaMenu: function(){
      $("#charterBtn").toggleClass("nav-button-active")
      $("#charterMegaMenuBox").toggleClass("content-active")
      $("#charterMegaMenuIcon").toggleClass("rotate-menu-icon")
    },
    aboutUsMegaMenu: function(){
      $("#aboutUsBtn").toggleClass("nav-button-active")
      $("#AboutUsMegaMenuBox").toggleClass("content-active")
      $("#aboutUsMegaMenuIcon").toggleClass("rotate-menu-icon")
    },
    dropAirportMenu: function(){
      $(".drop-menu").toggleClass("climb-menu")
      
      
    },
    showLogin() {
      this.$modal.show('modal-login');
    },
    hide() {
      this.$modal.hide('modal-login')
    },
    show() {
      this.$modal.show('modal-register')
    },
    logout(){
          fb.auth().signOut()
          .then(() => {
              this.$router.replace('/airports');
          })
          .catch((err) =>{
              console.log(err);
          });
      }

  },
  mounted() {
    let self = this
    fb.auth().onAuthStateChanged(function(user) {
      
      if (user) {
        self.User = true
        
      }
      
    })
  }
};


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body{
  
  font-size: 16px;
  line-height: 1.5;
}
* {
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  font-family: Helvetica Neue,Helvetica,sans-serif;
}

// NEW NAVBAR STYLE START <----

// ORIGINAL
// .navbar__main-content{
//   padding: 1rem;
//   width: 85em;
//   height: auto;
//   background-color: var(--dark);
//   display: flex;
//   margin: auto;
  
// }
// CODENEPAL

// .main-container {
//   position: fixed;
//   background-color: var(--dark);
//   width: 100%;
//   z-index: 999;
  
// }
// .navbar__main-content{
//   background-color: var(--dark);
//   max-width: 1250px;
//   padding: 0 30px;
//   margin: auto;
//   display: flex;
//   padding: 1rem;
// }

.header__content{
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: center;
}
.header__content--left-section{
  display: flex;
  align-items: center;
}
.header__bottom{
  grid-column: 1 / 3;
}
.nav-utility ul {
  display: flex;
}
.selectAirport{
  min-width: 60px;
  padding-right: 1em;
  margin: 0 40% 0 0
}
.selectAirport button{
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    color: var(--compGray);
    z-index: 800;
    text-decoration: none;
    background-color: transparent;
    border: none;
    margin-bottom: 0;
    line-height: 1.25;
    // padding: 8px 14px;
    font-size: 16px;
    white-space: normal;
    // margin: 0 0 .625em;
    position: relative;
}
.selectAirport span{
  font-size: 14px ;
}
.selectAirport__Current--Airport{
  display: flex;
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    font-family: sans-serif;
    max-width: 10em;
    margin: 0;
    text-decoration: underline;
}
// search bar style
.header__top{
  width: 100%;
}
.search_container{
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    pointer-events: auto;
    overflow: visible;
    position: inherit;
}
.search-bar-wrapper{
  padding: 0 1em 0 0;
  background: none;
}
.navbar-form{
  height: 100%;
}
input{
  color: var(--compGray);
}
.search__input{
  text-shadow: 0px 0px 0px var(--compGray);
  -webkit-text-fill-color: transparent;
  background: #333;
  width: 100%;
  min-height: 40px;
  border: 0;
  height: 2.5rem;
  padding: 8px 12px;
}
.search__input:focus{
  outline: none;
}
.rich-input{
  display: flex;
  height: 100%;
  
}
.input-group-btn{
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 18px;
  background: #333;
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
 border-left: 1px solid var(--compGray);
 color: var(--compGray);
 background: none;
}
// companie logo style
.companie-logo{
  height: inherit;
}
.logoText__Wrapper {
  display: flex;
  height: 100%;
  background-color: var(--compOrange);
  margin: 0 1.5em 0 0;
}
.logoText{
  display: flex;
  justify-content: center;
  align-items: center;
}
.logoText span{
  text-transform: uppercase;
  padding: 0px 5px;
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: 2.5px;
  color: var(--dark);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
// account cart help menu
.nav-utility button, .nav-utility a {
  display: flex;
 

}

.nav-button{
  padding: 0;
  border: none;
  border-radius: 0;
  font-family: sans-serif;
  text-transform: none;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  position: relative;
  text-align: left;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  background: none;
  color: var(--compGray);
}
.nav-button:focus{
  outline: none;
}
.nav-button-active{
  color: var(--compOrange) !important;
}
.nav-button::after{
  position: absolute;
  content: '';
  height: 0px;
  width: 100%;
  bottom: -16px;
  background: var(--compWhite);
  transition: all 0.3s ease ;
}
.nav-button-active::after{
  height: 5px;
  transition: all 0.3s ease ;
}
.nav-utility__icon{
  display: flex;
  align-items: flex-end;
  padding: 0 10px 0 0;
  margin: 0 0 2px;
  width: auto;
  height: auto;
  min-width: 0;
}
.nav-utility__icon--arrow-down{
  padding: 0 0 0 5px;
  margin: 0;
}
.chevron-down{
  font-size: 0.7rem;
  transition: all 0.5s ease;
}
.nav-utility__cart-badge{
    font-weight: 600;
    position: relative;
    margin-left: .5em;
    color: var(--dark);
    padding: .2rem .25rem;
    line-height: 1;
    font-size: 12px;
    border-radius: 1.5625rem;
    min-width: 1.15rem;
    background-color: var(--compOrange);
    text-align: center;
    white-space: nowrap;
}
// bottom menu style 

.np-menu-item, .mega-menu-item{
  padding: 8px 1.5em 0 0;
  }
.nav-primary__item-list{
  display: flex;
}
.nav-utility li{
  padding: 0 .75em;
}
.np-menu__chervron{
  margin-left: 6px;
}
// CODENEPAL

.main-container {
  position: fixed;
  background-color: var(--dark);
  width: 100%;
  z-index: 999;
  
}
.navbar__main-content{
  position: relative;
  background-color: var(--dark);
  max-width: 1250px;
  padding: 0 30px;
  margin: auto;
  display: flex;
  padding: 1rem;
}
.selectAirport .drop-menu{
  background: var(--compWhite) ;
  width: 180px;
  top: 65px;
  height: 0%;
  line-height: 45px;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease !important;
  overflow: hidden;
  border-radius: 2.5px;
  box-shadow: var(--shadow);
}
.selectAirport button,.selectAirport button:focus{
  outline: none;
}
.climb-menu{
  height: 100% !important;
  opacity: 1 !important;
  visibility: visible !important;
  transition: all 0.5s ease !important;
}



.drop-menu li a {
  width: 100%;
  display: block;
  padding: 0 0 0 15px;
  font-weight: 400;
  border-radius: 0px;
}
// MEGA_MENU
.mega-box{
  position: absolute;
  z-index: -1 ;
  top: -246px;
  width: 100%;
  left: 0;
  box-shadow: var(--shadow1);
  transition: all 0.5s ease;
}
.mega-box .content{
  
  background: var(--compWhite);
  padding: 25px 20px;
  overflow: hidden;
  display: flex;
  width: 100%;
  justify-content: space-between;
  transition: all 0.5s ease;
}
.mega-menu-item .content-active{
  top: 109px !important;
  transition: all 0.5s ease;
}

.rotate-menu-icon{
  transform: rotate(180deg);
  transition: 0.5s ease;
}

.content .row{
  display: block;
  width:  calc(25% - 30px);
  line-height: 45px;
  
}
.content .row li a{
  color: var(--drak);
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 9px 15px;
}
.content .row li a:hover{
  color: var(--compGray);
}
.content .row img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content .row header{
  color: var(--dark) ;
  font-size: 20px;
  font-weight: 700;
}
.content .row ul, .mega-links__a {
 color: var(--dark);
 text-decoration: none;
 font-size: 18px;
 font-weight: 500;
 padding: 9px 15px;

}
.content .last-row .mega-links{
  border-left:  1px solid rgba(0, 0, 0, 0.09);
}
.mega-links li{
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
}
.content .row:nth-child(1),
.content .row:nth-child(1){
  border-left: 0px;
}
.mega-links li a{
  padding: 0 20px;
  font-size: 17px;
}
.not-visible{
  opacity: 0;
}
// NEW NAVBAR STYLE END<----









// --sm navbar style start--

// --sm navbar style end--

// --LG NAVAR STYLE START--
// navar__general style start
*{
  margin: 0;
  padding: 0;
}
.sm__navbar{
  display: none;
}
// navar__general style end
.burger-wraper{
  width: 30px;
  height: 40px;
  display: flex;
  margin: 0 20px;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
}
.burger-wraper:hover{
  cursor: pointer;
  .line1{
    background-color: var(--lightwhite);
  }
  .line2{
    background-color: var(--lightwhite);
  }
  .line3{
    background-color: var(--lightwhite);
  }
}
.line1{
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background-color: white;
}
.line2{
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background-color: white;
}
.line3{
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background-color: white;
}
// navbar burger style start

// navbar burger style end

//navbar__logo container style start
// .companie-logo__container {
//   height: 60px;
//   padding: 0 60px 0 0;
//   display: flex;
//   align-items: center;
// }
// .logo-icon__companie-logo{
//   font-size: 2.6rem;
// }
// .companie-logo{
//   display: flex;
//   text-decoration: none;
//   color: white;
// }

.top {
  font-size: 1.5rem;
  font-weight: 800;
}
.bottom {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--sandTan);
}
//navbar__logo container style end

// navbar__search_container start


// navbar__search_container end

//navbar__menu style start
.menu-wraper__navbar{
  margin: 0 40px;
}
.menu-bar-lis {
  display: flex;
  height: 60px;
  justify-content: space-between; 
  align-content: center;
}
.bugger{
  display: flex;
  font-weight: 700;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 0.8rem;
  color: white;
  text-decoration: none;
}
.menu-bar-lis > li{
  display: flex;
  align-items: center;
}
.menu-bar-lis > li a > span{
  line-height: 0.5rem;
  padding-top: 5px;
  font-size: 0.8rem;
}
.menu-bar__help{
  height: 100%;
}
.menu-bar__help a span{
  position: relative;
  display: flex;
  
}
.menu-bar__account a span{
  position: relative;
  display: flex;
}
.sub-menu-links{
  width: 100%;
  
  border-radius: 0 0 
  5px 5px;
  background-color: var(--lightwhite1);
}
.sub-menu-links-a{
 color: var(--blue);
 font-weight: 600;
 padding: 10px;
 
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 display: flex;
 flex-direction: column;
 width: 100%;
}
.sub-menu-links-a:hover{
  background-color: var(--primary);
  
}
// SIGN IN MODAL



// signIn Modal Start









// signIn Modal End

























.menu-bar__help a span div{
  position: absolute;
  bottom: -3px;
  right: -12px;
  color: var(--sandTan);
}
.menu-bar__account a span div{
  position: absolute;
  bottom: -3px;
  right: -12px;
  color: var(--sandTan);
}

.menu-bar__help a{
  
  width: 70px !important;
  
}
.menu-bar__account-a{
  
  width: 90px !important;
  
}
.menu-bar__cart a{
  display: flex;
  width: 90px !important;
  flex-direction: row !important;
}
.menu-bar__cart a > div{
  position: relative;
  display: flex;
  align-items: center;
}
.menu-bar__cart a > div span{
  align-self: flex-end !important;
  line-height: 0.5rem !important;
}
.cart-count{
  display: flex;
  position: absolute;
  width: 30px;
  height: 20px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  top: 4px;
  left: 11px;
  color: var(--blue);
}
.bugger:hover{
  border: 2px solid var(--lightwhite);
  border-radius: 5px;
  color: var(--lightwhite);
}

//navbar__menu style end
// LG NAVBAR STYLE END

// SM NAVBAR STYLE START
@media (max-width: 790px){
 .search_container{
  display: none;
 }
//  .navbar{
//    grid-template-columns: auto 1fr auto;
//  }
//  .companie-logo__container{
//    justify-content: center;
//    padding: 0;
//  }
 .menu-wraper__navbar{
  margin: 0;
 }
} 


// SM NAVBAR STYLE END


</style>
