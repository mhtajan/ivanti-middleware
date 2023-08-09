
var url = '';

// Header Parameter Json Variable for Request
var getJsonRequestSettings = function () {
	return {
		Headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json'
		}
	};
};


// JSON Payload Data
var data = {
  
};

var ConvertToJSONString = JSON.stringify(data);


// Execute API Call
const res = ExecuteWebRequest('POST', url, ConvertToJSONString, getJsonRequestSettings());


