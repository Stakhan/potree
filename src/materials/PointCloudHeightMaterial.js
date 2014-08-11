
Potree.PointCloudHeightMaterial = function(parameters){
	parameters = parameters || {};
	
	var size = parameters.size || 1.0;
	this.min = parameters.min || 0;
	this.max = parameters.max || 1;

	var attributes = {};
	var uniforms = {
		uCol:   { type: "c", value: new THREE.Color( 0xffffff ) },
		size:   { type: "f", value: 1 },
		uMin:	{ type: "f", value: this.min },
		uMax:	{ type: "f", value: this.max }
	};
	
	this.setValues({
		uniforms: uniforms,
		attributes: attributes,
		vertexShader: Potree.PointCloudHeightMaterial.vs_points.join("\n"),
		fragmentShader: Potree.PointCloudHeightMaterial.fs_points_rgb.join("\n"),
		vertexColors: THREE.VertexColors,
		size: size,
		alphaTest: 0.9,
	});
};

Potree.PointCloudHeightMaterial.prototype = new THREE.ShaderMaterial();

Object.defineProperty(Potree.PointCloudHeightMaterial.prototype, "size", {
	get: function(){
		return this.uniforms.size.value;
	},
	set: function(value){
		this.uniforms.size.value = value;
	}
});

Potree.PointCloudHeightMaterial.prototype.setBoundingBox = function(boundingBox){
	this.min = boundingBox.min.y;
	this.max = boundingBox.max.y;
	
	this.uniforms.uMin.value = this.min;
	this.uniforms.uMax.value = this.max;
}

Potree.PointCloudHeightMaterial.vs_points = [
 "uniform float size;                                          ",
 "uniform float uMin;                                          ",
 "uniform float uMax;                                          ",
 "                                                             ",
 "varying vec3 vColor;                                         ",
 "                                                             ",
 "void main() {                                                ",
 "	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 ); ",
 "	vec4 world = modelMatrix * vec4( position, 1.0 ); ",
 "	float w = (world.y - uMin) / (uMax-uMin);            ",
 "	w = clamp(w-0.1, 0.2, 1.0);            ",
 "	vColor = vec3(1.0, 0.0, 0.0) * (w) ;  ",
 "                                                             ",
 "	gl_PointSize = size * ( 300.0 / length( mvPosition.xyz ) );      ",
 "	gl_PointSize = max(2.0, gl_PointSize);      ",
 "	gl_Position = projectionMatrix * mvPosition;               ",
 "}                                                            "];

Potree.PointCloudHeightMaterial.fs_points_rgb = [
 "varying vec3 vColor;                                         ",
 "                                                             ",
 "void main() {                                                ",
 "	                                                           ",
 "	//float a = pow(2.0*(gl_PointCoord.x - 0.5), 2.0);           ",
 "	//float b = pow(2.0*(gl_PointCoord.y - 0.5), 2.0);           ",
 "	//float c = 1.0 - (a + b);                                   ",
 "  //                                                           ",
 "	//if(c < 0.0){                                               ",
 "	//	discard;                                               ",
 "	//}                                                          ",
 "	                                                           ",
 "	gl_FragColor = vec4(vColor, 1.0);                          ",
 "}                                                            "];














