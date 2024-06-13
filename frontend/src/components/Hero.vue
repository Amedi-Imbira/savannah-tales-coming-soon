<template>
  <section class="hero is-light is-medium has-gradient">
    <div class="container">
      <div class="hero-body">
        <p class="title">Educate.</p>
        <p class="title">Inspire.</p>
        <p class="title">Discover East Africa.</p>
        <form>
          <p class="mb-4">
            Save your favorite things to stack and share them easily with anyone
          </p>
          <div class="field has-addons">
            <div class="control">
              <input type="text" class="input" placeholder="name@domain.com" />
            </div>

            <div class="control">
              <button class="button is-primary">Join Waitlist</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.has-gradient {
  background: linear-gradient(to right, #f5f5f5 55%, rgba(255, 255, 255, 0)),
    url("src/assets/thomas.jpg") right center no-repeat;
  background-size: cover;
  background-position: center center center;
}
</style>
