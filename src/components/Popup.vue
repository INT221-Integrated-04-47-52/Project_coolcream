<template>
  <div
    class=" flex justify-center items-center fixed z-50 inset-0 overflow-y-auto"
  >
    <div class="w-5/12 h-96 bg-white rounded-3xl shadow-lg ">
      <div
        class="cursor-pointer mt-4  mr-8  focus:ring transform transition hover:scale-105 
      duration-300 ease-out  mr-4 flex flex-row-reverse   "
        @click="close"
      >
        <span class="material-icons  ">
          close
        </span>
      </div>
      <img
        class=" ml-2 w-72 h-72 transform -rotate-6 transition 
  hover:scale-105 duration-700 ease-in-out hover:rotate-6"
        :src="icecream.image"
      />

      <!-- Edit Product -->
      <div class="w-96 flex flex-row-reverse ml-64 text-left">
        <div
          class=" ml-12 -mt-72  mr-16  ext-left block text-gray-800 
            py-2 font-bold mt-2 items-start"
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
          <select name="brand" id="brand" v-if="isEdit" v-model="brandEnter">
            <option value="baskinrobbins">Baskin Robbins</option>
            <option value="benjerry">Ben&Jerry’s</option>
            <option value="dairyqueen">Dairy Queen</option>
            <option value="suzukien">Suzukien</option>
            <option value="swensens">Swensens</option>
            <option value="ummmilk">Umm Milk</option>
          </select>
          <span v-else class="text-pink-500"> {{ icecream.brand }} </span>
          </p>

          <!-- Edit Size ** (S, M, X, XL) -->
          <p class="my-2 text-black">
            Size :
            <button>S</button>
            <button>M</button>
            <button>X</button>
            <button>XL</button>
          </p>

          <!-- Edit Topping ** (Almond,Brownie,Chocolate ball,Chocolate chip,Cookie crumble,Oreo,Rainbow,Sticky rice) -->
          <p class="my-2 text-black">
            Topping :
            
          </p>

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
      <div class=" flex flex-row-reverse mr-4">
        <button
          class="justify-center btn btn-primary mt-2 bg-gradient-to-b from-green-500 
    to-green-800 hover:from-blue-500 hover:to-green-500 text-white font-bold 
    py-2 px-4 rounded focus:ring transform transition hover:scale-105 
    duration-300 ease-in-out "
          type="button "
          @click.prevent="submit(icecream)"
        >
          Submit
        </button>

        <button
          class="mx-4 justify-center btn btn-primary mt-2 bg-gradient-to-b from-blue-500 
  to-blue-800 hover:from-pink-500 hover:to-blue-500 text-white font-bold 
  py-2 px-4 rounded focus:ring transform transition hover:scale-105 
  duration-300 ease-in-out "
          type="button "
          @click="edit"
        >
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
      // emailEnter: "",
      describeEnter: "",
      priceEnter: "",

      lastdayEnter: "",
      isEdit: false,
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
      this.emailEnter = this.icecream.email;
      this.describeEnter = this.icecream.describe;
    },
    submit(icecream) {
      if (this.isEdit) {
        this.$emit("icecream-submit", {
          image: icecream.image,
          name: this.nameEnter,
          email: this.emailEnter,
          describe: this.describeEnter,
          id: icecream.id,
        });
        this.close();
      }
    },
  },
};
</script>
