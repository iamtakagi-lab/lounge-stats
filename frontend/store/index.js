export const state = () => ({
    last_refreshed: null,
    players: [],
    stats: {
        total_players: 0,
        total_events_played: 0
    }
});

export const getters = {
    playerByName: state => (name) =>{
        return state.players.find(player => player.name && player.name.toUpperCase() === name.toUpperCase())
    }
}

export const mutations = {

    setLastRefreshed(state, payload) {
        state.last_refreshed = payload
    },

    setPlayers(state, payload) {
        state.players = payload
    },

    setStats(state, payload) {
        state.stats = payload
    }
}

export const actions = {
    async updateStore({ commit, state }) {
        let res1, res2, res3

        try {
            [res1, res2, res3] = await Promise.all([
                this.$axios.$get('/last_refreshed').catch(e => { throw e.message }),
                this.$axios.$get('/stats').catch(e => { throw e.message }),
                this.$axios.$get('/players').catch(e => { throw e.message }),
            ]);
        } catch (err) {
            console.log(err);
            return; // １つでもエラーになったら、関数を抜ける
        }

        await commit('setLastRefreshed', res1.last_refreshed)
        await commit('setStats', res2)
        await commit('setPlayers', res3)
    }
}
