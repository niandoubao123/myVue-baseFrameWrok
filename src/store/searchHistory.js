
export default {
    state:{
        searchHistory: [
            '华为智慧屏',
            '魅族17thPlus',
            '小米10Pro',
        ]
    },
    mutations:{
        searchHistory(state,value){
            state.searchHistory.push(value)
        }
    }
}