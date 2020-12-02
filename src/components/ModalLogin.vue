/* eslint-disable */ 
<template>
  <div class="modallogin">
    <a href="#" @click.stop="showLogin" class="" >Login</a>
    <modal name="modal-login" @opened="opened" :adaptive="true" :height="460" :width="400">
       <div class="login__container">
        
        <form  class="flex-column-center-center login-form"  >
          <h2 class="login__container-h2 flex-center-center">Login</h2>
          <div class="login__container-fields flex-around-center login-field ">
            <!-- <label for="email" class="login-field-label">Email</label> -->
            <input v-model="email" placeholder="EMAIL" type="email" id="email" name="email" class="login-field-input flex-center-center" ref="email" @keydown.shift.tab.prevent="">
          </div>
          <div class="login__container-form flex-around-center login-field">
            <!-- <label for="password" class="login-field-label">Password</label> -->
            <input @keyup.enter="login" v-model="password" value="" placeholder="PASSWORD" type="password" id="password" name="password" class="login-field-input flex-center-center">
            <span v-show="errorCode === 'auth/wrong-password'">Wrong Password!</span>
          </div>
          <div class="form-group mb-8">
            <label class="text-sm font-normal"><input type="checkbox" name="remember" class="mr-2">Keep me signed in</label>
          </div>
          
        </form>
        <div class="form-group mb-4">
            <button @click="login" class="btn btn-primary btn-lg">Login</button>
          </div>
        <div class="text-sm font-normal text-center">
          <p>Don't have an account? <a href="#" class="text-blue-600 hover:text-blue-800" @click.stop="showRegister" @keydown.tab.exact.prevent="">Register</a></p>
        </div>
      </div>

      <!-- <div class="user-modal-container" :class="{ 'active': active }" id="login-modal" @click="close">
        <div class="user-modal">
          <ul class="form-switcher">
            <li @click="flip('register', $event)"><a href="" id="register-form">Register</a>

            </li>
            <li @click="flip('login', $event)"><a href="" id="login-form">Login</a>

            </li>
          </ul>
          <div class="form-register" :class="{ 'active': active == 'register' }" id="form-register">
            <div class="error-message" v-text="registerError"></div>
            <input type="text" name="name" placeholder="Name" v-model="registerName" @keyup.enter="submit('register', $event)">
            <input type="email" name="email" placeholder="Email" v-model="registerEmail" @keyup.enter="submit('register', $event)">
            <input type="password" name="password" placeholder="Password" v-model="registerPassword" @keyup.enter="submit('register', $event)">
            <input type="submit" :class="{ 'disabled': submitted == 'register' }" @click="submit('register', $event)" v-model="registerSubmit" id="registerSubmit">
            <div class="links"> <a href="" @click="flip('login', $event)">Already have an account?</a>

            </div>
          </div>
          <div class="form-login" :class="{ 'active': active == 'login' }" id="form-login">
            <div class="error-message" v-text="loginError"></div>
            <input type="text" name="user" placeholder="Email or Username" v-model="loginUser" @keyup.enter="submit('login', $event)">
            <input type="password" name="password" placeholder="Password" v-model="loginPassword" @keyup.enter="submit('login', $event)">
            <input type="submit" :class="{ 'disabled': submitted == 'login' }" @click="submit('login', $event)" v-model="loginSubmit" id="loginSubmit">
            <div class="links"> <a href="" @click="flip('password', $event)">Forgot your password?</a>

            </div>
          </div>
          <div class="form-password" :class="{ 'active': active == 'password' }" id="form-password">
            <div class="error-message" v-text="passwordError"></div>
            <input type="text" name="email" placeholder="Email" v-model="passwordEmail" @keyup.enter="submit('password', $event)">
            <input type="submit" :class="{ 'disabled': submitted == 'password' }" @click="submit('password', $event)" v-model="passwordSubmit" id="passwordSubmit">
          </div>
        </div>
      </div> -->

    </modal>
  </div>
</template>

<script>
import {fb} from '../firebase'

export default {
  name: "ModalLogin",
  props: {
    
  },
  data() {
    return {
      email: null,
      password: null,
      errorCode: ''
    }
  },
  methods: {
    login(){

        fb.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            console.log("login");
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
               
               
              alert('Wrong password.');
            } else {
              alert(errorMessage);
            }
            // console.log(error);
          });

    },
    showLogin() {
      this.$modal.show('modal-login');
      
    },
    showRegister() {
      this.$modal.show('modal-register')
      this.$modal.hide('modal-login')
    },
    opened() {
      this.$refs.email.focus()
    },
    hide() {
      this.$modal.hide('modal-login')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// SIGN IN MODAL
*{
  
  font-family: Helvetica Neue,Helvetica,sans-serif;
}
a{
  font-weight: 700;
  color: var(--compWhite);
  text-decoration: none;
}
.login__container {
  padding: 8px 10px 8px 10px;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  
}
.flex-center-center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-column-center-center{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.login-form{
  padding-top: 10px;
}
.login__container-fields{
  padding: 10px 0;
}
.login-field{
  width: 100%;
}
.login-field-label{
  text-transform: uppercase;
  margin-bottom: 1px;

.login-field-input:focus{
  outline: none;
  border: 1px solid var(--gray);
}

 
}
.login-field-input{
  width: 100%;
  border: none;
  padding: 4px 2px;
  background-color: var(--primary);
}
.flex-end-center{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
}
.flex-around-center{
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.login__container-h2 {
  margin-bottom: 4px;
  text-transform: uppercase;
}
.login__container-form{
  margin-bottom: 4px;
}

// input:-webkit-autofill,
// input:-webkit-autofill:hover, 
// input:-webkit-autofill:focus,
// textarea:-webkit-autofill,
// textarea:-webkit-autofill:hover,
// textarea:-webkit-autofill:focus,
// select:-webkit-autofill,
// select:-webkit-autofill:hover,
// select:-webkit-autofill:focus {
//   border: 1px solid green;
//   -webkit-text-fill-color: green;
//   -webkit-box-shadow: 0 0 0px 1000px #000 inset;
//   transition: background-color 5000s ease-in-out 0s;
// }
</style>