/* eslint-disable */ 
<template>
  <div class="addproduct">
    
        <div v-if="alert" class="center-screen alert alert-success" role="alert">
          <div>
            <label class="check-mark-label" for="">
              <div class="check-icon"></div>
            </label>
          </div>
          <div class="restore-message">
            <div>
              <span class="span-success-popup">{{alert.badgeSuccessTitle}}</span>
            </div>
            <div class="span-notice">
              <span>{{alert.badgeMsg}}</span>
            </div>
          </div>
          <div @click="closeAlert" class="close-alert-succes">
            <h4>&#10006;</h4>
          </div>
          

        </div>
        
        <div v-if="alert" class="popup-wrapper">

          
          
          <div class="confirm-delete-pop-up dflex centercenter" role="alert">
          
            <div class="alert-wrapper ">
              
              <div v-if="alert.level == 'warning'">
                <fa-icon class="alert-icon" :icon="['fa', 'exclamation-triangle']" />
              </div>
              <div class="alert-title">
                <span>{{alert.title}}</span>
              </div>
              <div class="alert-message ">
                
                <span class="dflex centercenter"> {{alert.msg}} </span>
                
              </div>
              <div class="delete-action">
                <div class="action-cancel" @click="closePopup" role="button">{{alert.leftBtn}}</div>
                <div v-if="alert.type == 'restore'" class="action-restore" @click="restoreProduct('Pending')" role="button">{{alert.rightBtn}}</div>
                <div v-if="alert.type == 'update' && this.docRefProduct" class="action-restore" @click="updateData('update')" role="button">{{alert.rightBtn}}</div>
                <div v-if="alert.type == 'create' && !this.docRefProduct" class="action-restore" @click="saveData('create')" role="button">{{alert.rightBtn}}</div>
                <div v-if="alert.type == 'discard'" class="action-restore" @click="goBack()" role="button">{{alert.rightBtn}}</div>
                <div v-if="alert.type == 'delete'" class="action-delete" @click="deleteProcess('delete', docRefProduct)" role="button">{{alert.rightBtn}}</div>
                <div v-if="alert.type == 'archive'" class="action-delete" @click="restoreProduct('Archived')" role="button">{{alert.rightBtn}}</div>


              </div>
              <div @click="closePopup" class="close-popup-icon">
                <h5>&#10006;</h5>
              </div>

            </div>

          </div>
        </div>
    
      <div v-if="!this.docRefProduct" class="btn-group-wrapper"> <!--  HEADER START -->
        <div class="header-wrapper">
          <span>Unsaved Product</span>
          
        </div>
        

          
          <div class="header-btn">
            <button  @click="openPopup('discard')" class="btn btn-discard" >Discard</button>
            <button :disabled="saved" v-if="!this.docRefProduct" @click="saveData('create')"   class="btn btn-primary btn-fixed-width-and-height"> <span v-if="!eventSavingRunning">save</span> <label v-if="eventSavingRunning" class="btn-spinner-label" for=""></label> </button>
          </div>

        
      </div>                          <!--  HEADER END -->   

      <div v-if="this.docRefProduct && !this.saved" class="btn-group-wrapper"> <!--  HEADER START -->
        <div class="header-wrapper">
          
          <span v-if="this.docRefProduct">Unsaved Changes</span>
        </div>
        <div class="header-btn">
          
          <button  @click="openPopup('discard')" class="btn btn-discard" >Discard</button>
          
          <button :disabled="saved" v-if="this.docRefProduct" @click="updateData('update')"  class="btn btn-primary">Save</button>
        </div>
      </div>                          <!--  HEADER END -->     

      <div class="add-work-wrapper">
        <div class="centering-wraper">

          <!--  PAGE TITLE START --> 
          <div class="">   
            <div class="top-nav-wrapper">

              <div class="prev-link__add-work-wrapper">

                <div @click="openPopup('discard')" class="top-box-nav p-1" to="/admin/products">
                    
                    <div>
                      <fa-icon class="previous-icon " :icon="['fa', 'chevron-left']" />
                      
                    </div>
                    <div class="">
                      <span>Products</span>
                    </div>
                </div>
              </div>

              

              <div v-if="this.docRefProduct && this.product.name" class="top-box-arrows-container">

                <div class="navbox-wrapper">

                  <div class="separator-line__nav-bov">
                    <div id="prevNavProduct" @click="previousProduct()" class="title-box1 ">

                      <fa-icon class="" :icon="['fa', 'chevron-left']" />

                    </div>

                  </div>

                    
                  <div id="nextNavProduct" @click="nextProduct()" class="title-box2">

                    <fa-icon class="" :icon="['fa', 'chevron-right']" />

                  </div>

                </div>
                  
              </div>

                

            </div>

              <div class="top-nav-product-name-wrapper">

                <div v-if="this.docRefProduct && this.product.name" class="product-name__title">
                  <span>{{product.name}}</span>
                </div>

                <div v-if="!this.docRefProduct || !this.product.name" class="product-name__title">
                  <span>Add Product</span>
                </div>
              </div>

              <div>

              
                <div v-if="this.docRefProduct && this.product.name" class="">
                  <span v-if="product.status == 'Active'" data-label="Status"><div class="active-status" >{{product.status}}</div></span>
                  <span v-if="product.status == 'Pending'" data-label="Status"><div class="pending-status" >{{product.status}}</div></span>
                  <span v-if="product.status == 'Archived'" data-label="Status"><div class="archived-status" >{{product.status}}</div></span>
                  <span v-if="!product.status" data-label="Status"><div id="archived-status" >Unknown</div></span>
                </div>

              </div>

            <div v-if="newAddedProduct" class="addeed-new-product-container">

              <div class="added-new-wrapper">

                <div class="add-new__name-and-icon">

                  <div class="add-new__icon">
                    <fa-icon class="" :icon="['fa', 'check-square']" />
                  </div>

                  <div class="add-new__wrap">
                    <span> Added {{product.name}}</span>
                  </div>

                </div>

                <div @click="newAddedProduct = false" class="add-neww__close-btn">
                  <h5>&#10006;</h5>
                </div>

              </div>

              <div class="add-new__link">
               <a href="#" @click="refreshWindow">Add new product</a>
              </div>
              
            </div>

          </div> 
        </div>
      </div>                 <!--  PAGE TITLE END -->   
      <div class="page-grid-wrapper">

        <div class="main-grid">

          <div class="product-name-wrapper">

            <h5>Product details</h5>
            <div class="form-group ">

              <div class="d-flex-s-e">
                <label class="main-grid-label" for="exampleFormControlInput1">Product name</label>
                <span v-if="fieldNameMissing" class="alert-missing-field" > You must name your product!</span>
              </div>
              
              <input id="productnameinput" @input="unSaved" v-model="product.name" type="text" class="form-control"   placeholder="Example: Paper Water">
            </div>
            <div @click="unSaved" class="">
              <label class="main-grid-label" for="exampleFormControlInput1">Description</label>
              <vue-editor  :editor-toolbar="customToolbar" v-model="pDescription" ></vue-editor>
              <!-- <input v-model="product.description" type="text" placeholder="Tag Name" maxlength="10"> -->
            </div>

          </div>

          <div class="product-img-wrapper">

            <div class="product-img-row1">

              <div class="">
                <h5>Image</h5> 
              </div>

              <div>
                <input :disabled="this.product.images.length == 1" @input="unSaved"  type="file" @change="uploadImage" class="hidden" id="files">
                <label class="select-image-link" for="files"></label>
              </div>

            </div>
            
            

            <div class="images-grid-wrapper">

              <div  v-if="!product.images.length" v-show="isLoad" class="icon-image-wrapper">
                
                <div class="when-empty-image-sizer">
                  <fa-icon class="work-icon" :icon="['fa', 'image']"/>
                  <span> Select Images to upload</span>
                </div>

              </div>
              
              <div v-show="!isLoad" class="spinner-wrapper">
                <label class="check-mark-label" for=""></label>
              </div>
              
              <div v-if="product.images.length " class=" images-flex">
                <div class="p-1"  v-for="(image,idx) in product.images" :key="idx" >
                  <div class="img-wrapp">
                    <img width="200px" :src="image" alt="">
                    <span class="delete-img" @click="deleteImage(image,idx)">&times;</span>
                  </div>
                </div>
              </div>

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
                      <numberInput @change="unSaved" :height="'40px'" :num="productDolar" @numberChanged="productDolar = $event"></numberInput>
                    </div>
                    <div class=""><h6>.</h6></div>
                    <div class="unit-container">
                      <h6>Cent</h6>
                      <decimalInput @change="unSaved" :height="'40px'" :dec="productCent" @numberChanged="productCent = $event"></decimalInput>
                    </div>
                  </div>
                </div>

                <label class="main-grid-label topBorder" for="exampleFormControlInput1">Compare at price:</label>
                <div class="box">
                  
                  
                  <div class="form-wrapper">
                    
                    <div class="unit-container">
                      <h6>Dolar</h6>
                      <numberInput @change="unSaved" :num="productCompareDolar" @numberChanged="productCompareDolar = $event"></numberInput>
                    </div>
                    <div class=""><h6>.</h6></div>
                    <div class="unit-container">
                      <h6>Dolar</h6>
                      <decimalInput @change="unSaved" :dec="productCompareCent" @numberChanged="productCompareCent = $event"></decimalInput>
                    </div>
                  </div>
                </div>

                <label class="main-grid-label topBorder" for="exampleFormControlInput1">Cost per item:</label>
                <div class="box">
                  
                  
                  <div class="form-wrapper">
                    
                    <div class="unit-container">
                      <h6>Dolar</h6>
                      <numberInput @change="unSaved" :num="productCostDolar" @numberChanged="productCostDolar = $event"></numberInput>
                    </div>
                    <div class=""><h6>.</h6></div>
                    <div class="unit-container">
                      <h6>Dolar</h6>
                      <decimalInput @change="unSaved" :dec="productCostCent" @numberChanged="productCostCent = $event"></decimalInput>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="">
              <div class="product-price-checkbox">
                
                <input @input="unSaved"  v-model="product.taxes" type="checkbox"  name="applyTaxes" id="">
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
                    <input @input="unSaved" v-model="product.productId" type="text" class="form-control" maxlength="15" >
                    <p>Generate ProductId</p> 
                  </div>
                  <div class="qty-form">
                    <h6>Quantity</h6>
                    <numberInput @change="unSaved" :num="product.qty" @numberChanged="product.qty = $event"></numberInput>
                  </div>
                  
                  
                  
                </div>
                
              </div>
            </div>
            <div class="inventory-form-wrapper">
              <div class="product-price-checkbox">
                <input @input="unSaved" v-model="product.trackQty"  type="checkbox"  name="applyTaxes" id="">
                <h6>Track quantity</h6>
              </div>
              <div class="product-price-checkbox">
                <input @input="unSaved" type="checkbox" v-model="product.sellWhenOut"  name="applyTaxes" id="">
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
                    
                    <numberInput @input="unSaved" :num="shippingDolar" @numberChanged="shippingDolar = $event"></numberInput>
                  </div>
                  <div class=""><h6>.</h6></div>
                  <div class="input-label-wrapper">
                    <h6>Cent</h6>
                    <decimalInput @change="unSaved" :dec="shippingCent" @numberChanged="shippingCent = $event"></decimalInput>
                  </div>
                  <div id="slashBetUnit223"><h6>/</h6></div>
                  <div class="input-label-wrapper">
                    <h6>Unit</h6>
                    <select @change="unSaved"  v-model="product.Unit" class="custom-select" id="exampleFormControlSelect1">
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
                  <input @input="unSaved" v-model="product.weight" type="text" name="" id="" class="form-control" placeholder="0" pattern="$[0-9].[0-9]">
                </div>
                <div class="input-label-wrapper">
                  <h6>Unit</h6>
                  <select @change="unSaved" v-model="product.Unit" class="custom-select" id="exampleFormControlSelect1">
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
                    <input @input="unSaved" type="number" name="" id="" class="form-control" placeholder="0" >
                    
                  </div>
                  
                </div>
                <div class="form-group">
                  <h6>width</h6>
                  <div class="product-weight-wrapper">
                    <input @input="unSaved" type="number" name="" id="" class="form-control" placeholder="0" >
                    
                  </div>
                </div>
                <div class="form-group">
                  <h6>height</h6>
                  <div class="product-weight-wrapper">
                    <input @input="unSaved" type="number" name="" id="" class="form-control" placeholder="0" >
                    
                  </div>
                </div>
                <div id="mesurmentSelect289" class="form-group">
                  <h6>Mesurment</h6>
                  
                  <div class="product-weight-wrapper">
                   
                    <select @change="unSaved" class="custom-select" id="exampleFormControlSelect1">
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

              <div  class="unarchive-btn-wrapper">
                <button @change="unSaved" class="unarchive-btn" @click="openPopup('restore')">Restore product</button>
              </div>


              
              
            </div>

            <div v-if="product.status != 'Archived'" class="form-group">
              
             
              
              <select @change="unSaved"  v-model="selectedProductStatus" class="custom-select" id="exampleFormControlSelect1">
                <option value="" disabled selected="selected">Select Product Status</option>
                <option v-for="(status, idx) in  productstatus" :key="idx" >{{status}}</option>
              </select> 
              
              
            </div>
          </div>
          <div class="organization">

            <h6>Organization</h6>
            <div class="form-group">
              <label class="main-grid-label" for="exampleFormControlSelect1">Product Type</label>
             
              
              <select @change="unSaved"  v-model="product.categorie" class="custom-select" id="exampleFormControlSelect1">
                <option value="" disabled selected="selected">Select Product Type</option>
                <option v-for="(cat, idx) in  productsCategories" :key="idx" >{{cat}}</option>
              </select> 
              
              
            </div>
            <div class="form-group">
              <label class="main-grid-label" for="exampleFormControlSelect2">Vendor</label>
             
              
              <select @change="unSaved"  v-model="product.vendor" class="custom-select" id="exampleFormControlSelect2">
                <option value="" disabled selected="selected">Select Vendor</option>
                <option v-for="(vendor, idx) in vendors" :key="idx" >{{vendor}}</option>
              </select> 
              
              
            </div>
              <div class="form-group">
                <label class="main-grid-label" for="exampleFormControlInput1">Tag name</label>
                <input @input="unSaved" @keypress.enter="addTag" @keyup.188="addTag" v-model="tag" type="text" class="form-control"  placeholder="Example: Pop, Drink">
                <ul class="form-tags" >
                  
                  <li v-for="(tag, idx) in product.tags" :key="idx" >
                    <div>{{tag}}</div>
                    <span @click="deleteTag(idx)" >&times;</span>
                  </li>
                </ul>
              </div>
          </div>
          <div class="actions">

            <div v-if="this.docRefProduct" class="form-group">
              <button @click="openPopup('delete')" class="form-control action-delete "> Delete Product</button>
            </div>

            <div v-if="product.status != 'Archived' && this.docRefProduct" class="form-group">
              <button @click="openPopup('archive')" class="form-control "> Archive Product</button>
            </div>

          </div>
        </div>
      </div>
    
      <div v-if="!this.docRefProduct" class="btn-group-wrapper"> <!--  HEADER START -->
        <div class="header-wrapper">
          <span>Unsaved Product</span>
          
        </div>
        

          
          <div class="header-btn">
            <button  @click="openPopup('discard')" class="btn btn-discard" >Discard</button>
            <button :disabled="saved" v-if="!this.docRefProduct" @click="saveData('create')"   class="btn btn-primary btn-fixed-width-and-height"> <span v-if="!eventSavingRunning">save</span> <label v-if="eventSavingRunning" class="btn-spinner-label" for=""></label> </button>
          </div>

        
      </div>                           <!--  HEADER END -->   

      <div v-if="this.docRefProduct && !this.saved" class="btn-group-wrapper"> <!--  HEADER START -->
        <div class="header-wrapper">
          
          <span v-if="this.docRefProduct">Unsaved Changes</span>
        </div>
        <div class="header-btn">
          
          <button  @click="openPopup('discard')" class="btn btn-discard" >Discard</button>
          
          <button :disabled="saved" v-if="this.docRefProduct" @click="updateData('update')"  class="btn btn-primary">Save</button>
        </div>
      </div>                          <!--  HEADER END -->     

      
  </div>
