
class C_API{

	constructor (viewer_obj, host='localhost', port='1111') {
		this.viewer = viewer_obj
		this.socket = new WebSocket('ws://'+host+':'+port)

		this.socket.onopen = this.onOpen.bind(this)

	}

	initPointPicking () {
		console.log('supposed to init')
	}
	
	sendId (e) {
		console.log(e.measure.points[0]["return_number"])
		console.log(e.measure.points[0]["GpsTime"])
		var content = { return_number: e.measure.points[0]["return_number"], gps_time: e.measure.points[0]["GpsTime"] }
		this.socket.send(this.formatMessage("selected_point", content))
		console.debug('ID sent')
	}

	onOpen (e) {		
			console.debug('connection opened')
			// Messages from Server
			this.socket.onmessage = this.onMessage.bind(this)

			// Messages to Server
			this.viewer.measuringTool.addEventListener('point_selected', this.sendId.bind(this))
			console.debug('--> C_API ready! B) <--')	
	}

	onMessage (e) {
				
				if (e.data.type.includes('init_point_picking')){
					this.initPointPicking()
				}
				if(e.data.type.includes('classified_point')){
					this.onClassifiedPoint()
				}
	}

	formatMessage (type, content) {
		return JSON.stringify({"type":type, "content":content})
	}

	onClassifiedPoint () {
		return null
	}

}