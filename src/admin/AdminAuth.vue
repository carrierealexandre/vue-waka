/* eslint-disable */ 
<template >
  <div class="adminauth">
    
      <div class="profile-grid-wrapper">
        <div v-if="!greated" class="lock-icon">
          <fa-icon :icon="['fa', 'lock']" />
        </div>
        <div v-if="greated" class="unlock">
          <fa-icon :icon="['fa', 'unlock']" />
        </div>
         <div id="recaptcha-container"></div>

        <div class="ralativity">

          
       
          <div class="animated-window">

            <section id="UserAuthSMS" class="main-wrapper">
              <div class="title-wrapper">
                <span>User Verification Required</span>
              </div>
              <div class="">

                <div class="grid-main-container">

                  <div class="field">

                    <div class="section-one">
                      <div class="">
                        <p>We will send you a 4-didgit verification code via sms to your registered phone number :</p>
                      </div>
                      <div class="">
                        <p>*******91</p>
                      </div>

                    </div>

                    

                  </div>

                </div>
                <div class="">
                  <div class="done-btn">
                    <button @click="sendCode()">Send Code</button>
                  </div>
                  <div class="done-btn">
                    <button>Cancel</button>
                  </div>
                </div>
              </div>
            </section>

            <section id="UserEnterSMS" class="main-wrapper">
              <div class="title-wrapper smaller">
                <span>Please enter the 4-digit verification code we sent via SMS</span>
              </div>

              <div class="">

                <div class="grid-main-container">

                  <div class="field">

                    <div class="section-one">
                      <div class="">
                        <p>We want to make sure it's you before you access your administrator creditials</p>
                      </div>
                      <div class="code-grid">
                        <div class="code-field ">
                          <input id="1" @focus="one=''" @keyup="nextField($event,'first')" v-model="one" maxlength="1" type="text" class="input-datafield">
                        </div>
                        <div class="code-field ">
                          <input id="2" @focus="two=''" @keyup="nextField($event)" v-model="two" maxlength="1" type="text" class="input-datafield">
                        </div>
                        <div class="code-field ">
                          <input @focus="three=''" @keyup="nextField($event)" v-model="three" type="text" maxlength="1" class="input-datafield">
                        </div>
                        <div class="code-field ">
                          <input @focus="four=''" @keyup="verification($event)" v-model="four" maxlength="1" type="text" class="input-datafield">
                        </div>
                      </div>
                      <div v-if="denied" class="denied">
                        <p>The PIN you have entred was incorect</p>
                      </div>
                      <div v-if="denied" class="denied">
                        <span></span>
                      </div>
                    </div>

                    

                  </div>

                </div>
                <div class="done-btn">
                  <button @click="verify">Verify</button>
                </div>
                
                <div class="">
                  <p>Didn't received the code yet?</p>
                  <a href="#" @click="sendCodeagain()">Send code again</a>
                </div>
              </div>
            </section>
          </div>
          

          

        </div>
      </div>
    
  </div>
</template>

<script>

import {fb, db} from "../firebase";
import $ from 'jquery'

