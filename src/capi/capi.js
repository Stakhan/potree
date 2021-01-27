var Server = require('simple-websocket/server')

export class C_API{

	constructor(url, viewer){
		this.socket = new Server({ url: url, port: 1111 })
		this.viewer = viewer

		this.socket.on('connection', function (this) {
			console.log('connection opened')
			this.socket.on('initialize_point_picking', initPointPicking)

			this.viewer.measuringTools.addEventListener('point_selected', this.sendId)

		})

		console.log('C_API ready')

	}

	initPointPicking(){
		console.log('supposed to init')
	}
	
	sendId(event){
		console.log(event.measure.points[0]["return_number"])
		console.log(event.measure.points[0]["GpsTime"])
		this.socket.write({ return_number: event.measure.points[0]["return_number"], gps_time: event.measure.points[0]["GpsTime"] })
	}


}