</template>

<script>


// import productsCategories from "./AdminProducts"
import {VueEditor} from "vue2-editor";
import {fb, db} from '../firebase';
import {productsCategories} from "../admin/AdminProducts";
import $ from 'jquery';

$('.alert').css("display","flex");

// import $ from 'jquery'
export default {
  
  name: "addproduct",
  async created () {
    
    this.loadNewProduct()
  },
  components: {
    VueEditor
  },
  props: {
    
  },
  data() {
    return {
      timer:null,
      endOfList: false,
      eventSavingRunning:false,
      newAddedProduct: false,
      fieldMissing:false,
      fieldNameMissing:false,
      saved:true,
      testOne: 'hello',
      alerts:[
        { 
          level: 'warning',
          type:'restore',
          title:'Confirm Restore',
          msg: 'Restoring this product will change its status to Pending so you can work on it again.',
          leftBtn: 'Cancel',
          rightBtn: 'Restore',
          badgeSuccessTitle: 'Success!',
          badgeMsg:' Your product as been restored',
        },
        { 
          level: 'warning',
          type:'update',
          title:'Confirm Update',
          badgeSuccessTitle: 'Success!',
          badgeMsg:' Your product as been Saved',
        },
        { 
          level: 'warning',
          type:'create',
          title:'Confirm creation',
          msg: 'Do you want to crate this product?',
          leftBtn: 'Cancel',
          rightBtn: 'Create',
          badgeSuccessTitle: 'Success!',
          badgeMsg:' Your product as been created',
        },
        { 
          level: 'warning',
          type:'archive',
          title:'Confirm Archive',
          msg: 'after clicking Archive Product, It will still be available, but will no longer appear onto your admin page. You will still be able to restore and make changes to this product.',
          leftBtn: 'Cancel',
          rightBtn: 'Archive Product',
          badgeSuccessTitle: 'Success!',
          badgeMsg:' Your product as been Archive',
        },
        { 
          level: 'warning',
          type:'delete',
          title:'Confirm Delete',
          msg: 'after clicking Delete Product, this product will no longer exist.',
          leftBtn: 'Cancel',
          rightBtn: 'Delete Product',
          badgeSuccessTitle: 'Success!',
          badgeMsg:' Your product as been deleted',
        },
        { 
          level: 'warning',
          type:'discard',
          title:'Unsave Changes',
          msg: 'by clicking yes, all changes will be lost',
          leftBtn: 'Cancel',
          rightBtn: 'Leave this page',
        }
      ],
      alert:{
        level: null,
        type: null,
        title: null,
        msg: null,
        leftBtn: null,
        rightBtn: null,
        badgeMsg:null,
        badgeSuccessTitle:null
      },
      productsCategories: productsCategories,
      docRefProduct:null,
      pDescription:null,
      popupWindow:true,
      vendorNumber:null,
      categoryNumber:null,
      weightNumber:null,
      productNumber:null,
      shippingDolar:0,
      initialShippingDolar:null,
      shippingCent:"00",
      initialShippingCent:null,
      productCompareDolar:0,
      initialProductCompareDolar:null,
      productCompareCent:"00",
      initialProductCompareCent:null,
      productCostCent:"00",
      initialProductCostCent:null,
      productCostDolar:0,
      initialProductCostDolar:null,
      productDolar: 0,
      initialProductDollar:null,
      productCent: "00",
      initialProductCent: null,
      selectedProductStatus:null,
      productstatus: ["Active", "Pending"],
      customToolbar:[
            [{ 'align': ''},{ 'align': 'justify'}, { 'align': 'right' }],
            ['code-block']
          ],
      isLoad: true,
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
  watch: {
    saved(){
      if(this.saved == false){
        window.onbeforeunload = function(){

            return confirm("Confirm refresh");
        };
      }else{
        window.onbeforeunload = function(){

            return null;
        };

      }
    },
    docRefProduct(){
      this.loadNewProduct()
    },
    productDolar(){
      if(this.initialProductDollar != this.productDolar){
        this.unSaved()
      }else{
        this.saved = true;
      }
    },
    productCent(){
      if(this.initialProductCent != this.productCent){
        this.unSaved()
      }else{
        this.saved = true;
      }
    },
    productCompareDolar(){
      if(this.initialProductCompareDolar != this.productCompareDolar){
        this.unSaved()
      }else{
        this.saved = true;
      }
    },
    productCompareCent(){
      if(this.initialProductCompareCent != this.productCompareCent){
        this.unSaved()
      }else{
        this.saved = true;
      }
    },
    productCostDolar(){
      if(this.initialProductCostDolar != this.productCostDolar){
        this.unSaved()
      }else{
        this.saved = true;
      }
    },
    productCostCent(){
      if(this.initialProductCostCent != this.productCostCent){
        this.unSaved()
      }else{
        this.saved = true;
      }
    },
    shippingDolar(){
      if(this.initialShippingDolar != this.shippingDolar){
        this.unSaved()
      }else{
        this.saved = true;
      }
    },
    shippingCent(){
      if(this.initialShippingCent != this.shippingCent){
        this.unSaved()
      }else{
        this.saved = true;
      }
    },
    // adding green and red borders to missing fields and adding them back if user miss or earase that field again!
    'product.name': function(){

      if(this.fieldMissing){

        

        if( this.product.name != "" || this.product.name != null ){
        console.log("action fired");
        $('#productnameinput').removeClass('border-missing-field');
        $('#productnameinput').addClass('border-corrected-field');
        this.fieldNameMissing = false;
        }

        if(!this.product.name.trim() ||this.product.name === ""){
          console.log('else in function');
          $('#productnameinput').removeClass('border-corrected-field');
          $('#productnameinput').addClass('border-missing-field');
          this.fieldNameMissing = true;
        }

        
        
      }
    }
    
  },
  methods:{
    loadNewProduct(){
    if(localStorage.newAddedProduct == "true"){
      this.newAddedProduct = true
    }
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
              
              // // deleting tags
              // if(this.product.name){
              //   var index = this.product.tags.indexOf(this.product.name);
              //   this.product.tags.splice(index,1);
              // }
              // if(this.product.categorie){
              //   index = this.product.tags.indexOf(this.product.categorie);
              //   this.product.tags.splice(index,1);

              // }
              // if(this.product.vendor){
              //   index = this.product.tags.indexOf(this.product.vendor);
              //   this.product.tags.splice(index,1);

              // }
              
              
              

              // convert the description
              this.pDescription = this.product.description ;

              // converte the price into two dollar and Cents for (product.price & product.comparePrice & product.costPrice)
              // product.price delivered to productDollar and productCent
              let price = (this.product.price/100).toFixed(2);
              let strPrice = price.toString()
              let length = strPrice.length
              this.productCent = strPrice.slice(-2,length);
              this.productDolar = parseInt(strPrice.slice(0,-2));
              console.log('product Price:');
              console.log(this.productCent);
              console.log(this.productDolar);
              

              // product.price delivered to productCompareDollar and productCompareCent 
              price = (this.product.comparePrice/100).toFixed(2)
              strPrice = price.toString()
              length = strPrice.length
              this.productCompareCent = strPrice.slice(-2,length);
              this.productCompareDolar = parseInt(strPrice.slice(0,-2));
              console.log('Compare Cost:');
              console.log(this.productCompareCent);
              console.log(this.productCompareDolar);

              // product.price delivered to productCostDollar and productCostCent     
              price = (this.product.costPrice/100).toFixed(2)
              strPrice = price.toString()
              length = strPrice.length
              this.productCostCent = strPrice.slice(-2,length);
              this.productCostDolar = parseInt(strPrice.slice(0,-2));
              console.log('Cost Cost:');
              console.log(this.productCostCent);
              console.log(this.productCostCent);

              //pruduct shippingcost to shippingCent and shippingDolar
              price = (this.product.shippingCost/100).toFixed(2)
              strPrice = price.toString()
              length = strPrice.length
              this.shippingCent = strPrice.slice(-2,length);
              this.shippingDolar = parseInt(strPrice.slice(0,-2));
              console.log('Shipping Cost:');
              console.log(this.shippingCent);
              console.log(this.shippingDolar);

              // product Weight 

              this.initialProductDollar = this.productDolar;
              this.initialProductCent = this.productCent;

              this.initialProductCompareDolar = this.productCompareDolar;
              this.initialProductCompareCent = this.productCompareCent;

              this.initialProductCostDolar = this.productCostDolar;
              this.initialProductCostCent = this.productCostCent;

              this.initialShippingDolar = this.shippingDolar;
              this.initialShippingCent = this.shippingCent;

              this.selectedProductStatus = this.product.status;
              this.saved = true;

              var index = this.products.findIndex(x => x.id === this.docRefProduct );
              var endOfList = this.products.length - 1; 
              if(index == endOfList ){
                $('#nextNavProduct').removeClass('title-box2')
                $('#nextNavProduct').addClass('title-box-disabled')
              }
              if(index == 0){
                $('#prevNavProduct').removeClass('title-box1')
                $('#prevNavProduct').addClass('title-box-disabled')
              }
               
              
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
    previousProduct(){
      console.log(this.docRefProduct);
      var index = this.products.findIndex(x => x.id === this.docRefProduct );
      console.log(index);

      var firstItem = index - 1
      console.log('firstitme: ', firstItem);

      if(firstItem == 0){

        $('#prevNavProduct').removeClass('title-box1')
        $('#prevNavProduct').addClass('title-box-disabled')
        
        var newDocRefProduct = this.products[index-1].id;
        console.log(newDocRefProduct);
        localStorage.docRefProduct = newDocRefProduct
        this.docRefProduct = newDocRefProduct;
        
        
        console.log('that was the last product');

      }
      if(index > 0){

        $('#nextNavProduct').removeClass('title-box-disabled')
        $('#nextNavProduct').addClass('title-box2')
        newDocRefProduct = this.products[index-1].id;
        console.log(newDocRefProduct);
        localStorage.docRefProduct = newDocRefProduct
        this.docRefProduct = newDocRefProduct;
      }else{
        $('#prevNavProduct').removeClass('title-box1')
        $('#prevNavProduct').addClass('title-box-disabled')
        console.log('no more product');
      }
    },
    
    nextProduct(){
      console.log(this.docRefProduct);
      var index = this.products.findIndex(x => x.id === this.docRefProduct );
      console.log(index);
      var endOfList = this.products.length - 1;
      console.log(endOfList);
      var lastItem = endOfList - 1; 
      if(index == 0 ){

        $('#prevNavProduct').removeClass('title-box-disabled')
        $('#prevNavProduct').addClass('title-box1')
        
        var newDocRefProduct = this.products[index+1].id;
        console.log(newDocRefProduct);
        localStorage.docRefProduct = newDocRefProduct
        this.docRefProduct = newDocRefProduct;
        
        
        

      }
      if(index < endOfList ){
        console.log(index);

        newDocRefProduct = this.products[(index+1)].id;
        console.log(newDocRefProduct);
        localStorage.docRefProduct = newDocRefProduct
        this.docRefProduct = newDocRefProduct;

      }
      if(index == lastItem){
        newDocRefProduct = this.products[(index+1)].id;
        console.log(newDocRefProduct);
        localStorage.docRefProduct = newDocRefProduct
        this.docRefProduct = newDocRefProduct;
        $('#nextNavProduct').removeClass('title-box2')
        $('#nextNavProduct').addClass('title-box-disabled')
        
      }else{
        console.log('last product end no more');
      }
    },
    unSaved(){
      this.saved = false;
    },
    openPopup: function(type){
      if(this.saved && type == 'discard'){
        window.localStorage.removeItem('docRefProduct');
        window.localStorage.removeItem('newAddedProduct');
        this.goBack();   
      
      }else{
        let obj = this.alerts.find(x => x.type == type);
        let index = this.alerts.indexOf(obj);
        this.alert = this.alerts[index];
        console.log(this.alert);
        $('.popup-wrapper').fadeIn(200);
      }
     
    },
    closePopup: function(){
      // $(".confirm-delete-pop-up").slideUp(200,()=>{
      //   $('.popup-wrapper').css("display","none");
      // });
      $('.popup-wrapper').fadeOut(200);
      
      this.alert = {}
    },
    badgeTimeOut(){
      this.timer = setTimeout(() => {
        
        $('.check-icon').css("display","block");
        $('.restore-message').css("visibility","visible");
        $('.close-alert-succes').css("visibility","visible");
        $('.check-mark-label').addClass('stop-check-animation');
      }, 2000);
    },
    badgeClearTimeOut(){
      console.log(this.timer);
      clearTimeout(this.timer)
      console.log(this.timer);
    },
    alertBadge(){
      $('.popup-wrapper').fadeOut(200);
      // $('.popup-wrapper').css("display","none");
      $('.alert').css("display","flex");
      this.badgeTimeOut();
      
    },
    closeAlert(){
      $('.alert').css("display","none");
    },
    restoreProduct(status){
      this.alertBadge()
      setTimeout(() => {
        this.product.status = status
        this.selectedProductStatus = this.product.status;
        this.$firestore.products.doc(this.docRefProduct).update(this.product);
        $(".alert").delay(2000).fadeOut(2000);
      }, 2000);
      
      
    },
    refreshWindow(){
      window.localStorage.removeItem('docRefProduct');
      window.localStorage.removeItem('newAddedProduct');
      window.location.reload();
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/products');
      window.localStorage.removeItem('docRefProduct');
      window.localStorage.removeItem('newAddedProduct');

    },
    trimDescriptionTags(){
      if(!this.pDescription==null){
        let str = this.pDescription;
        this.product.description = str.replace("<p>","").replace("</p>","");
        }
    },
    shippingcost(){
      let shippingDolar = this.shippingDolar;
      let shippingCent = this.shippingCent;
      let stringPrice = shippingDolar + '.' + shippingCent
      var price = parseFloat(stringPrice) * 100
      this.product.shippingCost = price
      console.log(price);

      // const shippingCost = parseFloat(this.shippingDolar.toString() + "." + this.shippingCent.toString()) * this.product.weight;
      // console.log(shippingCost);
      // this.product.shippingcost = shippingCost.toFixed(2);
      // console.log(this.product.shippingcost + " is your NaN");
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
      let productDolar = this.productDolar;
      let productCent = this.productCent;
      let stringPrice = productDolar + '.' + productCent
      var price = parseFloat(stringPrice) * 100
      this.product.price = price
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
        console.log(img);
        console.log(image);
        console.log(idx);
          this.product.images.splice(idx,1);
        

        image.delete().then(function(){
          console.log('image deleted');
        }).catch(function(error){
          // uh-oh, an error occured
          console.log('an error occurred:' + error );
        })
      },
    uploadImage(e){
      console.log(e.target.value);
      console.log(e.target.files);
        console.log(e.target.files[0]);
        if(e.target.files[0]){

            let file = e.target.files[0];
            
            var storageRef = fb.storage().ref();
            
            let ID = Date.now();
            var uploadTask = storageRef.child("Products/" + ID + "_" + file.name ).put(file);
            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed', (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              if(snapshot.bytesTransferred !== snapshot.totalBytes){
                this.isLoad = false;
              
              }else{
                this.isLoad = true;
              }
              var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
            }, () => {
              // Handle unsuccessful uploads function(error)
            }, () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                this.product.images.push(downloadURL);
                console.log('File available at', downloadURL);
              });
              e.target.value = '';
            
          });

          
          

          

        }
      


