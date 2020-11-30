<template>
  <div>
    
    
    <div class="content-wrapper"> <!-- content-wrapper start-->
      <div class="hero-img">

        <div class="heroMessage__wrapper">
          <span>Your favorite Goods,</span>
          <span>delivered with Waka</span>
        </div>

        <div class="registerNow">

          <div class="signup__registerNow">
            <span>SIGN UP and SAVE</span>
          </div>
          
          <div class="discoust__registerNow">

            <div class="layout1__discout">
              <span>10</span>
              <p>$ OFF</p>  
            </div>
            <div class="layout2__discount">
              <p>ON YOUR FIRST ORDER</p>
            </div>

            <div class="signupNow__wrapper">
              <a class="signupNow" href="">Register Now</a>
            </div>

          </div>
          
        </div>

      </div>
      <div class="wrapper1">
        <div class="container1">
          <pagetitle :page-title="Page"></pagetitle> 
        </div>
      </div>
       
      <div class="items-wrapper" id="items-wrapper1"> <!-- items-wrapper start-->
          <!-- image on top -->
        
        <div class="instruction-title"><!-- instruction-title start-->
          <div class="title__wrapper"><!-- items-wrapper start-->
            <h1>How it works</h1>
          </div><!-- items-wrapper end-->
        </div><!-- instruction-title end-->

        <div class="top-section"><!-- top-section start-->
          <div class="how-it-works__wrapper"><!-- how-it-works__wrapper start-->
          
            <div class="wrapper__card first"><!-- wrapper__card first start-->
              <div class="img-wrapper">
                <img src="../../public/home_img/destinations.svg" alt="">
              </div>
              <div class="titled-card">
                <div class="h4__titled-card">
                  <h4>Select Aiport</h4>
                </div>
              </div>             
              <div class="card-content">
                <div class="p__card-content">
                  <div class="">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repellendus! Nisi placeat incidunt voluptatibus illum...</p>
                  </div>
                </div>
                <router-link class="a card-link" to="/airports">View All</router-link>
              </div>
            </div><!-- wrapper__card first end-->
            
            <div class="wrapper__card"><!-- wrapper__card start start-->
              <div class="img-wrapper">
                <img src="../../public/home_img/shopping.svg" alt="">
              </div>
              <div class="titled-card">
                <div class="h4__titled-card">
                  <h4>Shop</h4>
                </div>
              </div>  
              <div class="card-content">
                <div class="p__card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repellendus! Nisi placeat incidunt voluptatibus illum...</p>
                </div>
                <router-link class="a card-link" to="/airport">Start Browsing</router-link>
              </div>
            </div><!-- wrapper__card start end-->

            <div class="wrapper__card"><!-- wrapper__card start start-->
              <div class="img-wrapper">
                <img src="../../public/home_img/notified.svg" alt="">
              </div>
              <div class="titled-card">
                <div class="h4__titled-card">
                  <h4>Get Notified </h4>
                </div>
              </div>  
              <div class="card-content">
                <div class="p__card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repellendus! Nisi placeat incidunt voluptatibus illum...</p>
                </div>
                  <router-link class="a card-link" to="/airport">Read More</router-link>
              </div>
            </div><!-- wrapper__card start end-->

            <div class="wrapper__card"><!-- wrapper__card start start-->
              <div class="img-wrapper">
                <img src="../../public/home_img/collect.svg">
              </div>
              <div class="titled-card">
                <div class="h4__titled-card">
                  <h4>Collect</h4>
                </div>
              </div>  
              <div class="card-content">
                <div class="p__card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repellendus! Nisi placeat incidunt voluptatibus illum...</p>
                </div>
                  <router-link class="a card-link" to="/airport">Read More</router-link>
              </div>
            </div><!-- wrapper__card start end-->

          </div><!-- how-it-works__wrapper end-->

        </div><!-- top-section end-->

      </div><!-- items-wrapper end-->

    </div> <!-- content-wrapper end-->   
    <popular></popular>
    
  </div>
  
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  components: {
    
  },
  data() {
    return {
      Page: "Welcome"
    }
  },
};
</script>

<style lang="scss">
// GENERAL STYLING
.wrapper1{
  display: flex;
  justify-content: center;
}
.container1{
 
  width: auto;
}

