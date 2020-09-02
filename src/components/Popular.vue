/* eslint-disable */ 
<template>
  <div>
        <!-- Row 1 of items -->


    <div class="wrapper">
        
      <div class="row1-header">
          <h2>Most Popular</h2>
      </div>
      <div class="items-row1">
          <!-- item start master template V1.5 -->
          <!-- -------------------------------------------------------------------------- -->
        <div class="item-wrapper">
              
              <div class="item-row1">
                  <div class="item-img">
                      <img src="../../public/products/water.jpg" alt="Bottle of Water">
                  </div>
              </div>
              <!-- item row 2, description and detail iin here. -->
              
              <div class="item-row2"> 
                  <div class="item-desc">
                      <p class="desc-tag">Natural Spring Water</p>
                      <p>40 x 500 mL bottles</p>
                  </div>
      
              </div>
              <!-- item price and saving here -->
              <div class="item-row3">
                  <div class="item-price-wrapper">
                      <div class="item-price-icon">
                          <fa-icon :icon="['fa', 'dollar-sign']" size="1x"/>
                      </div>
                      
                      <div class="dollar">
                          6
                      </div>
                      <div class="cent">
                          49
                      </div>
                      
                  </div>
                  <div class="item-costs__wrapper">
      
                      <div class="item-costs__details">
                          <div class="item-costs__shipping-cost">
                              <p class="shipping-cost__p">shipping</p>
                              <p class="shipping-cost__price">$15.00</p>
                          </div>
                          <div class="item-price-was__total-cost">
                              <p class="total-cost__p">Total</p>
                              <p class="total-cost__price">$21.49</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
              <div class="item-fotter">
                  
                  <div class="add-to-cart">
                      <div class="input-qty-wrapper">
                          <input type="number" name="qty-lbs" id="qtyLbs" value="1">
                          <div class="qty-or-lbs-wrapper">
                              <div>Qty</div>
                          </div>
                      </div>
                      <button class="add-to-cart-btn" type="submit">
                        <div class="cart-icon">
                          <fa-icon :icon="['fa', 'cart-plus']" size="2x"/>
                        </div>
                      </button>
                  </div>
              </div>
          </div>
          <!-- ------------------------------------------------------------------------- -->
          <!-- end of master item -->
          <div class="item-wrapper">
              <div class="item-row1">
                  <div class="item-img">
                      <img src="../../public/products/pepsi.jpg" alt="">
                  </div>
              </div>
              <!-- item row 2, description and detail iin here. -->
              
              <div class="item-row2"> 
                  <div class="item-desc">
                      <p class="desc-tag">Pepsi </p>
                      <p>24 x 355 mL Cans</p>
                  </div>
      
              </div>
              <!-- item price and saving here -->
              <div class="item-row3">
                  <div class="item-price-wrapper">
                      <div class="item-price-icon">
                          <fa-icon :icon="['fa', 'dollar-sign']" size="1x"/>
                      </div>
                      
                      <div class="dollar">
                          10
                      </div>
                      <div class="cent">
                          69
                      </div>
                      
                  </div>
                  <div class="item-costs__wrapper">
      
                      <div class="item-costs__details">
                          <div class="item-costs__shipping-cost">
                              <p class="hide">20</p>
                              <p class="shipping-cost__p">shipping</p>
                              <p class="shipping-cost__price">$4.00</p>
                          </div>
                          <div class="item-price-was__total-cost">
                              <p class="total-cost__p">Total</p>
                              <p class="total-cost__price">$14.69</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
              <div class="item-fotter">
                  
                  <div class="add-to-cart">
                      <div class="input-qty-wrapper">
                          <input type="number" name="qty-lbs" id="qtyLbs" value="1">
                          <div class="qty-or-lbs-wrapper">
                              <div>Qty</div>
                          </div>
                      </div>
                      <button class="add-to-cart-btn" type="submit">
                        <div class="cart-icon">
                          <fa-icon :icon="['fa', 'cart-plus']" size="2x"/>
                        </div>
                      </button>
                  </div>
              </div>

          </div>
          <div class="item-wrapper">
              <div class="item-row1">
                  <div class="item-img">
                      <img src="../../public/products/rainbow.jpg" alt="">
                  </div>
              </div>
              <!-- item row 2, description and detail iin here. -->
              
              <div class="item-row2"> 
                  <div class="item-desc">
                      <p class="desc-tag">Crush Rainbow Pack</p>
                      <p>24 x 355 mL Cans</p>
                  </div>
      
              </div>
              <!-- item price and saving here -->
              <div class="item-row3">
                  <div class="item-price-wrapper">
                      <div class="item-price-icon">
                          <fa-icon :icon="['fa', 'dollar-sign']" size="1x"/>
                      </div>
                      
                      <div class="dollar">
                          16
                      </div>
                      <div class="cent">
                          59
                      </div>
                      
                  </div>
                  <div class="item-costs__wrapper">
      
                      <div class="item-costs__details">
                          <div class="item-costs__shipping-cost">
                              <p class="shipping-cost__p">shipping</p>
                              <p class="shipping-cost__price">$8.00</p>
                          </div>
                          <div class="item-price-was__total-cost">
                              <p class="total-cost__p">Total</p>
                              <p class="total-cost__price">$24.59</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
              <div class="item-fotter">
                  
                  <div class="add-to-cart">
                      <div class="input-qty-wrapper">
                          <input type="number" name="qty-lbs" id="qtyLbs" value="1">
                          <div class="qty-or-lbs-wrapper">
                              <div>Qty</div>
                          </div>
                      </div>
                      <button class="add-to-cart-btn" type="submit">
                        <div class="cart-icon">
                          <fa-icon :icon="['fa', 'cart-plus']" size="2x"/>
                        </div>
                      </button>
                  </div>
              </div> 

          </div>
          <div class="item-wrapper">
              <div class="item-row1">
                  <div class="item-img">
                      <img src="../../public/products/dietPepsi.jpg" alt="">
                  </div>
              </div>
              <!-- item row 2, description and detail iin here. -->
              
              <div class="item-row2"> 
                  <div class="item-desc">
                      <p class="desc-tag">Diet pepsi</p>
                      <p>24 x 355 mL Cans</p>
                  </div>
      
              </div>
              <!-- item price and saving here -->
              <div class="item-row3">
                  <div class="item-price-wrapper">
                      <div class="item-price-icon">
                          <fa-icon :icon="['fa', 'dollar-sign']" size="1x"/>
                      </div>
                      
                      <div class="dollar">
                          10
                      </div>
                      <div class="cent">
                          69
                      </div>
                      
                  </div>
                  <div class="item-costs__wrapper">
      
                      <div class="item-costs__details">
                          <div class="item-costs__shipping-cost">
                              <p class="shipping-cost__p">shipping</p>
                              <p class="shipping-cost__price">$8.00</p>
                          </div>
                          <div class="item-price-was__total-cost">
                              <p class="total-cost__p">Total</p>
                              <p class="total-cost__price">$14.69</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
              <div class="item-fotter">
                  
                  <div class="add-to-cart">
                      <div class="input-qty-wrapper">
                          <input type="number" name="qty-lbs" id="qtyLbs" value="1">
                          <div class="qty-or-lbs-wrapper">
                              <div>Qty</div>
                          </div>
                      </div>
                      <button class="add-to-cart-btn" type="submit">
                        <div class="cart-icon">
                          <fa-icon :icon="['fa', 'cart-plus']" size="2x"/>
                        </div>
                      </button>
                  </div>
              </div>
          </div>
          <div class="item-wrapper">
              <div class="item-row1">
                  <div class="item-img">
                      <img src="../../public/products/orangeCrush.jpg" alt="">
                  </div>
              </div>
              <!-- item row 2, description and detail iin here. -->
              
              <div class="item-row2"> 
                  <div class="item-desc">
                      <p class="desc-tag">Crush Soda Orange</p>
                      <p>12 x 355 mL Cans</p>
                  </div>
      
              </div>
              <!-- item price and saving here -->
              <div class="item-row3">
                  <div class="item-price-wrapper">
                      <div class="item-price-icon">
                          <fa-icon :icon="['fa', 'dollar-sign']" size="1x"/>
                      </div>
                      
                      <div class="dollar">
                          4
                      </div>
                      <div class="cent">
                          99
                      </div>
                      
                  </div>
                  <div class="item-costs__wrapper">
      
                      <div class="item-costs__details">
                          <div class="item-costs__shipping-cost">
                              <p class="shipping-cost__p">shipping</p>
                              <p class="shipping-cost__price">$4.00</p>
                          </div>
                          <div class="item-price-was__total-cost">
                              <p class="total-cost__p">Total</p>
                              <p class="total-cost__price">$8.99</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
              <div class="item-fotter">
                  
                  <div class="add-to-cart">
                      <div class="input-qty-wrapper">
                          <input type="number" name="qty-lbs" id="qtyLbs" value="1">
                          <div class="qty-or-lbs-wrapper">
                              <div>Qty</div>
                          </div>
                      </div>
                      <button class="add-to-cart-btn" type="submit">
                        <div class="cart-icon">
                          <fa-icon :icon="['fa', 'cart-plus']" size="2x"/>
                        </div>
                      </button>
                  </div>
              </div> 
          </div>                                                                            
      </div>
    </div>
  </div>
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

