<template>
  <v-card class="content-card mb-3">
    <slot/>
  </v-card>
</template>


<script>
export default {
  name: 'NfContentCard',
};
</script>


<style lang="scss" scoped>
  .content-card {
    padding: 20px 15px;

    @media (min-width: 600px) {
      padding: 25px 30px;
    }

    @media (min-width: 960px) {
      padding: 80px 120px;
    }
  }
</style>
