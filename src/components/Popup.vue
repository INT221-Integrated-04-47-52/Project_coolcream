<template>
  <div
    class=" flex justify-center items-center fixed z-50 inset-0 overflow-y-auto">
    <div class="w-5/12 h-96 bg-white rounded-3xl shadow-lg ">
      <div
        class="cursor-pointer mt-4  mr-8  focus:ring transform transition hover:scale-105 
      duration-300 ease-out  flex flex-row-reverse   "
        @click="close"
      >
        <span class="material-icons  ">
          close
        </span>
      </div>
      <img
        class=" ml-2 w-72 h-72 transform -rotate-6 transition 
  hover:scale-105 duration-700 ease-in-out hover:rotate-6"
        :src="icecream.image" />

      <!-- Edit Product -->
      <div class="w-96 flex flex-row-reverse ml-64 text-left">
        <div
          class=" ml-12 -mt-72  mr-16  ext-left block text-gray-800 
            py-2 ผfont-bold  items-start"
        >
          <!-- Edit Product name-->
          <p class="my-2 text-black">
            Product Name :
            <input
              class="shadow text-left justify-start appearance-none border rounded w-56 h-4 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="text"
              placeholder="input your product name..."
              v-if="isEdit"
              id="name"
              name="name"
              v-model="nameEnter"
            />
            <span v-else class="text-pink-500"> {{ icecream.name }} </span>
          </p>

          <!-- Edit Description -->
          <p class="my-2 text-black ">
            Describe :<textarea
              class="shadow text-left justify-start appearance-none border h-24 rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="text"
              placeholder="description product..."
              v-if="isEdit"
              id="describe"
              name="describe"
              v-model="describeEnter"
            />
            <span v-else class=" text-pink-500">{{ icecream.describe }}</span>
          </p>

          <!-- <p class="my-2 text-black ">
            E-mail : <input class="shadow text-left justify-start appearance-none border rounded w-56 h-4 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out" type="text" placeholder="input your name.." 
            v-if="isEdit"
             id="email" 
             name="email" v-model="emailEnter"
           />
           <span  v-else class=" text-pink-500">{{ icecream.email }} </span>
          </p> -->

          <!-- Edit Price ** -->
          <p class="my-2 text-black">
            Price :
            <input
              class="shadow text-left justify-start appearance-none border rounded w-56 h-4 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="text"
              placeholder="input product price..."
              v-if="isEdit"
              id="price"
              name="price"
              v-model="priceEnter"
            />
            <span v-else class="text-pink-500"> {{ icecream.price }} </span>
          </p>

          <!-- Edit Brand ** (Baskin Robbins,Ben&Jerry’s,Dairy Queen,Suzukien,Swensens,Umm Milk) -->
          <p class="my-2 text-black">
          <label for="brand">Brand :</label>
          <select  v-if="isEdit" name="brand" id="brand" 
          v-model="brandEnter">
          <option v-for="ban in brandArray" 
          :key="ban.id">
            {{ban.name}}
          </option>
          </select>
          <span v-else class="text-pink-500"> {{ icecream.brand }} </span>
          </p>

          <!-- Edit Size ** (S, M, X, XL) -->
          <div class="my-2 text-black">
            Size : 
            <select  v-if="isEdit" name="size" id="size" 
            v-model="sizeEnter">
            <option v-for="siz in sizeArray" value="siz.name" id="size" name="sizelist" 
            @click="selectSize(siz.name)"   
             :class="{  'bg-green-400 text-white': 
             formElements.size.value.includes(siz.name)&getInputClass('size')}" 
             :key="siz.id" 
             class="mr-2 text-center w-16 border-green-400 mt-4 border-2 hover:bg-green-400 
             hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition
              hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer">
             {{siz.name}}
             </option>
             </select>
            </div>

          <!-- Edit Topping ** (Almond,Brownie,Chocolate ball,Chocolate chip,Cookie crumble,Oreo,Rainbow,Sticky rice) -->
          <p class="my-2 text-black">
            Topping :
          </p>
          <div  v-for="top in toppingArray" :key="top.id">
            <div class=" w-32 m-2 mr-4">
          <img :src="top.image" /></div>
            </div>
          </div>
          
          <div class="text-pink-400 flex flex-row -mt-2 ">
            <select  v-if="isEdit" name="topping" id="topping" 
            v-model="toppingEnter">
                <option v-for="top in toppingArray" value="top.name" id="topping" name="toppinglist" 
               @click="selectTopping(top.name)"
                :class="{  'bg-pink-400 text-white': 
                formElements.topping.value.includes(top.name)}"
                :key="top.id"  @keyup="onFormChange($event)"
                class="mr-2 text-center w-36 border-pink-400 mt-4 border-2 hover:bg-pink-400 
                hover:text-white font-bold  py-0.5 px-auto rounded focus:ring transform transition
                 hover:scale-105
                duration-300 ease-in-out btn btn-primary cursor-pointer"> {{top.name}}
              
           <!--     <div class="w-11/12" v-bind:style="{ 'background-image':'url('+ 
                require('../assets/' + top.image) + ')' }">
                </div>
              -->
             
                </option>
           </select>
          <!-- Edit Last day of sale ** -->
          <p class="my-2 text-black">
            Last day of sale :
            <input
              class="shadow text-left justify-start appearance-none border rounded w-56 h-4 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="date"
              placeholder="input last day of sale..."
              v-if="isEdit"
              id="lastday"
              name="lastday"
              v-model="lastdayEnter"
            />
            <span v-else class="text-pink-500"> {{ icecream.lastday }} </span>
          </p>

        </div>
      </div>

      <!-- button save, cancel -->
      <div class=" flex flex-row-reverse mr-4">
        <button
          class="justify-center btn btn-primary mt-2 bg-gradient-to-b from-green-500 
    to-green-800 hover:from-blue-500 hover:to-green-500 text-white font-bold 
    py-2 px-4 rounded focus:ring transform transition hover:scale-105 
    duration-300 ease-in-out "
          type="button "
          @click.prevent="submit(icecream)"
        >
          Save
        </button>

        
        <button
          class="mx-4 justify-center btn btn-primary mt-2 bg-gradient-to-b from-blue-500 
  to-blue-800 hover:from-pink-500 hover:to-blue-500 text-white font-bold 
  py-2 px-4 rounded focus:ring transform transition hover:scale-105 
  duration-300 ease-in-out "
          type="button "
          @click="edit" >
          Edit
        </button>
        



      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameEnter: "",
      describeEnter: "",
      priceEnter: "",
      lastdayEnter: "",
      isEdit: false,
      brandEnter: null,
      sizeEnter: "",
      toppingEnter: " "
    };
  },
  props: ["icecream"],
  methods: {
    close() {
      this.$emit("close-popup", false);
      this.isEdit = false;
    },
    edit() {
      this.isEdit = true;
      this.nameEnter = this.icecream.name;
      this.describeEnter = this.icecream.describe;
      this.priceEnter = this.icecream.price;
      this.brandEnter = this.icecream.brand;
      this.sizeEnter = this.icecream.size;
      this.toppingEnter = this.icecream.topping;
      this.lastdayEnter = this.icecream.lastday;
   
    },
    submit(icecream) {
      if (this.isEdit) {
        this.$emit("icecream-submit", {
          image: icecream.image,
          name: this.nameEnter,
          describe: this.describeEnter,
         price: this.priceEnter,
          brand: this.brandEnter,
          size: this.sizeEnter,
          topping: this.toppingEnter,
          lastday: this.this.lastdayEnter,         
           id: icecream.id,
        });
        this.close();
      }
    },
  },
};
</script>
