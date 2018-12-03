<template>

  <nf-content-card>
    <h1 class="display-3">Home</h1>
    <p>
      Example app to demonstrate the deployment of a Nuxt.js 2.x SSR app on Google Firebase Functions.
    </p>
    <p>
      GitHub repo: <a href="https://github.com/webcore-it/nuxt2-ssr-on-firebase">https://github.com/webcore-it/nuxt2-ssr-on-firebase</a>
    </p>

    <v-btn @click="goToRoute('/ssrExample')">
      SSR example
    </v-btn>
    <v-btn @click="goToRoute('/firestoreExample')">
      Firestore example
    </v-btn>

    <h2 class="display-1 pt-8">Asset example</h2>
    <p>
      This image is loaded from the assets folder with <code>src="~/assets/screenshot.jpg"</code>.
    </p>
    <img src="~/assets/screenshot.jpg" alt="Screenshot of this page">
  </nf-content-card>

</template>


<script>
  import NfContentCard from '~/components/content/NfContentCard';
  import routerMixin from '~/mixins/routerMixin';

  export default {
    components: {
      NfContentCard,
    },
    mixins: [
      routerMixin,
    ],
  };
</script>

<style class="scss" scoped>
  .pt-8 {
    padding-top: 2rem;
  }
</style>