// hero start
.hero-img{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  background-image: url(../../public/home_img/plane.jpg);
  overflow-x: hidden;
  overflow-y: hidden;
  object-fit: cover;
  background-size: cover;
  width: 100%;
  height: 680px;
}
.heroMessage__wrapper{
  padding: 40px 40px;
  line-height: 1rem;
  font-size: 3rem;
  font-weight: 600;
  background-color: var(--brownT);
}
.registerNow{
  width: 300px;
  height: 200px;
  margin: 20px 0;
  color: var(--lightwhite);
  background-color: rgba(59, 53, 53, 0.781);
}
.signup__registerNow{
  display: flex;
  justify-content: center;
  font-size: 1.9rem;
}
.layout1__discout{
  display: flex;
  justify-content: center;
  align-items: center;
}
.layout1__discout span{
  font-size: 8rem;
  line-height: 0;
}
.layout1__discout p{
  font-size: 3rem;
}
.layout2__discount{
  position: relative;
}
.layout2__discount p{
  position: absolute;
  top: -10px;
  right: 0;
  padding-right: 25px;;
  display: flex;
  justify-items: start;
  font-size: 0.7rem;
  line-height: 0
}
.signupNow__wrapper{
  width: 300px;
  height: 75px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
}
.signupNow{
  display: flex;
  width: 45%;
  color: var(--dark);
  
  justify-content: center;
  align-items: center;
  height: 35px;
  font-weight: 700;
  font-size: 1.0rem;
  background-color: var(--lightwhite);
  text-decoration: none;
}
.signupNow:hover{
  color: var(--blue);
  text-decoration: none;
}



// hero end
// HOW IT WORKS SECTION START
.items-wrapper{
  margin-top: 30px;
  margin-bottom: 50px;
  
}
.instruction-title{
  display: flex;
  justify-content: center;
  color: var(--dark);
    
}
.title__wrapper {
    display: flex;
    width: 70%;
    border-bottom: 3px solid var(--blue);
    background-color: var(--lightwhite1);
    justify-content: center;
}
.top-section {
    margin-top: 20px;
    height: auto;
    width: 100%;
}
.how-it-works__wrapper {
    display: grid;
    grid-template-columns: repeat(2,450px);
    grid-gap: 10px;
    justify-content: center;
    padding: 0 30px;
    background-color: var(--lightwhite1) ;
}
.how-it-works__wrapper > div{
  
  // background-color: var(--blue);
  border-radius: 5px;
}
.wrapper__card {
  position: relative;
  
  display: grid;
  align-items: center;
  
  grid-template-rows: auto auto;
}
.img-wrapper {
  
  width: 450px;
  height: 250px;
  // margin: 10px;
  justify-self: center;
  background-color: var(--blue);
}

.img-wrapper img {
    width: 100%;
    height: 100%;
    // border-radius: 100px;
    
}
.wrapper__card {
  
  margin-right:-1px;
  width: auto;
  transition: 800ms;
 }
.a{
  position: absolute;
  top: 210px;
  right: 0;
  transition: 800ms;
}


.card-content  {
    position: absolute;
    top: 0px;
    left: 0;
    display: flex;
    flex-direction: column;
    // padding: 10px;
    text-align: left;
    margin-left: 0px;
   
}
.p__card-content{
  padding: 10px;
  width: 450px;
  height: 0;
  color: white;
  z-index: -1;
}
.wrapper__card:hover{
  .p__card-content{
    background-color: rgba(131, 104, 65, 0.9);
    height: 210px;
    z-index: 0;
    transition: all 1s ease;
  }
}

.titled-card {
  position: absolute;
  bottom: 0;
  left: 0;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  height: 40px;
  width: 250px;
  align-items: center;
  color: var(--lightwhite1);
  letter-spacing: 2px;
  background-color: var(--lightwhite);
  
}
.titled-card .h4__titled-card h4{
  font-weight: 800;
  font-size: 1.8rem;
  color: var(--dark);
}

.card-link {
    display: flex;
    color: var(--dark);
    font-weight: 500;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 200px;
    text-transform: uppercase;;
    
    background-color: var(--primary);
    text-decoration: none;
}
.card-link:hover{
  background-color: var(--dark);
  color: var(--lightwhite);
}

@media (max-width: 1050px){
  .heroMessage__wrapper{
     display: flex;
     flex-direction: column;
     line-height: 3rem;
     padding: 10px 10px;
  }
  .how-it-works__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250);
    column-gap: 10px;
    justify-content: center;
    padding: 0 30px;
    background-color: var(--lightwhite1) ;
  }
}
@media (max-width: 950px){
  .how-it-works__wrapper{
    grid-template-columns: 450px;
  }
}

  // HOW IT WORKS SECTION END
</style>
