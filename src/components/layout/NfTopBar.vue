<template>

  <v-toolbar
    fixed
    app
  >
    <v-layout class="toolbar-content-wrapper">

      <v-toolbar-title @click="goToRoute('/')">
        Nuxt 2.0 Firebase
      </v-toolbar-title>

      <v-spacer/>

      <v-toolbar-items>
        <v-btn
          v-for="(item, i) in navigationItems"
          :key="i"
          :class="{ 'btn--active': isActive(item.uri)}"
          flat
          @click="goToRoute(item.uri)"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

    </v-layout>
  </v-toolbar>

</template>


<script>
import routerMixin from '~/mixins/routerMixin';

export default {
  name: 'NfTopBar',
  mixins: [
    routerMixin,
  ],
  data: () => ({
    navigationItems: [
      {
        title: 'SSR Example',
        uri: '/ssrExample',
      },
      {
        title: 'Firestore Example',
        uri: '/firestoreExample',
      },

    ],
  }),
};
</script>


<style lang="scss" scoped>
  .toolbar-content-wrapper {
    align-items: center;
    height: 100%;
    max-width: 100%;
    margin: 0 auto;

    @media only screen and (min-width: 960px) {
      max-width: 900px;
    }
    @media only screen and (min-width: 1264px) {
      max-width: 1185px;
    }
  }

  .btn--active {
    border-bottom: 2px solid #03A9F4;
  }
</style>
