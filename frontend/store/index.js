export const state = () => ({
    players: [],
    stats: {
        total_players: 0,
        total_events_played: 0
    }
});

export const getters = {
    
}

export const mutations = {

    setPlayers(state, payload) {
        state.players = payload
    },

    setStats(state, payload) {
        state.stats = payload
    }
}

export const actions = {
    async update({ commit, state }) {
        let res1, res2

        try {
            [res1, res2] = await Promise.all([
                this.$axios.$get('/stats').catch(e => { throw e.message }),
                this.$axios.$get('/players').catch(e => { throw e.message }),
            ]);
        } catch (err) {
            console.log(err);
            return; // １つでもエラーになったら、関数を抜ける
        }

        await commit('setStats', res1)
        await commit('setPlayers', res2)
    }
}
