/* eslint-disable */ 
<template>
  <div class="products">
    
      <whenempty v-show="pageEmpty"
      :ImgSource='ImgSource'
      :AdminPage='AdminPage'
      :AdminPageContent='AdminPageContent'
      ></whenempty>

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
                <div class="action-restore"  role="button">{{alert.rightBtn}}</div>
                <!-- <div v-if="alert.type == 'update' && this.docRefProduct" class="action-restore" @click="updateData('update')" role="button">{{alert.rightBtn}}</div> -->
                <!-- <div v-if="alert.type == 'create' && !this.docRefProduct" class="action-restore" @click="saveData('create')" role="button">{{alert.rightBtn}}</div> -->
                <!-- <div v-if="alert.type == 'discard'" class="action-restore" @click="goBack()" role="button">{{alert.rightBtn}}</div> -->
                <!-- <div v-if="alert.type == 'delete'" class="action-delete" @click="deleteProcess('delete', docRefProduct)" role="button">{{alert.rightBtn}}</div> -->
                <!-- <div v-if="alert.type == 'archive'" class="action-delete" @click="restoreProduct('Archived')" role="button">{{alert.rightBtn}}</div> -->


              </div>
              <div @click="closePopup" class="close-popup-icon">
                <h5>&#10006;</h5>
              </div>

            </div>

          </div>
        </div>

      
        
        <!-- <div class="popup-wrapper">

          
          
          <div   class="confirm-delete-pop-up dflex centercenter" role="alert">
          
            <div class="alert-wrapper ">
              <div class="alert-title">
                <span> Confirm Delete</span>
              </div>
              <div>
                <fa-icon class="alert-icon" :icon="['fa', 'exclamation-triangle']" />
              </div>
              <div class="alert-message ">
                <span class="dflex centercenter">Are 123 you sure that you want to permannently DELETE the {{checkedNumbers}} SELECTED product{{s}}</span>
              </div>
              <div class="delete-action">
                <div class="action-cancel" @click="closewindow" role="button">Cancel</div>
                <div @click="deleteProduct(selectedId)" class="action-confirmed" role="button">Delete</div>
              </div>

            </div>

          </div>
        </div> -->

    
      
        
        <!-- <div class="popup-wrapper">

          
          
          <div v-show="confirmDelete"  class="confirm-delete-pop-up dflex centercenter" role="alert">
          
            <div class="alert-wrapper ">
              <div class="alert-title">
                <span> Confirm Delete</span>
              </div>
              <div>
                <fa-icon class="alert-icon" :icon="['fa', 'exclamation-triangle']" />
              </div>
              <div class="alert-message ">
                <span class="dflex centercenter">Are you sure that you want to permannently {{deleteAction}} the {{checkedNumbers}} SELECTED product{{s}}</span>
              </div>
              <div class="delete-action">
                <div class="action-cancel" @click="closewindow" role="button">Cancel</div>
                <div v-if="activeBtn" @click="archiveProduct('Active')" class="action-active" role="button">Reactive</div>
                <div v-if="activeBtn" @click="archiveProduct('Active')" class="action-active" role="button">Activate</div>
                <div v-if="restorebtn" @click="archiveProduct('Pending')" class="action-restore" role="button">Restore</div>
                <div v-if="archiveBtn" @click="archiveProduct('Archived')" class="action-confirmed" role="button">Archive</div>
                <div v-if="deleteButton" @click="deleteProduct(selectedId)" class="action-confirmed" role="button">Delete</div>
                <div v-if="suspendbtn" @click="archiveProduct('Pending')" class="action-restore" role="button">Suspend</div>
              </div>

            </div>

          </div>
        </div> -->
        
      <div class="header-wrapper">
        
        <!-- <div v-show="noProductSelected"  class="center-screen alert alert-warning" role="alert">
        
          0 Product selected, please select the product(s) you wish to trash!

        </div> -->
        
        <div v-show="productDeletedAlert"  class="center-screen alert alert-success" role="alert">
          <div><fa-icon class="alert-success-icon" :icon="['fa', 'check-circle']" /></div>
          <div><span class="span-success-popup">Success!</span></div>
          <div class=""><span>Product{{s}} Deleted</span></div>

        </div>
        
        
        <div class="btn-group-wrapper">

          <div>
            <h3>Products Admin</h3>
          </div>
          
        </div>

        
        
        
      </div>
      <div class="form-wrapper">
        <form>
          <div class="searchbar">
            <div class="searchbar-collection">
              
              <input v-model="search" type="text" class="searchbar__input" name="q" placeholder="Search Items" autocomplete="off" >
              <div class="searchbar__button">
                <fa-icon class="material-icons" :icon="['fa', 'search']" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="workbar">
        <div class="workerbar-sizer">
          <div class="workbar-left">

            <div @click="selectorAll" class="work-select" role="button">
              <input  class="work-checkbox selectall"  type="checkbox" name="sample" >
            </div>
            
            <div @click="refreshWindow" class="work-refresh" role="button">
              <fa-icon class="work-icon" :icon="['fa', 'redo-alt']"/>
            </div>
            
            <div class="work-add"  role="button">
              <router-link to="/admin/addproduct">
              <fa-icon class="work-icon" :icon="['fa', 'plus-square']"/>
              </router-link>
            </div>

            <div @click="uncheckedMe" class="work-more" >
                <fa-icon class="work-icon" :icon="['fa', 'ellipsis-v']"/>                      
            </div>

            
            
            <!-- Acvtivate icon action -->
            <!-- <div v-if="checkedNumbers > 0 && reactiveItems" class="work-reactivate" @click="confirmdeletewindow('Reactivate')" role="button">
              <fa-icon class="work-icon" :icon="['fa', 'folder-plus']"/>
            </div>
            <div v-if="checkedNumbers > 0 && activeItems" class="work-activate" @click="confirmdeletewindow('Active')" role="button">
              <fa-icon class="work-icon" :icon="['fa', 'folder-plus']"/>
            </div> -->
            <!-- pendent icon action -->
            <div v-if="checkedNumbers > 0 && pendentItems" class="work-suspend" @click="openPopup('suspends')" role="button">
              <fa-icon class="work-icon" :icon="['fa', 'folder-minus']"/>
            </div>
            <!-- Archive icon action -->
            <div v-if="checkedNumbers > 0 && !restoreItems" class="work-archive" @click="openPopup('archives')" role="button">
              <fa-icon class="work-icon" :icon="['fa', 'inbox']"/>
            </div>
            <!-- retore icon action -->
            <!-- <div v-if="checkedNumbers > 0 && restoreItems" class="work-restore" @click="openPopup('restore')" role="button">
              <fa-icon class="work-icon" :icon="['fa', 'trash-restore-alt']"/>
            </div> -->
            <!-- delete icon action -->
            <div v-if="checkedNumbers > 0" class="work-delete" @click="openPopup('deletes')" role="button">
              <fa-icon class="work-icon" :icon="['fa', 'trash-alt']"/>
            </div>
            
          </div>
          <div class="workbar-right">
            <div class="work-numberofpages-wrapper">
              <div class="start">
                <span>{{lastTotal}}</span>
              </div>
              <span>-</span>
              <div class="end">
                {{totalVisable}}
              </div>
              <span>of</span>
              <div class="total">
                {{totalProducts}}
              </div>
            </div>
            <div class="changepage">
              <div v-if="lastTotal == 1"   class="left-arrow ">
                <fa-icon class="work-icon disabled" :icon="['fa', 'chevron-left']"/>
              </div>
              <div v-if="lastTotal != 1" @click="prevPage" class="left-arrow" role="button">
                <fa-icon class="work-icon" :icon="['fa', 'chevron-left']"/>
              </div>
              <div v-if="totalVisable == totalProducts"  class="right-arrow" >
                <fa-icon class="work-icon disabled" :icon="['fa', 'chevron-right']"/>
              </div>
              <div v-if="totalVisable != totalProducts" @click="nextPage" class="right-arrow" role="button">
                <fa-icon class="work-icon" :icon="['fa', 'chevron-right']"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow">
        
        
        <div class="cats-filter-wrapper">
          <div id="queryAll" @click="watcher()" class="block-all">
            <div class="all">
              <span>All</span>
            </div>
          </div>
          <div id="frozen-activation" @click="activeQuery()" class="block-frozen">
            <div class="frozen">
              <span>Active</span>
            </div>
          </div>
          <div id="beverages-activation" @click="pendingQuery()" class="block-beverages">
            <div class="beverages">
              <span>Pending</span>
            </div>
          </div>
          <div id="chips-activation" @click="archivedQuery()" class="block-chips">
            <div class="chips">
              <span>Archived</span>
            </div>
          </div>
            
          

        </div>
        <div  class="content-wrapper">
          <div class="table-wrapper">
            <table class="table sticky">
              <thead>
                <tr>
                  <th class="row-select p-2" scope="col"></th>
                  <th class="p-2 img-col" scope="col"></th>

                  <th class="p-2" scope="col">Product</th>
                  <th class="p-2" scope="col">Status</th>
                  <th class="p-2" scope="col">Inventory</th>
                  <th class="p-2" scope="col">Price</th>
                  <th class="p-2" scope="col">Weight</th>
                  <th class="p-2" scope="col">Type</th>
                  <th class="p-2" scope="col">Vendor</th>
                  <th v-if="windowWidth()" scope="col endrow"></th>
                  
                  
                </tr>
              </thead>
              <tbody id="productRow">
                <tr class="data-row" v-for="(product, idx) in filteredProducts" :key="idx">
                  <th class="selecttablerow" data-label="Select"><input value="1" class="myCheck" @click.stop="checkedMe($event, product)" type="checkbox" name="sample[]" ></th>

                  <td class="image-centered"  >

                    <div v-if="!product.images.length" class="icon-image-wrapper">
                      <div class="image-box when-empty-image-sizer">
                        <fa-icon class="img-icon" :icon="['fa', 'image']"/>
                      </div>
                    </div>

                    <div class="" v-for="(image,idx) in product.images" :key="idx" >
                      <div class="image-box">
                        <img width="60px" :src="image" alt="">
                      </div>
                      
                    </div>
                  </td>
                  <td data-label="Product">{{product.name}}</td>
                  <!-- colored stastus to help visualize start -->
                  <td v-if="product.status == 'Active'" data-label="Status"><div class="active-status" >{{product.status}}</div></td>
                  <td v-if="product.status == 'Pending'" data-label="Status"><div class="pending-status" >{{product.status}}</div></td>
                  <td v-if="product.status == 'Archived'" data-label="Status"><div class="archived-status" >{{product.status}}</div></td>
                  <td v-if="!product.status" data-label="Status"><div id="archived-status" >Unknown</div></td>
                  <!-- colored stastus to help visualize end -->
                  <td data-label="Quantity">{{product.qty}}</td>
                  <td data-label="Price">{{product.price / 100 }}</td>
                  <td data-label="Weight">{{product.weight + product.Unit}}</td>
                  <td v-if="product.categorie" data-label="Categorie">{{product.categorie}}</td>
                  <td v-if="!product.categorie" data-label="Categorie">Unknown</td>
                  <td v-if="product.vendor" data-label="Vendor">{{product.vendor}}</td>
                  <td v-if="!product.vendor" data-label="Vendor">Unknown</td>
                  <td data-label="" class="show-more-tools" >

                    <div class="work-wrapper">
                      <div class="work">
                        <div class="td-work-wrapper">
                          <!-- activate -->
                          <div v-if="product.status != 'Active' && product.status != 'Archived'"  class="">
                            <button @click="openPopup('reactivate', product)" class="product-active"><fa-icon :icon="['fa', 'folder-plus']"/></button>
                          </div>
                          <!-- restore -->
                          <div v-if="product.status == 'Archived'" class="">
                            <button  @click="openPopup('restore')" class="product-restore"><fa-icon :icon="['fa', 'trash-restore-alt']"/></button>
                          </div>
                          <div v-if="product.status == 'Active'"  class="">
                            <button @click="openPopup('suspend')" class="product-pending"><fa-icon :icon="['fa', 'folder-minus']"/></button>
                          </div>
                          <!-- archive -->
                          <div v-if="product.status != 'Archived'"  class="">
                            <button @click="openPopup('archive')" class="product-archive"><fa-icon :icon="['fa', 'inbox']"/></button>
                          </div>

                          <!-- edit -->
                          <div class="">
                            <button @click="editProduct(product)" class="product-edit"><fa-icon :icon="['fa', 'edit']"/></button>
                          </div>
                          <!-- delete -->
                          <div class="">
                            <button @click="openPopup('delete')"  class="product-trash"><fa-icon :icon="['fa', 'trash-alt']"/></button>
                          </div>
                        </div>
                        
                      </div>
                      
                    </div>
                    
                    
                  </td>
                  
                  
                  
                </tr>
                <tr v-if="windowWidth()" class="table-footer"></tr>
                
              </tbody>
            </table>

          </div>
        </div>
      </div>
    
  </div>
