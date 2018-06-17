<template>

  <nf-content-card>
    <h1 class="display-3">SSR example</h1>
    <h2 class="display-1">Red vs. Blue</h2>

    <p>
      When this page is loaded, a call to a backend function is made.
      If the actual timestamp when this call hits the backend on the
      server is even, the red team won.
      If the timestamp is odd, the blue team won.
    </p>

    <p>
      To demonstrate working SSR, reload this URL.
      The "Nuxt server" has to make that backend
      call and wait for the result of the winner
      to be able to send the correct HTML to the browser.
      The HTML source already has the winner set - no call
      from the browser to the backend is needed in that case.
    </p>

    <h2 class="headline mt-5">The winner for this initial page load</h2>
    <v-alert
      :value="true"
      :color="currentWinner.name"
      type="success"
    >
      {{ currentWinner.name }} <i>[time was {{ currentWinner.time }}]</i>
    </v-alert>

    <h2 class="headline mt-5">List of the last 15 winners</h2>

    <v-list two-line>
      <v-list-tile
        v-for="winner in winners"
        :key="winner.id"
      >
        <v-list-tile-action>
          <v-icon :color="winner.name">star</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ winner.name }}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            Time: {{ winner.time }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </nf-content-card>

</template>


<script>
import { mapGetters } from 'vuex';
import NfContentCard from '../../components/content/NfContentCard';

export default {
  components: {
    NfContentCard,
  },
  computed: {
    ...mapGetters({
      currentWinner: 'redVsBlue/currentWinner',
      winners: 'redVsBlue/winners',
    }),
  },
  head() {
    return {
      title: 'Red vs Blue - 100% SSR',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Content is 100% server side rendered (generated).',
        },
      ],
    };
  },

};
</script>
