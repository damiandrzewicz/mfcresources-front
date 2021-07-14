const state = () => ({
    showAuthDialog: false
});

const getters = {
    getShowAuthDialog(state){
        console.log("getShowAuthDialog")
        return state.showAuthDialog
    }
}

const actions = {

}

const mutations = {
    setShowAuthDialog(state, value){
        console.log("setShowAuthDialog")
        state.showAuthDialog = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}