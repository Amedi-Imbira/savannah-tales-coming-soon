<script>
import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import AboutUs from "@/components/AboutUs.vue";

export default {
  components: {
    NavBar,
    Hero,
    AboutUs,
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
            <span class="navbar-burger" data-target="navbarMenuHeroB">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-end">

              <a href="#" class="navbar-item">About Us</a>
              <div class="buttons">
                <a class="navbar-item button is-outlined">
                  <font-awesome-icon icon="fa-brands fa-linkedin" /> LinkedIn
                </a>
                <a class="navbar-item button is-outlined">
                  <font-awesome-icon icon="fa-brands fa-twitter" /> Twitter</a
                >
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="container">
        <p class="title is-2">Divine wisdom from the elders await</p>
        <p class="subtitle">
          Elevate your essay writing game with these AI prompts from Clickup.
          Craft compelling <br />
          arguments
        </p>
        <div class="container" style="width: 40%; margin-left: 0">
          <form>
            <div class="field">
              <div class="control">
                <input
                  type="text"
                  class="input is-medium mb-4"
                  placeholder="Enter your email"
                />
                <button class="button is-primary is-large">
                  Join Waitlist
                </button>
              </div>
            </div>
          </form>
        </div>
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
