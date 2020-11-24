<template>
    <div>
    <header class="aui-header-default aui-header-fixed ">
		<a href="javascript:history.back(-1)" class="aui-header-item">
			<i class="aui-icon aui-icon-back"></i>
		</a>
		<div class="aui-header-center aui-header-center-clear">
			<div class="aui-header-center-logo">
				<div>发动态</div>
			</div>
		</div>
		<router-link to="/invite" class="aui-header-item-icon">
			<i class="aui-icon aui-icon-packet"></i>
			<i class="aui-icon aui-icon-member"></i>
		</router-link>
	</header>
    <!-- 输入任意文本 -->
    <van-field v-model="title" label="标题" style="margin-top:50px;" />
    <van-field
    rows="1"
    v-model="content"
    autosize
    label="留言"
    type="textarea"
    placeholder="请输入留言"
    />
    <van-uploader
    v-model="fileList"
    multiple
    :max-count="2"
    :after-read="readFile"
    />
    <br>
 
    <div v-for="(item,index) in lists" :key="index">
        <h1>{{item.title}}</h1>
        <h1>{{item.content}}</h1>
        <img :src=item.fileList[1] alt="">
    </div>
    <van-button plain type="primary" to="/login" v-if="$store.state.people.code==0">请先登录</van-button>
    <van-button plain type="primary" @click="addShow" v-if="$store.state.people.code==1">发布</van-button>
   
    </div>
</template>

<script>
import {Toast} from 'vant'
    export default {
        data(){
            return{
                title:'',
                content:'',
                fileList: [],
                lists:[]
            }
        },
        methods:{
            readFile(file){
                this.src = file.content;
                this.fileList.push(file.content);      
            },
            addShow(){
                if(this.title==""){
                    Toast('标题不能为空');
                    return;
                }
                if(this.content==""){
                    Toast('内容不能为空');
                    return;
                }
                this.$store.commit('show/addShow',{
                    username:this.$store.state.people.obj.name,
                    time:new Date(),
                    title:this.title,
                    content:this.content,
                    fileList:this.fileList,
                    assist:0,
                    src:this.$store.state.people.obj.src||""
                }),
                this.$router.push('/show')
            },
            
        },
    }
</script>

<style lang="scss" scoped>
.van-button{
    margin-top:30px;
    width:200px;
    left:50%;
    margin-left:-100px;
    border-radius: 20px;
}
</style>