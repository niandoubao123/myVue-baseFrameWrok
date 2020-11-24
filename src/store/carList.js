export default {
    namespaced:true,
    state: {
        carLists: [
            {
                src: require('../assets/img/pd/sf-15.jpg'),
                store: "艾畅旗舰店",
                title: '【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货',
                price: 100,
                thingscount: 1,
                checked: false,
                id:2
            },
            {
                src: require('../assets/img/pd/sf-16.jpg'),
                store: "艾畅旗舰店",
                title: '【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货',
                price: 200,
                thingscount: 1,
                checked: false,
                id:3
            },
            
        ],
        person:"",
        showList:[]
    },
    mutations: {
        // login(state,value){
        //     let index = state.carLists.findIndex(item=>item.name==value);
        //     if(index!=-1){
        //         state.showList=state.carLists[index];
        //     }
        // },
        // register(state,value){
        //     state.carLists.push({
        //         name:value,
        //     })
        // },
        del(state,value){
            state.carLists.splice(value,1)
        },
        addCar(state,obj){
            let index = state.carLists.findIndex(item => item.title == obj.title);
            if(index!=-1){
                state.carLists[index].thingscount+=1;
            }else{
                state.carLists.push({
                    name:obj.name,
                    title: obj.title,
                    price: obj.price,
                    thingscount: obj.thingscount,
                    checked: obj.checked,
                    src: obj.src,
                    id:obj.id
                });
             
                
            }  
        },
        info(state,value){
            state.person = value;
            console.log(value)
        }
    },
    getters:{
        // chooseAll(){
        //     return 
        //     get(state){
        //         return state.carLists.every(item=>{
        //             return item.checked;
        //         })
        //     },
        //     set(state,value){
        //         state.carLists.forEach(item=>{
        //             return item.checked=value;
        //         })
        //     }
        // },
        // sumMoney(state){
        //     return state.carLists.reduce((total,item)=>{
        //         if(!item.checked)return total;
        //         return total+=Math.ceil(item.thingscount*item.price);

        //     },0)
        // },
        // sumCount(state){
        //     return state.carLists.reduce((total, item) => {
        //         return total += item.thingscount;
        //     }, 0)
        // },
        sumMoney(state) {
            return state.carLists.reduce((total, item) => {
                if (!item.checked) return total;
                return total += Math.ceil(item.thingscount * item.price);
            }, 0)
        },
        sumCount(state) {
            return state.carLists.reduce((total, item) => {
                return total += item.thingscount;
            }, 0)
        },
       
    },
    actions: {},
    modules: {}
}