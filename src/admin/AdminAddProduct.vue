/* eslint-disable */ 
<template>
  <div class="addproduct">
    
      <div class="btn-group-wrapper"> <!--  HEADER START -->
        <div class="header-wrapper">
          <span>Unsaved Changes</span>
        </div>
        <div class="header-btn">
          <button @click="goBack()" class="btn" >Discard</button>
          <button v-if="!this.docRefProduct" @click="saveData()"  class="btn btn-primary">Create</button>
          <button v-if="this.docRefProduct" @click="updateData()"  class="btn btn-primary">Update</button>
        </div>
      </div>                          <!--  HEADER END -->     
      <div class="add-work-wrapper">
        <div class="centering-wraper">

          <div class=""> <!--  PAGE TITLE START -->   
            <div class="prev-link__add-work-wrapper">

              <router-link class="prev-link" to="/admin/products">
                  <div>
                    <fa-icon class="previous-icon" :icon="['fa', 'chevron-left']" />
                    <span>Products</span>
                  </div>
              </router-link>

            </div>

            <div class="title__add-work">
              <span>Add Product</span>
            </div>

          </div> 
        </div>
      </div>                 <!--  PAGE TITLE END -->   
      <div class="page-grid-wrapper">
        <div class="main-grid">
          <div class="product-name-wrapper">
            <h5>Product details</h5>
            <div class="form-group">
              <label class="main-grid-label" for="exampleFormControlInput1">Product name</label>
              <input v-model="product.name" type="text" class="form-control"  placeholder="Title">
            </div>
            <div class="">
              <label class="main-grid-label" for="exampleFormControlInput1">Description</label>
              <vue-editor :editor-toolbar="customToolbar" v-model="pDescription" ></vue-editor>
              <!-- <input v-model="product.description" type="text" placeholder="Tag Name" maxlength="10"> -->
            </div>

          </div>
          <div class="product-img-wrapper">
            <div class="">
              <h5>Images</h5> 
                
            </div>
            <div v-if="!product.images.length" v-show="isLoad" class="icon-image-wrapper">
              <fa-icon class="work-icon" :icon="['fa', 'image']"/>
              <span> Select Images to upload</span>
              
            </div>
            <div v-show="!isLoad" class="spinner-wrapper">
              <div class="upload-frame icon-image-wrapper"></div>
            </div>
            
            <div v-if="product.images.length " class="form-group d-flex">
              <div class="p-1"  v-for="(image,idx) in product.images" :key="idx" >
                <div class="img-wrapp">
                  <img width="250px" :src="image" alt="">
                  <span class="delete-img" @click="deleteImage(image,idx)">&times;</span>
                </div>
                
              </div>
              
            </div>
              
            <div  >
              
              <input  type="file" @change="uploadImage" class="hidden" id="files">
              <label class="select-image-link" for="files"></label>
            </div>
          </div>
          <div class="">
            <div class="product-pricing-wrapper">
              <h5>Pricing $CAD</h5>
              
              <hr>
              <div class="price-input-wrapper">

                <label class="main-grid-label " for="exampleFormControlInput1">Product price:</label>
                <div class="box">
                  
                  
                  <div class="form-wrapper">
                    <div class="unit-container">
                      <h6>Dolar</h6>
                      <numberInput :height="'40px'" :num="productDolar" @numberChanged="productDolar = $event"></numberInput>
                    </div>
                    <div class=""><h6>.</h6></div>
                    <div class="unit-container">
                      <h6>Cent</h6>
                      <decimalInput :height="'40px'" :dec="productCent" @numberChanged="productCent = $event"></decimalInput>
                    </div>
                  </div>
                </div>

                <label class="main-grid-label topBorder" for="exampleFormControlInput1">Compare at price:</label>
                <div class="box">
                  
                  
                  <div class="form-wrapper">
                    
                    <div class="unit-container">
                      <h6>Dolar</h6>
                      <numberInput :num="productCompareDolar" @numberChanged="productCompareDolar = $event"></numberInput>
                    </div>
                    <div class=""><h6>.</h6></div>
                    <div class="unit-container">
                      <h6>Dolar</h6>
                      <decimalInput :dec="productCompareCent" @numberChanged="productCompareCent = $event"></decimalInput>
                    </div>
                  </div>
                </div>

                <label class="main-grid-label topBorder" for="exampleFormControlInput1">Cost per item:</label>
                <div class="box">
                  
                  
                  <div class="form-wrapper">
                    
                    <div class="unit-container">
                      <h6>Dolar</h6>
                      <numberInput :num="productCostDolar" @numberChanged="productCostDolar = $event"></numberInput>
                    </div>
                    <div class=""><h6>.</h6></div>
                    <div class="unit-container">
                      <h6>Dolar</h6>
                      <decimalInput :dec="productCostCent" @numberChanged="productCostCent = $event"></decimalInput>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="">
              <div class="product-price-checkbox">
                
                <input  v-model="product.taxes" type="checkbox"  name="applyTaxes" id="">
                <h6>Charge taxes on this product</h6>
                
              </div>
            </div>
            
          </div>
          <div class="product-pricing-wrapper">
            <h5>Inventory</h5>
            <hr>
            <div class="">

              <label class="main-grid-label" for="exampleFormControlInput1">Product number:</label>
              <div class="inventory-input-wrapper">

                
                <div class="inventory-form-wrapper">
                  
                  <div class="">
                    <h6>SKU (Stock keeping Unit)</h6>
                    <input v-model="product.productId" type="text" class="form-control" maxlength="15" >
                    <p>Generate ProductId</p> 
                  </div>
                  <div class="qty-form">
                    <h6>Quantity</h6>
                    <numberInput :num="product.qty" @numberChanged="product.qty = $event"></numberInput>
                  </div>
                  
                  
                  
                </div>
                
              </div>
            </div>
            <div class="inventory-form-wrapper">
              <div class="product-price-checkbox">
                <input v-model="product.trackQty"  type="checkbox"  name="applyTaxes" id="">
                <h6>Track quantity</h6>
              </div>
              <div class="product-price-checkbox">
                <input type="checkbox" v-model="product.sellWhenOut"  name="applyTaxes" id="">
                <h6>Continue selling when out of stock</h6>
                
              </div>
            </div>
           
            
          </div>
          <div class="product-pricing-wrapper">
            <div class="form-group">
             <h5>Shipping Details</h5> 
            </div>
            <hr>
            <div class="">
              
              <div class="form-group">
                <label class="main-grid-label" for="exampleFormControlInput1">Shipping & Handling:</label>
                <p>Used to calculate shipping weight rate at $0.40/Lbs and total weight at checkout.</p>
              </div>
              <h6>SHIPPING COST:</h6>
              
              <div class="box">
                
                
                <div class="shipping-details-form-wrapper">
                  
                  <div class="input-label-wrapper">
                    <h6>Dollar</h6>
                    
                    <numberInput :num="shippingDolar" @numberChanged="shippingDolar = $event"></numberInput>
                  </div>
                  <div class=""><h6>.</h6></div>
                  <div class="input-label-wrapper">
                    <h6>Cent</h6>
                    <decimalInput :dec="shippingCent" @numberChanged="shippingCent = $event"></decimalInput>
                  </div>
                  <div id="slashBetUnit223"><h6>/</h6></div>
                  <div class="input-label-wrapper">
                    <h6>Unit</h6>
                    <select  v-model="product.Unit" class="custom-select" id="exampleFormControlSelect1">
                      <option selected>Lbs</option>
                      <option >Kg</option>
                    </select>   
                  </div>
                  
                </div>
                
              </div>
              
              <div class="compare-price-screen-wrapper">
                
                
              </div>
              
              <div class="form-group topBorder">
                <label class="main-grid-label" for="exampleFormControlInput1">Weight</label>
                <p>Used to calculate shipping weight rate at $0.40/Lbs and total weight at checkout.</p>
              </div>
              
              <div class="product-weight-wrapper form-group">
                <div class="input-label-wrapper">
                  <h6>WEIGHT</h6>
                  <input v-model="product.weight" type="text" name="" id="" class="form-control" placeholder="0" pattern="$[0-9].[0-9]">
                </div>
                <div class="input-label-wrapper">
                  <h6>Unit</h6>
                  <select v-model="product.Unit" class="custom-select" id="exampleFormControlSelect1">
                  <option selected>Lbs</option>
                  <option >Kg</option>
                </select> 
                </div>
                
              </div>
              
              <div class="form-group topBorder">
                <label class="main-grid-label" for="exampleFormControlInput1">Size</label>
                <p>Used to calculate shipping size rate at $0.40/Lbs and total Volume at checkout.</p>
              </div> 

              <div class="product-volume-wrapper">
                <div class="form-group">
                  <h6>Lenght</h6>
                  <div class="product-weight-wrapper">
                    <input type="number" name="" id="" class="form-control" placeholder="0" >
                    
                  </div>
                  
                </div>
                <div class="form-group">
                  <h6>width</h6>
                  <div class="product-weight-wrapper">
                    <input type="number" name="" id="" class="form-control" placeholder="0" >
                    
                  </div>
                </div>
                <div class="form-group">
                  <h6>height</h6>
                  <div class="product-weight-wrapper">
                    <input type="number" name="" id="" class="form-control" placeholder="0" >
                    
                  </div>
                </div>
                <div id="mesurmentSelect289" class="form-group">
                  <h6>Mesurment</h6>
                  
                  <div class="product-weight-wrapper">
                   
                    <select class="custom-select" id="exampleFormControlSelect1">
                      <option selected>Inch</option>
                      <option >Cm</option>
                    </select>  
                  </div>
                </div>
              </div>
              

              
            </div>
            
            
          </div>
          
        </div>
        <div class="aside-grid">
          

          <div class="organization">

            

            <h6>Product Status</h6>
            <div v-if="product.status == 'Archived'" class="status-container">
              
             
              <div class="status-wrapper">
                <div class="icon-stastus">
                  <fa-icon :icon="['fa', 'folder-minus']"/>
                </div>
                <div class="status-details">
                  <h6>Archived</h6>
                  <p>Hidden from admin, except your product list</p>
                </div>

              </div>

              <div class="unarchive-btn-wrapper">
                <button class="unarchive-btn" @click="restoreProduct() ">Restore product</button>
              </div>


              
              
            </div>

            <div v-if="product.status != 'Archived'" class="form-group">
              
             
              
              <select  v-model="product.status" class="custom-select" id="exampleFormControlSelect1">
                <option value="" disabled selected="selected">Select Product Status</option>
                <option v-for="(status, idx) in  productstatus" :key="idx" >{{status}}</option>
              </select> 
              
              
            </div>
          </div>
          <div class="organization">

            <h6>Organization</h6>
            <div class="form-group">
              <label class="main-grid-label" for="exampleFormControlSelect1">Product Type</label>
             
              
              <select  v-model="product.categorie" class="custom-select" id="exampleFormControlSelect1">
                <option value="" disabled selected="selected">Select Product Type</option>
                <option v-for="(cat, idx) in  productsCategories" :key="idx" >{{cat}}</option>
              </select> 
              
              
            </div>
            <div class="form-group">
              <label class="main-grid-label" for="exampleFormControlSelect2">Vendor</label>
             
              
              <select  v-model="product.vendor" class="custom-select" id="exampleFormControlSelect2">
                <option value="" disabled selected="selected">Select Vendor</option>
                <option v-for="(vendor, idx) in vendors" :key="idx" >{{vendor}}</option>
              </select> 
              
              
            </div>
              <div class="form-group">
                <label class="main-grid-label" for="exampleFormControlInput1">Tag name</label>
                <input @keypress.enter="addTag" @keyup.188="addTag" v-model="tag" type="text" class="form-control"  placeholder="Tag Name">
                <ul class="form-tags" >
                  
                  <li v-for="(tag, idx) in product.tags" :key="idx" >
                    <div>{{tag}}</div>
                    <span @click="deleteTag(idx)" >&times;</span>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      <div class="btn-group-wrapper-footer"> <!--  HEADER START -->
        
        <div class="header-btn">
          <button @click="goBack()" class="btn btn-primary " >Discard</button>
          <button v-if="!this.docRefProduct" @click="saveData()"  class="btn btn-primary">Create</button>
          <button v-if="this.docRefProduct" @click="updateData()"  class="btn btn-primary">Update</button>
        </div>
      </div> 
  </div>
