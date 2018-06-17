import { firebaseMutations } from 'vuexfire';

/**
 * ======================================================================
 * STATE
 * ======================================================================
 */
export const state = () => ({});

/**
 * ======================================================================
 * GETTERS
 * ======================================================================
 */
export const getters = {};

/**
 * ======================================================================
 * ACTIONS
 * ======================================================================
 */
export const actions = {
  async init({ dispatch }) {
    console.log('vuex.index.actions.init');
    dispatch('bitcoin/init');
  },
  async nuxtServerInit({ dispatch }) {
    console.log('vuex.index.actions.nuxtServerInit');
    try {
      await dispatch('redVsBlue/init');
    } catch (error) {
      console.error('Error on [nuxtServerInit] action.', error);
    }
  },
};

/**
 * ======================================================================
 * MUTATIONS
 * ======================================================================
 */
export const mutations = {
  ...firebaseMutations,
};
