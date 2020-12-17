export const state = () => ({
    players: []
});

export const getters = {
    playerByName: state => (name) => {
        return state.players.find(player => player.name && player.name.toUpperCase() === name.toUpperCase())
    }
}

export const mutations = {
    setPlayers(state, payload) {
        state.players = payload
    }
}

export const actions = {
    async getPlayers({ $axios, commit, state }) {

        await this.$axios.$get('/api/players').then(async (res) => {
            await commit('setPlayers', res)
           
        }).catch(console.error) 
    }
}
