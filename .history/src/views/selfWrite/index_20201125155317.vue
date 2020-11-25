<template>
	<div class="content">
		附件是的开发框架的首付款
    <div>
      <button @click="doTest(true)">按钮</button>
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
			let methods = (name) => {
				let func = methodsSource[name] || methodsSource.prototype[name] // 目标函数，methodsSource可能是字面量对象，也可以是类
				if (!func) throw new Error('找不到 methods：' + name)
				return func
			}
			this.methods = methods
			// this.methods('test')
			// console.log(this.methods('test'))
    },
    created(){
			// console.log(this)
			this.methods('test')
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
		...vmConfig.call(this, model, life, event, watch, methodsSource)
	}
</script>
	
<style>
</style>
