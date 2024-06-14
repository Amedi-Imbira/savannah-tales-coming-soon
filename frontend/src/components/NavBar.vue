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
    }
  }
}
</script>

<template>
  <nav class="navbar is-spaced has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="" class="navbar-item">
        <img src="../assets/logoo.png" />
        <span class="title is-4">Savannah Tales</span>
      </a>

      <a 
        role="button" 
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
    <div class="navbar-menu" :class="{'is-active': isActive}">
      <div class="navbar-start">
            <a href="" class="navbar-item">About Us</a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a href="" class="button is-light">facebook</a>
            <a href="" class="button is-light">linkedin</a>
            <a href="" class="button is-light">twitter</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
