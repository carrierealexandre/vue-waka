/* eslint-disable */ 
<template >
  <div class="myprofile">
    
      <div class="profile-grid-wrapper">

        <div class="nav-squeleton">

          <router-link  to="/admin">
            <span class="menu-link">Admin</span>
          </router-link>

          <div class="arrow-nav"><fa-icon :icon="['fa', 'chevron-right']" /></div>

          
          <span class="menu-text">Login & security</span>
          

        </div>

        <div class="title-wrapper">
          <span>Login & securty</span>
        </div>

        <div class="main-wrapper">

          <div class="grid-main-container">

            <div class="field">

              <div class="section-one">

                <div class="title-fied">
                  <span>Name :</span>
                </div>

                <div class="data-field">
                  <span>Alexandre Carriere</span>
                </div>

              </div>

              <div class="action-btn-field">
                <button @click="editUserName()">Edit</button>
              </div>

            </div>

            <div class="field">

              <div class="section-one">

                <div class="title-fied">
                  <span>E-mail :</span>
                </div>

                <div class="data-field">
                  <span>acarriere@octantaviation.com</span>
                </div>

              </div>

              <div class="action-btn-field">
                <button @click="editUserEmail()">Edit</button>
              </div>

            </div>

            <div class="field">

              <div class="section-one">

                <div class="title-fied">
                  <span>Phone Number: </span>
                </div>

                <div class="data-field">
                  <span>+15142208591</span>
                </div>

              </div>

              <div class="action-btn-field">
                <button @click="editUserPhone()">Edit</button>
              </div>

            </div>

            <div class="field">

              <div class="section-one">

                <div class="title-fied">
                  <span>Password :</span>
                </div>

                <div class="data-field">
                  <span>***********</span>
                </div>

              </div>

              <div class="action-btn-field">
                <button>Edit</button>
              </div>

            </div>

            <div class="last-field">

              <div class="section-one">

                <div class="title-fied">
                  <span>Two-step Verification (2sv) settings</span>
                </div>

                <div class="data-field">
                  <span>Manage your two-step verification. (2sv) Authenticators</span>
                </div>

              </div>

              <div class="action-btn-field">
                <button>Edit</button>
              </div>

            </div>

          </div>

        </div>

        <div class="done-btn">
          <button>Done</button>
        </div>

      </div>
    
  </div>
</template>

<script>
export default {
  name: "MyProfile",
  props: {
    
  },
  methods:{
    editUserName(){
      this.$router.replace('/admin/myprofile/changename');
    },
    editUserEmail(){
      this.$router.replace('/admin/myprofile/changeemail');
    },
    editUserPhone(){
      this.$router.replace('/admin/myprofile/changephone');
    }
  
  },
  data() {
    return {
      name:null,
      email:null,
      ImgSource: 'public/admin_img/overview.svg',
      AdminPage: 'My Profile',
      AdminPageContent: `Lorem ipsum dolor, sit amet consectetur adipisicing 
                         elit. Laudantium dolorum sint nobis ex illo inventore autem consectetur 
                         aspernatur possimus exercitationem.`
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

// GENERAL START <----
*{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.myprofile{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}

.profile-grid-wrapper{
  width: 500px;
}

// GENERAL END <----

.nav-squeleton{
  display: flex;
  padding: 10px 0;
}
.nav-squeleton span{
  font-weight: 300;
}
.nav-squeleton > div {
  padding: 0 15px;
  font-weight: 0;
}
.arrow-nav{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.5rem;
}
.menu-text{
  color: var(--archive);

}
.menu-link{
  color: var(--blue);
}
.title-wrapper{
  font-size: 2rem;
}
.main-wrapper{
  margin: 10px 0;
  border: 1px solid var(--primary);
  border-radius: 2.5px;
}
.field{
  padding: 20px 20px 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--primary);

}
.last-field{
  padding: 20px 20px 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  

}
.title-fied{
  font-weight: bold;
}
.action-btn-field button{
  padding: 0 25px;
  height: 30px;
  border: 1px solid var(--dark);
  border-radius: 2.5px;
  background-color: var(--primaryT);
  outline: none;

}
.action-btn-field button:hover{
  background-color: var(--primary);
  outline: none;
}
.done-btn button{
  padding: 0 12.5px;
  height: 30px;
  border: 1px solid black;
  border-radius: 2.5px;
  color: var(--lightwhite);
  background-color: var(--darkT);
  outline: none;
}
.done-btn button:hover{
  background-color: var(--dark);
  outline: none;
}
</style>
