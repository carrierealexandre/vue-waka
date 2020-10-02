/* eslint-disable */ 
<template>
  <div class="products">
    
      <whenempty v-show="pageEmpty"
      :ImgSource='ImgSource'
      :AdminPage='AdminPage'
      :AdminPageContent='AdminPageContent'
      ></whenempty>
    <div class="header-wrapper">
      <div class="btn-group-wrapper">
        <div class="">
          <h3>Products Admin</h3>
        </div>
        <div class="btn-top__wrapper">
          <div>
            <!-- <label class="switch">
              <input v-model="tabelStyle" type="checkbox">
              <span class="slider round"></span>
            </label> -->
          </div>
          <div class="btnadd-top-admin">
            <button class="btn " data-toggle="modal" data-target=".bd-example-modal-lg" ><fa-icon :icon="['fa', 'plus']"/><span>Add</span></button>
          </div>
          <div class="btndel-top-admin"> 
            <button class="btn " @click="modalAddProduct"><fa-icon :icon="['fa', 'trash-alt']"/> <span>Delete</span> </button>
          </div>
        </div>
      </div>
      
      
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
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
              <button @click="saveData()" type="button" class="btn btn-primary">Save changes</button>
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
            <select id="cats" class="searchbar__select">
              <option class="searchbar__options" v-for="(cat, idx) in cats" :key="idx" :value="cat">{{cat}}</option>
            </select>
            <input type="text" class="searchbar__input" name="q" placeholder="Search Items" autocomplete="off" >
            <button type="submit" class="searchbar__button">
              <fa-icon class="material-icons" :icon="['fa', 'search']" />
            </button>
          </div>
        </div>
      </form>
    </div>
    <div  class="content-wrapper">
      <div class="table-wrapper">
        <table class="table sticky">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Id</th>
              <th scope="col">Img</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Weight</th>
              <th scope="col">Shipping cost</th>
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
              <td data-label="Shipping Cost">{{product.ShippingCost}}</td>
              <td data-label="In-Stock Quatity">{{product.qty}}</td>
              <th data-label=""><button class="btn btn-warning"><fa-icon :icon="['fa', 'eye']"/></button></th>
              <th data-label="Modify"><button  class="btn btn-primary"><fa-icon :icon="['fa', 'edit']"/></button></th>
              
              
            </tr>
            
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase';

export default {
  
  props: {
    
  },
  data() {
    return {
      cats: ['All', 'Dry', 'Frozen', 'Chips', 'Pop'],
      editProduct: false,
      products: [{
          img: 'pepsi.jpg',
          name: 'Grape Crush',
          description: '12 Cans',
          price: '8.99',
          weight: '10 Lbs',
          ShippingCost: '8.00',
          size: '20',
          qty: '16',
          InStock: 'In Stock!'
        }],
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
    methods:{
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
        .then(function(docRef) {
          console.log("document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
          
        })
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
// MODAL ADD PRODUCTS START <-----
.modal-header h5{
  font-size: 2.5rem;
}
// MODAL ADD PRODUCTS END<-----
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
  display: grid;
  width: 100%;
  padding: 5px 20px 0 60px;
  height: 55px;
  justify-content: space-between;
  background-color: var(--lightwhite1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  grid-template-columns: repeat(2, auto);
  align-items: center;
}
.btn-top__wrapper{
  display: flex;
  justify-content: flex-end;
}
.btn-group-wrapper h3 {
  font-size: 2.5rem;
  color: var(--blue);
  padding-right: 30px;
}
.btn-group-wrapper button{
  margin-right: 30px;;
  padding: 0 20px 0 20px;
}
.btnadd-top-admin button{
  background-color: var(--lightBlue);
  color: var(--lightwhite1);
  border: none;
  outline: none;
}
.btndel-top-admin button{
  background-color: var(--lightBlue);
  border: none;
  outline: none;
  color: var(--lightwhite1);
}
.btndel-top-admin button span,
.btnadd-top-admin button span{
  padding-left: 5px;
}
.btndel-top-admin button:hover,
.btnadd-top-admin button:hover{
  color: var(--primary);
}


// HEADER STYLE FINISH <----

.modal-content{
  padding:30px;
  height: 600px;
  overflow-y: scroll ;
}
// SEARCHBAR STYLE START <----
.form-wrapper {
  padding: 10px 30px 0 30px;
  
}
.searchbar-collection{
  width: 100%;
  display: inline-flex;
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
  background: var(--lightwhite1);
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
    background:var(--grenner);
    transition: width .3s;
}
.searchbar:focus-within::after {
    width: 100%;
    //transition: width .3s;
}
.searchbar:focus{
    background: white;
    box-shadow: 0 0 2px #8CC6BA;
}
.searchbar__select option,
.searchbar__select,
.searchbar__input::placeholder {
    color: var(--grenner);
    font-size: 1.1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.searchbar__button {
    width: 10%;
    background: var(--lightwhite1);
    color: #ffffff;
    background: #F4FAF9;
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
  color: var(--grenner);
}
@keyframes search {
  0% { border-width: 0%;}
  50% { border-width: 50%;}
  100% {border-width: 100%;}
}
// SEARCHBAR STYLE FINISH <----

// TABLE STYLE START <----
.table th,.table td{
  vertical-align: inherit;
}


.table td{
  margin-top: 60px;
  color: var(--grenner);
}
tr:hover{
  background-color: var(--primary);
}
.table.sticky th{
  position: sticky;
  top: 0;
}
.table.sticky thead th::after{
  content: '';
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--dark);
}
.table{
  border-radius: 5px;
  border-top: 1px solid var(--primary);
  overflow: scroll;
}
thead tr th{
  background-color: var(--grenner);
  
  z-index: 999;
}
.table-wrapper{
  box-shadow: var(--shadow1);
  width: 95%;
  border: 1px solid var(--primary);
  overflow-y: scroll;
}
.content-wrapper{
  margin-top: 30px;
  display: flex;
  height: 580px;
  justify-content: center;
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
