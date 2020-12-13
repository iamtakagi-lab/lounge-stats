export const state = () => ({
    players: [],
});

export const getters = {
    playerByName: state => (name) => {
        return state.players.find(player => player.name && player.name.toUpperCase() === name.toUpperCase())
    }
}

export const mutations = {
    setPlayers(state, payload) {
        state.players = payload
    },
}

export const actions = {
    async getPlayers({ $nuxt, $axios, commit, state }) {
        
        if (process.browser) {
            await window.$nuxt.$root.$loading.start();
        }

        await this.$axios.$get('/api/players').then(async (res) => {
            await commit('setPlayers', res)
            if (process.browser) {
                await window.$nuxt.$root.$loading.finish();
            }
           
        }).catch(console.error) 
    }
}
