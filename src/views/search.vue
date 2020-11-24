<template>
    <div>
        <headerSearch></headerSearch>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item> <img src="../assets/img/banner/find-1.jpg" alt=""> </van-swipe-item>
        <van-swipe-item> <img src="../assets/img/banner/find-2.jpg" alt=""> </van-swipe-item>
        <van-swipe-item> <img src="../assets/img/banner/find-3.jpg" alt=""> </van-swipe-item>
        </van-swipe>
        <div class="itemBox">
            <van-tag mark type="primary">婚纱</van-tag>
            <van-tag mark type="success">礼服</van-tag>
            <van-tag mark type="danger">嫁妆</van-tag>
            <van-tag mark type="warning">伴娘服</van-tag>
            <van-tag mark type="warning">红包</van-tag>
            <van-tag mark type="warning">婚鞋</van-tag>
        </div>
        <div class="searchHistory ">
            <h1>历史记录</h1>
            <ul>
                <li v-for='(item,index) in this.$store.state.searchHistory.searchHistory' :key="index">{{item}}</li>
            </ul>
        </div>  
        <youlike></youlike>
    </div>
</template>

<script>
import youlike from '../components/indexPage/youLike'
import headerSearch from '../components/headerPage/headerSearch'
    export default {
        components:{
            headerSearch,
            youlike
        }
    }
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item img{
    width:100%;
    height:100%;
}
.itemBox{
    margin-top:10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.van-tag {
    width:auto;
    height:30px;
    font-size: 15px;
}
.searchHistory{
    padding:10px 20px;
    h1{
        font-size: 13px;
    }
    ul{
        width:100%;
        margin-top:10px;   
        padding:0 20px;
        li{
            list-style: circle;
            margin-bottom:2px;
            color:#8e8e8e;
        }
    }
}
</style>