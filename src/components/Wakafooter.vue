/* eslint-disable */ 
<template>
  <div>
    <!-- fotter start -->


    <div id="footer"><!-- #footer Begin -->
        <div class="wrapper"><!-- container Begin -->
            <div class="row"><!-- row Begin -->
                <div class="fotter-blocks"><!-- col-sm-6 col-md-3 Begin -->
                   
                   <h4>Top Products Categories</h4>
                    
                    <ul class="tpc"><!-- ul Begin -->
                        <li><a href="#">Brevages</a></li>
                        <li><a href="#">Chips</a></li>
                        <li><a href="#">Utilities</a></li>
                        <li><a href="#">Frozen</a></li>
                        
                    </ul><!-- ul Finish -->
                    
                    
                    
                    <h4>User Section</h4>
                    
                    <ul class="us"><!-- ul Begin -->
                        <li><a href="checkout.php">Login</a></li>
                        <li><a href="customer_register.php">Register</a></li>
                    </ul><!-- ul Finish -->
                    
                    
                    
                </div><!-- col-sm-6 col-md-3 Finish -->
                
                <div class="fotter-blocks"><!-- col-sm-6 col-md-3 Begin -->
                    
                    <h4>Pages</h4>
                    
                    <ul class="p"><!-- ul Begin -->
                        <li><a href="cart.php">Shopping Cart</a></li>
                        <li><a href="checkout.php">My Account</a></li>
                        <li><a href="airports.php">Airports</a></li>
                        <li><a href="shop.php">Shopping</a></li>
                        <li><a href="alert.php">Alert System</a></li>
                        <li><a href="services.php">Services</a></li>
                        <li><a href="contact.php">Contact</a></li>
                        <li><a href="About.php">About Us</a></li>
                    </ul><!-- ul Finish -->
                    
                    
                    
                </div><!-- col-sm-6 col-md-3 Finish -->
                
                <div class="fotter-blocks"><!-- col-sm-6 col-md-3 Begin -->
                    
                    <h4>Find Us</h4>
                    
                    <p><!-- p Start -->
                        
                        <strong>WakaConnection.</strong>
                        <br/>Red Lake
                        <br/>Ontario
                        <br/>(514)-220 8591
                        <br/>wakaconnection@gmail.com
                        <br/><strong>Alexandre  Carriere</strong>
                        
                    </p><!-- p Finish -->
                    
                    <a href="contact.php">Check Our Contact Page</a>
                    
                    
                    
                </div><!-- col-sm-6 col-md-3 Finish -->
                
                <div class="fotter-blocks">
                    
                    <h4>Stay Connected With Us</h4>
                    
                    <p class="text-muted">
                        Dont miss our latest update products.
                    </p>
                    
                    <form class="gtn" action="" method="post"><!-- form begin -->
                        <div class="input-group"><!-- input-group begin -->
                            
                            <input type="text" class="form-control" name="email">
                            
                            <span class="input-group-btn"><!-- input-group-btn begin -->
                                
                                <button type="submit" value="subscribe" class="subsribe-btn">subscribe</button>
                                
                            </span><!-- input-group-btn Finish -->
                            
                        </div><!-- input-group Finish -->
                    </form><!-- form Finish -->
                </div>
            </div><!-- row Finish -->
        </div><!-- container Finish -->
    </div><!-- #footer Finish -->
    
    
    <div id="copyright"><!-- #copyright Begin -->
        <div class="bottom-footer__container"><!-- container Begin -->
            <div class="copyright-one"><!-- col-md-6 Begin -->
            
                <p class="pull-left">&copy; 2020 WakaConnection All Rights Reserve</p>
                <div class="terms__copyright">
                <a href="privacy.php">Privacy Policy</a>
                <a href="conditions.php">Terms and Conditions</a>    
                </div>
                
            
            </div><!-- col-md-6 Finish -->
            <div><!-- col-md-6 Begin -->
                
                <p class="pull-right">Theme by: <a href="#">Alexandre Carriere</a></p>
                
            </div><!-- col-md-6 Finish -->
        </div><!-- container Finish -->
    </div><!-- #copyright Finish -->  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// general styling
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


/* styling the footer */


.wrapper{
    background-color: var(--dark);
}
.row{
    display: grid;
    grid-template-columns: repeat(auto-fill, 290px);
    justify-content: center;
    margin: 0 20px;
    padding: 10px 0;
    color: var(--primary);
}
.row > div {
    margin: 0 10px;
}
.tpc, .us, .p{
    border-bottom: 1px solid white;
}


.fotter-blocks a{
   color: var(--gray);
   text-decoration: none;
}
.fotter-blocks a:hover{
    color: var(--primary);
}
.fotter-blocks ul {
    padding-left: 35px;
    font-size: 0.8rem;
    color: var(--gray);
}
.input-group-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 37.5px;
    background-color: var(--sandTan);
    color: var(--dark);
    border-radius: 0 5px 5px 0;
    border-left: 1px solid var(--dark);
}
.input-group-btn button{
    background-color: var(--sandTan);
    width: 100px;
    height: 100%;
    color: var(--dark);
    border:none;
    border-radius: 0 5px 5px 0;

}


#copyright{
    background-color: var(--blue);
    height: 30px;
}


.bottom-footer__container{
    display: flex;
    height: auto;
    align-content: center;
    justify-content: space-between;
    margin: 0 30px;
    background-color: var(--blue);
    color: var(--primary);
}
.bottom-footer__container a{
    color: var(--primary);
}
.copyright-one{
    display: flex;
}
.copyright-one p{
    padding: 0 10px;
}
.copyright-one a{
    padding:5px 10px;
    text-decoration: underline;
    font-size: 0.7rem;
    color: var(--gray)
}
.copyright-one a:hover{
    color: var(--primary);
}
.pull-right{
    display: flex;
    justify-content: flex-end;
    align-items: center ;
    font-size: 0.8rem;
    line-height: 1.8rem;
}
.pull-right a {
    padding-left: 10px;
}

@media (max-width: 790px){
    .pull-right{
        display: none;
    }
    .bottom-footer__container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
@media (max-width: 620px){
    .copyright-one{
        display: grid;
        width: 100%;
        grid-auto-columns: 1fr;
        justify-content: center;
        align-items: center;
    }
    .pull-left{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0;
    }
    .bottom-footer__container{
        margin: 0;
    }
    .copyright-one p{
        padding: 0;
    }
    .terms__copyright{
        display: flex;
        justify-content: center;
        align-items: center;

    }
}
</style>
