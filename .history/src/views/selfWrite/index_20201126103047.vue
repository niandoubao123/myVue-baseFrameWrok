<template>
	<div class="content">
		附件是的开发框架的首付款
		<div class="test">不中</div>
    <div>
      <button @click="hereEvent(true)">按钮</button>
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
			this.methods('getData')
    },
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
