function where(arr, properties){
	var output;
	var obj;
	for (var i=0; i<arr.length; i++){
		obj = arr[i];
		match = true;
		for (var key in properties) {
			if (obj.hasOwnProperty(key) && obj[key] === properties[key]) {
			
			} else {
				match = false;

				break;
			}
		}
			if (match){

				return obj;
			}	
			
			
		}
		return null;
	}
	


module.exports = where;
