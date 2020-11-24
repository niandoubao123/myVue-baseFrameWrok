<template>
	<div class="content">
		附件是的开发框架的首付款
		{{nowTime}}
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
