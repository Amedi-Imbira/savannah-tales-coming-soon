<template>
  <nav class="navbar is-black is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="#" class="navbar-item">
        Savannah Tales
      </a>

      <a role="button" 
        class="navbar-burger"
        :class="{'is-active': isActive}" 
        aria-label="menu" 
        aria-expanded="false" 
        data-target="navbarBasicExample"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isActive}">
      <div class="navbar-start">
        <a href="#" class="navbar-item">Home</a>
        <a href="#" class="navbar-item">Our Cause</a>
      </div>
      <div class="navbar-end">
        <button 
          class="button is-primary is-outlined"
        >Join Waitlist</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false, 
    }
  },

  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },

  }
}
</script>


