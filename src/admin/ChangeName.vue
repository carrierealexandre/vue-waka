/* eslint-disable */ 
<template >
  <div class="changename">
    
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
          
          <span class="menu-text">Change Your name</span>

        </div>

        <div class="title-wrapper">
          <span>Change Your Name</span>
        </div>

        <div class="main-wrapper">

          <div class="grid-main-container">

            <div class="field">

              <div class="section-one">
                <div class="">
                  <p>If you want to change the name associated with your Amazon customer account, you may do so below. Be sure to click the <b>Save Changes</b> button when you are done.</p>
                </div>
                <div class="title-fied">
                  <span>New name :</span>
                </div>

                <div class="data-field">
                  <input v-model="user.name" type="text" class="input-datafield">
                </div>

              </div>

              

            </div>

          </div>
          <div class="done-btn">
            <button>Save Changes</button>
          </div>
        </div>

        

      </div>
    
  </div>
</template>

<script>
export default {
  name: "changename",
  props: {
    
  },
  data() {
    return {
      user:{
        name: "Alexandre carriere"
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
.changename{
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
.data-field input{

  padding-left: 10px;
  border-radius: 2.5px;
  height: 30px;
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
