
class mdInfinityAPI{
	/**
	 * This class enables to manage a websocket connection to C++ software.
	 */
	constructor (viewer_obj, host='localhost', port='1111') {
		this.viewer = viewer_obj
		this.socket = new WebSocket('ws://'+host+':'+port)

		this.socket.onopen = this.onOpen.bind(this)

	}

	initPointPicking () {
		document.querySelector('[title="Point ID measurement"]').click()
		console.debug('point picking initialized')
	}
	
	sendId (e) {
		var point = e.measure.points[0]
		if (typeof point["return number"] !== "undefined" && point["gps-time"] !== "undefined") {
			console.log(point["return number"])
			console.log(point["gps-time"])
			var content = { return_number: point["return number"][0], gps_time: point["gps-time"][0] }
			this.socket.send(this.formatMessage("selected_point", content))
			console.debug('ID sent')
		}
		else {
			//this.viewer.postMessage("Point Cloud doesn't fit requirement of having 'GpsTime' and 'return_number' attributes.")
			console.debug('ID not sent')
		}
	}

	onOpen (e) {		
		console.debug('connection opened')
		// Messages from Server
		this.socket.onmessage = this.onMessage.bind(this)

		// Messages to Server
		this.viewer.measuringTool.addEventListener('point_selected', this.sendId.bind(this))
		console.debug('--> mdInfinity API ready! <--')	
	}

	onMessage (e) {
		var type = JSON.parse(e.data).type
		console.debug(type)
		if (type.includes('init_point_picking')){ 
			this.initPointPicking()
		}
		if(type.includes('classified_point')){
			this.onClassifiedPoint()
		}
	}

	formatMessage (type, content) {
		return JSON.stringify({"type":type, "content":content})
	}

}
