<template>
  <section class="hero is-light is-fullheight-with-navbar has-gradient">
    <div class="hero-body">
      <div class="container">
        <p class="title">Educate.</p>
        <p class="title">Inspire.</p>
        <p class="title">Discover East Africa.</p>
        <form>
          <p class="mb-4">
            A microblogging platform of the people of the soil from Savannah
          </p>
          <div class="field has-addons">
            <div class="control">
              <input
                type="text"
                class="input is-medium"
                placeholder="name@domain.com"
              />
            </div>
            <div class="control">
              <button class="button is-primary is-medium">Join Waitlist</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.has-gradient {
  background: linear-gradient(to right, #f5f5f5 40%, rgba(255, 255, 255, 0)),
    url("src/assets/thomas.jpg") right center no-repeat;
  background-size: cover;
  background-position: center center center;
}
</style>
