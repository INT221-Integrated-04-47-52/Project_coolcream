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
              >describe</label
            >
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
              >price</label
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

          <div class="form-group">
            <label class="text-left block text-blue-600 py-2 font-bold mt-2 items-start" 
              htmlFor="brand">brand</label>
            <div>
              <!-- <select name="brand" id="brand" v-model="brandEnter" class="bg-gray-100 px-4 py-2 mb-4">
                <option v-for="formElements.brandlists.brand in formElements.brandlists" >
                  {{ formElements.brandlists.brand }}
                </option>
              </select> -->
              <!-- <select name="brand" id="brand" v-model="brandEnter" class="bg-gray-100 px-4 py-2 mb-4">
                <option v-for="brand in brandlists">
                  {{ formElements.brandlists.brand }}
                </option>s
              </select> -->
              
              <!-- <div class="flex flex-col col-span-2">
                            <label for="chosensubject" class="text-sm leading-7 text-gray-600">Subject</label>
                            <select id="chosensubject" v-model="chosensubject" name="chosensubject"
                                class="bg-gray-100 px-4 py-2 mb-4">
                                <option v-for="subject in subject_lists" :value="subject.subject_id">
                                    {{subject.subject_name}}
                                </option>
                        </div> -->
              
              <!-- <select v-model="otherfruit"
                      <option v-for="fruit in fruitlists" v-bind:value="fruit.id">
                        {{ fruit.fruit}}
                      <option>
                    </select> -->

              <select name="icecreams" id="icecreams">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <input
              class="shadow text-left justify-start appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="text"
              placeholder="input your brand.."
              :class="getInputClass('brand')"
              id="brand"
              brand="brand"
              v-model="formElements.brand.value"
              @keyup="onFormChange($event)"
            />
            <div class="invalid-feedback">
              {{ getErrorMessage("brand") }}
            </div>
          </div>
          <div class="form-group">
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="size"
            >
              size</label
            >
            <input
              class="shadow text-left justify-start appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="text"
              placeholder="input your size.."
              :class="getInputClass('size')"
              id="size"
              size="size"
              v-model="formElements.size.value"
              @keyup="onFormChange($event)"
            />
            <div class="invalid-feedback">
              {{ getErrorMessage("size") }}
            </div>
          </div>
          <div class="form-group">
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="topping"
            >
              topping</label
            >
            <input
              class="shadow text-left justify-start appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="text"
              placeholder="input your topping.."
              :class="getInputClass('topping')"
              id="topping"
              topping="topping"
              v-model="formElements.topping.value"
              @keyup="onFormChange($event)"
            />
            <div class="invalid-feedback">
              {{ getErrorMessage("topping") }}
            </div>
          </div>
          <div>
            <label
              class="text-left block mt-4 text-blue-600 font-bold items-start"
              htmlFor="image"
              >Image</label
            >

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
      // brandEnter: null,
      //   brandlists: [
      //     { id: "brand1", brand: "Baskin Robbins" },
      //     { id: "brand2", brand: "Ben&Jerry’s" },
      //     { id: "brand3", brand: "Dairy Queen" },
      //     { id: "brand4", brand: "Suzukien" },
      //     { id: "brand5", brand: "Swensens" },
      //     { id: "brand6", brand: "Umm Milk" }
      //   ],
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
          value: null,
          validator: {
            required: true,
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        size: {
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
        topping: {
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
      },
    };
  },

  methods: {
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
