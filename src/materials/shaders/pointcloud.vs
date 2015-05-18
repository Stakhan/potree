
attribute vec3 position;
attribute vec3 color;
attribute float intensity;
attribute float classification;
attribute float returnNumber;
attribute float pointSourceID;
attribute vec4 indices;
attribute vec3 normal;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat3 normalMatrix;
uniform vec3 cameraPosition;
uniform float screenWidth;
uniform float screenHeight;
uniform float fov;
uniform float spacing;
uniform float blendDepth;
uniform float near;
uniform float far;

#if defined use_clip_box
	uniform mat4 clipBoxes[clip_box_count];
#endif


uniform float heightMin;
uniform float heightMax;
uniform float intensityMin;
uniform float intensityMax;
uniform float size;
uniform float minSize;
uniform float maxSize;
uniform float nodeSize;
uniform vec3 uColor;
uniform float opacity;


uniform sampler2D visibleNodes;
uniform sampler2D gradient;
uniform sampler2D classificationLUT;
uniform sampler2D depthMap;

varying float vOpacity;
varying vec3 vColor;
varying float vDepth;
varying float vLinearDepth;
varying vec3 vViewPos;
varying float vRadius;


#if defined(adaptive_point_size) || defined(color_type_octree_depth)
/**
 * number of 1-bits up to inclusive index position
 * number is treated as if it were an integer in the range 0-255
 *
 */
float numberOfOnes(float number, float index){
	float tmp = mod(number, pow(2.0, index + 1.0));
	float numOnes = 0.0;
	for(float i = 0.0; i < 8.0; i++){
		if(mod(tmp, 2.0) != 0.0){
			numOnes++;
		}
		tmp = floor(tmp / 2.0);
	}
	return numOnes;
}


/**
 * checks whether the bit at index is 1
 * number is treated as if it were an integer in the range 0-255
 *
 */
bool isBitSet(float number, float index){
	return mod(floor(number / pow(2.0, index)), 2.0) != 0.0;
}


/**
 * find the octree depth at the point position
 */
float getOctreeDepth(){
	vec3 offset = vec3(0.0, 0.0, 0.0);
	float iOffset = 0.0;
	float depth = 0.0;
	for(float i = 0.0; i <= octreeLevels + 1.0; i++){
		
		float nodeSizeAtLevel = nodeSize / pow(2.0, i);
		vec3 index3d = (position - offset) / nodeSizeAtLevel;
		index3d = floor(index3d + 0.5);
		float index = 4.0*index3d.x + 2.0*index3d.y + index3d.z;
		
		vec4 value = texture2D(visibleNodes, vec2(iOffset / 2048.0, 0.0));
		float mask = value.r * 255.0;
		if(isBitSet(mask, index)){
			// there are more visible child nodes at this position
			iOffset = iOffset + value.g * 255.0 + numberOfOnes(mask, index - 1.0);
			depth++;
		}else{
			// no more visible child nodes at this position
			return depth;
		}
		offset = offset + (vec3(1.0, 1.0, 1.0) * nodeSizeAtLevel * 0.5) * index3d;
	}
		
	return depth;
}

#endif

vec3 classificationColor(float classification){
  float c = mod(classification, 16.0);
	vec2 uv = vec2(c / 255.0, 0.5);
	vec3 color = texture2D(classificationLUT, uv).rgb;

	return color;
}

void colors(){
	vec3 result;

	#ifdef color_type_rgb
		result = color;
	#elif defined color_type_height
		vec4 world = modelMatrix * vec4( position, 1.0 );
		float w = (world.y - heightMin) / (heightMax-heightMin);
	
		result = texture2D(gradient, vec2(w,1.0-w)).rgb;
	#elif defined color_type_depth
		float d = -mvPosition.z ;
		result = vec3(d, vDepth, 0.0);
	#elif defined color_type_intensity
		float w = (intensity - intensityMin) / (intensityMax - intensityMin);
		result = vec3(w, w, w);
	#elif defined color_type_intensity_gradient
		float w = (intensity - intensityMin) / intensityMax;
		result = texture2D(gradient, vec2(w,1.0-w)).rgb;
	#elif defined color_type_color
		result = uColor;
	#elif defined color_type_octree_depth
		float depth = getOctreeDepth();
		float w = depth / 10.0;
		result = texture2D(gradient, vec2(w,1.0-w)).rgb;
	#elif defined color_type_point_index
		result = indices.rgb;
	#elif defined color_type_classification
		result = classificationColor(classification);
	#elif defined color_type_return_number
		float w = (returnNumber - 1.0) / 4.0 + 0.1;
		result = texture2D(gradient, vec2(w, 1.0 - w)).rgb;
	#elif defined color_type_source
		float w = mod(pointSourceID, 10.0) / 10.0;
		result = texture2D(gradient, vec2(w,1.0 - w)).rgb;
	#elif defined color_type_normal
		result = (modelMatrix * vec4(normal, 0.0)).xyz;
	#endif
	
	vColor = result;
}

void pointSize(){
	float pointSize = 1.0;
	
	float projFactor = 1.0 / tan(fov / 2.0);
	projFactor /= -vViewPos.z;
	projFactor *= screenHeight / 2.0;
	float r = spacing * 1.5;
	vRadius = r;
	#if defined fixed_point_size
		pointSize = size;
	#elif defined attenuated_point_size
		pointSize = size * projFactor;
	#elif defined adaptive_point_size
		float worldSpaceSize = size * r / pow(1.9, getOctreeDepth());
		pointSize = worldSpaceSize * projFactor;
	#endif

	pointSize = max(minSize, pointSize);
	pointSize = min(maxSize, pointSize);
	
	vRadius = pointSize / projFactor;
	
	gl_PointSize = pointSize;
}

void clipping(){
	#if defined use_clip_box
		bool insideAny = false;
		for(int i = 0; i < clip_box_count; i++){
			vec4 clipPosition = clipBoxes[i] * modelMatrix * vec4( position, 1.0 );
			bool inside = -0.5 <= clipPosition.x && clipPosition.x <= 0.5;
			inside = inside && -0.5 <= clipPosition.y && clipPosition.y <= 0.5;
			inside = inside && -0.5 <= clipPosition.z && clipPosition.z <= 0.5;
			insideAny = insideAny || inside;
		}
		if(!insideAny){
	
			#if defined clip_outside
				gl_Position = vec4(1000.0, 1000.0, 1000.0, 1.0);
			#elif defined clip_highlight_inside && !defined(color_type_depth)
				float c = (vColor.r + vColor.g + vColor.b) / 6.0;
			#endif
		}else{
			#if defined clip_highlight_inside
			vColor.r += 0.5;
			#endif
		}
	
	#endif
}

void main() {

	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	vViewPos = mvPosition.xyz;
	gl_Position = projectionMatrix * mvPosition;
	vOpacity = opacity;
	vLinearDepth = -mvPosition.z;
	vDepth = mvPosition.z / gl_Position.w;


	colors();
	pointSize();
	clipping();
}
