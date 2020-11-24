<template>
    <div>
    <header class="aui-header-default aui-header-fixed ">
	
		<div class="aui-header-center aui-header-center-clear">
			<div class="aui-header-center-logo">
				<div>秀恩爱</div>
			</div>
		</div>
		<router-link to="/invite" class="aui-header-item-icon">
			<i class="aui-icon aui-icon-packet"></i>
			<i class="aui-icon aui-icon-member"></i>
		</router-link>
	</header>
	<div v-if="$store.state.people.code == 1"  style="margin-top:50px;">
    <section class="aui-card-content" v-for="(item,index) in lists" :key="index">
			<div class="aui-card-box">
				<div class="aui-card-box-user" >
					<img src="../assets/img/user/user2.png" alt="">
				</div>
				<div class="aui-card-box-name">
					<h2 class="aui-card-box-name">{{item.username}}</h2>
					<span class="aui-card-box-btn" @click="addAssist(index)">赞({{item.assist}})</span>
				</div>
				<div class="aui-card-box-time">{{item.time | dateformat}}</div>
			</div>
			<div class="aui-card-media" style="padding:0 30px;">
				<div class="aui-card-media-item">
					<img :src=item.fileList[1]  />
				</div>
				<div class="aui-card-media-inner">
					<div class="aui-card-media-text">
						<p>{{item.content}}</p>
					</div>
					<div class="aui-card-media-describe">
						<span>{{item.content}}</span>
					</div>
				</div>
			</div>
		</section>
	</div>
    <section class="aui-card-content" style="margin-top:50px;">
			<div class="aui-card-box">
				<div class="aui-card-box-user">
					<img src="../assets/img/user/user2.png" alt="">
				</div>
				<div class="aui-card-box-name">
					<h2 class="aui-card-box-name">每天都坚果一下</h2>
					<span class="aui-card-box-btn">赞(99)</span>
				</div>
				<div class="aui-card-box-time">10月10日发布</div>
			</div>
			<div class="aui-card-media" style="padding:0 30px;">
				<div class="aui-card-media-item">
					<img src="../assets/img/pd/sf-8.jpg" />
				</div>
				<div class="aui-card-media-inner">
					<div class="aui-card-media-text">
						沃隆 每日坚果
					</div>
					<div class="aui-card-media-describe">
						<span>绝对好吃绝对好吃绝对好吃绝对好吃绝对好吃绝对好吃绝对好吃绝对好吃绝对好吃</span>
					</div>
				</div>
			</div>
    </section>
     <section class="aui-card-content" style="margin-top:50px;">
			<div class="aui-card-box">
				<div class="aui-card-box-user">
					<img src="../assets/img/user/user1.png" alt="">
				</div>
				<div class="aui-card-box-name">
					<h2 class="aui-card-box-name">每天都坚果一下</h2>
					<span class="aui-card-box-btn">赞(99)</span>
				</div>
				<div class="aui-card-box-time">10月10日发布</div>
			</div>
			<div class="aui-card-media" style="padding:0 30px;">
				<div class="aui-card-media-item">
					<img src="../assets/img/pd/sf-7.jpg" />
				</div>
				<div class="aui-card-media-inner">
					<div class="aui-card-media-text">
						沃隆 每日坚果
					</div>
					<div class="aui-card-media-describe">
						<span>柔软舒适 利于睡眠 居家只有品</span>
					</div>
				</div>
			</div>

    </section>
     <section class="aui-card-content" style="margin-top:50px;">
			<div class="aui-card-box">
				<div class="aui-card-box-user">
					<img src="../assets/img/user/user3.png" alt="">
				</div>
				<div class="aui-card-box-name">
					<h2 class="aui-card-box-name">每天都坚果一下</h2>
					<span class="aui-card-box-btn">赞(99)</span>
				</div>
				<div class="aui-card-box-time">10月10日发布</div>
			</div>
			<div class="aui-card-media" style="padding:0 30px;">
				<div class="aui-card-media-item">
					<img src="../assets/img/pd/sf-5.jpg" />
				</div>
				<div class="aui-card-media-inner">
					<div class="aui-card-media-text">
						沃隆 每日坚果
					</div>
					<div class="aui-card-media-describe">
						<span>这么好看这么fashion这么帅</span>
					</div>
				</div>
			</div>
    </section>
        <div class="sendWrap">
            <van-button plain type="info" color="#ff6767" @click="toShow" style="margin-top:50px;">
                <img src="../assets/images/fabu.svg" alt="" style="height:30px;">
            </van-button>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
import tabbar from '../components/tabbar/tabbar.vue'
    export default {
        data(){
            return{
              
            }
        },
        methods:{
            addAssist(index){
                this.$store.commit('show/addAssist',index);
            },
            toShow(){
                if(this.$store.state.people.code==0){
                    this.$router.push("/login")
                }else{
                    this.$router.push("/addShow")
                }
            }
        },
        components:{
            tabbar,
        },
        created(){
            this.lists = this.$store.state.show.lists;

        }
    }
</script>

<style lang="scss" scoped>
.sendWrap{
    position: fixed;
    bottom:50px;
    left:71%;
}
.van-button{
    border-radius: 50%;
    left:50%;
    margin-left:-100px;
    width:45px;
    margin-top:20px;
    position: relative;
    img{
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-15px;
        margin-left:-15px;
    }
}
.aui-card-media{
    width:100%;
    padding:0 5px;
}
.aui-card-media-item{
    float: left;
}
</style>