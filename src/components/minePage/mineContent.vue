<template>
    <div>
    <section class="aui-me-content" style="padding-top:0;">
		<mineInfo></mineInfo>
		<mineOrder></mineOrder>
	</section>
    </div>
</template>

<script>
import mineInfo from './mineInfo.vue'
import mineOrder from './mineOrder.vue'
    export default {
		data(){
			return{
				code:""
			}
		},
        methods:{
			toLogin(){
				this.$router.push({
					path:"/login"
				})
			}
		},
		components:{
			mineInfo,
			mineOrder,
		},
		created(){
			this.code = this.$store.state.people.code;
		}
    }
</script>

<style lang="scss" scoped>
.outWrap{
	width:100%;
	height:50px;
	position: relative;
}
.outLogin{
	position: absolute;
	left:50%;
	margin-left:-75px;
	border-radius: 20px;
	width:150px;
}
.aui-me-content{
	padding-bottom:10px;
}
</style>