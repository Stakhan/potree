var Server = require('simple-websocket/server')

class C_API{

	constructor(url, viewer){
		this.socket = new Server({ port: 1111 })
		this.viewer = viewer

		server.on('connection', function (this) {
			//ADD EventListener for 'poin_selected" and call sendId
			this.socket.on('initialize_point_picking', initPointPicking)

		})

	}

	initPointPicking(){
		console.log('supposed to init')
	}
	
	sendId(return_nb, gps_t){
		this.socket.write({ return_number: return_nb, gps_time: gps_t })
	}


}