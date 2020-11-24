export default{
    namespaced:true,
    state:{
        lists:[
        //   {
        //       title:"123",
        //       content:"11111",
        //       time:"2020",
        //       fileList:[]
        //   }

        ]
    },
    mutations:{
        addShow(state,obj){
            state.lists.push(obj)
        },
        addAssist(state,value){
            state.lists[value].assist+=1;
        }
    }
}