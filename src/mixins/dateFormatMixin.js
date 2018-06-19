export default {
  filters: {
    formatTimestamp: (value) => {
      if (!value) {
        return '';
      }

      let date = new Date(parseInt(value) * 1000);

      return date.toLocaleString();
    },
  },
};