// GENERAL STYLE
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



/* __________________________________MOST POPULAR__________________________________________________________________ */

// header start

.row1-header{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
}
.row1-header h2 {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 10px;
  width: 70%;
  height: 150px;
  font-size: 4rem;
  border-top: 3px solid var(--blue);
  border-bottom: 3px solid var(--dark);
  color: var(--dark);
  font-weight: 600;
}
/* once an item is add to the cart, this will appear in from of the item */
.item-wrapper{
    position: relative;
} 
.items-row1 {
    /* maybe will have to ajuste the width here!! */
    grid-row: span 1;
    margin-top: 50px;
    margin-bottom: 120px;
    display: grid;
    padding: 10px 0 10px 0;
    height: auto;
    column-gap: 5px;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: center;
    grid-gap: 5px;
    
}
/* _____________________________________________________________________________________________________________________ */
.items-row1 > div {
    background-color: var(--light);
    box-shadow: var(--shadow);
    height: 370px;
    display: grid;
    grid-template-columns: auto;
    /* to be ajusted!!!! */
    grid-template-rows: auto auto 2fr 1fr;
}
/* ROW 2 */
/* __________________________________________________________________________________________________________________ */


.items-row2 > div {
    background-color: var(--lighterBlue);
    box-shadow: var(--shadow);
    height: 400px;
    display: grid;
    grid-template-columns: auto;
    /* to be ajusted!!!! */
    grid-template-rows: auto auto 2fr 1fr;
    
}


