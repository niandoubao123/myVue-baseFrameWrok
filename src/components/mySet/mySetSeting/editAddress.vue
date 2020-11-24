<template>
    <div>
        
        <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="$router.go(-1)"
        />

        <van-address-edit
        :area-list="areaList"
        :address-info="addressInfo"
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        />
    </div>
</template>

<script>
    import areaList from "./erea.js";

    export default {
        data() {
            return {
                areaList,
                searchResult: [],
                addressInfo:{}
            }
        },
        methods: {
            // 修改vuex中数据
            onSave({name,tel,province,city,county,addressDetail,areaCode}) {
                this.$store.commit("address/edit",{
                    id:this.$route.query.id,
                    name,
                    tel,
                    province,
                    city,
                    county,
                    addressDetail,
                    address: province+city+county+addressDetail,
                    areaCode
                })
                this.$router.go(-1); //回到上一级列表页
            }
        },
        
        created(){
            // 获取修改id值
            let id = this.$route.query.id;
            let data = this.$store.state.address.lists;
            this.addressInfo = data.find(item=>item.id==id);
        },
     
    }
</script>

<style lang="scss" scoped>

</style>