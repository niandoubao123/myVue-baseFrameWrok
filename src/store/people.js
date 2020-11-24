export default{
    namespaced: true,
        state: {
          list:[
                {
                    name:111,
                    password:111,
                },
                {
                    name: 222,
                    password: 222,
                    address:[

                    ]
                },
                {
                    name: 333,
                    password: 333,
                    address:[]
                }
          ],
          code:0,
          obj:{
              name:"",
              save:16,
              focus:8,
              footHistory:32
          }
        },
        mutations: {
           register(state,obj){
               obj.address=[];
               state.list.push(obj);
           },
           login(state,obj){
                let index = state.list.findIndex(item=>item.name==obj.name&&item.password == obj.password);
                if(index!=-1){
                    state.obj.name = state.list[index].name;
                    state.obj.address = state.list[index].address || [];
                    state.obj.src = state.list[index].src || "";
                    state.code = 1;
                }else{
                    state.code = 0;
                }



                // state.list.filter(function (item) {
                //     if (item.name==obj.name  && item.password==obj.password) {
                //         console.log(item)
                //         state.obj.name = item.name;
                //         state.obj.address = item.address;
                //         state.code = 1;
                //     }else{
                //         state.code = 0;
                //     }
                // })
           },
           outLogin(state){
               state.code = 0;
               state.obj={};
           },
           addAddress(state,obj){
               let index = state.list.findIndex(item => item.name == obj.name);
               if(index!=-1){
                   state.list[index].address.push({
                       aname: obj.aname,
                       aphone: obj.aphone,
                       aplace: obj.aplace,
                       aplaces: obj.aplaces,
                   })
               }
            //   state.list.filter(function (item) {
            //       if (item.name == obj.name) {
            //           console.log("bbb");
            //           item.address.push({
            //               aname : obj.aname,
            //               aphone:obj.aphone,
            //               aplace:obj.aplace,
            //               aplaces:obj.aplaces,
            //           })
            //       } else {
            //           state.code = 0;
            //       }
            //   })
           },
           setPic(state,obj){
               let index = state.list.findIndex(item => item.name == obj.name);
               if(index!=-1){
                   state.list[index].src=obj.src;
                   state.obj.src=obj.src;
               }
           }
        },
        getters: {
            
        },
        actions: {},
        modules: {}
}