/* ROW 3 */
/* __________________________________________________________________________________________________________________ */


.items-row3 > div {
    background-color: var(--beige);
    box-shadow: var(--shadow);
    border-radius: 1% ;
    padding: 5px;
    margin: 5px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 140px 80px auto;
}


/* ________________________________________________________________________________________________________________ */
/* card template */


/* top header image */
/* top body */
/* bottom body */
/* card footer */


/* top header image */
.item-img > img{
    height: 190px ;
    width: 100%;
    object-fit: scale-down;
    object-position: center; 
} 




/* card body top */


.item-row2 {
    grid-row: span 1;
    display: grid;
    max-height: fit-content;
    grid-template-columns: 1fr;
    justify-content: start;
    font-size: 0.9rem;
    padding: 0 20px;
    align-content: space-around;
    text-align: left;
    
    
}


.desc-tag {
    
    font-size: 1.3rem;
    color:var(--blue);
    padding-right: 10px;
}




/* top body */


.item-row3 {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 30px;
    justify-content: space-between;
    align-content: stretch;
    padding: 0 20px 0 20px;
    color: var(--dark);
}


.item-price-wrapper {
    grid-column: 0 / 1;
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    line-height: 0.8;  
}


.item-price-icon {
    display: flex;
    /* align-self: start; */
    font-size: 1.5rem;
    margin-bottom: 15px;
}


.dollar {
    
    /* align-self: start; */
    
    font-size: 3rem;
    line-height: 2.3rem;
    
}


.cent {
    display: flex;
    /* align-self: start; */
    margin-bottom: 15px;
    justify-content: start;
    font-size: 1.5rem;
}


.item-costs__wrapper {
    grid-row: 2 / -1;
    grid-column: span 2;
}


.item-costs__details {
    
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
}




.item-costs__shipping-cost {
    display: flex;
    /* display: grid;
    grid-template-columns: 70px 1fr;
    justify-items: right; */
}


.item-price-was__total-cost {
    display: flex;
    font-size: 1.0rem;
    /* display: grid;
    grid-template-columns: 70px 1fr;
    justify-items: right; */
}








.add-to-cart {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    padding: 0 20px 10px 20px; 
}


.input-qty-wrapper {
    display: grid;
    height: 30px;
    grid-template-columns: 2fr 1fr;
    border: 1px solid #999;
    align-items: center;
}
.add-to-cart input {
    display: flex;
    grid-row: span 1;
    height: 100%;
    width: 100%;
    text-align: center;
    font-weight: 500;
    border: none;
    
}


.qty-or-lbs-wrapper {
    
    height: 85%;
    width: 100%;
    align-items: center;
    text-align: center;
    border-left: 1px solid #999;   
}


.add-to-cart button {
    outline: none;
    width: 100%;
    height: 40px;
    justify-self: center;
    border: none;
    background-color: var(--blue);
    transition: 0.1s all linear;
}
.cart-icon {
    color: var(--light);
    font-size: 0.8rem;
    
}
.add-to-cart-btn:hover {
    cursor: pointer;
    box-shadow: none;
    transform: scale(0.95);
    transition: 0.1s all linear;
}
#navLogoContainer{
    display: none;
}
</style>
