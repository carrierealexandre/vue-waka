<template>
  <div class="admin">
   <div :class="closeMenu">
        <div id="show-sibar" @click=" toggled=true" class="somestuff">
          <i class="fas fa-bars"></i>
        </div>
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <a href="#">WakaConnection</a>
                    <div id="close-sidebar" @click=" toggled=!toggled">
                      <i class="fas fa-times"></i>
                    </div>
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                    <div class="user-pic">
                        <i class="fas fa-user-circle fa-3x" fa></i>
                    </div>
                    <div class="user-info">
                        <span class="user-name">Alexandre
                            <strong>Carriere</strong>
                        </span>
                        <span class="user-role">Administrator</span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                    </div>
                </div>
                <!-- sidebar-search  -->
                <div class="sidebar-item sidebar-search">
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search...">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                    <ul>
                        <li class="header-menu">
                            <span>Menu</span>
                        </li>
                        <li class="sidebar-dropdown" >
                            <router-link to="/admin/overview">
                                <i class="fa fa-tachometer-alt"></i>
                                <span class="menu-text">Overview</span>
                                <!-- <span class="badge badge-pill badge-warning">New</span> -->
                            </router-link>
                        </li>
                        <li @click="ToggleActive" id="accordion" class="sidebar-dropdown">
                          <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                              <i class="fa fa-shopping-cart"></i>
                              <span class="menu-text">Waka Connection</span>
                              <!-- <span class="badge badge-pill badge-danger">3</span> -->
                          </a>
                          <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                              <ul>
                                <li>
                                  
                                    
                                    <router-link class="submenu__sidebar" to="/admin/products">
                                      <fa-icon class="notch" :icon="['fa', 'circle-notch']" />
                                      <span>Products</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="submenu__sidebar" to="/admin/orders">
                                      <fa-icon class="notch" :icon="['fa', 'circle-notch']" />
                                      <span>Orders</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="submenu__sidebar" to="/admin/flights">
                                      <fa-icon class="notch" :icon="['fa', 'circle-notch']" /> 
                                      <span>Flights</span>
                                    </router-link> 
                                    
                                </li>
                                <li>
                                    <router-link class="submenu__sidebar" to="/admin/tracking">
                                      <fa-icon class="notch" :icon="['fa', 'circle-notch']" /> 
                                      <span>Tracking Numbers</span>
                                    </router-link> 
                                    
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li @click="ToggleActive" id="accordion" class="sidebar-dropdown">
                          <a href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <i class="far fa-gem"></i>
                                <span class="menu-text">Components</span>
                              <!-- <span class="badge badge-pill badge-danger">3</span> -->
                          </a>
                          <div id="collapseTwo" class="collapse " aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                              <ul>
                                <li>
                                  
                                    <router-link class="submenu__sidebar" to="/admin/general">
                                      <fa-icon class="notch" :icon="['fa', 'circle-notch']" />
                                      <span>General</span>
                                    </router-link> 
                                </li>
                                <li>
                                    <router-link class="submenu__sidebar" to="/admin/airports">
                                      <fa-icon class="notch" :icon="['fa', 'circle-notch']" />
                                      <span>Airports</span>
                                    </router-link> 
                                </li>
                                
                                <li>
                                    <router-link class="submenu__sidebar" to="/admin/icons">
                                      <fa-icon class="notch" :icon="['fa', 'circle-notch']" /> 
                                      <span>Icons</span>
                                    </router-link>  
                                    
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                    </ul>
                </div>
                <!-- sidebar-menu  -->
            </div>
            <!-- sidebar-footer  -->
            <div class="sidebar-footer">
                <div class="dropdown">

                    <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-bell"></i>
                        <!-- <span class="badge badge-pill badge-warning notification">3</span> -->
                    </a>
                    <div class="dropdown-menu notifications" aria-labelledby="dropdownMenuMessage">
                        <div class="notifications-header">
                            <i class="fa fa-bell"></i>
                            Notifications
                        </div>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                            <div class="notification-content">
                                <div class="icon">
                                    <i class="fas fa-check text-success border border-success"></i>
                                </div>
                                <div class="content">
                                    <div class="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. In totam explicabo</div>
                                    <div class="notification-time">
                                        6 minutes ago
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="dropdown-item" href="#">
                            <div class="notification-content">
                                <div class="icon">
                                    <i class="fas fa-exclamation text-info border border-info"></i>
                                </div>
                                <div class="content">
                                    <div class="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. In totam explicabo</div>
                                    <div class="notification-time">
                                        Today
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="dropdown-item" href="#">
                            <div class="notification-content">
                                <div class="icon">
                                    <i class="fas fa-exclamation-triangle text-warning border border-warning"></i>
                                </div>
                                <div class="content">
                                    <div class="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. In totam explicabo</div>
                                    <div class="notification-time">
                                        Yesterday
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-center" href="#">View all notifications</a>
                    </div>
                </div>
                <div class="dropdown">
                    <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-envelope"></i>
                        <!-- <span class="badge badge-pill badge-success notification">7</span> -->
                    </a>
                    <div class="dropdown-menu messages" aria-labelledby="dropdownMenuMessage">
                        <div class="messages-header">
                            <i class="fa fa-envelope"></i>
                            Messages
                        </div>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                            <div class="message-content">
                                <div class="pic">
                                    <img src="img/user.jpg" alt="">
                                </div>
                                <div class="content">
                                    <div class="message-title">
                                        <strong> Jhon doe</strong>
                                    </div>
                                    <div class="message-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. In totam explicabo</div>
                                </div>
                            </div>

                        </a>
                        <a class="dropdown-item" href="#">
                            <div class="message-content">
                                <div class="pic">
                                    <img src="img/user.jpg" alt="">
                                </div>
                                <div class="content">
                                    <div class="message-title">
                                        <strong> Jhon doe</strong>
                                    </div>
                                    <div class="message-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. In totam explicabo</div>
                                </div>
                            </div>

                        </a>
                        <a class="dropdown-item" href="#">
                            <div class="message-content">
                                <div class="pic">
                                    <img src="img/user.jpg" alt="">
                                </div>
                                <div class="content">
                                    <div class="message-title">
                                        <strong> Jhon doe</strong>
                                    </div>
                                    <div class="message-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. In totam explicabo</div>
                                </div>
                            </div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-center" href="#">View all messages</a>

                    </div>
                </div>
                <div class="dropdown">
                    <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-cog"></i>
                        <!-- <span class="badge-sonar"></span> -->
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuMessage">
                        <a class="dropdown-item" href="#">My profile</a>
                        <a class="dropdown-item" href="#">Help</a>
                        <a class="dropdown-item" href="#">Setting</a>
                    </div>
                </div>
                <div>
                    <a href="#" @click.stop="logout">
                        <i class="fa fa-power-off"></i>
                    </a>
                </div>
                <div class="pinned-footer">
                    <a href="#">
                        <i class="fas fa-ellipsis-h"></i>
                    </a>
                </div>
            </div>
        </nav>
        <!-- page-content  -->
        <main class="page-content">
            
              <router-view/>   
            
        </main>
        <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Admin from "@/components/Admin.vue";