// https://firebasestorage.googleapis.com/v0/b/wakaconnection-4f240
// .appspot.com/o/Products%2Fgrape.jpg?alt=media&token=6dc00ffc-4378-432f-
// 9556-05f2fe9e6790

// https://firebasestorage.googleapis.com/v0/b/wakaconnection-4f240
// .appspot.com/o/Products%2Fgrape.jpg?alt=media&token=3754ab9c-fe98-4945-
// bf81-d00f05c598fa








    },
    addTag(){
      this.product.tags.push(this.tag);
      this.tag = '';
    },
    deleteTag(idx){
      this.product.tags.splice(idx, 1)
      this.unSaved();
      
      
    },
    saveData(type){
      if(!this.product.name.trim() || this.product.name === null || this.product.name === "" ){
        console.log("name field missing");
        this.fieldNameMissing = true;
        this.fieldMissing = true;
        $('#productnameinput').removeClass('border-corrected-field')
        $('#productnameinput').addClass('border-missing-field')

      }else{
        this.product.status = this.selectedProductStatus;
      if(this.selectedProductStatus === "" || this.selectedProductStatus === null){
        this.product.status = "Pending"
      }
        this.setAlertParam(type)
        this.price();
        this.comparePrice();
        this.CostPrice();
        this.shippingcost(); 
        this.trimDescriptionTags();
        console.log(this.alert.badgeMsg);
        this.eventSavingRunning = true;
        $('#topSaveBtn').addClass('btn-spinner-label')
        setTimeout(() => {
          console.log('this is your product: ', this.product);
          this.$firestore.products.add(this.product)
          .then( (docRef) => {
            console.log("Document written with ID: ", docRef.id);
            this.fieldNameMissing = false;
            this.fieldMissing = false;
            this.saved = true;
            localStorage.docRefProduct = docRef.id;
            localStorage.newAddedProduct = true;
            this.loadNewProduct();
          })
          .catch( (error) => {
            console.log("Error adding document: ", error);
          });
          
        }, 2000);
        
        
      }
      
      
      // this.$router.push('products');
    },
    setAlertParam(type){
      let obj = this.alerts.find(x => x.type == type);
      let index = this.alerts.indexOf(obj);
      this.alert = this.alerts[index];
      console.log(this.alert);
    },

    deleteProcess(type,docRefProduct){


      
       
          // this.$firestore.products.doc(this.docRefProduct).delete(this.product);
          

          db.collection("products").doc(docRefProduct).delete()
          .then(() => {
            let img = this.product.images[0];
            let image = fb.storage().refFromURL(img);
            image.delete().then( () => {
              console.log('image deleted');

            }).catch(function(error){
              // uh-oh, an error occured
              console.log('an error occurred:' + error );
            })
            this.setAlertParam(type);
            this.alertBadge();
            $(".alert").delay((this.alert.badgeMsg.length * 100)).fadeOut(2000);
            this.saved = true;
            setTimeout(() => {
              this.goBack()
            }, 3000);
          })
          .catch((error) => {
            console.log(error);
          })
          
         
          
        
    },

    // archiveProduct(type){
    //   this.setAlertParam(type);
    //   this.alertBadge();
    //     setTimeout(() => {
          
    //       this.saved = true;
    //       $(".alert").delay((this.alert.badgeMsg.length * 100)).fadeOut(2000);
    //     }, 2000);
    // },

    updateData(type){
      
      if(!this.product.name.trim() || this.product.name === null || this.product.name === "" ){
        console.log("name field missing");
        this.fieldNameMissing = true;
        this.fieldMissing = true;
        $('#productnameinput').removeClass('border-corrected-field')
        $('#productnameinput').addClass('border-missing-field')

      }else{
        this.product.status = this.selectedProductStatus;
        if(this.selectedProductStatus === "" || this.selectedProductStatus === null){
          this.product.status = "Pending"
        }
        this.setAlertParam(type)
        this.comparePrice();
        this.price();
        this.CostPrice();
        this.shippingcost();
        this.trimDescriptionTags();
        console.log(this.alert.badgeMsg);
        this.alertBadge()
        setTimeout(() => {
          
          this.$firestore.products.doc(this.docRefProduct).update(this.product);
          
          this.saved = true;
          $(".alert").delay((this.alert.badgeMsg.length * 100)).fadeOut(2000);
        }, 2000);
      }
      
      
      
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
// // Popup Window style start <----

// .dflex{
//   display: flex;
// }
// .dcolum{
//   flex-direction: column;
// }
// .centercenter{
//   justify-content: center;
//   align-items: center;
// }
// .justcontaround{
//   justify-content: space-around;
// }
// .alingcontaround{
//   align-content: space-around;
// }
// .popup-wrapper{
//   display: none;
//   position: relative;
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background: rgba(3, 30, 51, 0.4);
//   z-index: 20;

// }
// .confirm-delete-pop-up{
//   margin: auto;
//   position: fixed;
//   top: 0; left: 0; bottom: 0; right: 0;
//   width: 600px;
//   height: fit-content;
//   background-color:var(--lightwhite1);
//   display: flex;
//   justify-content: space-around;
//   align-content: space-around;
//   z-index: 30;
//   border: 1px solid var(--primaryT);
//   box-shadow: var(--shadow);
// }
// .btn-fixed-width-and-height{
//   width: 80px;
//   height:80%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .alert-wrapper{
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 50px;
// }
// .alert-message{
//   margin-top: 20px;
//   padding-bottom: 50px;
//   text-align: center;
//   width: 100%;
//   font-size: 1.0rem;
//   color: var(--dark);
// }
// .alert-title{
//   font-size: 1.2rem;
//   font-weight: 500;
//   margin-top: 10px;
//   color: var(--dark);
// }
// .delete-action{
//   display: flex;
//   position: absolute;
//   justify-content: space-around;
//   align-items: center;
//   height: 50px;
//   width: 100%;
//   bottom: 0;
//   border-radius: 0 0 10px 10px;
  
  
// }
// .close-popup-icon{
//   cursor: pointer;
//   position: absolute;
//   top: 5px;
//   right: 10px;
// }
// .delete-action > div{
//   display: flex;
//   height: 100%;
//   font-size: 1.2rem;
//   font-weight: 500;
//   width: 100%;
  
//   outline: none;
//   justify-content: center;
//   align-items: center;
// }
// .alert-icon{
//   margin-top: 0px;
//   font-size: 3.0rem;
//   color: var(--pending);
// }
// .action-confirmed{
//   background-color: #9f0000;
// }
// .action-confirmed:hover{
//   background-color: #e30000;
// }
// .action-active{
//   background-color: var(--active);
// }
// .action-active:hover{
//   background-color: var(--active);
// }
// .action-restore{
//   background-color: var(--actionSuccess);
// }
// .action-restore:hover{
//   background-color: var(--success);
// }
// .action-delete{
//   background-color: var(--archive);
// }
// .action-delete:hover{
//   background-color: var(--red);
// }
// .action-cancel{
//   background-color: var(--primary);
  
// }
// .action-cancel:hover{
//   background-color: var(--blueGoogle);
// }


// // Popup Window style end <----
// // SUCCES POPUP STYLE START <----
// // CheckMark Animation START

// .check-mark-label{
//   position: relative;
//   height: 50px;
//   width: 50px;
//   display: inline-block;
//   border: 2px solid rgba(0,0,0,0.2);
//   border-radius: 50%;
//   border-left-color: #5cb85c ;
//   animation: rotate 1.2s linear infinite;
// }
// .btn-spinner-label{
//   position: relative;
//   height: 20px;
//   width: 20px;
//   display: inline-block;
//   border: 2px solid rgba(0,0,0,0.2);
//   border-radius: 50%;
//   border-left-color: #5cb85c ;
//   animation: rotate 1.2s linear infinite;
// }
// @keyframes rotate {
//   50%{
//     border-left-color: #9b59b6;
//   }
//   75%{
//     border-left-color: #e67e22;
//   }
//   100%{
//     transform: rotate(360deg);
//   }
// }
// .restore-message{
//  visibility: hidden;
// }
// label .check-icon {
//   display: none;
// // translate(-25%, 50%)
// }
// label .check-icon:after{
//   position: absolute;
//   content: "";
//   top: 55%;
//   left: 8px;
//   transform: scaleX(-1) rotate(135deg);
//   height: 28px;
//   width: 14px;
//   border-top: 4px solid #5cb85c;
//   border-right: 4px solid  #5cb85c;
//   transform-origin: left top ;
  
//   animation: check-icon 0.8s ease
// }
// @keyframes check-icon {
//   0%{
//     height: 0;
//     width: 0;
//     opacity: 1;
//   }
//   20%{
//     height: 0;
//     width: 14px;
//     opacity: 1;
//   }
//   40%{
//     height: 28px;
//     width: 14px;
//     opacity: 1;
//   }
//   100%{
//     height: 28px;
//     width: 14px;
//     opacity: 1;
//   }

// }
// .close-alert-succes{
//   visibility: hidden;
//   position: absolute;
//   top: 30%;
//   right: 10px;
//   cursor: pointer;
// }
// .stop-check-animation{
//   animation: none;
//   border-color: #5cb85c;
//   transition:  border 0.5s ease-out;
// }
// // CHECKMARK ANIMATION END
// .center-screen{
//   margin: auto;
//   position: fixed;
//   top: 20px; right: 20px;
//   width: 380px;
//   height: fit-content;
//   background-color: var(--dark);
//   display: none;
//   justify-content: center;
//   align-content: center;
//   z-index: 30;
//   border: 1px solid var(--dark);
//   box-shadow: var(--shadow);
//   border-radius: 20px;

// }
// .center-screen > div {
//   display: flex;
  
//   margin-right: 20px;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }

// .alert-error-icon{
//   font-size: 3rem;
//   color: var(--danger);
// }
// .span-notice{
//   font-size: 1.0rem;
//   color: var(--lightwhite);
// }
// .span-success-popup{
//   font-size: 2rem;
//   font-weight: 600;
//   color: var(--actionSuccess);
// }
// // succes POPUP STYLE END <----
// // ALERT PRODUCTS END<-----
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
.header-btn{
  display: flex;
}
.header-btn > button{
  margin: 0 10px;
  
}
.btn-primary{
  background-color: var(--blue) !important;
  outline: 0;
  border: 0;
}
.btn-primary:hover{
  background-color: var(--blue1) !important;
}
.btn-discard:disabled, .btn-discard:hover:disabled{
  background-color: var(--grayDisable) ;
}
.btn-discard{
  border: 1px solid var(--primary);
  outline: 0;
}
.btn-discard:hover{
  background-color: var(--primaryT) ;
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
.top-nav-wrapper{
  margin: 30px 0 ;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.prev-link__add-work-wrapper{
  display: flex;
  flex-wrap: wrap;
  align-items: center;

}
.navbox-container{
  border: 1px solid var();
}
.navbox-wrapper{
  display: flex;
}
.top-nav-product-name-wrapper{
  display: flex;
  height: fit-content;
  width: 1020px;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.top-box-arrows-container{
  color: var(--secondary);
  width: fit-content;
  height: 40px;
  border: 1px solid var(--secondary);
  border-radius: 5px;
  font-size: 1.2rem;
}
.top-box-nav{
  color: var(--gray);
  display: flex;
  justify-content: space-around;
  width: 120px;
  border: 1px solid var(--secondary);
  border-radius: 5px;
}
.separator-line__nav-bov{
  border-right: 1px solid var(--dark);
}
.title-box1{
  position: relative;
  padding: 4px 15px;
  
 
}
.title-box1:hover{
  cursor: pointer;
  color: var(--dark) !important;
}

.title-box-disabled{
  position: relative;
  padding: 4px 15px;
  color: var(--grayDisable);
}
.title-box1:hover::after{
  content: "Previous";
  z-index: 1;
  position: absolute;
  left: -15px;
  bottom: -30px;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
.title-box2{
  position: relative;
  padding: 4px 15px;
}
.title-box2:hover{
  cursor: pointer;
  color: var(--dark) !important;
}
.title-box2:hover::after{
  content: "Next";
  z-index: 1;
  position: absolute;
  left: 0px;
  bottom: -30px;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
.top-box-nav:hover{
  cursor: pointer;
  color: var(--dark);
}
.top-box-nav > div{
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.top-box-nav > div > span{
  font-weight: 500;
  
}


.product-name__title{
  display: flex;
  width: 100%;
  flex-wrap: wrap ;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark);
}
.product-name__title span {
  max-width: 100%;
}

.pending-status{
  font-size: 0.9rem;
  width: fit-content;
  font-weight: 500;
  padding: 5px;
  background-color: var(--pending);
  border-radius: 20px;
}
.active-status{
  width: fit-content;
  padding: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: var(--active);
  border-radius: 20px;
}
.archived-status{
  width: fit-content;
  padding: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  background-color:var(--primary);
  border-radius: 20px;
}

// WHEN THE PRODUCT GETS ADDED START
.addeed-new-product-container{
  position: relative;
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  background-color: var(--actionSuccessT);
  border: 3px solid var(--actionSuccess);
  border-radius: 5px;
}
.added-new-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.add-new__name-and-icon{
  display: flex;
  justify-content: flex-start;
}
.add-new__wrap{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  flex-wrap: wrap ;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--dark);
}
.action-delete{
  background-color: var(--archive);
  color: var(--lightwhite1);
}
.action-delete:hover{
  background-color: var(--red);
  color: var(--lightwhite1);
}
.add-new__icon{
  font-size: 2rem;
  color: var(--actionSuccess);
}
.add-new__link{
  padding-left: 50px;
  padding-top: 20px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: underline;
}
.add-new__link a{
  color: var(--blue);
}
.add-new__link a:hover{
  color: var(--dark);
}
.add-neww__close-btn{
  position: absolute;
  top: 10px;
  right: 10px;

}
.add-neww__close-btn h5:hover{
  cursor: pointer;
}

// WHEN THE PRODUCT GETS ADDED END






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
// PRODUCT IMAGES STARTS
.product-img-row1{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.images-grid-wrapper{
  display: grid;
  height: auto
}
.images-flex{
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;

}
.product-img-wrapper{
  padding: 20px;
  height: fit-content;
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
.when-empty-image-sizer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  padding: 10px;
  border: 1px dashed var(--grayDisable);
  border-radius: 10px;
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
  padding: 5px;
  border-radius: 10px;
  border: 1px dashed var(--dark);
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
.border-missing-field{
 border: 3px solid var(--red) !important;
 outline: 0;
}
.border-missing-field:focus{
  border-color:#CCC;
  outline:0;
  -webkit-box-shadow:none;
  box-shadow:none;
}
.border-corrected-field{
 border: 3px solid var(--green) !important;
 outline: 0;
}
.border-corrected-field:focus{
  border-color:#CCC;
  outline:0;
  -webkit-box-shadow:none;
  box-shadow:none;
}
.d-flex{
  justify-content: center;
  align-items: center;
}
.d-flex-s-e{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.alert-missing-field{
  padding: 10px;
  margin-top: 5px;
  font-size: 0.9rem;
  color: var(--red);
}
// .shadow-none{
//    border: 1px solid #ccc;
//    height: 40px;
//    padding-left: 10px;
//    outline: 0;
//  }

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
@media (max-width: 1150px){
  .centering-wraper{
  width: 75%;
  }
.page-grid-wrapper{
  grid-template-columns: 75%;
}
.confirm-delete-pop-up{
  width: 90%;
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
