import Vue from 'vue'

export default {
    state: {
        players: {},
        id: "",
        email: "",
        auth: false,
    },
    mutations: {
        DELETE_PLAYER_STATE(state, player) {
            let index = state.players.findIndex(p => p.id == player.id)
            state.players.splice(index, 1)
            
        },
        SET_PLAYERS(state, players) {
            state.players = players
            console.log(state.players)
        },
        SET_PLAYER(state, payload) {
            state.id = payload.id
            state.email = payload.email
            state.auth = true
        }
    },
    actions: {
        LOGIN({ commit, state }, payload) {
            let currentUserId = (state.players.length + 1).toString()
            console.log(currentUserId)
            commit('SET_PROCESSING', true)
            let ref = Vue.$db.collection('players').doc(currentUserId)
            ref.set({
                id: currentUserId,
                email: payload.email,
                name: payload.name,
                surname: payload.surname
            })
                .then(function () {
                    commit('SET_PLAYER', { id: currentUserId, email: payload.email })
                    commit('SET_PROCESSING', false)
                })
                .catch(function (error) {
                    commit('SET_ERROR', error.message)
                    commit('SET_PROCESSING', false)
                });
        },
        LOAD_PLAYERS({ commit }) {
            Vue.$db.collection('players')
                .get()
                .then(querySnapshot => {
                    let players = []
                    querySnapshot.forEach(s => {
                        const data = s.data()
                        let player = {
                            id: s.id,
                            name: data.name,
                            surname: data.surname,
                        }
                        players.push(player)
                    })
                    commit('SET_PLAYERS', players)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        DELETE_PLAYER({commit}, player){
            Vue.$db.collection('players').doc(player.id).delete()
                    .then(() => commit('DELETE_PLAYER_STATE', player))
        }
    },
    getters: {
        players: (s) => s.players,
        auth: (s) => s.auth,
        currentUserId: (s) => s.id
    }
}