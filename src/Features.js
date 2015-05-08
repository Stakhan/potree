
Potree.Features = function(){
	
	var ftCanvas = document.createElement("canvas");
	var gl = ftCanvas.getContext("webgl") || ftCanvas.getContext("experimental-webgl");
	
	return {
		SHADER_INTERPOLATION: {
			isSupported: function(){
			
				var supported = true;
				
				supported = supported && gl.getExtension("EXT_frag_depth");
				supported = supported && gl.getParameter(gl.MAX_VARYING_VECTORS) >= 8;
				
				return supported;
				
			}
		},
		SHADER_SPLATS: {
			isSupported: function(){
				
				var supported = true;
				
				supported = supported && gl.getExtension("EXT_frag_depth");
				supported = supported && gl.getExtension("OES_texture_float");
				supported = supported && gl.getParameter(gl.MAX_VARYING_VECTORS) >= 8;
				
				return supported;
				
			}
		
		}
	}

}();