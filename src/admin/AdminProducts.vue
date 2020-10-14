/* eslint-disable */ 
<template>
  <div class="products">
    
      <whenempty v-show="pageEmpty"
      :ImgSource='ImgSource'
      :AdminPage='AdminPage'
      :AdminPageContent='AdminPageContent'
      ></whenempty>

    
      
        
        <div class="popup-wrapper">

          
          
          <div v-show="confirmDelete"  class="confirm-delete-pop-up dflex centercenter" role="alert">
          
            <div class="alert-wrapper ">
              <div class="alert-title">
                <span> Confirm Delete</span>
              </div>
              <div>
                <fa-icon class="alert-icon" :icon="['fa', 'exclamation-triangle']" />
              </div>
              <div class="alert-message ">
                <span class="dflex centercenter">Are you sure that you want to permannently DELETE the {{checkedNumbers}} SELECTED product{{s}}</span>
              </div>
              <div class="delete-action">
                <div class="action-cancel" @click="closewindow" role="button">Cancel</div>
                <div @click="deleteProduct(product)" class="action-confirmed" role="button">Delete</div>
              </div>

            </div>

          </div>
        </div>
        
      <div class="header-wrapper">
        
        <div v-show="noProductSelected"  class="center-screen alert alert-warning" role="alert">
        
          0 Product selected, please select the product(s) you wish to trash!

        </div>
        
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
      <div class="product-Modal-wrapper">
        <div v-show="productModal" class="product-Modal" >
          <div class="modal-container">
            <div class="modal-wrapper">
              <div class="modal-header">
                <h5 v-show="addProductTitle " class="modal-title">Add New Product</h5>
                <h5 v-show="editProductTitle" class="modal-title">Edit Product</h5>
                <button @click="closeproductModal()" class="close">
                  <span >&times;</span>
                </button>
              </div>
              <form>
                <div class="form-group">
                  <label for="exampleFormControlFile1">Image</label>
                  <input type="file" class="form-control-file" id="exampleFormControlFile1">
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Product ID</label>
                  <input v-model="product.productId" type="text" class="form-control"  placeholder="Product ID">
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Product name</label>
                  <input v-model="product.name" type="text" class="form-control"  placeholder="Product Name">
                </div>
                
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Categorie</label>
                  <select v-model="product.categorie" class="form-control" id="exampleFormControlSelect1">
                    <option v-for="(cat, idx) in cats" :key="idx" >{{cat}}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">description Maxiumum 30 </label>
                  <textarea v-model="product.description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>


                <div class="form-group">
                  <label for="exampleFormControlInput1">Price example: if $10.00 then enter 1000 </label>
                  <input v-model="product.price"  type="text" class="form-control"  placeholder="Price $CAD">
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">weight</label>
                  <input v-model="product.weight"  type="text" class="form-control"  placeholder="Weight">
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Size</label>
                  <input v-model="product.size"  type="text" class="form-control"  placeholder="Size">
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Product Shipping Cost</label>
                  <input v-model="product.shippingcost"  type="text" class="form-control"  placeholder="Shipping Cost">
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Quatity in Stock</label>
                  <input v-model="product.qty"  type="text" class="form-control"  placeholder="Qty">
                </div>

                
                
              </form>
              <div class="modal-footer">
                <button v-show="editProductTitle" @click="updateData()"  class="btn btn-primary ">Save changes</button>
                <button v-show="addProductTitle" @click="saveData()"  class="btn btn-primary ">Create</button>
                <button @click="closeproductModal()" class="btn btn-secondary">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-wrapper">
        
        


















        <form>
          <div class="searchbar">
            <div class="searchbar-collection">
              
              <input type="text" class="searchbar__input" name="q" placeholder="Search Items" autocomplete="off" >
              <button type="submit" class="searchbar__button">
                <fa-icon class="material-icons" :icon="['fa', 'search']" />
              </button>
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
            
            <div class="work-refresh" role="button">
              <fa-icon class="work-icon" :icon="['fa', 'redo-alt']"/>
            </div>

            <div @click=" modalAddProduct()" class="work-add"  role="button">
              <fa-icon class="work-icon" :icon="['fa', 'plus-square']"/>
            </div>

            <div class="work-delete" @click="confirmdeletewindow()" role="button">
              <fa-icon class="work-icon" :icon="['fa', 'trash-alt']"/>
            </div>

            <div class="work-more" >
              <router-link  to="/admin/addproduct">
                <fa-icon class="work-icon" :icon="['fa', 'ellipsis-v']"/>                      
              </router-link> 
              
            </div>
            
          </div>
          <div class="workbar-right">
            <div class="work-numberofpages-wrapper">
              <div class="start">
                <span>1</span>
              </div>
              <span>-</span>
              <div class="end">
                10
              </div>
              <span>of</span>
              <div class="total">
                10
              </div>
            </div>
            <div class="changepage">
              <div class="left-arrow" role="button">
                <fa-icon class="work-icon" :icon="['fa', 'chevron-left']"/>
              </div>
              <div class="right-arrow" role="button">
                <fa-icon class="work-icon" :icon="['fa', 'chevron-right']"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow">
        
        
        <div class="cats-filter-wrapper">
          <div class="block-all">
            <div class="all">
              <span>All</span>
            </div>
          </div>
          <div class="block-frozen">
            <div class="frozen">
              <span>Frozen</span>
            </div>
          </div>
          <div class="block-beverages">
            <div class="beverages">
              <span>Beverages</span>
            </div>
          </div>
          <div class="block-chips">
            <div class="chips">
              <span>chips</span>
            </div>
          </div>
          <div class="block-utilities">
            <div class="utilities">
              <span>Utilities</span>
            </div>
          </div>
            
          

        </div>
        <div  class="content-wrapper">
          <div class="table-wrapper">
            <table class="table sticky">
              <thead>
                <tr>
                  <th class="row-select" scope="col"></th>
                  <th scope="col">Id</th>
                  
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Shipping</th>
                  <th scope="col">Qty</th>
                  <th scope="col endrow"></th>
                  
                  
                </tr>
              </thead>
              <tbody id="productRow">
                <tr class="data-row" v-for="(product, idx) in products" :key="idx">
                  <th class="selecttablerow" data-label="Select"><input value="1" class="myCheck" @click.stop="checkedMe" type="checkbox" name="sample[]" ></th>
                  <td data-label="Id">{{product.productId}}</td>
                  <td data-label="Product Name">{{product.name}}</td>
                  <td data-label="Description">{{product.description}}</td>
                  <td data-label="Price">{{product.price}}</td>
                  <td data-label="Weight">{{product.weight}}</td>
                  <td data-label="Shipping Cost">{{product.shippingcost}}</td>
                  <td data-label="In-Stock Quatity">{{product.qty}}</td>
                  <td data-label="" class="show-more-tools" >
                    <div class="work-wrapper">
                      <div class="work">
                        <div class="moretoit">
                          <span>...</span>
                        </div>
                        <div class="td-work-wrapper">
                          <div class="">
                            <button class="product-view"><fa-icon :icon="['fa', 'eye']"/></button>
                          </div>
                          <div class="">
                            <button @click="editProduct(product)" class="product-edit"><fa-icon :icon="['fa', 'edit']"/></button>
                          </div> 
                          <div class="">
                            <button  class="product-chart"><fa-icon :icon="['fa', 'chart-line']"/></button>
                          </div> 
                          <div class="">
                            <button @click="singleConfirmdeletewindow(product)"  class="product-trash"><fa-icon :icon="['fa', 'trash-alt']"/></button>
                          </div>
                        </div>
                        
                      </div>
                      
                    </div>
                    
                    
                  </td>
                  
                  
                  
                </tr>
                <tr class="table-footer"></tr>
                
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
import { db} from '../firebase';
import $ from 'jquery'
export default {
  
  props: {
    
  },
  data() {
    return {
      docRefId:'',
      s: '',
      selectefDoc: null,
      // in productselected: [], we'll have to update the function ifmoreProducts() to falsify the 's' or not.
      checkedNumbers: 0 ,
      single: null,
      selectedId: null,
      activeItem: null,
      // realProduct: null,
      editProductTitle: null,
      addProductTitle: null,
      noProductSelected: null,
      productSuccessAlert: false,
      productDeletedAlert: false,
      confirmDelete: false,
      productModal: false,
      cats: ['Dry', 'Frozen', 'Chips', 'Pop','Utilities'],
      
      products: [],
      product: {
        productId:null,
        name:null,
        categorie:null,
        description:null,
        price:null,
        weight:null,
        shippingcost:null,
        size:null,
        qty:null,
        
      },
      
      pageEmpty: false,
      ImgSource: 'public/admin_img/products.svg',
      AdminPage: 'Products',
      AdminPageContent: `Lorem ipsum dolor, sit amet consectetur adipisicing 
                         elit. Laudantium dolorum sint nobis ex illo inventore autem consectetur 
                         aspernatur possimus exercitationem.`
      }
    },
    
    mounted(){
    
    // $('.selectall').click(function() {
      
    //     if ($(this).is(':checked')) {
    //         $('div input').prop('checked', true);
    //         $('#productRow tr').css("background-color","#c2dbff");
    //         $('.work').css("background-color","#c2dbff");
    //         var upNum = $('.data-row th').children().length;
    //         console.log(upNum);
    //         this.checkedNumbers = this.checkedNumbers + upNum;

    //     } else {
    //         $('div input').prop('checked', false);
    //         $('#productRow tr').css("background-color","var(--light)");
    //         $('.work').css("background-color","var(--light");
            
    //     }
    // });
   },

    created(){
      // this.readData();

  },
  firestore(){
    return {
      products: db.collection('products'),
    }
  },

    methods:{
      watcher(){
        // db.collection("products").onSnapshot((querySnapshot) => {
        //   this.products = [];
        //   querySnapshot.forEach((doc) => {
        //     this.products.push(doc);
        //   })

        // })
      },


      // product as param here in the formula.. deleted because of a fucking error re add when needed!!!
      editProduct(){
        // this.editProductTitle = true;
        // this.productModal = true;
        // this.product = product.data()
        // this.activeItem = product.id
      },
      deleteProduct(){
        
        console.log(this.selectedId);
        this.productDeletedAlert = true
        // reseting the form
        this.checkedNumbers = 0
        $('.popup-wrapper').css("display","none");
        this.single = ''
        this.$firestore.products.doc(this.selectedId).delete();
        this.closewindow();
        //   db.collection("products").doc(this.realId).delete().then(() => {
            
        //     this.watcher();
        $(".alert").delay(1000).slideUp(200, () => {
          this.productDeletedAlert = false
          
          
                    
        });
        //   }).catch(function(error) {
            
            
        //     $(".alert").delay(2000).slideUp(200, () => {
        //       this.productDeletedAlert = false
        //     console.error("error removing document: ", error);
        //   });
        //   });
          
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

        } else {
            $('div input').prop('checked', false);
            $('#productRow tr').css("background-color","var(--light)");
            $('.work').css("background-color","var(--light");
            
            this.checkedNumbers = 0 ;
            
        }
      },
      singleConfirmdeletewindow(doc){

        // this.realId = doc
        // this.realProduct = realProduct
        this.checkedNumbers =  '';
        this.confirmDelete = true
        $('.popup-wrapper').css("display","inherit");
        console.log(doc['.key']);
        this.selectedId = doc['.key'];
        
        this.single = '1';
      },
      confirmdeletewindow: function(){
        if(this.checkedNumbers > 0){
          this.confirmDelete = true
          $('.popup-wrapper').css("display","inherit");
          
          if(this.checkedNumbers > 1){
            this.s = 's';
          }else{
            this.s = '';
          }
        }else{
          this.noProductSelected = true
          // reseting the form
          

          $(".alert").delay(2000).slideUp(200, () => {
              this.noProductSelected = false
                       
          });
          
        }
        
      },
      closewindow: function(){
        $('.popup-wrapper').css("display","none");
        this.single = ''
        this.addProductTitle = null;
        this.editProductTitle = null;
        this.watcher();
      },
      
      // elem = event.target , selector = '.classname','#id'

      readData(){
        // db.collection("products").get().then((querySnapshot) => {
        //   querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
            
        //     this.products.push(doc);
        //   });
        // });
      },
      checkedMe: function(event){

        const checkBox = event.target
        let element = event.target.parentElement;
        
        const toolBox = getNextSibling(element, '.show-more-tools');

         if(checkBox.checked){
          $(element.parentElement).css("background-color","#c2dbff");
          $(toolBox.firstChild.firstChild).css("background-color","#c2dbff")
          this.checkedNumbers = this.checkedNumbers + 1;

          // $(toolBox.firstChild.firstChild).css("color","#EDF5E1")
          
          // $(toolBox.firstChild.firstChild.firstChild.nextElementSibling).css("color","#EDF5E1")
         } 
         if(checkBox.checked == false){
           $(element.parentElement).css("background-color","var(--light"); 
           $(toolBox).css("background-color","var(--light") 
           $(toolBox.firstChild.firstChild).css("background-color","var(--light)")
           this.checkedNumbers = this.checkedNumbers - 1;
         }
          
      },
      toggleModal() {
        this.modalShown = !this.modalShown;
      },
      modalAddProduct(){
        this.productModal = true;
        this.addProductTitle = true;
      },
      closeproductModal(){
        this.reset();
        this.watcher();
        this.productModal = false
        this.addProductTitle = null;
        this.editProductTitle = null;
        
        
        
        
      },

      

      saveData(){
        this.$firestore.products.add(this.product);
        this.closeproductModal();
        
        // db.collection("products").add(this.product)
        // .then((docRef) => {
        // //   console.log("document written with ID: ", docRef.id);
        // //   this.productModal = false
        //       this.productModal = false;
        //       this.watcher();
        //       this.productSuccessAlert = true;
        // //   // Alerting client that product as been added successfully
        //   this.docRefId = docRef.id
        // //   this.productSuccessAlert = true
        // //   // reseting the form
        // //   this.reset();
        // //   this.watcher();

        //   $(".alert").delay(2000).slideUp(200, () => {
        //       this.productSuccessAlert = false
              
                         
        //   });

        // })
        // .catch(function(error) {
        //   console.error("Error adding document: ", error);
          
        // })
        
      },
      
      reset(){
        // Object.assign(this.$data, this.$options.data.apply(this));
      },
      updateData(){
        // console.log(this.activeItem);
        // db.collection("products").doc(this.activeItem).update(this.product)
        
      //   .then(() => {
      //       console.log("Document successfully updated!");
      //       console.log(this);
      //       this.productModal = false;
      //       this.watcher();
      //   })
      //   .catch(function(error) {
      //       // The document probably doesn't exist.
      //       console.error("Error updating document: ", error);
      //   });
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

// MODAL ADD PRODUCTS START <-----
.modal-header h5{
  font-size: 2.5rem;
}
// MODAL ADD PRODUCTS END<-----
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
.dflex{
  display: flex;
}
.dcolum{
  flex-direction: column;
}
.centercenter{
  justify-content: center;
  align-items: center;
}
.justcontaround{
  justify-content: space-around;
}
.alingcontaround{
  align-content: space-around;
}
.popup-wrapper{
  display: none;
  position: relative;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,.8);
  z-index: 20;
}
.confirm-delete-pop-up{
  margin: auto;
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  width: 380px;
  height: 300px;
  background-color:var(--lightwhite1);
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  z-index: 30;
  border: 1px solid var(--primaryT);
  box-shadow: var(--shadow);
  border-radius: 10px;
  
}
.product-Modal{
  position: absolute;
  
  top: 0;

  width: 75%;
  height: 80vh;
  background-color:var(--lightwhite1);
  display: flex;
  flex-direction: column;
  overflow-x: unset;
  align-content: center;
  z-index: 30;
  border: 1px solid var(--primaryT);
  box-shadow: var(--shadow);
  border-radius: 10px;
  overflow: scroll;

}
.product-Modal-wrapper{
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.alert-wrapper{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.alert-message{
  text-align: center;
}
.delete-action{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 200px;
  
  
}
.delete-action > div{
  display: flex;
  height: 40px;
  width: 100%;
  border-radius: 30px;
  outline: none;
  justify-content: center;
  align-items: center;
}
.alert-icon{
  font-size: 2.5rem;
  color: var(--warning);
}
.action-confirmed{
  background-color: var(--danger);
}
.action-confirmed:hover{
  background-color: var(--red);
}
.action-cancel{
  background-color: var(--primary);
  
}
.action-cancel:hover{
  background-color: var(--blueGoogle);
}
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
// .modal-container{
//   position: relative;
// }
// .modal-wrapper{
//   margin: auto;
//   z-index: 30;
//   border: 1px solid var(--primaryT);
//   box-shadow: var(--shadow);
//   border-radius: 10px;
//   position: absolute;
//   top: 0; left: 0; bottom: 0; right: 0;
//   width: 75%;
//   height: 75%;
//   overflow: scroll;
// }
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
.work-icon{
  font-size: 1.0rem;
  color: var(--gray);
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

.workbar-left{

}
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
.work-select,.work-refresh,.work-add,.work-delete,.work-more{
  position: relative;
}
.work-select:hover::after{
  content: "Select";
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
.work-delete:hover::after{
  content: "Delete";
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
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
}
.cats-filter-wrapper > div > div > span{
  font-size: 1.2rem;
  font-weight: 500;
}
.block-all,.block-frozen,.block-beverages,.block-chips,.block-utilities{
  position: relative;
  height: 50px;
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
.block-frozen:hover{
  cursor: pointer;
  background-color: var(--primaryT);
  color: var(--brown);
}
.block-frozen:hover::after{
  content: "";
  position: absolute;
  bottom: 0;
  height: 5px;
  width: 100%;
  border-radius: 5px 5px 0 0 ;
  background-color: var(--brown);
  
}
.block-beverages:hover{
  cursor: pointer;
  background-color: var(--primaryT);
  color: var(--red);
}
.block-beverages:hover::after{
  content: "";
  position: absolute;
  bottom: 0;
  height: 5px;
  width: 100%;
  border-radius: 5px 5px 0 0 ;
  background-color: var(--red);
  
}
.block-chips:hover{
  cursor: pointer;
  background-color: var(--primaryT);
  color: var(--green);
}
.block-chips:hover::after{
  content: "";
  position: absolute;
  bottom: 0;
  height: 5px;
  width: 100%;
  border-radius: 5px 5px 0 0 ;
  background-color: var(--green);
  
}
.block-utilities:hover{
  cursor: pointer;
  background-color: var(--primaryT);
  color: var(--lighterBlue);
}
.block-utilities:hover::after{
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

.row-select{
  height: 20px;
  width: 50px;;
}
.product-edit, .product-view, .product-chart, .product-trash{
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

.product-view:hover,.product-edit:hover,.product-chart:hover,.product-trash:hover{
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  
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
.product-view:hover::after{
  content: "view";
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



thead{
  background-color: var(--primary);
  
}
tbody tr{
  background-color: var(--light);
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
.table.sticky thead th::after{
  content: '';
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--primary);
}

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
  color: var(--lightBlue);
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
  
}
.work-wrapper{
  position: relative;
  display: none;
  
}
.work{
  position: absolute;
  display: flex;
  left: -300px;
  top: -15px;
  width: 300px;
  background-color: var(--light);
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
only screen and (max-width: 500px),
(min-device-width: 768px) and (max-device-width: 700px)  {

	/* Force table to not be like tables anymore */
	.table thead{
    display: none;
  }
	.table, .table tbody, .table tr, .table td{
    display: block;
    width: 100%;
    
  }
  .table tr{
    margin-bottom: 15px;
    height: auto;
  }
  .table th{
    text-align: center;
    width: 100vw;
  }
  tr:hover{
  box-shadow: var(--shadowTable);
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

    }
  }
  
  .table td{
    text-align: right;
    position: relative;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.2rem;
    
    
    height: 50px;
  }
  .moretoit{
    display: none;
  }
  .selecttablerow{
    height: 50px;
  }
  .table td::before{
    content: attr(data-label);
    position: absolute;
    top: 5px;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: left;
  }
  .endrow{
    height: 50px;
  }
	/*
	Label the data
	*/

} 
@media (max-width: 950px){
   
}
// MEDIA STYLE fINISH <----
</style>
