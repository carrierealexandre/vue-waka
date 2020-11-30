/* eslint-disable */ 
<template >
  <div class="changeemail">
    
      <div class="profile-grid-wrapper">

        <div class="nav-squeleton">

          <router-link  to="/admin">
            <span class="menu-link">Admin</span>
          </router-link>

          <div class="arrow-nav"><fa-icon :icon="['fa', 'chevron-right']" /></div>

          <router-link  to="/admin/myprofile">
            <span class="menu-link">Login & security</span>
          </router-link>
          

          <div class="arrow-nav"><fa-icon :icon="['fa', 'chevron-right']" /></div>
          
          <span class="menu-text">Change Your Email</span>

        </div>

        <div class="title-wrapper">
          <span>Change Your Email address</span>
        </div>

        <div class="main-wrapper">

          <div class="grid-main-container">

            <div class="field">

              <div class="section-one">
                <div class="">
                  <p>Current email address: carriere.alexandre@live.ca</p>
                </div>
                <div class="">
                  <p>Enter the new email address you would like to associate with your account below. We will send a One Time Password (OTP) to that address.</p>
                </div>
                <div class="title-fied">
                  <span>New email address :</span>
                </div>

                <div class="data-field">
                  <input v-model="user.email" type="text" class="input-datafield">
                </div>

              </div>

              

            </div>

          </div>
          <div class="done-btn">
            <button>Continue</button>
          </div>
        </div>

        

      </div>
    
  </div>
</template>

<script>
export default {
  name: "changeemail",
  props: {
    
  },
  data() {
    return {
      user:{
        name: "Alexandre carriere",
        email: "acarriere@octantaviation.ca",
      },
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
.changeemail{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}

.profile-grid-wrapper{
  width: 400px;
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
.data-field input{

  padding-left: 10px;
  border-radius: 2.5px;
  height: 30px;
  width: 100%;
  border: 1px solid var(--primary);
}
.data-field input:focus{
  border-radius: 2.5px;
  outline: none;
  border: 1px solid var(--blue);
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
.done-btn{
  padding: 0 20px 30px 20px;
}
.done-btn button{
  padding: 0 12.5px;
  width: 100%;
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
