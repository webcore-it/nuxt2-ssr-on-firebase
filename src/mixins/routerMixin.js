export default {
  methods: {
    goToRoute(location) {
      this.$router.push(location);
    },
    isActive(uri) {
      return this.$nuxt.$route.path === uri;
    },
  },
};


