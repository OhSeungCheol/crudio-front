const sessionStore = {
    state: {
		isLogined: false
	},
    getters: {
        isLogined (state) {
          return state.isLogined;
        }
    },
	mutations: {
		login(state) {
            state.isLogined = true;
		},
		logout(state) {
            state.isLogined = false;
		}
	},
}

export default sessionStore;