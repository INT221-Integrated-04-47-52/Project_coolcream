<template>
  <div>
    <div
      class="bg-white text-left w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label
          class="block text-center text-black text-xl py-2 font-bold mb-2"
          for="priceaddress"
        >
          Add Ice Cream for sale this website.!
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
            />
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
            <div class="invalid-feedback">
              {{ getErrorMessage("describe") }}
            </div>
          </div>

          <div class="form-group">
            <label
              class="text-left block mt-4 text-blue-600 font-bold items-start"
              htmlFor="price"
              >Price</label
            >
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
            <div>
              {{ getErrorMessage("price") }}
            </div>
          </div>

          <!-- Brand -->
          <div class="form-group">
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="brand"
              >Brand</label
            >
            <div>
              <select
                name="icecreams"
                class="border-2 p-2 transform transition duration-300 ease-in-out"
                :class="getInputClass('brand')"
                id="brand"
                brand="brand"
                v-model="formElements.brand.value"
                @keyup="onFormChange($event)"
                required
              >
                <option value="" disabled selected>Select your brand</option>
                <option value="baskinrobbins">Baskin Robbins</option>
                <option value="benjerry">Ben&Jerry's</option>
                <option value="dairyqueen">Dairy Queen</option>
                <option value="suzukien">Suzukien</option>
                <option value="swensens">Swensens</option>
                <option value="ummmilk">Umm Milk</option>
              </select>
            </div>
            <div class="invalid-feedback">
              {{ getErrorMessage("brand") }}
            </div>
          </div>

          <!-- Size -->
          <div class="form-group">
            <label
              class="text-left block text-blue-600 pt-2 font-bold mt-2 items-start"
              htmlFor="size"
              >Size</label
            >
            <div class=" text-blue-600 flex flex-row -mt-2">
            <option value="S" @click="selectSize('S')" :class="{'bg-blue-600 text-white':formElements.size.value.includes('S')}"  class="mr-2 text-center w-16 border-blue-600 mt-4 border-2  hover:bg-blue-600  hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary">S</option>
            <option value="M" @click="selectSize('M')" :class="{'bg-blue-600 text-white':formElements.size.value.includes('M')}"  class="mr-2 w-16 text-center border-blue-600 mt-4 border-2  hover:bg-blue-600  hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary">M</option> 
            <option value="L" @click="selectSize('X')" :class="{'bg-blue-600 text-white':formElements.size.value.includes('L')}"  class="mr-2 w-16 text-center border-blue-600 mt-4 border-2  hover:bg-blue-600  hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary">X</option>
            <option value="XL" @click="selectSize('XL')" :class="{'bg-blue-600 text-white':formElements.size.value.includes('XL')}"  class="mr-2 w-16 text-center border-blue-600 mt-4 border-2  hover:bg-blue-600  hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary">XL</option>
          </div>
             <div class="invalid-feedback">
              {{ getErrorMessage("size") }}
            </div>
            
        <!--    <select
              class="text-blue-600 flex flex-row -mt-2"
              :class="getInputClass('size')"
              size="size"
              id="size"
              @keyup="onFormChange($event)" >
              <input
                
                @click="selectSize('S')"
                :class="{
                  'bg-blue-600 text-white': formElements.size.value == 'S',
                }"
                value="S"
                class="mr-2 text-center w-16 border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
              />

              <input
                
                @click="selectSize('M')"
                :class="{
                  'bg-blue-600 text-white': formElements.size.value == 'M',
                }"
                value="M"
                class="mr-2 w-16 text-center border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
              />

              <input
                v-model="formElements.size.value"
                @click="selectSize('L')"
                :class="{
                  'bg-blue-600 text-white': formElements.size.value == 'L',
                }"
                value="L"
                class="mr-2 text-center w-16 border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
              />

              <input
                v-model="formElements.size.value"
                @click="selectSize('XL')"
                :class="{
                  'bg-blue-600 text-white': formElements.size.value == 'XL',
                }"
                value="XL"
                class="mr-2 w-16 text-center border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
              />
              </select>
              -->
            <div>{{ formElements.size.value }}</div>
            <div class="invalid-feedback">
              {{ getErrorMessage("size") }}
            </div>
          </div>

          <!-- Topping -->
          <div class="form-group">
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="topping"
            >
              Topping
            </label>

            <select
              class="shadow text-left justify-start appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              :class="getInputClass('topping')"
              id="topping"
              topping="topping"
              v-model="formElements.topping.value"
              @keyup="onFormChange($event)"
            >
              <option
                @click="selectTopping('almond')"
                :class="{
                  'bg-blue-600 text-white':
                    formElements.topping.value == 'almond',
                }"
                value="topping"
                class="mr-2 text-center w-16 border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
              >
                Almond
              </option>
              <option
                @click="selectTopping('brownie')"
                :class="{
                  'bg-blue-600 text-white':
                    formElements.topping.value == 'brownie',
                }"
                value="topping"
                class="mr-2 w-16 text-center border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
              >
                Brownie
              </option>
              <option
                @click="selectTopping('chocolateball')"
                :class="{
                  'bg-blue-600 text-white':
                    formElements.topping.value == 'chocolateball',
                }"
                value="topping"
                class="mr-2 w-16 text-center border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
              >
                Chocolate Ball
              </option>
              <option
                @click="selectTopping('chocolatechip')"
                :class="{
                  'bg-blue-600 text-white':
                    formElements.topping.value == 'chocolatechip',
                }"
                value="topping"
                class="mr-2 w-16 text-center border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
              >
                Chocolate chip
              </option>
              <option
                @click="selectTopping('cookiecrumble')"
                :class="{
                  'bg-blue-600 text-white':
                    formElements.topping.value == 'cookiecrumble',
                }"
                value="topping"
                class="mr-2 w-16 text-center border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
              >
                Cookie Crumble
              </option>
              <option
                @click="selectTopping('oreo')"
                :class="{
                  'bg-blue-600 text-white':
                    formElements.topping.value == 'oreo',
                }"
                value="topping"
                class="mr-2 w-16 text-center border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
              >
                Oreo
              </option>
              <option
                @click="selectTopping('rainbow')"
                :class="{
                  'bg-blue-600 text-white':
                    formElements.topping.value == 'rainbow',
                }"
                value="topping"
                class="mr-2 w-16 text-center border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
              >
                Rainbow
              </option>
              <option
                @click="selectTopping('stickyrice')"
                :class="{
                  'bg-blue-600 text-white':
                    formElements.topping.value == 'stickyrice',
                }"
                value="topping"
                class="mr-2 w-16 text-center border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
              >
                Sticky Rice
              </option>
            </select>
          </div>
          <div class="invalid-feedback">
            {{ getErrorMessage("topping") }}
          </div>
          <div class="mt-2 flex space-x-2">
            <img
              src="../assets/topping-almond.jpeg"
              alt="almond"
              class="w-14 h-14 rounded-full border shadow"
            />
            <img
              src="../assets/topping-almond.jpeg"
              alt="almond"
              class="w-14 h-14 rounded-full border shadow"
            />
            <img
              src="../assets/topping-almond.jpeg"
              alt="almond"
              class="w-14 h-14 rounded-full border shadow"
            />
            <img
              src="../assets/topping-almond.jpeg"
              alt="almond"
              class="w-14 h-14 rounded-full border shadow"
            />
            <img
              src="../assets/topping-almond.jpeg"
              alt="almond"
              class="w-14 h-14 rounded-full border shadow"
            />
            <img
              src="../assets/topping-almond.jpeg"
              alt="almond"
              class="w-14 h-14 rounded-full border shadow"
            />
            <img
              src="../assets/topping-almond.jpeg"
              alt="almond"
              class="w-14 h-14 rounded-full border shadow"
            />
          </div>

          <!-- <div class="flex">
              <label class="flex">
              <input v-model="formElements.topping.value" name="almond" value="almond">
              <img src="../assets/topping-almond.jpeg" class="w-14 h-14 rounded-full border shadow">
              </label>
              <label class="flex">
              <input v-model="formElements.topping.value" name="chocolateball" value="chocolateball">
              <img src="../assets/topping-almond.jpeg" class="w-14 h-14 rounded-full border shadow">
              </label>
            </div>
            <br>
            <span>Selected: {{ formElements.topping.value }}</span> -->

          <div>
            <!-- <div class="radio-inline space-x-2">
              <input
                type="button"
                class="w-16 text-center border-blue-600 border hover:bg-blue-600 hover:text-white py-0.5 px-4 rounded"
                name="sizes"
                value="s"
              />
              <input
                type="button"
                class="w-16 text-center border-blue-600 border hover:bg-blue-600 hover:text-white py-0.5 px-4 rounded"
                name="sizem"
                value="m"
              />
              <input
                type="button"
                class="w-16 text-center border-blue-600 border hover:bg-blue-600 hover:text-white py-0.5 px-4 rounded"
                name="sizel"
                value="l"
              />
              <input
                type="button"
                class="w-16 text-center border-blue-600 border hover:bg-blue-600 hover:text-white py-0.5 px-4 rounded"
                name="sizexl"
                value="xl"
              />
            </div> -->
            
            <!-- <input type="button" v-model="formElements.size.value" name="sizes">
            <label for="sizes">S</label>
            <input type="button" v-model="formElements.size.value" name="sizem">
            <label for="sizem">M</label>
            <p>{{ formElements.size.value }}</p>  -->
          </div>


          <!-- <br>  
            <input type="checkbox" id="jack" value="Jack" v-model="formElements.topping.value">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="formElements.topping.value">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="formElements.topping.value">
            <label for="mike">Mike</label>
            <br>
            <span>Checked names: {{ formElements.topping.value }}</span> -->

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
              class="mt-4 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
              :disabled="!formValid"
            >
              Add Product
            </button>
          </div>
          <!-- </div> -->
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
      props: ["brandlists"],
      image: null,
      formElements: {
        name: {
          type: "text",
          value: null,
          validator: {
            required: true,
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        describe: {
          type: "text",
          value: null,
          validator: {
            required: true,
            minLength: 5,
            maxLength: 300,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        price: {
          type: "text",
          value: null,
          validator: {
            required: true,
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        brand: {
          type: "text",
          value: "",
          validator: {
            required: true,
            value: "",
          },
          touched: false,
          error: { status: true, message: "" },
        },
        size: {
          type: "text",
          value: [],
          validator: {
            required: true,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        topping: {
          type: "text",
          value: [],
          validator: {
            required: true,
          },
          touched: false,
          error: { status: true, message: "" },
        },
      },
    };
  },

  methods: {
    selectTopping(topping) {
      this.formElements.topping.value = topping;
    },
    selectSize(size) { 
      if(this.formElements.size.value.includes(size)){
      this.formElements.size.value = this.formElements.size.value.filter(s=> s!==size );
    } else{
      this.formElements.size.value.push(size)
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
      let updatedForm = { ...this.formElements };
      updatedForm[name].value = value;
      updatedForm[name].touched = true;
      const validatorObject = this.checkValidator(
        value,
        updatedForm[name].validator
      );
      updatedForm[name].error = {
        status: validatorObject.status,
        message: validatorObject.message,
      };
      let formStatus = true;
      for (let name in updatedForm) {
        if (updatedForm[name].validator.required === true) {
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
      //console.log(formData);

      try {
        await fetch("http://localhost:3002/icecream", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            image: this.image,
            name: formData.name,
            price: formData.price,
            describe: formData.describe,
          }),
        });
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }

      //{name: "efefefefef", describe: "efeffff",
      //price: "pinmasa_kushina@hotmail.com"}
    },
  },
};
</script>

<style>
#login-logo {
  width: 100%;
  height: 200px;
  object-fit: scale-down;
}
.card {
  max-width: 450px;
}
</style>