</template>

<script>


// import productsCategories from "./AdminProducts"
import {VueEditor} from "vue2-editor";
import {fb, db} from '../firebase';
import {productsCategories} from "../admin/AdminProducts"


// import $ from 'jquery'
export default {
  
  name: "addproduct",
  async created () {
    console.log(productsCategories);
    if(localStorage.docRefProduct){
      this.docRefProduct = localStorage.docRefProduct;
      console.log(this.docRefProduct);
      
      var product = db.collection("products").doc(this.docRefProduct);

      product.get().then((doc) => {
          if (doc.exists) {
              
              console.log("Document data:", doc.data());
              const data = doc.data();
              this.product =  data;
              
              // deleting
              if(this.product.name){
                var index = this.product.tags.indexOf(this.product.name);
                this.product.tags.splice(index,1);
              }
              if(this.product.categorie){
                index = this.product.tags.indexOf(this.product.categorie);
                this.product.tags.splice(index,1);

              }
              if(this.product.vendor){
                index = this.product.tags.indexOf(this.product.vendor);
                this.product.tags.splice(index,1);

              }
              
              
              

              // convert the description
              this.pDescription = this.product.description ;
              // converte the price into two dollar and Cents for (product.price & product.comparePrice & product.costPrice)
              // product.price delivered to productDollar and productCent
              let price = this.product.price;
              let strPrice = price.toString()
              let length = strPrice.length
              this.productCent = strPrice.slice(-2,length);
              this.productDolar = parseInt(strPrice.slice(0,-2));
              console.log(strPrice.slice(-2,length));
              console.log(strPrice.slice(0,-2));  
              // product.price delivered to productCompareDollar and productCompareCent 
              price = this.product.comparePrice;
              strPrice = price.toString()
              length = strPrice.length
              this.productCompareCent = strPrice.slice(-2,length);
              this.productCompareDolar = parseInt(strPrice.slice(0,-2));
              console.log(strPrice.slice(-2,length));
              console.log(strPrice.slice(0,-2));  
              // product.price delivered to productCostDollar and productCostCent     
              price = this.product.costPrice;
              strPrice = price.toString()
              length = strPrice.length
              this.productCostCent = strPrice.slice(-2,length);
              this.productCostDolar = parseInt(strPrice.slice(0,-2));
              console.log(strPrice.slice(-2,length));
              console.log(strPrice.slice(0,-2));      
              //pruduct shippingcost to shippingCent and shippingDolar
              price = this.product.shippingcost;
              console.log(price + "that is the raw shiiping price from google");
              price = price / this.product.weight;
              price = price.toFixed(2);
              console.log(price + "you suposed 2 digit num");
              strPrice = price.toString();
              length = strPrice.length;
              this.shippingCent = strPrice.slice(-2,length);
              this.shippingDolar = parseInt(strPrice.slice(0,-2));
              console.log(strPrice.slice(-2,length));
              console.log(strPrice.slice(0,-2));   
              // product Weight 

              
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      }); 
    }else{
      console.log('no product to edit');
    }
    
  },
  components: {
    VueEditor
  },
  props: {
    
  },
  data() {
    return {
      productsCategories: productsCategories,
      docRefProduct:null,
      pDescription:null,
      
      
      vendorNumber:null,
      categoryNumber:null,
      weightNumber:null,
      productNumber:null,
      shippingCent:"00",
      
      shippingDolar:0,
      productCompareDolar:0,
      productCompareCent:"00",
      productCostCent:"00",
      productCostDolar:0,
      productDolar: 0,
      productCent: "00",
      productstatus: ["Active", "Pending"],
      customToolbar:[
         
            
            [{ 'align': ''},{ 'align': 'justify'}, { 'align': 'right' }],
            ['code-block']
          ],
    
      ImgSource: 'public/admin_img/products.svg',
      AdminPage: 'addproduct',
      AdminPageContent: `Lorem ipsum dolor, sit amet consectetur adipisicing 
                         elit. Laudantium dolorum sint nobis ex illo inventore autem consectetur 
                         aspernatur possimus exercitationem.`,
      isLoad: true,
      // cats: [{cat:'Dry', id:'01'},{cat:'Frozen', id:'02'},{cat:'Chips', id:'03'},{cat:'Pop', id:'04'},{cat:'Utilities', id:'05'} ],
      tag: null,
      vendors: ['Superior Airways','IGA','Red Apple','Red Lake Marine'],
      products: [],
      product: {
        status:null,
        images:[],
        productId:null,
        name:null,
        tags:[],
        categorie:null,
        vendor:null,
        description:null,
        costPrice:null,
        comparePrice:null,
        price: null,
        weight:null,
        shippingcost:null,
        size:null,
        Unit:null,
        qty:0,
        taxes:false,
        trackQty:false,
        sellWhenOut:false
      },

    }
  },
  
  // editProduct(docRefProduct){
  //   if(docRefProduct){
  //     return console.log(docRefProduct);
  //   }else{
  //     return console.log('No Propduct');
  //   }
  // },
  
  firestore(){
    return {
      products: db.collection('products'),
    }
  },
  methods:{
    restoreProduct(){
      this.product.status = 'Pending'
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      window.localStorage.removeItem('docRefProduct');
    },
    trimDescriptionTags(){
      let str = this.pDescription;
      this.product.description = str.replace("<p>","").replace("</p>","");
    },
    shippingcost(){
      console.log(this.shippingDolar + "dollar");
      console.log(this.shippingCent + "Cent" );
      console.log(this.product.weight + "Weight"  );
      const shippingCost = parseFloat(this.shippingDolar.toString() + "." + this.shippingCent.toString()) * this.product.weight;
      console.log(shippingCost);
      this.product.shippingcost = shippingCost.toFixed(2);
      console.log(this.product.shippingcost + " is your NaN");
    },
    createId(){
        
        let ID = this.vendorNumber + this.categoryNumber + this.weightNumber + this.productNumber
        console.log(ID);
        if(ID === 'nullnullnullnull'){
          return "XXX - XXX - XXX - XXX"
        } 
        this.product.id = ID
        return  this.vendorNumber + '-' + this.categoryNumber + '-' + this.weightNumber + '-' + this.productNumber
    },
    
    price(){
      let stringPrice = this.productDolar + '.' + this.productCent
      console.log(stringPrice);
      var price = parseFloat(stringPrice) * 100
      console.log(price);
      this.product.price = price
      var n = price / 100
      var m = n.toFixed(2);
      return "$" +  m;
    },
    
    comparePrice(){
      let stringPrice = this.productCompareDolar + '.' + this.productCompareCent
      console.log(stringPrice);
      var price = parseFloat(stringPrice) * 100
      console.log(price);
      this.product.comparePrice = price
      var n = price / 100
      var m = n.toFixed(2);
      return "$" +  m;
    },
    CostPrice(){
      let stringPrice = this.productCostDolar + '.' + this.productCostCent
      console.log(stringPrice);
      var price = parseFloat(stringPrice) * 100
      console.log(price);
      this.product.costPrice = price
      var n = price / 100
      var m = n.toFixed(2);
      return "$" +  m;

    },


    deleteImage(img,idx){
        let image = fb.storage().refFromURL(img);

        this.product.images.splice(idx,1);

        image.delete().then(function(){
          console.log('image deleted');
        }).catch(function(error){
          // uh-oh, an error occured
          console.log('an error occurred:' + error );
        })
      },
    uploadImage(e){
      if(e.target.files[0]){
        let file = e.target.files[0];
        var storageRef = fb.storage().ref('Products/' + file.name);
        let uploadTask = storageRef.put(file);
        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', (snapshot) => {
          // uploadTask.on('state_changed', function(){
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          if(snapshot.bytesTransferred !== snapshot.totalBytes){
            this.isLoad = false;
          
          }else{
            this.isLoad = true;
          }
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          // switch (snapshot.state) {
          //   case fb.storage.TaskState.PAUSED: // or 'paused'
          //     console.log('Upload is paused');
          //     break;
          //   case fb.storage.TaskState.RUNNING: // or 'running'
          //     console.log('Upload is running');
          //     break;
          // }
        }, () => {
          // Handle unsuccessful uploads function(error)
        }, () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.product.images.push(downloadURL);
            console.log('File available at', downloadURL);
          });
        }); 
      }
      

    },
    addTag(){
      this.product.tags.push(this.tag);
      this.tag = '';
    },
    deleteTag(idx){
      this.product.tags.splice(idx, 1)
      
      
    },
    saveData(){
      this.comparePrice();
      this.price();
      this.CostPrice();
      this.shippingcost();
      this.trimDescriptionTags();
      if(this.product.name){
        this.product.tags.push(this.product.name);
      }
      if(this.product.categorie){
        this.product.tags.push(this.product.categorie);
      }
      if(this.product.vendor){
        this.product.tags.push(this.product.vendor);
      }
      this.$firestore.products.add(this.product);
      this.$router.push('products');
    },
    updateData(){
      this.comparePrice();
      this.price();
      this.CostPrice();
      this.shippingcost();
      this.trimDescriptionTags();
      if(this.product.name){
        this.product.tags.push(this.product.name);
      }
      if(this.product.categorie){
        this.product.tags.push(this.product.categorie);
      }
      if(this.product.vendor){
        this.product.tags.push(this.product.vendor);
      }
      
      
      
      this.$firestore.products.doc(this.docRefProduct).update(this.product);
      this.goBack()
    },  
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.addproduct{
  background-color: var(--primary);
}
*{
  margin: 0 ;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
// Boostrap fight start
.form-control{
  height: 40px;
}
// HEADER STYLE START <----
.btn-group-wrapper{
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
  height: 50px;
  display: flex;
  font-weight: 100;
  justify-content: space-around;
  background-color: var(--lightwhite1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
}
.btn-group-wrapper-footer{
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
  height: 50px;
  display: flex;
  font-weight: 100;
  justify-content: flex-end;
  background-color: var(--lightwhite1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
}
.header-btn > button{
  margin: 0 10px;
}
@media (max-width: 760px) {
.btn-group-wrapper{
  padding: 0 15px 0 60px;
  
}
  
}
// PAGE TITLE START
.add-work-wrapper{
  display: flex;
  justify-content: center;
  
}
.centering-wraper{
  padding: 20px 0 ;
  width: 1020px;
}
.prev-link__add-work-wrapper{
  padding-bottom: 12.5px;

}
.prev-link > div{
  color: var(--secondary);
  
}
.prev-link > div > span{
  font-weight: 100px;
  
}
.previous-icon{
  font-size: 1.3rem;
  padding-right: 5px;
}
.title__add-work{
  font-size: 1.5rem;
  font-weight: 600;
}
// PAGE TITLE END

// MAIN GRID START

.page-grid-wrapper{
width: 100%;
justify-content: center;
display: grid;
grid-gap: 20px;
grid-template-columns: 700px 300px;
}
.main-grid{
  width: 100%;
  display: flex;
  flex-direction: column;
  
}
.main-grid > div{
margin-bottom: 20px;
padding: 20px;
border-radius: 10px;
width: 100%;
background-color: var(--lightwhite1);
}
.main-grid h5{
  margin-bottom: 10px;
}
.main-grid h6{
  margin: 10px 0;
}
.main-grid p{
  color: var(--lightgray);
}

.table-header-wrapper{
  display: flex;
  margin-left: 215px;
  width: 500px;
  justify-content: space-evenly;
  font-size: 1.2rem;
  color: var(--blue1);

}
.table-header-wrapper .td-cent{
  
  padding-left: 65px;
  
}
.price-input-wrapper{
  width: 100%;
  display: grid;
  grid-template-columns:1fr;
  margin-top: 30px;
  
}
.price-input-wrapper > div{
  width: 100%;
  margin-top: 10px;
  
}
.product-price-checkbox{
  padding-top: 20px;
  
  display: flex;
}

.product-price-checkbox input{
  margin-right: 10px;
  transform: scale(1.2);
  margin-top: 15px;
}
.product-price-checkbox label{
  padding-bottom: 20px;
  font-size: 1.2rem;
  color: var(--blue1);
}
.product-pricing-wrapper{
  padding-bottom: 30px;
}
.main-grid-label{
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 1.2rem;
  color: var(--blue1);
}
.product-weight-wrapper{
  display: flex;
  
  

}
.topBorder{
  border-top: 1px solid var(--primary);
}
.product-weight-wrapper select{
  width: 150px;
  margin-right: 10px;
}
.product-weight-wrapper input{
  width: 75px;
  margin-right: 10px;
}
.product-volume-wrapper{
  display: flex;
}
// spinner style start
.unit-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.unit-wrapper{
  position: relative;
  
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid var(--darkT);
  transition: 0.5s;
}
.unit-wrapper:hover{
  width: 140px;
  border: 2px solid var(--dark);
}
.unit-wrapper .next{
  position: absolute;
  top:35%;
  
  right: 13px;
  width: 12px;
  height: 12px;
  border-top: 2px solid var(--dark);
  border-left: 2px solid var(--dark);
  z-index: 1;
  transform: rotate(135deg);
  cursor: pointer;
  opacity: 0;
  transition: 0.5s;
}
.unit-wrapper:hover .next{
  opacity: 1;
  right: 20px;
}
.prev{
  position: absolute;
  top:35%;
  
  left: 13px;
  width: 12px;
  height: 12px;
  border-top: 2px solid var(--dark);
  border-left: 2px solid var(--dark);
  z-index: 1;
  transform:  rotate(315deg);
  cursor: pointer;
  opacity: 0;
  transition: 0.5s;
}
.unit-wrapper:hover .prev{
  opacity: 1;
  left: 20px;
}
#box input{
  outline: none;
  background: transparent;
  border: none;
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 35px;
  /*display: none;*/
  color: #00deff;
  font-size: 22px;
  font-weight: 600;
  user-select:none;
}
/* Chrome, Safari, Edge, Opera */
#box input::-webkit-outer-spin-button,
#box input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
#box input[type=number] {
  -moz-appearance: textfield;
}
// spinner style end
.form-wrapper{
  display: grid;
  grid-template-columns: auto 50px auto ;
  align-items: flex-end;
  justify-content: flex-start;
}
.shipping-details-form-wrapper{
  display: grid;
  grid-template-columns: 140px 20px 140px 80px 150px;
  align-items: flex-end;
  justify-content: flex-start;
}
.shipping-details-form-wrapper > div{
  display: flex;
  
  justify-content: center;
}
.form-wrapper > div{
 
  align-self: flex-end;
  justify-self: center;
}
.form-wrapper h6{
  color: var(--gray);
 font-size: 1.0rem;
 line-height: 0.3;
  
}
.inventory-form-wrapper{
  width: 100%;
  display: flex;
  
  align-items: center;
  
}
.inventory-form-wrapper > div{
  padding-right: 40px;
}
.inventory-form-wrapper span{
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-top: 20px;
  font-size: 1.6rem;
  color: var(--gray);
}
.input-label-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.qty-form{
  margin-bottom: 20px;
}
.box{
  margin-bottom: 10px;
}

.price-screen-wrapper{
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 10px;
}
.price-screen-wrapper span{
  color: var(--gray);
  font-size: 1.2rem;
}
.compare-price-screen-wrapper{
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 10px;
  
}
.compare-price-screen-wrapper span{
  font-size: 1.2rem;
  color: var(--gray);
  // text-decoration: line-through;
}
// MAIN GRID END

// ASIDE START
.custom-select {
  height: 40px;
  font-size: 1rem;
  padding: 0.5em 1em;
  border: 1px solid lightgrey;
}
.aside-grid{
  
  display: grid;
  grid-template-columns: 100%;
  row-gap: 10px;
  height: fit-content;
  
  
}
.organization{
  border-radius: 10px;
  padding: 20px;
  background-color: var(--lightwhite1);
}
.organization h6{
  padding-bottom: 20px;
}
.organization > div {
  padding-bottom: 20px;
}
.status-container{
  padding: 10px;
  background-color: var(--primary);
}
.status-wrapper{
  display: flex;
}
.status-wrapper h6{
  padding-bottom: 10px;
}
.status-details{
  padding: 0 10px 10px 10px;
}
.unarchive-btn-wrapper{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.unarchive-btn-wrapper button{
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 5px;

  background-color: var(--lightwhite1);
  border:  1px solid var(--gray);
}
.unarchive-btn-wrapper button:hover{
  background-color: var(--primary);
}
select:required:invalid {
  color: gray;
}

option {
  color: black;
}
.product-img-wrapper{
  display: flex;
  justify-content: space-between;
  padding: 20px;
  min-height: 400px;
}
.hidden{
  display: none;
}
.icon-image-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--grayDisable);
  font-size: 4rem;
}
.icon-image-wrapper span{
  font-size: 1rem;
}
.select-image-link::-webkit-file-upload-button {
  visibility: hidden;
}
.select-image-link::before {
  content: 'Upload image';
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
.select-image-link:hover::before {
  border-color: black;
}
.select-image-link:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
// ASIDE END
// HEADER STYLE FINISH <----
// MODAL ADD PRODUCTS START <-----
.modal-header h5{
  font-size: 2.5rem;
}
.form-tags{
  
  display: flex;
  flex-wrap: wrap;
  // grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  
  // grid-auto-flow: dense;
  
  max-width: 400px;
  
}
.form-tags li {
  width: fit-content;
  position: relative;
  color: var(--dark);
  display: flex;
  padding: 5px;
  margin: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 20px ;
  border: 1px solid var(--grayDisable);
  background-color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.0rem;
  
}
.form-tags li span{
  position: absolute;
  top:-10px;
  right: -10px;
  
  // color: var(--gray);
  

}
.form-tags li span:hover{
  cursor: pointer;
}
.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
  font-size: 1.5rem;
  position: absolute;
  top: -6px;
  right: 2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}
