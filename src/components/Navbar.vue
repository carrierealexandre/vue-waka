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
            <button class="selectAirport__top-menu-btn" @click="dropAirportMenu" >
              <span>Going to:</span>
              <div class="selectAirport__Current--Airport ">
              <span v-if="Current">{{Current}}</span>
              <span v-if="!Current">Select your airport</span>
                <div class=" nav-utility__icon--arrow-down ">
                  <fa-icon class="chevron-down"  :icon="['fa', 'chevron-down']" size="1x"/>
                </div>
              </div>
            </button>
            <div  id="toggleAirportMenu" class="drop-menu">
              <div class="selected-airpport__wrapper">
                <div class="selected-airpport__header">
                  <p class="selected-airpport__header--title">My Airport :</p>
                  <button @click="dropAirportMenu" class="selected-airpport__toggle">
                    <span class="selected-airpport__toggle-close">&#10006;</span>
                  </button>
                </div>

                <div class="selected-airpport__airport">
                  <span class="selected-airpport__airport--title">Pikangikum Aiport</span>
                  <div class="selected-airpport__airport--info">
                    Pikangikum Ontario
                    , 
                    N51 49 11 W93 58 24
                    <span>(514) 220-8591</span>
                  </div>
                  <span>Open monday to friday - 8:00am to 5:00pm</span>
                </div>
                <div class="selected-airpport__actions">
                  <a href="#" class="selected-airpport__actions--details">Aiport details</a>
                  <button class="comp-btn-dark-rect">
                    Change airport
                  </button>
                </div>

              </div>
            </div><!-- popup start -->
          
          </div>

        </div>

        <nav role="nav" class="nav-utility">
          <ul>
            <li class="menu__help--li">
              <!-- Help -->
              <button id="helpMenu" @click="dropHelpMenu" class="nav-button top-nav-button ">

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
              <ul id="toggleHelpMenu" class="drop-menu help-bg ">
                <li>
                  <div class="drop-down__body">
                    <ul>
                      <li class="drop-menu__items">
                        <a href="#">Help Centre</a>
                        
                        
                      </li>
                    
                    
                      <li  class="drop-menu__items">
                        <a href="#">Shiping info</a>
                        
                        
                      </li>
                    
                    
                      <li class="drop-menu__items">
                        <a href="#">Returns and guarantee</a>
                        
                        
                      </li>
                    
                    
                      <li class="drop-menu__items">
                        <a href="#">contact us</a>
                        
                        
                      </li>

                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li class="menu__help--li" >
              <!-- Account -->
              <button id="accountMenu" @click="dropAccountMenu" class="nav-button top-nav-button" >

                <div class="nav-utility__icon nav-utility__icon--help">
                  <fa-icon  :icon="['fa', 'user-circle']" size="1x"/>
                </div>
                <span class="nav-utility__label">
                  Account
                </span>
                <div class="nav-utility__icon nav-utility__icon--arrow-down">
                  <fa-icon class="chevron-down"  :icon="['fa', 'chevron-down']" size="1x"/>
                </div>

              </button>
              <ul id="toggleAccountMenu" class="drop-menu  ">
                <li class="signin__link">
                  <div class="signin__link--item">
                    <span v-if="!User">HELLO</span>
                    <span v-if="User">HI, {{Profile.firstName}}</span>
                    <!-- <span v-if="User">{{profile.firstName}}</span>  -->
                    <button v-if="!User" class="btn btn-primary"><modallogin ></modallogin></button>

                    
                  </div>
                </li>
                <li>
                  <div class="drop-down__body">
                    <ul>
                      <li class="drop-menu__items">
                        <a href="#">Order history</a>
                        
                          <fa-icon class="chevron-right__drop-menu" :icon="['fa', 'chevron-right']" size="1x"/>
                        
                      </li>
                    
                    
                      <li v-if="!User" class="drop-menu__items">
                        <a href="#">Account</a>
                        
                          <fa-icon class="chevron-right__drop-menu" :icon="['fa', 'chevron-right']" size="1x"/>
                        
                      </li>
                    
                    
                      <li v-if="User" class="drop-menu__items">
                        <a href="#">Manage credit cards</a>
                        
                          <fa-icon class="chevron-right__drop-menu" :icon="['fa', 'chevron-right']" size="1x"/>
                        
                      </li>
                    
                    
                      <li v-if="User" class="drop-menu__items">
                        <a href="#">Manage my account</a>
                        
                          <fa-icon class="chevron-right__drop-menu" :icon="['fa', 'cogs']" size="1x"/>
                        
                      </li>
                    
                    
                      <li v-if="User" class="drop-menu__items">
                        <a  @click="logout" href="#">{{LogOut}}</a>
                        
                        <fa-icon class="chevron-right__drop-menu" :icon="['fa', 'sign-out-alt']" size="1x"/>
                        
                      </li>

                    </ul>
                  </div>
                </li>
                
                <li v-if="!User"  class="drop-menu__footer--li">
                  
                  <div class="drop-menu__footer--item">
                    <div class="drop-menu__items--btn">
                      <a href="#"><modalregister></modalregister></a>
                    </div>
                  </div>

                </li>
                
              </ul>
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
            
          <label for="menu-btn" class="btn menu-btn">|||</label>
          </ul>
        </nav>
        <div class="header__bottom">
          <nav class="navigation-menu-primary">
            <input type="radio" name="slide" id="menu-btn">
            <input type="radio" name="slide" id="cancel-btn">

            <ul class="nav-primary__item-list">
              <label for="cancel-btn" class=" btn cancel-btn">&times;</label>
              <!-- Shop -->
              <li class="mega-menu-item mega-menu-item--grocery ">
                <button id="shopBtn" @click="groceryMegaMenu" class="nav-button sub-menu--btn desktop-item">
                  <span>Shop</span>
                  <fa-icon id="shopMegaMenuicon" class="np-menu__chervron chevron-down "  :icon="['fa', 'chevron-down']" size="1x"/>
                </button>
                <input type="checkbox" id="showMegaShop">
                <label for="showMegaShop" class="mobile-item">Shop </label>
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
                <button id="cargoBtn" @click="cargoMegaMenu" class="nav-button sub-menu--btn desktop-item">
                  <span>Services</span>
                  <fa-icon id="cargoMegaMenuicon" class="np-menu__chervron chevron-down"  :icon="['fa', 'chevron-down']" size="1x"/>
                </button>
                <input type="checkbox" id="showMegaServices">
                <label for="showMegaServices" class="mobile-item">Services</label>
                <div id="cargoMegaMenuBox" class="mega-box ">
                  
                  <div  class="content">
                    <div class="row mega-row--img">
                      
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
                <button id="charterBtn" @click="charterMegaMenu" class="nav-button sub-menu--btn desktop-item">
                  <span>Covid-19 info</span>
                </button>
                <input type="checkbox" id="showMegaServices">
                <label for="" class="mobile-item">Covid-19 info</label>
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
                <button id="aboutUsBtn" @click="aboutUsMegaMenu" class="nav-button sub-menu--btn desktop-item">
                  <span>About Us</span>
                  <fa-icon id="aboutUsMegaMenuIcon" class="np-menu__chervron chevron-down"  :icon="['fa', 'chevron-down']" size="1x"/>
                </button>
                <input type="checkbox" id="showMegaAbout">
                <label for="showMegaAbout" class="mobile-item">About Us</label>
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
import {fb, db} from '../firebase'
import $ from 'jquery'