</template>

<script>

function getNextSibling(elem, selector) {

    // Get the next sibling element
    var sibling = elem.nextElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) return sibling;

    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.nextElementSibling
    }
}
// fb, below here to use firebase

import {db} from '../firebase';
import $ from 'jquery'

export const productsCategories = ["Beverages", "Chips","Utilities","Frozen"];


export default {
  components: {
    
  },
  props: {
    
    
  },
 
  data() {
    return {      
      alerts:[
        { 
          level: 'warning',
          type:'restore',
          title:'Confirm Restore',
          msg: 'By restoring this product will change its status to Pending so you can work on it again.',
          leftBtn: 'Cancel',
          rightBtn: 'Restore',
          badgeSuccessTitle: 'Success!',
          badgeMsg:' Your product as been restored',
        },
        { 
          level: 'warning',
          type:'reactivate',
          title:'Confirm Reactivation',
          msg: 'By reactivating, your product will now be available for your customer on your website. Do you want to reactivate this product?',
          leftBtn: 'Cancel',
          rightBtn: 'Reactivate',
          badgeSuccessTitle: 'Success!',
          badgeMsg:' Your product as been reactivated',
        },
        { 
          level: 'warning',
          type:'suspends',
          title:'Confirm Suspension',
          msg: 'By clicking Suspend, your products will no longer be available to customers on your Website. Do you wish to suspend this product?',
          leftBtn: 'Cancel',
          rightBtn: 'Suspend',
          badgeSuccessTitle: 'Success!',
          badgeMsg:' Your products as been created',
        },
        { 
          level: 'warning',
          type:'suspend',
          title:'Confirm Suspension',
          msg: 'By clicking Suspend, your product will no longer be available to customers on your Website. Do you wish to suspend this product?',
          leftBtn: 'Cancel',
          rightBtn: 'Suspend',
          badgeSuccessTitle: 'Success!',
          badgeMsg:' Your product as been created',
        },
        { 
          level: 'warning',
          type:'archives',
          title:'Confirm Archive',
          msg: 'After clicking Archive Products, they will still be available, but will no longer appear on your website and on your admin page. You will still be able to restore them and make changes in the furure.',
          leftBtn: 'Cancel',
          rightBtn: 'Archive Products',
          badgeSuccessTitle: 'Success!',
          badgeMsg:' Your products as been Archive',
        },
        { 
          level: 'warning',
          type:'archive',
          title:'Confirm Archive',
          msg: 'After clicking Archive Product, It will still be available, but will no longer appear on your website and on your admin page. You will still be able to restore and make changes to this product in the furure.',
          leftBtn: 'Cancel',
          rightBtn: 'Archive Product',
          badgeSuccessTitle: 'Success!',
          badgeMsg:' Your product as been Archive',
        },
        { 
          level: 'warning',
          type:'deletes',
          title:'Confirm Delete',
          msg: 'After clicking Delete Products, these products will no longer exist.',
          leftBtn: 'Cancel',
          rightBtn: 'Delete Products',
          badgeSuccessTitle: 'Success!',
          badgeMsg:' Your products as been deleted',
        },
        { 
          level: 'warning',
          type:'delete',
          title:'Confirm Delete',
          msg: 'After clicking Delete Product, this product will no longer exist.',
          leftBtn: 'Cancel',
          rightBtn: 'Delete Product',
          badgeSuccessTitle: 'Success!',
          badgeMsg:' Your product as been deleted',
        },
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

      pendentItems:true,
      reactiveItems:false,
      activeItems:false,
      restoreItems:false,
      archiveIcon:true,
      deleteAction:'',
      suspendbtn:null,
      deleteButton:null,
      archiveBtn:null,
      activeBtn:null,
      ractiveBtn:null,
      restorebtn:null,
      pageLoaded:false,
      search:'',
      lastLength:null,
      totalProducts:0,
      totalVisable:0,
      limitVisible:30,
      lastTotal:1,
      // productsCategories:["Beverages","Essentials","Chips","Utilities","Frozen"],
      // categories:[Beverages,Essentials,Chips,Utilities,Frozen],
      lastVisible:null,
      firstVisible:null,
      checkedProductArray:[],
      docRefProduct:null,
      docRefId:'',
      s: '',
      selectefDoc: null,
      // in productselected: [], we'll have to update the function ifmoreProducts() to falsify the 's' or not.
      checkedNumbers: 0 ,
      single: null,
      selectedId: null,
      // activeItem: null,
      // realProduct: null,
      // noProductSelected: null,
      productSuccessAlert: false,
      productDeletedAlert: false,
      confirmDelete: false,
      products: [],
      product: {
        id:null,
        images:[],
        productId:null,
        name:null,
        tags:[],
        tagsInString:'',
        categorie:null,
        vendor:null,
        description:null,
        costPrice:null,
        comparePrice:null,
        price: null,
        weight:null,
        shippingcost:null,
        size:null,
        qty:0,
        taxes:false,
        trackQty:false,
        sellWhenOut:false
      },
      tag: null,
      pageEmpty: false,
      ImgSource: 'public/admin_img/products.svg',
      AdminPage: 'Products',
      AdminPageContent: `Lorem ipsum dolor, sit amet consectetur adipisicing 
                         elit. Laudantium dolorum sint nobis ex illo inventore autem consectetur 
                         aspernatur possimus exercitationem.`
    }
  },
  mounted(){
    this.pageLoaded = true
    window.localStorage.removeItem('docRefProduct');
  },
  created(){
     window.onbeforeunload = function ()
      {
          return null;
      };
    
    window.localStorage.removeItem('docRefProduct');
    window.localStorage.removeItem('newAddedProduct');
    
    db.collection("products").get().then((querySnapshot) => {
      $("#queryAll").addClass("all-active");
      querySnapshot.forEach(() => {
        
        this.totalProducts += 1;
        
        
      })
      if(this.totalProducts < this.limitVisible){
        this.totalVisable = this.totalProducts
      }else{
        this.totalVisable = this.limitVisible;
      }
    })
    db.collection("products").orderBy('productId').limit(this.limitVisible).get().then((querySnapshot) => {
      
      
      this.lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
      this.firstVisible = querySnapshot.docs[0]
      console.log("first", this.firstVisible);
      console.log("last", this.lastVisible);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            
            
            let product = doc.data()
            product.id = doc.id
            var str = product.tags.join(' ');
            product.tagsInString = str.toLowerCase()
            
            this.products.push(product);
            
            console.log(doc.id, " => ", doc.data());
        });
      
    })  
    
      
      
    },
    
    computed:{
      filteredProducts: function(){
        
          return this.products.filter((product) => {
            if(product.status == "Active"){
              console.log("Active");
              
              $("#status-row").addClass("active-status");
            }
            if(product.status == "Pending"){
              console.log( "Pending");
              $("#statusRow").addClass("pending-status");
            }
            if(product.status == "Archived"){
              console.log("Archived");
              $("#statusRow").addClass("archived-status");
            }
            return product.tagsInString.match(this.search.toLowerCase())
          })
        
      }
    },
    methods:{
      windowWidth(){
        if ($(window).width() < 960) {
          console.log('true');
          return true
        }else {
          console.log('false');
          return false
 }

      },
      // filtering queries for categories

      archivedQuery(){
        
        this.uncheckedMe();
        // reseting page counter
        this.lastTotal = 1;
        // hidding Icons in the work bar
        this.activeItems = false;
        this.restoreItems = true;
        this.pendentItems = false
        db.collection("products").where("status", "==", "Archived").get().then((querySnapshot) => {

          // removing active
          
          $("#beverages-activation").removeClass("pending-active");
          $("#queryAll").removeClass("all-active");
          $("#frozen-activation").removeClass("active-active");
          
          $('thead tr th').css("border-top","1px solid var(--primary)");

          // Adding Active
          $("#chips-activation").addClass("archived-active");

          this.totalProducts = 0;
          querySnapshot.forEach((doc) => {
            console.log(doc);
            this.totalProducts += 1;
            
            
          })
          if(this.totalProducts < this.limitVisible){
            this.totalVisable = this.totalProducts
          }else{
            this.totalVisable = this.limitVisible;
          }
        })
        db.collection("products").where("status", "==", "Archived").orderBy('productId').limit(this.limitVisible).get().then((querySnapshot) => {
          // reset page counter if modification was done
          
          this.lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
          console.log("last", this.lastVisible);
          this.firstVisible = querySnapshot.docs[0]
          console.log("first", this.firstVisible);
          this.products = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
            
            
            let product = doc.data()
            product.id = doc.id
            var str = product.tags.join(' ');
            product.tagsInString = str.toLowerCase()
            this.products.push(product);
                
                console.log(doc.id, " => ", doc.data());
            });
        }) 

         
      },
      activeQuery(){
        
        // reseting page counter
        this.lastTotal = 1;
        this.uncheckedMe();
        // hidding Icons in the work bar
        this.activeItems = false;
        this.restoreItems = false;
        this.pendentItems = true

        db.collection("products").where("status", "==", "Active").get().then((querySnapshot) => {

          // removing active
          
          $("#queryAll").removeClass("all-active");
          $("#chips-activation").removeClass("archived-active");
          $("#beverages-activation").removeClass("pending-active");

          $('thead tr th').css("border-top","1px solid var(--active)");
          

          // Adding Active
          $("#frozen-activation").addClass("active-active");

          this.totalProducts = 0;
          querySnapshot.forEach((doc) => {
            console.log(doc);
            this.totalProducts += 1;
            
            
          })
          if(this.totalProducts < this.limitVisible){
            this.totalVisable = this.totalProducts
          }else{
            this.totalVisable = this.limitVisible;
          }
        })
        db.collection("products").where("status", "==", "Active").orderBy('productId').limit(this.limitVisible).get().then((querySnapshot) => {
          // reset page counter if modification was done
          
          this.lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
          console.log("last", this.lastVisible);
          this.firstVisible = querySnapshot.docs[0]
          console.log("first", this.firstVisible);
          this.products = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
            
            
            let product = doc.data()
            product.id = doc.id
            var str = product.tags.join(' ');
            product.tagsInString = str.toLowerCase()
            this.products.push(product);
                
                console.log(doc.id, " => ", doc.data());
            });
        }) 

         
      },
      pendingQuery(){
        this.uncheckedMe();
        // reseting page counter
        this.lastTotal = 1;
        // hidding Icons in the work bar
        this.activeItems = true;
        this.restoreItems = false;
        this.pendentItems = false

        db.collection("products").where("status", "==", "Pending").get().then((querySnapshot) => {

          $("#queryAll").removeClass("all-active");
          
          $("#frozen-activation").removeClass("active-active");
          $("#chips-activation").removeClass("archived-active");
          $('thead tr th').css("border-top","1px solid var(--pending)");

          $("#beverages-activation").addClass("pending-active");
          this.totalProducts = 0;
          querySnapshot.forEach((doc) => {
            console.log(doc);
            this.totalProducts += 1;
            
            
          })
          if(this.totalProducts < this.limitVisible){
            this.totalVisable = this.totalProducts
          }else{
            this.totalVisable = this.limitVisible;
          }
        })
        db.collection("products").where("status", "==", "Pending").orderBy('productId').limit(this.limitVisible).get().then((querySnapshot) => {
          // reset page counter if modification was done
          
          this.lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
          console.log("last", this.lastVisible);
          this.firstVisible = querySnapshot.docs[0]
          console.log("first", this.firstVisible);
          this.products = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
            
            
            let product = doc.data()
            product.id = doc.id
            var str = product.tags.join(' ');
            product.tagsInString = str.toLowerCase()
            this.products.push(product);
                
                console.log(doc.id, " => ", doc.data());
            });
        }) 

         
      },
      watcher(){
        this.uncheckedMe();
        // reseting page counter
        this.lastTotal = 1
        // hidding Icons in the work bar
        this.activeItems = false
        this.reactiveItems = false
        this.restoreItems = false
        this.pendentItems = true

        
        $("#beverages-activation").removeClass("pending-active");
        $("#frozen-activation").removeClass("active-active");
        $("#chips-activation").removeClass("archived-active");
         $('thead tr th').css("border-top","1px solid var(--lightBlue)");
        db.collection("products").get().then((querySnapshot) => {
          $("#queryAll").addClass("all-active");
          this.totalProducts = 0;
          querySnapshot.forEach(() => {
            
            this.totalProducts += 1;
            
            
          })
          if(this.totalProducts < this.limitVisible){
            this.totalVisable = this.totalProducts
          }else{
            this.totalVisable = this.limitVisible;
          }
        })
        db.collection("products").orderBy('productId').limit(this.limitVisible).get().then((querySnapshot) => {
          // reset page counter if modification was done
          
          this.lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
          console.log("last", this.lastVisible);
          this.firstVisible = querySnapshot.docs[0]
          console.log("first", this.firstVisible);
          this.products = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
            
            
            let product = doc.data()
            product.id = doc.id
            var str = product.tags.join(' ');
            product.tagsInString = str.toLowerCase()
            this.products.push(product);
                
                console.log(doc.id, " => ", doc.data());
            });
        }) 
      },
      nextPage(){
        
        db.collection("products").orderBy('productId').limit(this.limitVisible).startAfter(this.lastVisible).get().then((querySnapshot) => {
            this.lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
            console.log("last", this.lastVisible);
            this.lastLength = querySnapshot.docs.length;
            this.totalVisable += this.lastLength
            this.firstVisible = querySnapshot.docs[0]
            console.log("first", this.firstVisible);
            this.products = [];
            this.lastTotal += this.limitVisible;
            querySnapshot.forEach((doc) => {
              
              
              // doc.data() is never undefined for query doc snapshots
            
            
            let product = doc.data()
            product.id = doc.id
            var str = product.tags.join(' ');
            product.tagsInString = str.toLowerCase()
            this.products.push(product);
              console.log(doc.id, " => ", doc.data());
            });
        });
      },
      prevPage(){
        db.collection("products").orderBy('productId').endBefore(this.firstVisible).limitToLast(this.limitVisible).get().then((querySnapshot) => {
          console.log("clicked");
            this.lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
            console.log(querySnapshot.docs.length);

            this.totalVisable -= this.lastLength
            
            this.firstVisible = querySnapshot.docs[0]
            console.log("last", this.lastVisible);
            console.log("first", this.firstVisible);
            this.products = [];
            this.lastTotal -= this.limitVisible;
            this.lastLength = querySnapshot.docs.length;
            querySnapshot.forEach((doc) => {
              
                  // doc.data() is never undefined for query doc snapshots
            
            
            let product = doc.data()
            product.id = doc.id
            var str = product.tags.join(' ');
            product.tagsInString = str.toLowerCase()
            this.products.push(product);
                console.log(doc.id, " => ", doc.data());
            });
        });

        // this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
        // products: db.collection.endBefore(first[field]).limitToLast(10)
      },
      refreshWindow(){
        location.reload();
      },
      deleteProductItem(selectedId){
        db.collection("products").doc(selectedId).delete().then(() => {
          this.watcher();
          this.uncheckedMe();
        });
        
        // this.$firestore.products.doc(selectedId).delete();
      },
      editProduct(product){
        
        this.docRefProduct = product;
        console.log(this.docRefProduct);
        localStorage.docRefProduct = product.id;
        console.log(product.id);
        console.log(this.docRefProduct);
        this.$router.push('addproduct')
      },
      archiveProduct(updateStatus){
        if(this.selectedId){

          this.productDeletedAlert = true
          // reseting the form
          this.checkedNumbers = 0
          // $('.popup-wrapper').css("display","none");
          this.single = ''
          this.products.find((product) => {
            if(product.id == this.selectedId){
              db.collection("products").doc(this.selectedId).update({
                status: updateStatus
              });
            }
            

            })
          
          // this.$firestore.products.add(this.selectedId);
          
          // this.$firestore.products.doc(this.selectedId).delete();
          this.closewindow();
          $(".alert").delay(1000).slideUp(200, () => {
            this.productDeletedAlert = false
            this.watcher();
            this.uncheckedMe();
          });

        }else{
          
          this.checkedProductArray.forEach( (productId) => {
            // this.$firestore.products.add(item)
            this.products.find((product) => {
              if(product.id == productId){
                db.collection("products").doc(productId).update({
                  status: updateStatus
                });
              }
              

              })
            this.closewindow();
            $(".alert").delay(1000).slideUp(200, () => {
              this.productDeletedAlert = false
              this.watcher();
              this.uncheckedMe();
            });
          })
        }
        
        
          
      },
      deleteProduct(selectedId){
        if(selectedId){

          this.productDeletedAlert = true
          // reseting the form
          this.checkedNumbers = 0
          // $('.popup-wrapper').css("display","none");
          this.single = ''
          this.deleteProductItem(selectedId);
          db.collection("products").doc(selectedId).delete()
          console.log("Product : ", selectedId, "has been deleted");
          // this.$firestore.products.doc(this.selectedId).delete();
          this.closewindow();
          $(".alert").delay(1000).slideUp(200, () => {
            this.productDeletedAlert = false
            this.watcher();
            this.uncheckedMe();
          });

        }else{
          
          this.checkedProductArray.forEach( (item) => {
            this.deleteProductItem(item);
            this.closewindow();
            $(".alert").delay(1000).slideUp(200, () => {
              this.productDeletedAlert = false
            });
          })
        }
        
        
          
      },

      selectorAll: function(event){
        const checkBox = event.target
        if (checkBox.checked) {
            $('div input').prop('checked', true);
            $('#productRow tr').css("background-color","#c2dbff");
            $('.work').css("background-color","#c2dbff");
            var upNum = $('.data-row th').children().length;
            this.checkedNumbers = 0;
            this.checkedNumbers = this.checkedNumbers + upNum;
            this.checkedProductArray  = [];
            this.products.forEach((product) =>{
              
                this.checkedProductArray.push(product.id) 
              
              
            })

        } else {
            $('div input').prop('checked', false);
            $('#productRow tr').css("background-color","rgba(242, 245, 245, 0.8)");
            $('.work').css("background-color","rgba(242,245,245,1)");
            this.checkedNumbers = 0 ;
            this.checkedProductArray = []; 
        }
      },
      // TEST FUNCTION FOR NEW PUPUP START

        
      openPopup: function(type){
        
          let obj = this.alerts.find(x => x.type == type);
          let index = this.alerts.indexOf(obj);
          this.alert = this.alerts[index];
          console.log(this.alert);
          $('.popup-wrapper').fadeIn(200);
        
      
      },
    closePopup: function(){
      // $(".confirm-delete-pop-up").slideUp(200,()=>{
      //   $('.popup-wrapper').css("display","none");
      // });
      $('.popup-wrapper').fadeOut(200);
      
      this.alert = {}
    },
    // TEST FUNCTION FOR NEW PUPUP END

      // singleConfirmdeletewindow(string, doc){
      //   this.deleteAction = string
      //   if(string == 'Archive'){
      //       this.suspendbtn = false
      //       this.deleteButton = false
      //       this.archiveBtn = true
      //       this.ractiveBtn = false
      //       this.activeBtn = false
      //       this.restorebtn = false
      //     }else if(string == 'Active'){
      //       this.suspendbtn = false
      //       this.deleteButton = false
      //       this.archiveBtn = false
      //       this.ractiveBtn = false
      //       this.activeBtn = true
      //       this.restorebtn = false
      //     }else if(string == 'Reactivate'){
      //       this.suspendbtn = false
      //       this.deleteButton = false
      //       this.archiveBtn = false
      //       this.ractiveBtn = true
      //       this.restorebtn = false
      //       this.activeBtn = false
      //     }else if(string == 'Suspend'){
      //       this.suspendbtn = true
      //       this.deleteButton = false
      //       this.archiveBtn = false
      //       this.ractiveBtn = false
      //       this.restorebtn = false
      //       this.activeBtn = false
      //     }else if(string == 'Pending'){
      //       this.suspendbtn = false
      //       this.deleteButton = false
      //       this.archiveBtn = false
      //       this.ractiveBtn = false
      //       this.activeBtn = false
      //       this.restorebtn = true
      //     }else{
      //       this.suspendbtn = false
      //       this.deleteButton = true
      //       this.archiveBtn = false
      //       this.activeBtn = false
      //       this.ractiveBtn = false
      //       this.restorebtn = false

      //     }
      //   // this.realId = doc
      //   // this.realProduct = realProduct
      //   this.checkedNumbers =  '';
        
      //   this.confirmDelete = true
      //   $('.popup-wrapper').css("display","inherit");
      //   console.log(doc.id);
      //   this.selectedId = doc.id;
      //   this.single = '1';
      // },

      confirmdeletewindow: function(string){
        this.deleteAction = string
        if(string == 'Archive'){
            this.suspendbtn = false
            this.deleteButton = false
            this.archiveBtn = true
            this.ractiveBtn = false
            this.activeBtn = false
            this.restorebtn = false
          }else if(string == 'Active'){
            this.suspendbtn = false
            this.deleteButton = false
            this.archiveBtn = false
            this.ractiveBtn = false
            this.activeBtn = true
            this.restorebtn = false
          }else if(string == 'Reactivate'){
            this.suspendbtn = false
            this.deleteButton = false
            this.archiveBtn = false
            this.ractiveBtn = true
            this.restorebtn = false
            this.activeBtn = false
          }else if(string == 'Suspend'){
            this.suspendbtn = true
            this.deleteButton = false
            this.archiveBtn = false
            this.ractiveBtn = false
            this.restorebtn = false
            this.activeBtn = false
          }else if(string == 'Pending'){
            this.suspendbtn = false
            this.deleteButton = false
            this.archiveBtn = false
            this.ractiveBtn = false
            this.activeBtn = false
            this.restorebtn = true
          }else{
            this.suspendbtn = false
            this.deleteButton = true
            this.archiveBtn = false
            this.activeBtn = false
            this.ractiveBtn = false
            this.restorebtn = false

          }

        // if(this.checkedNumbers > 0){
          

        //   this.confirmDelete = true
        //   $('.popup-wrapper').css("display","inherit");
        //   if(this.checkedNumbers > 1){
        //     this.s = 's';
        //   }else{
        //     this.s = '';
        //   }
        // }else{
        //   this.noProductSelected = true
        //   // reseting the form
        //   $(".alert").delay(2000).slideUp(200, () => {
        //       this.noProductSelected = false
        //   });
        // }
      },

      // closewindow: function(){
      //   $('.popup-wrapper').css("display","none");
      //   this.single = ''
      //   this.selectedId = null
        
      // },
      // checkedProduct(product){
      //   this.checkedProductArray.push(product.id);
      // },
      uncheckedMe: function(){
        
        $('div input').prop('checked', false);
        $('#productRow tr').css("background-color","rgba(242,245,245,0.8)");
        $('.work').css("background-color","rgba(242,245,245,1)");
        this.checkedNumbers = 0 ;
        this.checkedProductArray = []; 

      },
      checkedMe: function(event, product){

        const checkBox = event.target
        let element = event.target.parentElement;
        const toolBox = getNextSibling(element, '.show-more-tools');

         if(checkBox.checked){
           console.log(element);
           console.log(product.id);
          $(element.parentElement).css("background-color","#c2dbff");
          $(toolBox.firstChild.firstChild).css("background-color","#c2dbff")
          this.checkedNumbers = this.checkedNumbers + 1;
          this.checkedProductArray.push(product.id);
         } 
         if(checkBox.checked == false){
           $(element.parentElement).css("background-color","rgba(242,245,245,0.8)"); 
           $(toolBox).css("background-color","rgba(242,245,245,1)") 
           $(toolBox.firstChild.firstChild).css("background-color","rgba(242,245,245,1)")
           this.checkedNumbers = this.checkedNumbers - 1;
           this.checkedProductArray.splice(this.checkedProductArray.indexOf(product.id), 1);
         }

      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
  font-size: 1.1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.products{
  z-index: 1;
  min-height: 99vh;
  // find a way to delete thats shit!
}


// 
// POPUP STYLE START <----

.center-screen{
  margin: auto;
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  width: 380px;
  height: 300px;
  background-color: var(--lightwhite1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  z-index: 30;
  border: 1px solid var(--primaryT);
  box-shadow: var(--shadow);
  border-radius: 10px;

}
.center-screen > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.alert-success-icon{
  font-size: 3rem;
  color: var(--success);
}
.alert-error-icon{
  font-size: 3rem;
  color: var(--danger);
}
.span-success-popup{
  font-size: 2rem;
  font-weight: 600;
  color: var(--success);
}
// POPUP STYLE END <----
// ALERT PRODUCTS END<-----

// CONFIRM DELETE POP-UP START <----
// .dflex{
//   display: flex;
// }
.dcolum{
  flex-direction: column;
}
// .centercenter{
//   justify-content: center;
//   align-items: center;
// }
.justcontaround{
  justify-content: space-around;
}
.alingcontaround{
  align-content: space-around;
}
// .popup-wrapper{
//   display: none;
//   position: relative;
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background: rgba(0,0,0,.2);
//   z-index: 20;
// }
// .confirm-delete-pop-up{
//   margin: auto;
//   position: fixed;
//   top: 0; left: 0; bottom: 0; right: 0;
//   width: 380px;
//   height: 300px;
//   background-color:var(--lightwhite1);
//   display: flex;
//   justify-content: space-around;
//   align-content: space-around;
//   z-index: 30;
//   border: 1px solid var(--primaryT);
//   box-shadow: var(--shadow);
//   border-radius: 10px;
  
// }
// .alert-wrapper{
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
// }
// .alert-message{
//   text-align: center;
// }
// .delete-action{
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   height: 100px;
//   width: 200px;
  
  
// }
// .delete-action > div{
//   display: flex;
//   height: 40px;
//   width: 100%;
//   border-radius: 30px;
//   outline: none;
//   justify-content: center;
//   align-items: center;
// }
// .alert-icon{
//   font-size: 2.5rem;
//   color: var(--warning);
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
//   background-color: var(--pending);
// }
// .action-restore:hover{
//   background-color: var(--pending);
// }
// .action-cancel{
//   background-color: var(--primary);
  
// }
// .action-cancel:hover{
//   background-color: var(--blueGoogle);
// }
// CONFIRM DELETE POP-UP END <----

// SWITCH STYLE START <----
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
// SWITCH STYLE END<----

// HEADER STYLE START <----
.btn-group-wrapper{
  
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--lightwhite1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  
  align-items: center;
}
.btn-group-wrapper h3 {
  font-size: 2.5rem;
  color: var(--blue);
  margin-bottom: 0;
}



// HEADER STYLE FINISH <----

// SEARCHBAR STYLE START <----
.form-wrapper {
  position: relative;
  padding: 10px 30px 0 30px;
  
}
.searchbar-collection{
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--primary);
  border-radius: 5px;
}
.searchbar{
  width: 100%;
}
.searchbar--max-width {
  max-width: 100%;
}
.searchbar__button,
.searchbar__select,
.searchbar__input {
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: var(--primary);
  transition: background 0.25s, box-shadow 0.25s;
}
.searchbar__input{
  width: 70%;
  padding-left: 20px;
}
.searchbar__select{
  width: auto;
  
}
.searchbar{
  border-bottom: 1px solid var(--primary);
}
.searchbar::after{
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background:var(--lightBlue);
    transition: width .3s;
}
.searchbar:focus-within::after {
    width: 99.7%;
    //transition: width .3s;
}
.searchbar:focus{
    background: white;
    box-shadow: 0 0 2px #8CC6BA;
}
.searchbar__select option,
.searchbar__select,
.searchbar__input::placeholder {
    color: var(--lightBlue);
    font-size: 1.1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.searchbar__button {
    width: 10%;
    background: var(--primary);
    color: #ffffff;
    
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
}
.searchbar__button:active {
    box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.25);
}
.material-icons{
  font-size: 1.5rem;
  color: var(--lightBlue);
}
@keyframes search {
  0% { border-width: 0%;}
  50% { border-width: 50%;}
  100% {border-width: 100%;}
}
// SEARCHBAR STYLE FINISH <----

// WORKBAR STYLE START <----
.workerbar-sizer,.workbar-left,.workbar-right,.work-numberofpages-wrapper,.changepage{
  display: flex;
}
.changepage{
  width: 120px;
}
.work-icon{
  font-size: 1.0rem;
  color: var(--gray);
}
.disabled{
  color: var(--primary) !important;
}
.work-select{
  border-radius: 5px !important;
}
.work-numberofpages-wrapper{
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.left-arrow,.right-arrow{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  margin: 5px 10px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  
}
.left-arrow:hover,.right-arrow:hover{
   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.left-arrow:hover::after{
  content: "Previous";
  position: absolute;
  bottom: -30px;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
.right-arrow:hover::after{
  content: "Next";
  position: absolute;
  bottom: -30px;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
.work-checkbox{
  height: 15px;
  width: 15px;
  
}
.workerbar-sizer{
  
  border-bottom: 1px solid var(--primary);
  padding-right: 10px;
  justify-content: space-between;
  align-items: center;
  
}

// .workbar-left{

// }
.workbar-left > div{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  margin: 5px 10px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  
}
.workbar-left > div:hover{
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  color: pink;
}
.work-suspend, .work-activate, .work-reactivate, .work-restore, .work-select, .work-refresh, .work-add, .work-delete, .work-archive, .work-more{
  position: relative;
}
.work-suspend:hover::after{
  content: "Suspend";
  z-index: 1;
  position: absolute;
  bottom: -30px;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
.work-activate:hover::after{
  content: "activate";
  z-index: 1;
  position: absolute;
  bottom: -30px;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
.work-reactivate:hover::after{
  content: "Reactivate";
  z-index: 1;
  position: absolute;
  bottom: -30px;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
.work-select:hover::after{
  content: "Select";
  z-index: 1;
  position: absolute;
  bottom: -30px;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}

.work-refresh:hover::after{
  content: "Refresh";
  z-index: 1;
  position: absolute;
  bottom: -30px;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}

.work-add:hover::after{
  content: "Add new";
  z-index: 1;
  position: absolute;
  bottom: -30px;
  width: 75px;
  text-align: center;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
.work-restore:hover::after{
  content: "Restore";
  z-index: 1;
  position: absolute;
  bottom: -30px;
  text-align: center;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
.work-archive:hover::after{
  content: "Archive";
  z-index: 1;
  position: absolute;
  bottom: -30px;
  text-align: center;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
.work-delete:hover::after{
  content: "Delete";
  z-index: 1;
  position: absolute;
  bottom: -30px;
  text-align: center;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}

.work-more:hover::after{
  content: "More";
  z-index: 1;
  transition-delay:1s;
  position: absolute;
  bottom: -30px;
  text-align: center;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
//WORKBAR STYLE FINISH <----

// CATHEGORY FILTER STYLE START <----
.cats-filter-wrapper{
  display: grid;
  justify-content: flex-start;
  align-items: center;
  grid-template-columns: repeat(4, 117.5px);
  grid-gap: 5px;
}
.cats-filter-wrapper > div > div > span{
  font-size: 1.2rem;
  font-weight: 500;
}
.block-all,.block-frozen,.block-beverages,.block-chips{
  position: relative;
  border-radius: 5px 5px 0 0 ;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.block-all:hover{
  cursor: pointer;
  background-color: var(--primaryT);
  color: var(--lightBlue);
}

.block-all:hover::after{
  content: "";
  position: absolute;
  bottom: 0;
  height: 5px;
  width: 100%;
  border-radius: 5px 5px 0 0 ;
  background-color: var(--lightBlue);
  
}
.all-active{
  cursor: pointer;
  background-color: var(--primaryT);
  color: var(--dark);
}

.all-active::after{
  content: "";
  position: absolute;
  bottom: 0;
  height: 5px;
  width: 100%;
  border-radius: 5px 5px 0 0 ;
  background-color: var(--lightBlue);
  
}

.block-frozen:hover, .active-active{
  cursor: pointer;
  background-color: var(--primaryT);
  color: var(--dark);
}
.block-frozen:hover::after, .active-active::after{
  content: "";
  position: absolute;
  bottom: 0;
  height: 5px;
  width: 100%;
  border-radius: 5px 5px 0 0 ;
  background-color: var(--active);
  
}
.block-beverages:hover, .pending-active{

  cursor: pointer;
  background-color: var(--primaryT);
  color: var(--dark);
}
.block-beverages:hover::after, .pending-active::after{
  content: "";
  position: absolute;
  bottom: 0;
  height: 5px;
  width: 100%;
  border-radius: 5px 5px 0 0 ;
  background-color: var(--pending);
}
.block-chips:hover, .archived-active{
  cursor: pointer;
  background-color: var(--primaryT);
  color: var(--dark);
}
.block-chips:hover::after, .archived-active::after{
  content: "";
  position: absolute;
  bottom: 0;
  height: 5px;
  width: 100%;
  border-radius: 5px 5px 0 0 ;
  background-color: var(--primary);
  
}
.block-utilities:hover, .utilities-active{
  cursor: pointer;
  background-color: var(--primaryT);
  color: var(--dark);
}
.block-utilities:hover::after, .utilities-active::after{
  content: "";
  position: absolute;
  bottom: 0;
  height: 5px;
  width: 100%;
  border-radius: 5px 5px 0 0 ;
  background-color: var(--lighterBlue);
  
}

// CATHEGORY FILTER STYLE FINISH <----

// TABLE STYLE START <----
.table th,.table td{
  vertical-align: inherit;
  padding: 0rem;
  
}
.table td{
  height: 70px;
}
.image-box{
  border-radius: 5px;
  border: 1px  solid var(--primary);
}

.row-select{
  height: 20px;
  width: 50px;;
}
 .product-restore,.product-edit, .product-pending, .product-active, .product-trash, .product-archive{
  position: relative;
  color: var(--darkT);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 40px;
  border: none;
  background: none;
  outline: none;
}
.td-work-wrapper{
  color: var(--lightBlue);
}
.pending-status{
  margin: auto;
  font-size: 0.9rem;
  width: fit-content;
  font-weight: 500;
  padding: 5px;
  background-color: var(--pending);
  border-radius: 20px;
}
.active-status{
  margin: auto;
  width: fit-content;
  padding: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: var(--active);
  border-radius: 20px;
}
.archived-status{
  margin: auto;
  width: fit-content;
  padding: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  background-color:var(--primary);
  border-radius: 20px;
}
.product-restore:hover.product-suspend:hover,.product-active:hover,.product-archive:hover, .product-edit:hover,.product-pending:hover,.product-trash:hover{
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  
}
.product-restore:hover::after{
  content: "Restore";
  z-index: 2;
  transition-delay:1s;
  position: absolute;
  bottom: -30px;
  text-align: center;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
.product-pending:hover::after{
  content: "Suspend";
  z-index: 2;
  transition-delay:1s;
  position: absolute;
  bottom: -30px;
  text-align: center;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
.product-active:hover::after{
  content: "Activate";
  z-index: 2;
  transition-delay:1s;
  position: absolute;
  bottom: -30px;
  text-align: center;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
.product-archive:hover::after{
  content: "Archive";
  z-index: 2;
  transition-delay:1s;
  position: absolute;
  bottom: -30px;
  text-align: center;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}

.product-edit:hover::after{
  content: "Edit";
  z-index: 2;
  transition-delay:1s;
  position: absolute;
  bottom: -30px;
  text-align: center;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
.product-chart:hover::after{
  content: "Performances";
  transition-delay:1s;
  z-index: 2;
  position: absolute;
  bottom: -30px;
  text-align: center;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}
.product-trash:hover::after{
  content: "Delete";
  transition-delay:1s;
  z-index: 2;
  position: absolute;
  bottom: -30px;
  text-align: center;
  padding: 0.5px 5px;
  border-radius: 5px;
  background-color: var(--darkT);
  color: var(--lightwhite);
  font-size:1.0rem ;
}



// thead{
//   background-color: var(--primary);
  
// }
.img-col{
  width: 70px;
}
.img-icon{
  font-size: 3rem;
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
  height: 60px;
  width: 60px;
  padding: 10px;
  border: 1px dashed var(--grayDisable);
  border-radius: 10px;
}
.photo-holder-th{
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  margin: 0;
}
tbody tr{
  background-color: rgba(242,245,245,0.8);
  height: 35px;
}
tr:hover{
  box-shadow: var(--shadowTable);
  .work-wrapper{
    display: flex;
  }
  
}
// .table.sticky th{
//   position: sticky;
//   top: 0;
// }

// .table.sticky thead th::after{
//   content: '';
//   width: 100%;
//   height: 2px;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   background-color: var(--primary);
// }

.table{
  border-radius: 5px;
  // overflow: visible;
  text-align: center;
  margin-bottom: 0;
}
.table thead th{
  border-bottom: 0;
}
thead tr th{
  // background-color: var(--blue1);
  color: var(--dark);
  background-color: rgba(242, 245, 245, 0.8);
  border-top: 1px solid var(--lightBlue) ;
  letter-spacing: 1px;
  font-weight: 600;
  height: 40px;
  z-index: 10;
}
.table-wrapper{
  width: 100%;
}
// controling the overflow
.overflow{
  width: 95%;
  margin: auto;
  padding: 20px;
  border: 1px solid var(--primaryT);
  
  background-color:rgba(242, 245, 245, 0.8);
  margin-top: 20px;
  border-radius: 10px;
  

}
.work-wrapper{
  position: relative;
  display: none;
  
}
.work{
  position: absolute;
  display: flex;
  left: -200px;
  top: -15px;
  width: 200px;
  background-color: rgba(242,245,245,1);
}
.td-work-wrapper{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
// TABLE STYLE FINISH <----

// Scrool bar styling start <----
/* Let's get this party started */
::-webkit-scrollbar {
    width: 6px;
    height: 100%;
}
 
/* Track */
::-webkit-scrollbar-track {
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: var(--scrollBar) 
}
::-webkit-scrollbar-thumb:window-inactive {
	background: var(--boxes) 
}
// Scrool bar styling FINISH <----

// MEDIA STYLE START <----
/* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
@media 
only screen and (max-width: 540px),
(min-device-width: 768px) and (max-device-width: 700px)  {

	/* Force table to not be like tables anymore */
	.table thead{
    display: none;
  }
	.table, .table tbody, .table tr, .table td{
    display: block;
    width: 100%;
    
  }
  .img-icon{
    font-size: 6rem;
  }
  .image-centered {
    
    justify-content: center !important;
    
  }
  .table tr{
    margin-bottom: 15px;
    height: auto;
  }
  .overflow{
    background-color: transparent;
  }
  .table th{
    text-align: center;
    width: 100vw;
  }
  .when-empty-image-sizer{
    height: 150px;
    width: 150px;
  }
  .image-box img{
    height: 150px;
    width: auto;
  }
  tr{
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid var(--primary);
    .work-wrapper{
      display: flex;
      height: 100%;
      align-items: center;
      width: 100vw;
    }
    .work{
      top:5px;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: transparent;

    }
    .td-work-wrapper{
      align-items: center;
      
    }
  }
  .table td{
    text-align: right;
    position: relative;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.2rem;
    height: fit-content;
  }
  
  .selecttablerow{
    height: 50px;
  }
  .pending-status, .active-status, .archived-status{
    margin: 0;
  }
  .table td::before{
    content: attr(data-label);
    height: fit-content;
    position: absolute;
    top: 5px;
    left: -5px;
    width: 50%;
    padding-left: 15px;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: left;
  }
  .show-more-tools{
    height: 80px !important;
  }
  .endrow{
    height: 80px;
  }
	/*
	Label the data
	*/
  // top header shifting stuff in the middle
  .workerbar-sizer{
    display: grid;
    justify-content: center;
  }
  .workbar-right{
    justify-content: center;
    width: 100%;
  }
} 
@media (max-width: 950px){
   
}
// MEDIA STYLE fINISH <----
</style>
