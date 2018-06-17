<template>

  <nf-content-card>
    <h1 class="display-3">Site Notice</h1>
    <h2 class="display-1">Impressum</h2>
    <p>
      This site notice ("Impressum") applies to the website
      https://nuxt2-example-dev.firebaseio.com.
    </p>

    <h4>Address</h4>
    <p>
      Thomas Zanthoff - Web Core IT <br>
      Schlierseestr. 4 <br>
      81541 München <br>
      Germany
    </p>

    <h4>Contact</h4>
    <p>
      <a href="mailto:info@webcore-it.com">info@webcore-it.com</a>
    </p>

    <h4>Liability</h4>
    <p>
      Despite careful content control we do not take responsibility for any externally provided
      content or for the contents of linked sites which are the responsibility of their own
      operators.
    </p>
  </nf-content-card>

</template>


<script>
import NfContentCard from '~/components/content/NfContentCard';

export default {
  components: {
    NfContentCard,
  },
  head() {
    return {
      title: 'Site notice',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Site notice (Impressum) for nuxt2-example-dev.firebaseio.com',
        },
      ],
    };
  },

};
</script>
