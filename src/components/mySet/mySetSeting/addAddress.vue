<template>
    <div>
        <headerSet></headerSet>
         <van-address-edit
         class="addAddress"
        :area-list="areaList"
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        />

    </div>
</template>

<script>
import headerSet from '../../headerPage/headerPublic'
import areaList from "./erea.js";
   export default {
        data() {
            return {
                areaList,
                searchResult: []
            }
        },
        methods: {
            onSave({name,tel,province,city,county,addressDetail,areaCode}) {
                this.$store.commit("address/add",{
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
            },
        },
        components:{
            headerSet
        },
    }
</script>

<style lang="scss" scoped>
.addAddress{
    margin-top:50px;
}
</style>