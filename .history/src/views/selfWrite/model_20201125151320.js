export let props = {
	
}

export let model = {
	orderData:{
		input:{
			value:{
				oneNumber:998
			}
		}
	}
}

export let computed = {
	nowTime(){
		return new Date().getTime()
	}
}
