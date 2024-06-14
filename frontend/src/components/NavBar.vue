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
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item">
        <img src="../assets/logoo.png" />
        <span class="title is-4">Savannah Tales</span>
      </RouterLink>
      <span class="tag is-danger mt-4">Coming Soon</span>

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
      <div class="navbar-end">
        <RouterLink to="/about" class="navbar-item">About Us</RouterLink>
        <div class="navbar-item">
          <div class="buttons">
            <RouterLink to="#" class="button is-text">
              <font-awesome-icon icon="fa-brands fa-facebook" />
            </RouterLink>
            <RouterLink to="#" class="button is-text">
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </RouterLink>
            <RouterLink to="#" class="button is-text">
              <font-awesome-icon icon="fa-brands fa-twitter" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
