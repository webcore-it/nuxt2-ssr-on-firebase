import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseAction } from 'vuexfire';

const sortPredictions = (a, b) => !a.createdAt || !b.createdAt ? 1 : b.createdAt.seconds - a.createdAt.seconds;

// ======================================================================
// STATE
// ======================================================================
export const state = () => ({
  pricePredictions: [],
});

// ======================================================================
// GETTERS
// ======================================================================
export const getters = {
  pricePredictions: state => [...state.pricePredictions].sort(sortPredictions).splice(0, 15),
};

// ======================================================================
// ACTIONS
// ======================================================================
export const actions = {
  async init({ dispatch }) {
    console.log('vuex.bitcoin.actions.init');
    dispatch('bindPricePredictionsRef', firebase.firestore().collection('pricePredictions'));
  },

  async add({}, data) {
    console.log('vuex.bitcoin.actions.add', data);

    const prediction = {
      trend: data.trend,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };

    await firebase.firestore().collection('pricePredictions').add(prediction);
  },

  bindPricePredictionsRef: firebaseAction(({ bindFirebaseRef }, ref) => {
    console.log('vuex.bitcoin.actions.bindPricePredictionsRef', ref);
    bindFirebaseRef('pricePredictions', ref);
  }),

};

// ======================================================================
// MUTATIONS
// ======================================================================
export const mutations = {};
