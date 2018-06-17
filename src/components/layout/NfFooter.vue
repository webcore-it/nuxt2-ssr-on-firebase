<template>

  <v-footer>
    <v-layout
      row
      wrap
      justify-center
    >
      <v-flex
        class="secondary"
        xs12
        py-3
        text-xs-center
        white--text
      >
        &copy;2018 —
        <strong>
          <a
            class="white--text"
            href="https://www.webcore-it.com"
          >
            Web Core IT
          </a>
        </strong> -
        <nuxt-link
          to="/siteNotice"
          class="white--text"
        >
          Site notice
        </nuxt-link>
      </v-flex>

    </v-layout>
  </v-footer>

</template>

<script>
export default {
  name: 'NfFooter',
};
</script>