// import logout from '../admin/Admin'

export default {
  
  
  name: "Navbar",
  props:{
    Current: String,
    Currentwx: String,
    Path: String,
    Airports: Array,
    // changeAirport: Function
    
  },
  components:{
    // ModalLogin
  },
  // firestore(){
  //   if(this.User){
  //     const user = fb.auth().currentUser;
  //     return{
  //         profile: db.collection('Profiles').doc(user.uid),
  //     }

  //   }
      
  // },
  watch: {
    User(){
      if(this.User){
        
        console.log("login");
        const user = fb.auth().currentUser;
        var docRef = db.collection("Profiles").doc(user.uid);
        docRef.get().then((doc) => {
          this.profile =  doc.data();
        })
      }
      if(!this.User){
        console.log("LogOUT");
        
      }
    }
  },
  data() {
     
    return {
      showModal: false,
      LogOut:'Logout',
      Register:'Register',
      User:false,
      Profiles:[],
      Profile:{}
      
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
      $("#toggleAirportMenu").toggleClass("climb-menu")
    },
    dropHelpMenu: function(){
      $("#helpMenu").toggleClass("top-nav-button-active")
      $("#toggleHelpMenu").toggleClass("bouncing-menu")
    },
    dropAccountMenu: function(){
      $("#accountMenu").toggleClass("top-nav-button-active")
      $("#toggleAccountMenu").toggleClass("bouncing-menu")
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
              console.log("logOut");
              this.Profile = {}
          })
          .catch((err) =>{
              console.log(err);
          });
      }

  },
  mounted() {
    
    let self = this
    fb.auth().onAuthStateChanged((user) => {
      
      if (user) {
        self.User = true
        console.log("login");
        const user = fb.auth().currentUser;
        console.log(user);
        var docRef = db.collection("Profiles").doc(user.uid);
        docRef.get().then((doc) => {
          console.log(doc.id);
          console.log(doc.data());
          this.Profile = doc.data();
        })
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
.selectAirport .selectAirport__top-menu-btn{
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    color: var(--compGray);
    z-index: 9;
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
.sub-menu--btn::after{
  position: absolute;
  content: '';
  height: 1px;
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
//Select Aiport dropdown
.selected-airpport__wrapper{
  margin: 2em;
}
.selectAirport .drop-menu{
  z-index: 5;
  background: var(--compWhite) ;
  width: 380px;
  top: 65px;
  height: 0%;
  line-height: 45px;
  position: absolute;
  transition: all 0.5s ease !important;
  overflow: hidden;
  border-radius: 1.5px;
  box-shadow: var(--shadow1);
}
.selected-airpport__header{
  display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
    line-height: 20px;
}
.selected-airpport__header--title{
  font-family: Helvetica Neue,Helvetica,sans-serif;
    font-size: 14px;
    color: #666;
    line-height: 20px;
        margin: 0 0 12px;
}
.selected-airpport__toggle{
  background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
    
}
.selected-airpport__toggle-close{
  
    color: #000;
    font-size: 20px !important;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    right: -3px;
    margin: 0;
}
.selected-airpport__airport{
  display: flex;
    flex-direction: column;
}
.selected-airpport__airport--title{
      width: 100%;
    line-height: normal;
    font-size: 16px;
    font-weight: 700;
    color: #191919;
}
.selected-airpport__airport--info{
  
    margin: 1em 0;
    color: #666;
    line-height: 20px;
    display: flex;
    flex-direction: column;
}
.selected-airpport__actions{
      display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1px;
    margin-top: 1em;
    text-decoration: underline;
}
.selected-airpport__actions--details{
  
    line-height: 19px;
    font-size: 16px;
    color: #191919;
    margin: 0 1em 0 0;
}
// END
.menu__help--li{
  position: relative;
}
.help-bg{
  background: var(--compWhite) !important ;

}
.nav-utility .drop-menu{
  background: var(--darkT) ;
  min-width: 16.5rem;
  top: 35px;
  // height: 0%;
  // left: 25px;
  left: -50%;
  line-height: 45px;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease !important;
  overflow: hidden;
  border-radius: 1.5px;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
  display: flex;
  flex-direction: column;;
}
.signin__link{
  padding: 0 !important;
}
.signin__link--item{
  background: var(--compWhite);
  padding: .85rem;
  position: relative;
  border-radius: 2px 2px 0 0;
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  justify-content: space-between;
}
.signin__link--item span{
  font-size: 20px;
  padding: .3rem 0;
  font-weight: 700;
  color: var(--dark);
}
.signin__link--item button{
      padding: 8px 14px;
      font-weight: 700;
      background: var(--compOrange);
      border: none;
      outline: none;
      color: var(--compWhite);

}
.signin__link--item button:hover{
      background: orangvar(--compOrangeHover);
      outline: none;
}
.top-nav-button::after{
  position: absolute;
  content: '';
  
  height: 0;
  width: 100%;
  bottom: -16px;
  background: var(--compWhite);
  transition: all 0.3s ease ;
  
}
.top-nav-button-active::after{
  height: 5px;
}
.drop-down__body ul{
  font-size: 14px;
  display: flex;
  flex-direction: column;
}
.drop-menu__items:last-of-type{
  border-bottom: none;
}
.drop-menu__items{
  border-bottom: 1px solid var(--compGrayTransparent);
}

.help-bg .drop-menu__items{
  border-bottom: 1px solid var(--compGray);
}
.drop-menu__items{
  position: relative;
  padding: 1rem .75rem !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--compGray);
}
.drop-menu__items:hover{
  color: var(--compWhite);
}
.drop-menu__items a{
  padding: 0 !important;
  color: var(--compWhite);
}
.help-bg .drop-menu__items a{
  padding: 0 !important;
  color: var(--dark);
}
.drop-menu__items a:hover{
  color: var(--compOrange);
  text-decoration: none;
}
.drop-menu__footer--li{
  padding:0 !important;
}
.drop-menu__footer--item{
  padding: 0 .25rem .25rem;
  display: flex;  
  width: 100%;
}
.drop-menu__items--btn{
  margin: .5rem;
  display: flex;
  flex-grow: 1;
  text-align: center;
}
.drop-menu__items--btn a{
  font-weight: 700 !important;
  // line-height: 1.25;
  padding: 8px 14px !important;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 4px !important;
  white-space: normal;
  color: var(--compWhite);
  border: 1px solid var(--compWhite);
  background-color: transparent;
  border-color: #fff;
}
.drop-menu__items--btn a:hover{
  border: 1px solid var(--compGray);
  text-decoration: none;

}
.bouncing-menu{
  top: 40px !important;
  transition: all 0.3s ease !important;
  opacity: 1 !important;
  visibility: visible !important;

}
.selectAirport button,.selectAirport button:focus{
  outline: none;
}
.climb-menu{
  height: fit-content !important;
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
  opacity: 0;
  padding: 0 30px;
  visibility: hidden;
  left: 0;
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
  box-shadow: 0 16px 16px rgba(0,0,0,0.12);;

}
.mega-menu-item .content-active{
  opacity: 1;
  visibility: visible;
  top: 109px !important;
  transition: all 0.5s ease;
}

.rotate-menu-icon{
  transform: rotate(180deg);
  transition: 0.5s ease;
}
.mega-row--img{
  position: relative;
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
.nav-primary__item-list .btn, .nav-utility .menu-btn{
  color: var(--compGray);
  font-size: 30px;
  cursor: pointer;
  display: none;
}

.nav-primary__item-list .cancel-btn{
  position: absolute;
  right: 30px;
  top: 10px;
}
.header__bottom input{
  display: none;
}
.mega-menu-item label{
  display: none;
}
@media screen and (max-width: 970px) {
  // deleting margin and padding of the buger menu's Item
  .mega-menu-item{
    margin: 0 !important;
  }
  // 
  .content .row img{
    display: none;
  }
  .nav-primary__item-list .btn{
    color: var(--dark);
  }
  .nav-primary__item-list .btn, .nav-utility .menu-btn{
    display: block;
  }
  .main-container .nav-primary__item-list{
    position: fixed;
    z-index: 10;
    height: 100vh;
    width: 100%;
    max-width: 350px;
    background: var(--compWhite);
    display: block;
    top: 0;
    // left: 0;
    left: -100%;
    overflow-y: auto;
    line-height: 50px;
    padding: 50px 0px;
    box-shadow: 0 15px 15px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
  }
  #menu-btn:checked ~ .nav-primary__item-list{
    left: 0%;
  }
  #menu-btn:checked ~ .btn.menu-btn{
    display: none;
  }
  #showMegaShop, #showMegaServices, #showMegaAbout,#menu-btn,#cancel-btn{
    display: none;
  }
  #showMegaShop:checked ~ .mega-box, #showMegaServices:checked ~ .mega-box, #showMegaAbout:checked ~ .mega-box{
    max-height: 1500px;
    
    // padding: 20px;
  }
  #showMegaShop:checked ~ label, #showMegaServices:checked ~ label, #showMegaAbout:checked ~ label{
    background: var(--compGray);
  }
  .nav-primary__item-list .desktop-item{
    display: none;
  }
  .nav-primary__item-list .mobile-item{
    display: flex;
    align-items: center;
    font-size: 17px;
    color: var(--dark);
    font-weight: 300;
    padding-left: 20px;
    font-family: sans-serif;
    cursor: pointer;
    border-radius: 5;
    transition: all 0.3 ease;
    height: 60px;
  }
  .nav-primary__item-list .mobile-item:hover{
    background: var(--compGray);
    color: var(--dark);
    border-radius: 1.5px;

  }

  .sub-menu--btn::after{
    display: none;
  }
  .nav-primary__item-list::-webkit-scrollbar{
    width: 0px;
  }
  .nav-primary__item-list li{
    margin: 0 !important;
  }
  .mega-menu-item{
    padding: 0;
  }
  .nav-primary__item-list li a{
    // padding: 0 20px !important;
    display: block;
    font-size: 20px;
  }
  // .drop-menu{
  //   position: static;
  //   opacity: 1;
  //   visibility: visible;
  //   top: 65px;
  //   padding-left: 20px;
  //   width: 100%;
  // }
  // .drop-menu li{
  //   margin: 0;
  // }
  // .drop-menu li a{
  //   font-size: 18px ;
  //   border-radius: 5px;
  // }
  // MEGA_MENU
  .mega-box{
    position: static;
    top: 65pc;
    width: 100%;
    opacity: 1;
    visibility: visible;
    padding: 0px ;
    max-height: 0px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: none;
  }
  .mega-box .content{
    
    background: var(--compWhite);
    flex-direction: column;
    padding: 20px 20px 0 20px;
  }
  // fixing colours
  .content .row li a, .content .row header{
    color: var(--dark);
    padding:0;
    font-size: 16px;
    font-weight: 300;
  }
  .mega-box .content .row{
    width: 100%;
    margin-bottom: 15px;
    border-top: 1px solid var(--compGray);
  }
  // 
  .mega-box .content .row:nth-child(1),
  .mega-box .content .row:nth-child(2){
    border-top: 0px;
  }

  .mega-links li{
    padding: 0;
  }
  .content .last-row .mega-links,.content .row .mega-links{
    border: 0px;
    padding-left: 15px;
  }
  .row .mega-links li a{
    margin: 0;
    padding: 5px 10px;
  }
  .row .mega-links li a:hover{
    background: var(--compGray);
    border-radius: 1.5px;
    color: var(--dark);
  }
  .content .row header{
    font-size: 19px;
  }
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