export default {
  
  // firestore(){
  //     const user = fb.auth().currentUser;
  //     return{
  //         profile: db.collection('Profiles').doc(user.uid),
  //     }
      
  // },
  name: "autadminauthh",
  props: {
    
  },
  

  
  methods:{

  
    nextField: function(e,first){
      if(first == 'first'){
        this.PIN = ""
        console.log("true");
      }
      const nextfield = e.target.parentElement.nextElementSibling.firstChild;
      if (e.target.value.length == e.target.maxLength) {
        const n = e.target.value
        this.PIN += n.toString();
        nextfield.focus()
      

          
      }
    },
    verify: function(){
        const one = this.one;
        const two  = this.two;
        const three = this.three;
        const four = this.four;
        this.PIN = one + two + three + four;
        const user = fb.auth().currentUser;
        var docRef = db.collection("Profiles").doc(user.uid);

        docRef.get().then((doc) => {
            if (doc.exists) {
                var profile =  doc.data()
                console.log(this.PIN);
                console.log(profile.PIN);
                if(this.PIN == profile.PIN){
                  this.denied = false
                  $('.code-field').addClass('greated');
                  $('.code-field').removeClass('denied');
                  $('.lock-icon').css('color', 'var(--active)');
                  this.denied = false
                  $('.animated-window').css('box-shadow', '0 0 20px 0 var(--greatedShadow)');
                  this.greated = true
                  setTimeout(() => {
                    this.$router.replace('/admin/myprofile');
                  }, 1000);
                  
                }else{
                  $('.code-field').addClass('denied');
                  $('.animated-window').css('box-shadow', '0 0 20px 0 var(--archiveShadow)');
                  $('.lock-icon').css('color', 'var(--archive)');
                  this.denied = true
                }
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

    },
    verification: function(e){
      // const nextfield = e.target.parentElement.nextElementSibling.firstChild;
      if (e.target.value.length == e.target.maxLength) {
        
        const one = this.one;
        const two  = this.two;
        const three = this.three;
        const four = this.four;
        this.PIN = one + two + three + four;
        
        
      }

      
      // const user = "sa4WZCUArdYLzFNkNtdLB342RJQ2"
      
      
        const user = fb.auth().currentUser;
      //  var profile = db.collection("Profiles").get();
      
        var docRef = db.collection("Profiles").doc(user.uid);

        docRef.get().then((doc) => {
            if (doc.exists) {
                var profile =  doc.data()
                console.log(this.PIN);
                console.log(profile.PIN);
                if(this.PIN == profile.PIN){
                  this.denied = false
                  $('.code-field').addClass('greated');
                  $('.lock-icon').css('color', 'var(--active)');
                  $('.animated-window').css('box-shadow', '0 0 20px 0 var(--greatedShadow)');
                  this.greated = true
                  setTimeout(() => {
                    this.$router.replace('/admin/myprofile');
                  }, 1000);
                  
                }else{
                  $('.code-field').addClass('denied');
                  $('.animated-window').css('box-shadow', '0 0 20px 0 var(--archiveShadow)');
                  $('.lock-icon').css('color', 'var(--archive)');
                  this.denied = true
                }
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    },

    sendCodeagain(){
      var UserEnterSMS = document.getElementById("UserEnterSMS")
      var UserAuthSMS = document.getElementById("UserAuthSMS")
      UserAuthSMS.style.transform = "translateX(0px)"
      UserEnterSMS.style.transform = "translateX(0px)"
    },
    sendCode(){
      var UserEnterSMS = document.getElementById("UserEnterSMS")
      var UserAuthSMS = document.getElementById("UserAuthSMS")
      UserAuthSMS.style.transform = "translateX(-500px)"
        UserEnterSMS.style.transform = "translateX(-500px)"
    },
  },
  data() {
    return {
      one:null,
      two:null,
      three:null,
      four:null,
      greated:false,
      denied: false,
      PIN: "",
      appVerifier : '',
      profile:{
        PIN:null,
        name: null,
      },
      user:{
        phNo: "5142208591",
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
.adminauth{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}
// .ralativity{
//   // 
// }
.animated-window{
  position: relative;
  background: #fff;
  height: 500px;
  text-align: center;
  margin: auto;
  width: 500px;
  padding: 20px 0;
  border: 1px solid var(--primary);
  border-radius: 2.5px;
  box-shadow: 0 0 20px 0 var(--darkShadow);
  overflow: hidden;
}
.animated-window section{
  max-width: 500px;
  position: absolute;
  transition: transform 500ms;

}
#UserAuthSMS{
  left: 0;
}
#UserEnterSMS{
  width: 500px;
  left: 500px;
}
.lock-icon{
  color: var(--blue);
  font-size: 5rem;
}
.unlock{
  
  color: var(--active);
  font-size: 5rem;
}
.profile-grid-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
.code-field input{

  padding-left: 5px;
  border-radius: 2.5px;
  height: 70px;
  font-size: 2.5rem;
  width: 40px;
  border: 2px solid var(--primary);
}
.code-grid{
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4,40px);
  column-gap: 10px;
}
.code-field input:focus{
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
.smaller{
  font-size: 1.5rem !important;
}
// .main-wrapper{
// }
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
.denied input{
  border: 2px solid var(--archive) !important;
  
}

.greated input{
  border: 2px solid var(--active) !important;
  
}
.denied p {
  color: var(--archive);
  font-weight: bold;
}
</style>
