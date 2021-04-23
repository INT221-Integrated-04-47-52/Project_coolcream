<template>
  <div class="flex flex-row flex-wrap">
    <div v-for="icecream in icecreams" :key="icecream.id">
      <!-- componet BlogIceCream -->
      <blog-ice-cream
        @icecream-popup="toggleVisibility"
        :icecream="icecream"
        @delete="deleteIcecream"
      >
      </blog-ice-cream>
    </div>
  </div>

  <div class="details" v-show="isVisible">
    <popup
      @icecream-submit="edit"
      @close-popup="closePopup"
      :icecream="icecreamPopup"
    ></popup>
  </div>

</template>

<script>
import BlogIceCream from "./BlogIceCream.vue";
import Popup from "./Popup.vue";
export default {
  components: {
    BlogIceCream,
    Popup,
  },
  data() {
    return {
      icecreamPopup: [],
      isVisible: false,
      ifEdit: false,
      icecream: [],
      url: "http://localhost:4003/icecream",
    };
  },
  methods: {
    async edit(icecream) {
      try {
        const res = await fetch(`${this.url}/${icecream.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            image: icecream.image,
            name: icecream.name,
            price: icecream.price,
            describe: icecream.describe,
          }),
        });
        const data = await res.json();
        this.icecreams = this.icecreams.map((f) =>
          f.id === data.id
            ? {
                ...f,
                image: data.image,
                username: data.username,
                email: data.email,
                describe: data.describe,
              }
            : f
        );
      } catch (error) {
        console.log(`Could not edit! ${error}`);
      }
    },
    closePopup(fals) {
      this.isVisible = fals;
      this.icecreamPopup = " ";
    },
    toggleVisibility(icecream) {
      this.isVisible = true;
      this.icecreamPopup = icecream;
    },
    async deleteIcecream(payload) {
      try {
        await fetch(`${this.url}/${payload}`, {
          method: "DELETE",
        });
        this.icecreams = this.icecreams.filter((icecream) => {
          return icecream.id !== payload;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchIcecreams() {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.icecreams = await this.fetchIcecreams();
  },
};
</script>
