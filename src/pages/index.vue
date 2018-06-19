<template>

  <nf-content-card>
    <h1 class="display-3">Home</h1>
    <p>
      Example app to demonstrate the deployment of a Nuxt.js 2.0 SSR app on Google Firebase Functions.
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
  </nf-content-card>

</template>


<script>
import routerMixin from '~/mixins/routerMixin';
import NfContentCard from '~/components/content/NfContentCard';

export default {
  components: {
    NfContentCard,
  },
  mixins: [
    routerMixin,
  ],
};
</script>
