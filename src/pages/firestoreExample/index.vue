<template>

  <nf-content-card>
    <h1 class="display-3">Firestore example</h1>
    <h2 class="display-1">Bitcoin price prediction</h2>

    <p>
      This page simply uses Google Firestore without the requirement for Nuxt
      to do any ramp up work on the server side.
      The page uses the Vuex getter <code>pricePredictions</code> and has to wait, until
      Vuexfire has bound the Firebase collection to the store.
      That binding is triggered from the <code>mounted</code> method
      in <code>src/layouts/default.vue</code>.
    </p>

    <p>
      A click on one of the buttons will add a new entry into the Firestore
      collection and that new prediction pops up in the list.
    </p>

    <h2 class="headline mt-5">Give your price prediction</h2>
    <p>
      I think the price will...
      <v-btn
        color="success"
        @click="rise"
      >
        ... rise
      </v-btn>
      <v-btn
        color="error"
        @click="fall"
      >
        ... fall
      </v-btn>
    </p>

    <h2 class="headline mt-5">List of the latest price predictions</h2>

    <v-list two-line>
      <v-list-tile
        v-for="prediction in pricePredictions"
        v-if="prediction.createdAt && prediction.createdAt.seconds"
        :key="prediction.id"
      >
        <v-list-tile-action>
          <v-icon :color="getPredictionIconColor(prediction)">
            {{ getPredictionIconName(prediction) }}
          </v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ prediction.trend }}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            Predicted at: {{ prediction.createdAt.seconds | formatTimestamp }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </nf-content-card>

</template>


<script>
import { mapActions, mapGetters } from 'vuex';
import dateFormatMixin from '../../mixins/dateFormatMixin';
import NfContentCard from '../../components/content/NfContentCard';

export default {
  components: {
    NfContentCard,
  },
  mixins: [
    dateFormatMixin,
  ],
  computed: {
    ...mapGetters({
      pricePredictions: 'bitcoin/pricePredictions',
    }),
  },
  methods: {
    ...mapActions({
      add: 'bitcoin/add',
    }),
    async rise() {
      await this.add({ trend: 'rise' });
    },
    async fall() {
      await this.add({ trend: 'fall' });
    },
    getPredictionIconName(prediction) {
      if (prediction.trend === 'rise') {
        return 'arrow_upwards';
      }
      return 'arrow_downwards';
    },
    getPredictionIconColor(prediction) {
      if (prediction.trend === 'rise') {
        return 'success';
      }
      return 'error';
    },
  },
  head() {
    return {
      title: 'Firestore example - BTC price prediction:',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Example of using Firestore.',
        },
      ],
    };
  },

};
</script>
