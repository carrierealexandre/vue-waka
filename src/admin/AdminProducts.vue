/* eslint-disable */ 
<template>
  <div class="products">
    
      <whenempty v-show="pageEmpty"
      :ImgSource='ImgSource'
      :AdminPage='AdminPage'
      :AdminPageContent='AdminPageContent'
      ></whenempty>

      

    <div class="header-wrapper">
      <div v-show="productSuccessAlert" id="success-alert" class="center-screen alert alert-success" role="alert">
      
        {{product.name}} Added successfully! Id: {{docRefId}}

      </div>
      <div class="btn-group-wrapper">

        <div>
          <h3>Products Admin</h3>
        </div>
        
      </div>

      
      
      <div  class="modal fade bd-example-modal-lg" id="addProductModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div id="#myModal" class="modal-content">
            <div class="modal-header container">
              <h5 class="modal-title">Add Product</h5>
              <h5 v-show="editProduct" class="modal-title">Edit Product</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div class="form-group">
                <label for="exampleFormControlFile1">Image</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1">
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
              <button @click="saveData()" type="button" class="btn btn-primary " data-dismiss="modal" aria-label="Close">Save changes</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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

          <div class="work-select" role="button">
            <input class="work-checkbox" type="checkbox" value="" >
          </div>
          
          <div class="work-refresh" role="button">
            <fa-icon class="work-icon" :icon="['fa', 'redo-alt']"/>
          </div>

          <div class="work-add" data-toggle="modal" data-target=".bd-example-modal-lg" role="button">
            <fa-icon class="work-icon" :icon="['fa', 'plus-square']"/>
          </div>

          <div class="work-delete" role="button">
            <fa-icon class="work-icon" :icon="['fa', 'trash-alt']"/>
          </div>

          <div class="work-more" role="button">
            <fa-icon class="work-icon" :icon="['fa', 'ellipsis-v']"/>
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
    <div class="cats-filter-wrapper">
      <div class="block-container">
        <div class="all">
          <span>All</span>
        </div>
      </div>
      <div class="block-container">
        <div class="frozen">
          <span>Frozen</span>
        </div>
      </div>
      <div class="block-container">
        <div class="beverages">
          <span>Beverages</span>
        </div>
      </div>
      <div class="block-container">
        <div class="chips">
          <span>chips</span>
        </div>
      </div>
      <div class="block-container">
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
              <th scope="col">Img</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Weight</th>
              <th scope="col">Shipping</th>
              <th scope="col">Qty</th>
              <th scope="col"></th>
              <th scope="col"></th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, idx) in products" :key="idx">
              <th data-label="Select"><input type="checkbox" value="" ></th>
              <td data-label="Id">1</td>
              <td data-label="Image">{{product.img}}</td>
              <td data-label="Product Name">{{product.name}}</td>
              <td data-label="Description">{{product.description}}</td>
              <td data-label="Price">{{product.price}}</td>
              <td data-label="Weight">{{product.weight}}</td>
              <td data-label="Shipping Cost">{{product.shippingcost}}</td>
              <td data-label="In-Stock Quatity">{{product.qty}}</td>
              <th data-label=""><button class="product-view"><fa-icon :icon="['fa', 'eye']"/></button></th>
              <th data-label="Modify"><button  class="product-edit"><fa-icon :icon="['fa', 'edit']"/></button></th>
              
              
            </tr>
            
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase';
import $ from 'jquery'
export default {
  
  props: {
    
  },
  data() {
    return {
      docRefId:'',
      productSuccessAlert: false,
      cats: ['All', 'Dry', 'Frozen', 'Chips', 'Pop'],
      editProduct: false,
      products: [],
      product: {
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
    
  created(){
    this.readData();
  },
    
    methods:{
      readData(){
        db.collection("products").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            
            this.products.push(doc.data());
          });
        });
      },
      toggleModal() {
        this.modalShown = !this.modalShown;
      },
      modalAddProduct(){
        this.$modal.show('modal-addProduct');
      },
      addProduct(){
      // Add a new document in collection "cities"
        db.collection("Products").doc("LA").set({
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
      },
      saveData(){
        db.collection("products").add(this.product)
        .then((docRef) => {
          console.log("document written with ID: ", docRef.id);
          $('#addProductModal').modal('hide');

          // Alerting client that product as been added successfully
          this.docRefId = docRef.id
          this.productSuccessAlert = true
          // reseting the form
          

          $(".alert").delay(2000).slideUp(200, () => {
              this.productSuccessAlert = false
              this.reset();
              this.readData();            
          });

        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
          
        })
        
      },
      
      reset(){
        Object.assign(this.$data, this.$options.data.apply(this));
      }
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
}
// MODAL ADD PRODUCTS START <-----
.modal-header h5{
  font-size: 2.5rem;
}
// MODAL ADD PRODUCTS END<-----


.center-screen{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  z-index: 9999;

}
// ALERT PRODUCTS END<-----

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
  padding-right: 30px;
}



// HEADER STYLE FINISH <----

.modal-content{
  padding:30px;
  
  height: 90vh;
  overflow-y: scroll ;
}
// SEARCHBAR STYLE START <----
.form-wrapper {
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
.block-container{
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.block-container:hover{
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
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
.product-edit, .product-view{
  width: 30px;
  height: 30px;
  border: none;
  
  background: none;
  outline: none;
}
.product-edit{
  color: var(--lightBlue);
}
.product-view{
  color: var(--lighterBlue);
}
thead{
  background-color: var(--primary);
}
tbody tr{
  background-color: var(--primaryT);
}
tr:hover{
  
  
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  
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
//   background-color: var(--dark);
// }
.table{
  border-radius: 5px;
  
  
  overflow: scroll;
  text-align: center;
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
  z-index: 999;
}
.table-wrapper{
  width: 100%;
}

// TABLE STYLE FINISH <----

// Scrool bar styling start <----
/* Let's get this party started */
::-webkit-scrollbar {
    width: 6px;
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
only screen and (max-width: 1236px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

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
  }
  .table th{
    text-align: center;
    width: 100vw;
  }
 
  .table td{
    text-align: right;
    padding-left:50%;
    position: relative;
    font-size: 1.2rem;
    margin-top: 10px;
  }
  .table td::before{
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: left;
  }
  
	/*
	Label the data
	*/

} 
@media (max-width: 950px){
   .btn-group-wrapper{
      display: grid;
      width: 100%;
      padding: 0;
      height: 60px;
      justify-content: center;
      margin-bottom: 60px;
      grid-template-columns: 1fr;
      align-items: center;
    }
    .btn-group-wrapper h3{
      padding-right: 0;
      
    }
    .btnadd-top-admin button,
    .btndel-top-admin button{
      width: 100px;
      padding: 10px 0 10px 0;
      
      
      margin-right:30px;
    }
    .btn-group-wrapper h3,
    .btnadd-top-admin,
    .btndel-top-admin,
    .btnadd-top-admin button,
    .btndel-top-admin button{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btn-group-wrapper h3{
      justify-content: flex-start;
      margin-left: 60px;
    }
}
// MEDIA STYLE fINISH <----
</style>
