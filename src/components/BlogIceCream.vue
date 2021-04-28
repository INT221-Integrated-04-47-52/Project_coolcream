<template>
  <!-- show product with img, name, price -->
  <div class="bg-white hover:bg-blue-100 m-12 h-96 w-96 shadow-lg rounded-lg pb-4">
    <img
      class="ml-12 w-72 h-72 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
      :src="icecream.image"
    />

    <span class="text-gray-600 font-sans text-xl py-2 font-bold mb-2">{{
      icecream.name
    }}</span>

    <span class="text-gray-600 font-sans text-xl py-2 font-bold mb-2">{{
      icecream.describe
    }}</span>
    <span class="text-gray-600 font-sans text-xl py-2 font-bold mb-2">{{
      icecream.price
    }}</span>
    <span class="text-gray-600 font-sans text-xl py-2 font-bold mb-2">{{
      icecream.brand
    }}</span>
    <span class="text-gray-600 font-sans text-xl py-2 font-bold mb-2">{{
      icecream.size
    }}</span>
    <span class="text-gray-600 font-sans text-xl py-2 font-bold mb-2">{{
      icecream.topping
    }}</span>
    <span class="text-gray-600 font-sans text-xl py-2 font-bold mb-2">{{
      icecream.lastday
    }}</span>

    <!-- see more product button -->
    <button
      class="mt-2 ml-4 text-red-600 font-bold py-2 px-4 rounded hover:bg-red-600 hover:text-white"
      type="button "
      @click="toggleVisibility"
    >
      See More
    </button>

    <!-- delete product button -->
    <button
      class="mt-2 ml-4 text-blue-900 font-bold py-2 px-4 rounded hover:bg-blue-900 hover:text-white"
      @click="deleteList(icecream.id)"
      type="button"
    >
      Delete
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  name: "BlogIcecream",
  props: ["icecream"],
  icecreams: Array,

  methods: {
    deleteList(id) {
      this.$emit("delete", id);
    },
    toggleVisibility() {
      this.$emit("icecream-popup", this.icecreams);
    },
  },
};
</script>
