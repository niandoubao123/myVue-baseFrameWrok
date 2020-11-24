import eventHandler from './eventHandler.js'
export default function(model, life, event, watch, methodsSource) {
	let L = life || {}
	let E = event || {}
	let W = {}
	let C = {}
	//这里把所有的数据，事件，方法整理成vue所常用的那种格式
	return {
		props: model.props,
		data() {
			let EL = eventHandler.call(this, E, L, watch || {}, methodsSource)
			L = EL.L
			W = EL.W
			console.log(EL)
			Object.assign(this, EL.E)
			return model.model
		},
		// ...L,
		computed: {
			...C,
			...model.computed,
		},
		filters: model.filters,
		...(function() {
			let life = {}
			Object.keys(L).forEach(key => {
				life[key] = function() {
					return L[key](...arguments)
				}
			})
			return life
		})(),
		watch: W,
	}
}
