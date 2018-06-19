<template>
  <v-app id="nuxt2-firebase">

    <nf-top-bar/>

    <v-content class="colorful">
      <v-container
        class="page"
        grid-list-sm
      >
        <nuxt/>
      </v-container>
    </v-content>

    <nf-footer/>

  </v-app>
</template>


<script>
import { mapActions } from 'vuex';
import routerMixin from '~/mixins/routerMixin';
import NfFooter from '~/components/layout/NfFooter';
import NfTopBar from '~/components/layout/NfTopBar';

export default {
  components: {
    NfTopBar,
    NfFooter,
  },
  mixins: [
    routerMixin,
  ],
  mounted() {
    this.initStore();
  },
  methods: {
    ...mapActions({
      initStore: 'init',
    }),

  },
};
</script>


<style lang="scss">
  .container.page {
    padding-top: 55px;
    min-height: 100%;
  }

  section {
    margin-bottom: 48px;
  }

  // Generated with www.ccbg.io
  .colorful {
    background: -webkit-linear-gradient(315deg, hsla(187.92, 94.26%, 44.71%, 1) 0%, hsla(187.92, 94.26%, 44.71%, 0) 70%),
    -webkit-linear-gradient(65deg, hsla(206.04, 97.36%, 27.02%, 1) 10%, hsla(206.04, 97.36%, 27.02%, 0) 80%),
    -webkit-linear-gradient(135deg, hsla(192.45, 87.49%, 35.32%, 1) 15%, hsla(192.45, 87.49%, 35.32%, 0) 80%),
    -webkit-linear-gradient(205deg, hsla(224.05, 98.76%, 46.46%, 1) 100%, hsla(224.05, 98.76%, 46.46%, 0) 70%);
    background: linear-gradient(135deg, hsla(187.92, 94.26%, 44.71%, 1) 0%, hsla(187.92, 94.26%, 44.71%, 0) 70%),
    linear-gradient(25deg, hsla(206.04, 97.36%, 27.02%, 1) 10%, hsla(206.04, 97.36%, 27.02%, 0) 80%),
    linear-gradient(315deg, hsla(192.45, 87.49%, 35.32%, 1) 15%, hsla(192.45, 87.49%, 35.32%, 0) 80%),
    linear-gradient(245deg, hsla(224.05, 98.76%, 46.46%, 1) 100%, hsla(224.05, 98.76%, 46.46%, 0) 70%);
  }

</style>
