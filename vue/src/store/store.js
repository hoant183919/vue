import { createStore } from 'vuex'

export const store = createStore({
    state: {
        message: 1
    },
    getters: {
        message: state => {
            return state.message;
        }
    },
    mutations: {
        changeMessage(state, payload) {
            state.message = state.message + payload;
        }
    },
    actions: {}
});