import {fb} from "../firebase";
import $ from 'jquery'

export default {
  name: "Admin",
  components: {
    // Admin
  },
  methods:{
    DropDown:function(){
      $(this).next(".sidebar-submenu").slideDown(200);
    },
    ToggleActive:function(e){
      e.target.parentElement.parentElement.classList.toggle('active')
    },
    logout(){
          fb.auth().signOut()
          .then(() => {
              this.$router.replace('/');
          })
          .catch((err) =>{
              console.log(err);
          });
      }

    
  },
  computed:{
    closeMenu: function(){
      return {
      'page-wrapper':true, 
      'default-theme':true, 
      'sidebar-bg':true, 
      bg1:true, 
      toggled:this.toggled
      }
    },
    
  },
  
  data(){
    return{
      toggled:true,
      
      
    }
  }

}
</script>

<style lang="scss">
// General Styling
.somestuff {
    z-index: 99;
}
.somestuff i {
  position: absolute;
  top: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 40px;
  font-size: 1.8rem;
  border-radius: 0 10px 10px 0;
  padding-right: 10px;
  width: 50px;
  color: var(--darkBlue);
  
}
.somestuff i:hover{
  color: var(--grenner);
  cursor: pointer;
}
// STYLE SIDE BAR
// DROPDOWN MENU
.notch{
  font-size: 0.6rem;
  margin-right: 10px;
}
.submenu__sidebar:hover{
  .notch{
    animation: roll 2s infinite;
    transform: rotate(30deg);
  }
}

@keyframes roll {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>
