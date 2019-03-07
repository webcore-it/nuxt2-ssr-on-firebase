<template>

  <v-footer>
    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex
        class="secondary"
        py-3
        text-xs-center
        white--text
        xs12
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
          class="white--text"
          to="/siteNotice"
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

