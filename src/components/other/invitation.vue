<template>
    <div>
        <header class="aui-header-default aui-header-fixed ">
            <a href="javascript:history.back(-1)" class="aui-header-item">
                <i class="aui-icon aui-icon-back"></i>
            </a>
            <div class="aui-header-center aui-header-center-clear">
                <div class="aui-header-center-logo">
                    <div class="">{{$route.name}}</div>
                </div>
            </div>
            <a href="#" class="aui-header-item-icon"   style="min-width:0">
            </a>
        </header>
        <section class="aui-list-product" style="margin-top:50px;">
				<div class="aui-list-product-box">
					<a class="aui-list-product-item" v-for="(item,index) in lists" :key="index" @click="invitationDes(index)">
						<div class="aui-list-product-item-img">
							<img :src=item.src alt="">
						</div>
						<div class="aui-list-product-item-text">
							<h3>{{item.title}}</h3>
							<div class="aui-list-product-mes-box">
								<div class="aui-comment">986评论</div>
							</div>
						</div>
					</a>
				</div>
        </section>
        <!-- <div class="WXbox" v-if="show==true">
             <img src="../../assets/images/WX.jpg" alt="" class="WX">
             <van-button type="primary" class="choose" @click="choose">加微信免费获取</van-button>
        </div> -->
    </div>
</template>

<script>

    export default {
        data(){
            return{
                lists:[
                   
                ],
                show:false
            }
        },
        methods:{
            invitationDes(index){
               this.$router.push({
					path:'/des',
					query:{
						src:this.lists[index].src,
						title:this.lists[index].title,
                        key:8,
                        status:this.lists[index].status,
                        id:this.lists[index].id,
					}
				})
            },
            // invitationDes(){
            //    this.show = true;
            // },
            // choose(){
            //     this.show = false;
            // }
        },
        created(){
            this.lists = this.$store.state.other.invitationList;
        }
    }
</script>

<style lang="scss" scoped>
.WXbox{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,.8);
}
.WX{
    position: absolute;
    width:150px;
    height:150px;
    top:50%;
    left:50%;
    margin-left:-75px;
    margin-top:-75px;
}
.choose{
    position: absolute;
    top:70%;
    left:50%;
    margin-left:-65px;
    margin-top:-20px;
}
</style>