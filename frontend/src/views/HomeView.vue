<script>
import NavBar from '@/components/NavBar.vue'
import Hero from '@/components/Hero.vue'

export default {
  components: {
    NavBar,
    Hero,
  }
}
</script>

<template>
  <section class="hero is-success is-large">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="https://bulma.io/assets/images/bulma-type-white.png" alt="Logo" />
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
              <a class="navbar-item is-active"> Home </a>
              <a class="navbar-item"> Examples </a>
              <a class="navbar-item"> Documentation </a>
              <span class="navbar-item">
                <a class="button is-info is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">Title</p>
        <p class="subtitle">Subtitle</p>
      </div>
    </div>
  </section>
</template>