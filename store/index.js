export const state = () => ({
    fooddata: []
})

export const getters = {
    getterValue: state => {
        return state.value
    }
}

export const mutations = {
    setFoodData: (state, payload) => {
        state.fooddata = payload;
    }
}

export const actions = {
    async getFoodData({ state, commit }) {
        if(state.fooddata.length) return;
        try {
            await fetch('https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants', {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.AWS_API_KEY
                }
            })
            .then(response => response.json())
            .then(data => commit('setFoodData', data))
        } catch(err){
            console.warn(err)
        }
    }
}