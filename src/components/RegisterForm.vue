<template>
  <div>
    <div
      class="bg-white opacity-80 text-left w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label
          class="block text-center text-black text-xl py-2 font-bold mb-2"
          for="priceaddress">
          Add Ice Cream for sale this website!
        </label>

        <!-- Add product form -->
        <form @submit="onFormSubmit">
          <div class="form-group">
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="name"
            >
              Name</label
            >
            <input
              class="shadow text-left justify-start appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="text"
              placeholder="input your icecream name.."
              :class="getInputClass('name')"
              id="name"
              name="name"
              v-model="formElements.name.value"
              @keyup="onFormChange($event)"
            /> <div>{{formElements.name.value}}</div>
            <div class="invalid-feedback">
              {{ getErrorMessage("name") }}
            </div>
          </div>

          <div class="form-group">
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="describe"
              >Describe
            </label>
            <textarea
              rows="4"
              cols="50"
              maxlength="100"
              class="shadow text-left justify-start appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="text"
              placeholder="input your describe.."
              :class="getInputClass('describe')"
              id="describe"
              name="describe"
              v-model="formElements.describe.value"
              @keyup="onFormChange($event)"
            >
            </textarea>
            <div>{{formElements.describe.value}}</div>
            <div class="invalid-feedback">
              {{ getErrorMessage("describe") }}
            </div>
          </div>

          <div class="form-group">
            <label
              class="text-left block mt-4 text-blue-600 font-bold items-start"
              htmlFor="price">Price</label>
            <input 
              class="mt-2 shadow text-left appearance-none border rounded w-2/11 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out invalid-feedback"
              type="price"
              :class="getInputClass('price')"
              id="price"
              name="price"
              v-model="formElements.price.value"
              @keyup="onFormChange($event)"
              placeholder="Input your price.."
            />
            <span class="text-black font-normal ml-2"> Baht </span>
          {{formElements.price.value}}
            <div>
              {{ getErrorMessage("price") }}
            </div>
          </div>

          <!-- Brand -->
          <div class="form-group">
            <label
              class="w-2/11 text-left block text-blue-600 py-2 
              font-bold mt-2 items-start"
              htmlFor="brand"  >Brand</label>
  
              <div>
               
                <select class="border-2 w-2/12 p-2 transform transition 
                duration-300 ease-in-out" id="brand" name="banlist" 
                v-model="formElements.brand.value" :class="getInputClass('brand')"
              @change="sendBrand()"> 
              <option v-for="ban in brandArray" :key="ban.id" >
                    {{ban.name}}
                  </option>
                </select>
           
              </div>
              <div>
            </div>
         
            

            <div class="invalid-feedback">
              {{ getErrorMessage("brand") }}
            </div>
          </div>

          <!-- Size -->
          <div class="form-group">
            <div class="text-blue-600 flex flex-row -mt-2">
              <label
              class="text-left block text-blue-600 pt-2 font-bold mt-2 items-start"
              htmlFor="size">Size</label >
          </div>
          <div class="text-green-600 flex flex-row -mt-2">
           
                <option v-for="siz in sizeArray" value="siz.name" id="size" name="sizelist" 
               @click="selectSize(siz.name)"   
                :class="{  'bg-green-400 text-white': 
                formElements.size.value.includes(siz.name)}" 
                :key="siz.id"  @keyup="onFormChange($event)" 
                class="mr-2 text-center w-16 border-green-400 mt-4 border-2 hover:bg-green-400 
                hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition
                 hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer">
                {{siz.name}}
                </option>
               
                <div>{{ formElements.size.value }}</div>
 <!--&getInputClass('size')-->
          </div>
          
       
            <div class="invalid-feedback">
              {{ getErrorMessage("size") }}
            </div>
          </div>
          <!-- Topping -->
          <div class="form-group">
            <div class="text-blue-600 flex flex-row -mt-2">
              <label
              class="text-left block text-blue-600 pt-2 font-bold mt-2 items-start"
              htmlFor="size">Topping</label >
          </div>

        </div > <div class=" flex flex-row  w-50 " >
          <div  v-for="top in toppingArray" :key="top.id">
            <div class=" w-32 m-2 mr-4">
          <img :src="top.image" /></div>
            </div>
          </div>
          <div class="invalid-feedback">
            {{ getErrorMessage("size") }}
          </div>
          <div class="text-pink-400 flex flex-row -mt-2 ">
           
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
             
                </option><br>
           
             <!--   <div v-for="top in toppingArray" :key="top.id">
                  <p>{{ top.name }}</p>
                  <img :src="top.image" />
                </div>-->
                <div>{{ formElements.topping.value }}</div>
               
            </div>
          <div class="form-group">
           
            <label class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="topping"
            >
              Last day of sale
            </label>
            <input :class="getInputClass('lastday')" @keyup="onFormChange($event)"
            id="lastday"  
              type="date"  name="lastday"  v-model="formElements.lastday.value"
            />
          
          <div>{{ formElements.lastday.value }}</div>
        </div>
          <div>
            <label
              class="text-left block mt-4 text-blue-600 font-bold items-start"
              htmlFor="image"
              >Image
            </label>
            <input
              type="file"
              class="w-80 mt-4 focus:outline-none"
              @change="uploadImg"
            />
          </div>

          <div class="text-center">
            <button
              type="submit"
              class="mt-4 bg-gradient-to-r from-purple-800 
              to-green-500 hover:from-pink-500 hover:to-green-500 
              text-white font-bold py-2 px-4 rounded focus:ring transform 
              transition hover:scale-105 duration-300 ease-in-out btn 
              btn-primary"
              :disabled="!formValid"
            >
              Add Product
            </button>
          </div>
         
          <div>{{formElements.name.value}}</div>
          <div>{{formElements.describe.value}}</div>
          <div>{{formElements.price.value}}</div>
          <div>{{formElements.brand.value}}</div>
          <div>{{formElements.size.value}}</div>
          <div>{{formElements.topping.value}}</div>
          <div>{{formElements.lastday.value}}</div>
         
         </form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      siz: "",
      ban:"",
      top:"",
      sizeArray: "",
      brandArray: "",
      toppingArray: "",
      props: ["brandlists"],
      image: null,
      formElements: {
        name: {
          type: "text",
          value: null,
          validator: {
            required: true,
            minLength: 1,
            maxLength: 35,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        describe: {
          type: "text",
          value: null,
          validator: {
            required: true,
            minLength: 1,
            maxLength: 200,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        price: {
          type: "text",
          value: null,
          validator: {
            required: true,
            minLength: 1,
            maxLength: 4,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        brand: {
          type: "text",
          value: "",
          validator: {
            required: true,
            minLength: 1,
            maxLength: 200,
          
          },
          touched: false,
          error: { status: true, message: "" },
        },  
        size: {
          type: "text",
          value: [],
          validator: {
            required: true,
            minLength: 1,
            maxLength: 200,
           
          },
          touched: false,
          error: { status: true, message: "" },
        },
        topping: {
          type: "text",
          value: [],
          validator: {
            required: true,
            minLength: 1,
            maxLength: 200,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        lastday: {
          type: "text",
          value: "",
          validator: {
            required: true,
            minLength: 1,
            maxLength: 200,
          },
          touched: false,
          error: { status: true, message: "" },
        },
      },
    };
  },

  methods: {
   sendBrand(brand){
     console.log(brand)
     if(this.formElements.brand.value!=""){
      this.formElements.brand.error.status = false
     }
   },
    selectTopping(topping) {
      console.log(topping)
      if (this.formElements.topping.value.includes(topping)) {
        this.formElements.topping.value = this.formElements.topping.value.filter(
          (t) => t !== topping
        );
      } else {
        this.formElements.topping.value.push(topping);
      }
    },
    selectSize(size) {
      console.log(size)
      if (this.formElements.size.value.includes(size)) {
        this.formElements.size.value = this.formElements.size.value.filter(
          (s) => s !== size
        );
      } else {
        this.formElements.size.value.push(size);
      }
    },
    uploadImg(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        this.image = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFormChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      console.log(event + " " + event.target.name + " " +event.target.value)
      let updatedForm = { ...this.formElements };
  /*if(event.target.name == name || event.target.name == describe || event.target.name == price){
    */
      updatedForm[name].value = value;
      updatedForm[name].touched = true;
      const validatorObject = this.checkValidator(
        value, updatedForm[name].validator
      );
      updatedForm[name].error = {
        status: validatorObject.status,
        message: validatorObject.message,
      };
  /*}else if(event.target.name == size || event.target.name == topping || event.target.name == lastday){ 
  */
      let formStatus = true;
      for (let name in updatedForm) {
       
        if (updatedForm[name].validator.required === true) {
       console.log(name + " " + updatedForm[name].error.status)
          formStatus = !updatedForm[name].error.status && formStatus;
        }
      }
      this.formElements = updatedForm;
      this.formValid = formStatus;
    
    
},
    checkValidator(value, rule) {
      let valid = true;
      let message = "";
      if (value.trim().length === 0 && rule.required) {
        valid = false;
        message = "Required";
      }
      if (value.length < rule.minLength && valid) {
        valid = false;
        message = `Less than ${rule.minLength} Letters`;
      }
      if (value.length > rule.maxLength && valid) {
        valid = false;
        message = `More than ${rule.maxLength} Letters`;
      }
      if (rule.pattern === "price" && valid) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) === false) {
          valid = false;
          message = "Incorrect price";
        }
      }

      return { status: !valid, message: message };
    },
    getInputClass(name) {
      const elementErrorStatus = this.formElements[name].error.status;
      if (!this.formElements[name].touched) {
        return ["form-control"];
      } else {
        return elementErrorStatus && this.formElements[name].touched
          ? ["form-control", "is-invalid"]
          : ["form-control", "is-valid"];
      }
    },
    getErrorMessage(name) {
      return this.formElements[name].error.message;
    },
    async onFormSubmit() {
    
      const formData = {};
      for (let name in this.formElements) {
        formData[name] = this.formElements[name].value;
      }
   

      try {
        await fetch("http://localhost:3000/icecream", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            image: this.image,
            name: formData.name,
            price: formData.price,
            describe: formData.describe,
            brand: formData.brand,
            size: formData.size,
            topping: formData.topping,
          }),
        });
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
      

      //{name: "efefefefef", describe: "efeffff",
      //price: "pinmasa_kushina@hotmail.com"}
    }, 
  async fetchSize() {
      const res = await fetch('http://localhost:3000/size') 
      const data = await res.json() 
      return data
    },
    async fetchBrand() {
      const res = await fetch('http://localhost:3000/brand') 
      const data = await res.json() 
      return data
    },
    async fetchTopping() {
      const res = await fetch('http://localhost:3000/topping') 
      const data = await res.json() 
      return data
    },

  },
   async created() {
      this.sizeArray = await this.fetchSize() 
      this.brandArray = await this.fetchBrand() 
      this.toppingArray = await this.fetchTopping()
  },
};
</script>


