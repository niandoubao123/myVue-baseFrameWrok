<template>
    <div>
        <div class="aui-me-content-box" v-if="$store.state.people.code==1">
			<!--<div class="aui-me-content-info"></div> 弧度背景 临时 注释  -->
			<div class="aui-me-content-list">
				<div class="aui-me-content-item">
					<div class="aui-me-content-item-head">
						<div class="aui-me-content-item-img">
							<img :src=$store.state.people.obj.src alt="">
						</div>
						<div class="aui-me-content-item-title">您好！{{$store.state.people.obj.name}} 
							<van-button type="default" size="mini" style="border-radius:8px;margin-left:50px;" @click="outLogin">退出</van-button>
						</div>
					</div>
					<div class="aui-me-content-item-text">
						<a>
							<span>{{$store.state.collection.lists.length}}</span>
							<span>收藏</span>
						</a>
						<a >
							<span>{{$store.state.people.obj.focus}}</span>
							<span>关注</span>
						</a>
						<a >
							<span>{{$store.state.people.obj.footHistory}}</span>
							<span>足迹</span>
						</a>
					</div>
				</div>
				<div class="aui-me-content-card">
					<h3><i class="aui-icon aui-card-me"></i>plus会员</h3>
					<a href="my-membership.html">开通享8大权益</a>
				</div>
			</div>
		</div>
        <div class="aui-me-content-box" v-if="$store.state.people.code==0">
			<!--<div class="aui-me-content-info"></div> 弧度背景 临时 注释  -->
			<div class="aui-me-content-list">
				<div class="aui-me-content-item">
					<div class="aui-me-content-item-head">
						<div class="aui-me-content-item-img">
							<img src="../../assets/img/user/head-2.jpg" alt="">
						</div>
						<div class="aui-me-content-item-title">
							<div style="float:left;" @click="$router.push('/login')">登录</div><span style="float:left;font-size:20px;">/</span><div style="float:left;" @click="$router.push('/register')">注册</div>
						</div>
					</div>
					<!-- <div class="aui-me-content-item-text">
						<a href="my-orders.html">
							<span>{{$store.state.people.obj.save}}</span>
							<span>收藏</span>
						</a>
						<a href="my-orders.html">
							<span>{{$store.state.people.obj.focus}}</span>
							<span>关注</span>
						</a>
						<a href="my-orders.html">
							<span>{{$store.state.people.obj.footHistory}}</span>
							<span>足迹</span>
						</a>
					</div> -->
				</div>
				<div class="aui-me-content-card">
					<h3><i class="aui-icon aui-card-me"></i>plus会员</h3>
					<a href="my-membership.html">开通享8大权益</a>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
        methods:{
			outLogin(){
				this.$store.commit('people/outLogin')
			},
		}
    }
</script>

<style lang="scss" scoped>
.aui-me-content{
	padding-bottom:10px;
}
</style>