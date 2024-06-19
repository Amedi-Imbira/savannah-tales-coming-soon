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
      <div class="content">
        <div class="block">
          <p class="title is-2">Divine wisdom from the elders await</p>
        </div>

        <div class="block">
          <p class="subtitle">
            A sacred place to read, write and deepen your understanding
          </p>
        </div>

        <form class="block" style="width: 40%; margin-left: 0">
          <div class="field">
            <div class="control">
              <input
                type="text"
                class="input mb-4"
                placeholder="Enter your email"
              />
              <button class="button is-primary">
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
