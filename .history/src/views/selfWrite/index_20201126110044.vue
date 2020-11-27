<template>
	<div class="content">
		附件是的开发框架的首付款
		<div class="test">不中</div>
    <div>
      <button @click="hereEvent(true)">按钮</button>
      <button @click="bbb()">测试</button>
    </div>
	</div>
</template>

<script>
	import * as modelJS from './model.js'
	const model = modelJS.default ? modelJS.default : modelJS
	import * as eventJs from './event.js'
	const {
		event,
		life,
		watch
  } = eventJs.default ? eventJs.default : eventJs
	import * as methodsJs from './methods.js'
  const methodsSource = methodsJs.default ? methodsJs.default : methodsJs
  import vmConfig from './frameWork/vmConfigHandler.js'
	export default {
    beforeCreate(){
			let methods = (name, ...param) => {
				let func = methodsSource[name] || methodsSource.prototype[name] // 目标函数，methodsSource可能是字面量对象，也可以是类
				if (!func) throw new Error('找不到 methods：' + name)
				//把作用范围改为this  call和apply是一样的
				return func.apply(this, param)
			}
			this.methods = methods
			// this.methods('test')
			// console.log(this.methods('test'))
    },
    created(){
			// console.log(this)
			// this.methods('getData')
		},    
		//经过观察  普通的vue点击事件就是把事件直接绑到this上,然后点击就会直接去调用这个方法(相当于this.func())
		//那么,这个框架做的是把所有的event.js里面的事件读出来放到this上,然后当点击调用这个方法的时候
		//这个方法就会指向this.methods里面,进而调用methods的方法,达到效果
		/* data() {
			return modelJS.model
		},
		props: modelJS.props,
		computed: {
			...modelJS.computed
		},
		...life,
		watch: {
			...watch
		},
		methods: {
			...methodsSource
		}, */
		// ...vmConfig.call(this, model, life, event, watch, methodsSource),
		...vmConfig.call(this, model,life, event),
		watch: {
			...watch
		},
		methods: {
			...methodsSource
		},
	}
</script>
	
<style lang="scss" scoped>
	@import '@/assets/css/mixin.scss';
	.test{
		width: 50px;
		height: 50px;
		@include color_primary($color-primary1);
		background: $color-primary2;
	}
</style>
