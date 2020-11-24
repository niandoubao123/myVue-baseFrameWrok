export default{
    namespaced:true,
    state:{
        lists:[]
    },
    mutations:{
        add(state,obj){
            state.lists.push(obj);
        },
        del(state,obj){
            let index= state.lists.findIndex(item=>item.id == obj.id)
            state.lists.splice(index,1)
        },
        remove(state,value){
            state.lists.splice(value,1)
        }
    }
}