/* eslint-disable */ 
<template>
  <div class="main-container">

    <nav class="navbar"><!-- top-page-container Begin -->

      <div class="burger-wraper">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>

      <div class="companie-logo__container">
        <router-link to="/" class="companie-logo" href="index.html">
          <fa-icon class="logo-icon__companie-logo" :icon="['fas', 'tree']"/>
          <div class="logoText__Wrapper">
            <span class="top">Waka</span>
            <span class="bottom">Connection</span>
          </div>
        </router-link> 
      </div>

      <div class="search_container"><!-- search bar container Begin -->
        <div class="search-bar-wrapper" id="search"><!-- collapse clearfix Begin -->
          <form method="get" action="result.php" class="navbar-form"><!--navbar-form Begin -->
            <div id="search-group" class="input-group "><!-- input-group Begin -->
              <input type="text" class="form-control" placeholder="Search..." name="user_query" required>
              <div class="input-group-btn"><!--input-group-btn begin -->
                <button id="search-btn" type="submit" name="search" value="search" class="btn-search">
                  <fa-icon :icon="['fa', 'search']"/>
                </button>
              </div><!--input-group-btn Finish -->
            </div><!--input-group Finish -->
          </form><!-- navbar-form Finish -->
        </div><!-- collapse clearfix finish -->
      </div><!-- search bar container finish -->

      <div class="menu-wraper__navbar"><!-- nav-bar__right-wraper start -->
        <ul class="menu-bar-lis">

          <li class="menu-bar__help  ">
            <a class="bugger" href="#">
              <fa-icon :icon="['fa', 'question-circle']" size="2x"/>
              <span>Help <div><fa-icon :icon="['fa', 'caret-down']" size="1x"/></div></span>
            </a>
          </li>



          <li  class="menu-bar__account dropdown show ">
            <a class="bugger menu-bar__account-a" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <fa-icon v-show="User" :icon="['fa', 'user-circle']" size="2x"/>
              <fa-icon v-show="!User" :icon="['fa', 'sign-in-alt']" size="2x"/>
              <span v-show="User">Account<div><fa-icon :icon="['fa', 'caret-down']" size="1x"/></div></span>
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
              </div>
            </div>
            

          </li>

          <li class="menu-bar__cart">
            <a class="bugger" href="#">
              <div>
                <fa-icon :icon="['fa', 'shopping-cart']" size="3x"/>
                <span>Cart</span>
                <div class="cart-count">0</div>
              </div>
            </a>
          </li>
        </ul>


        
      </div>

    </nav><!-- navbar container finish -->
    
    <div class="sm__navbar"><!-- wrapper__nav-bar Begin -->
      <div class="top-header-wrapper">
          
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
    </div>
  </div>
</template>

<script>
import ModalLogin from './ModalLogin.vue';
import {fb} from '../firebase'
// import logout from '../admin/Admin'

export default {
  
  
  name: "Navbar",
  components:{
    ModalLogin
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
              // console.log(err);
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

* {
  margin: 0;
  padding: 0;
}
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
.navbar{
  width: 100%;
  height: 60px;
  background-color: var(--blue);
  display: grid;
  grid-template-columns: auto auto 1fr 350px;
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
.companie-logo__container {
  height: 60px;
  padding: 0 60px 0 0;
  display: flex;
  align-items: center;
}
.logo-icon__companie-logo{
  font-size: 2.6rem;
}
.companie-logo{
  display: flex;
  text-decoration: none;
  color: white;
}
.logoText__Wrapper {
  display: flex;
  flex-direction: column;
  line-height: 1.4rem;
  justify-content: center;
  align-items: flex-start;
  margin-left: 2px;
}

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
.search_container{
  justify-content: center;
}
.form-control{
  border-right: none;
}
.input-group-btn{
  display: flex;
  align-items: center;
  height: 38px;
  background-color: white;
  border-radius: 0 0.25rem 0.25rem 0;
  border: 1px solid #ced4da;
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
 border-left: 1px solid #ced4da;
 color: var(--blue);
 background: none;
}
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
 .navbar{
   grid-template-columns: auto 1fr auto;
 }
 .companie-logo__container{
   justify-content: center;
   padding: 0;
 }
 .menu-wraper__navbar{
  margin: 0;
 }
} 


// SM NAVBAR STYLE END


</style>
