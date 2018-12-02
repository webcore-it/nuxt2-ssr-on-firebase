import firebase from 'firebase/app';
import 'firebase/firestore';

// ======================================================================
// STATE
// ======================================================================
export const state = () => ({
  currentWinner: { name: 'pink', time: -1 },
  winners: [],
});

// ======================================================================
// GETTERS
// ======================================================================
export const getters = {
  currentWinner: state => state.currentWinner,
  winners: state => state.winners,
};

// ======================================================================
// ACTIONS
// ======================================================================
export const actions = {
  async init({ commit, dispatch }) {
    console.log('vuex.redVsBlue.actions.init');
    let winner = {};

    try {
      const result = await this.$axios.$get('/api/getRedVsBlue');
      console.log('vuex.redVsBlue.actions.init result', result);

      winner = {
        name: result.name || 'blue',
        time: result.time || new Date().getTime(),
      };
    } catch (error) {
      console.error('ERROR for this.$axios.$get("/api/getRedVsBlue")', error);
      return;
    }

    commit('setCurrentWinner', winner);

    await firebase.firestore().collection('redVsBlue').add(winner);
    await dispatch('getWinners');
  },

  async getWinners({ commit }) {
    const snapshot = await firebase.firestore().collection('redVsBlue').orderBy('time', 'desc').limit(15).get();
    let winners = [];
    snapshot.forEach(doc => {
      winners.push({ id: doc.id, ...doc.data() });
    });

    console.log('vuex.redVsBlue.actions.getWinners', winners);
    commit('setWinners', winners);
  },

};

// ======================================================================
// MUTATIONS
// ======================================================================
export const mutations = {
  setCurrentWinner(state, winner) {
    state.currentWinner = winner;
  },
  setWinners(state, winners) {
    state.winners = winners;
  },
};