.spinner-wrapper{
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}
.upload-frame{
  position: relative;
  width: 100px;
  height: 100px;
  background-color: var(--primaryT);
}
.d-flex{
  justify-content: center;
  align-items: center;
}
.upload-frame::before{
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 40px;
  width: 40px;
  margin-top: -20px;
  margin-left: -20px;
  border-radius: 50%;
  border-top: 2px solid var(--blueGoogle);
  border-bottom: 2 px solid transparent;
  animation: spinner 0.7s ease-in infinite;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
// MODAL ADD PRODUCTS END<-----
// MEDIA QUERIES START
@media (max-width: 1060px){
.page-grid-wrapper{
  grid-template-columns: 75%;
}
}
@media (max-width: 750px){
  // SHIPPING DETAILS DESING START
  #slashBetUnit223{
    display: none;
  }
  .shipping-details-form-wrapper{
    grid-template-columns: 140px 20px 140px;
  }
  .product-volume-wrapper{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
  }
  #mesurmentSelect289{
    grid-column: span 3 ;
  }
  // SHIPPING DETAILS DESING START END
}
@media (max-width: 500px){
  // SHIPPING DETAILS DESING START
  .page-grid-wrapper {
    grid-template-columns: 100%;
}
  // SHIPPING DETAILS DESING START END
}
// MEDIA QUERIES END

</style>
