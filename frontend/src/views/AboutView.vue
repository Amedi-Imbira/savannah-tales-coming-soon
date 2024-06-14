<script>
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<template>
  <NavBar />

  <section class="section">
    <h2 class="subtitle is-1">Everyone has a story to tell.</h2>
    <div class="columns">
      <div class="column">
        <p>
          Savannah Tales is a home for East African stories and ideas. Here,
          anyone can share insightful perspectives, useful knowledge, and life
          wisdom within the region. Most platforms are noisy and chaotic;
          Savannah Tales is serene yet full of wisdom. It’s simple, beautiful
          and collaborative and helps you find the right audience for whatever
          you have to say We believe that East Africa is a land full of stories
          that can empower and educate readers both in the region, and in Africa
          as a whole. We’re building a system that rewards that rewards depth,
          nuance and time well spent. A space for thoughtful conversations.
        </p>
        <p class="subtitle is-4">
          Ultimately, our goal is to deepen our collective understanding of the
          region through the power of writing. Then spread this unique culture
          to the rest of the world.
        </p>
        <p>
          We’re building a space for professional writers to do what they do
          best. But you don’t have to be one, anyone with a burning story is
          free to share their wisdom. Whether you’re a CEO, computer scientist,
          fitness guru, university student. Literally anyone. This can be their
          valuable experiences, what they are working on. A wise man learns from
          others more than he learns from himself. Savannah Tales embodies this.
        </p>
        <RouterLink to="/" class="button is-primary is-fullwidth">Join our Waitlistt</RouterLink>
      </div>
      <div class="column has-background-danger">
        Put image here
      </div>
    </div>
    
  </section>
</template>
