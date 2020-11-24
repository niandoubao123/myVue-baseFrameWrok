<template>
    <div>
        <headerSet></headerSet>
        <div v-if="$store.state.people.code == 0" class="addAddress">
            <h1>请先登录</h1>
        </div>
        <div v-if="$store.state.people.code == 1">
        <van-address-list
            class="addAddress"
            v-model="chosenAddressId"  
            :list="list"
            @add="onAdd"
            @edit="onEdit"
            @select="onSelect"
        />
        </div>
    </div>
</template>

<script>
import headerSet from '../../headerPage/headerPublic'
            export default {
            data() {
                return {
                    chosenAddressId: null,  //默认选项
                    list: []  //注意:v-model双向数据绑定必须定义变量
                }
            },
        methods: {
            onAdd() {
                this.$router.push("/addAddress")
            },
            onEdit(item) {
                console.log(item.id)
                this.$router.push({ 
                    path: 'editAddress', 
                    query: {id:item.id }
                })
            },
            onSelect(item){
                this.$store.state.address.defaultId = item.id;
                this.$router.go(-1);//点击默认选择
            }
        },
        components:{
            headerSet
        },
        created(){
            this.list = this.$store.state.address.lists;
            this.chosenAddressId = this.$store.state.address.defaultId;
        },
    };
</script>

<style lang="scss" scoped>
.addAddress{
    margin-top:50px;
}
h1{
    text-align: center;
    font-size: 20px;
    color:#8e8e8e;
}
</style>