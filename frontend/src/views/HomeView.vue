<script>
import axios from "axios";

import AboutUs from "@/components/AboutUs.vue";

export default {
  components: {
    AboutUs,
  },
  data() {
    return {
      email: "",
      isActive: false,
    };
  },
  methods: {
    async submitEmail() {
      try {
        const response = await axios.post("http://localhost:5000/api/posts", {
          email: this.email,
        });
        console.log("Response: ", response.data);
        alert("Email added to waitlist successfully!");
        this.email = "";
      } catch (error) {
        console.error("Error adding email to waitlist: ", error);
        alert("Failed to add email to waitlist. Please try again");
      }
    },

    displayMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<template>
  <section class="hero is-medium spacer layer1">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img
                src="../assets/all-assets-v1/logo/brand_logo.png"
                alt="Logo"
              />
              <strong>Savannah Tales </strong>
              <span class="tag is-danger ml-2"> Coming soon</span>
            </a>
            <span
              class="navbar-burger"
              :class="{ 'is-active': this.isActive }"
              data-target="navbarMenuHeroB"
              @click="displayMenu"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroB" class="navbar-menu" :class="{'is-active': isActive}">
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="navbar-item is-primary">
                    <font-awesome-icon icon="fa-brands fa-linkedin" /> LinkedIn
                  </a>
                  <a class="navbar-item">
                    <font-awesome-icon icon="fa-brands fa-twitter" /> Twitter</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="content">
        <div class="block">
          <p class="title is-2">Divine wisdom from the elders await</p>
        </div>

        <div class="block">
          <p class="subtitle">
            A sacred place to read, write and deepen <br /> your understanding of the Savannah
          </p>
        </div>

        <form
          class="block"
          style="width: 40%; margin-left: 0"
          @submit.prevent="submitEmail"
        >
        <div class="block">
          skldfjskldfj 
        </div>
          <div class="field">
            <div class="control">
              <input
                v-model="email"
                type="text"
                class="input mb-4"
                placeholder="Enter your email"
              />
              <button type="submit" class="button is-primary">
                Join Our Waitlist
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>

  <AboutUs />
</template>

<style scoped>
.spacer {
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.layer1 {
  background-image: url("../assets/wave-haikei.svg");
}
</style>
