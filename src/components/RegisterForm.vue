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
<<<<<<< HEAD
              >price</label>
=======
              >Price</label
            >
>>>>>>> 1e95b4bfd14005d4add7020acf07dddda54e13bb
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
            <div class="text-blue-600 flex flex-row -mt-2">
              <option
                value="S"
                @click="selectSize('S')"
                :class="{
                  'bg-blue-600 text-white': formElements.size.value.includes(
                    'S'
                  ),
                }"
                class="mr-2 text-center w-16 border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer"
              >
                S
              </option>
              <option
                value="M"
                @click="selectSize('M')"
                :class="{
                  'bg-blue-600 text-white': formElements.size.value.includes(
                    'M'
                  ),
                }"
                class="mr-2 w-16 text-center border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer"
              >
                M
              </option>
              <option
                value="L"
                @click="selectSize('L')"
                :class="{
                  'bg-blue-600 text-white': formElements.size.value.includes(
                    'L'
                  ),
                }"
                class="mr-2 w-16 text-center border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer"
              >
                L
              </option>
              <option
                value="XL"
                @click="selectSize('XL')"
                :class="{
                  'bg-blue-600 text-white': formElements.size.value.includes(
                    'XL'
                  ),
                }"
                class="mr-2 w-16 text-center border-blue-600 mt-4 border-2 hover:bg-blue-600 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer"
              >
                XL
              </option>
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

          <!--  <select
              class="shadow text-left justify-start appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              :class="getInputClass('topping')"
              id="topping"
              topping="topping"
              v-model="formElements.topping.value"
              @keyup="onFormChange($event)">
             
            </select>-->

          <div class="form-group">
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="topping"
            >
              Topping
            </label>
            <div class="space-x-2">
              <input
                type="checkbox"
                name="almond"
                value="almond"
                v-model="formElements.topping.value"
              />
              <label for="almond">Almond</label>
              <input
                type="checkbox"
                name="brownie"
                value="brownie"
                v-model="formElements.topping.value"
              />
              <label for="chocolateball">Brownie</label>
              <input
                type="checkbox"
                name="chocolatechip"
                value="chocolatechip"
                v-model="formElements.topping.value"
              />
              <label for="chocolateball">Chocolate Chip</label>
              <input
                type="checkbox"
                name="chocolateball"
                value="chocolateball"
                v-model="formElements.topping.value"
              />
              <label for="chocolateball">Chocolate Ball</label>
              <input
                type="checkbox"
                name="cookiecrumble"
                value="cookiecrumble"
                v-model="formElements.topping.value"
              />
              <label for="chocolateball">Cookie Crumble</label>
              <input
                type="checkbox"
                name="oreo"
                value="oreo"
                v-model="formElements.topping.value"
              />
              <label for="chocolateball">Oreo</label>
              <input
                type="checkbox"
                name="rainbow"
                value="rainbow"
                v-model="formElements.topping.value"
              />
              <label for="chocolateball">Rainbow</label>
              <input
                type="checkbox"
                name="stickyrice"
                value="stickyrice"
                v-model="formElements.topping.value"
              />
              <label for="chocolateball">Sticky Rice</label>
            </div>
            <p>{{ formElements.topping.value }}</p>
          </div>

          <div class="form-group">
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="topping"
            >
              Last day of sale
            </label>
            <input
              type="date"
              name="day"
              v-model="formElements.lastday.value"
            />
          </div>
          <div>{{ formElements.lastday.value }}</div>
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
            minLength: 1,
            maxLength: 50,
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
          toppinglists: [
            { id: 3001, name: "Almond" },
            { id: 3002, name: "Brownie" },
            { id: 3003, name: "Chocolate ball" },
            { id: 3004, name: "Chocolate chip" },
            { id: 3005, name: "Cookie crumble" },
            { id: 3006, name: "Oreo" },
            { id: 3007, name: "Rainbow" },
            { id: 3007, name: "Sticky rice" },
          ],
          validator: {
            required: true,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        lastday: {
          type: "text",
          value: "",
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
