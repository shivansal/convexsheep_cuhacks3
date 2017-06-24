//What we need to do- put an X next to it if it is done

//Returning JSON data after finding a match using firebase
//Returning directions after getting start and end points 
//Reading from CSV with addresses 
//Twilio text notification 

var yourMatch = null;
var start = null;
var end = null;

//sample user data
var user = {
		"firstname": "Shiv",
		"lastname": "Ansal",
		"phone": "1(408)816-4535",
		"parentsphone": "1(408)712-7733",
		"start": "10470 Beardon Drive, Cupertino, CA",
		"end": "10470 Beardon Drive, Cupertino, CA",
		"summary": "I am a high schooler!"
	}

//Will find you a match 
$('#getDirections').click(function(){
	start = $('#startLocation').val()
	end = $('#endLocation').val()
	findUser(start,end)
})

$('#getUserData').click(function(){
	console.log(yourMatch) //turn into returns
})

//Returns the direction object (JSON)
$('#getDirectionRoute').click(function(){
	if(yourMatch != null){
    	directionsService = new google.maps.DirectionsService();
    	var request = {
    		origin: start,
    		destination: end,
    		travelMode: google.maps.DirectionsTravelMode['BICYCLING']
    	};

    	directionsService.route(request, function(response, status){
       		if (status == google.maps.DirectionsStatus.OK){
       			console.log(response) //turn into returns
       		}
        })
	}
})

//Will find you a proper user TO-DO: needs firebase implementation 
function findUser(start, end){
	directionsServiceForTime = new google.maps.DirectionsService();
    var requestForTime = {
    	origin: start,
   		destination: user.start,
   		travelMode: google.maps.DirectionsTravelMode['BICYCLING']
    };
    directionsServiceForTime.route(requestForTime, function(response, status){
       	if (status == google.maps.DirectionsStatus.OK){
       		if(parseInt(response.routes[0].legs[0].duration.text) < 5){
       			yourMatch = user;
       		}
       	}
    })
}



