$(document).ready(function() {


    var latitude;
    var longitude;
    var url;

    $.ajax({
    	url: "https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=6Fon3reJZdlgOSp3BV1AcQ&client_secret=dGgRBklKugJc5yO2X3JqXAmkfmjFupxaEoINmMkZUGsxWNcVvSGaRCH4rQ646GFM",
    	method: "POST"
    }).done(function(response){
    	console.log(response);
    })

    $(".location-current").on("click", function() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                $(".location").append("My location is Lat: " + latitude + "| Lng: " + longitude);
            }, function(error) {
                if (error.code == error.PERMISSION_DENIED) {
                    $(".location").append("You blocked us. Please enter a location.");
                }
            })
        }

        /*$.ajax({
        	url: url,
        	method: "GET"
        }).done(function(response) {

        })*/
    })


    $(".form-button").on("click", function() {

        event.preventDefault();

        var street = $(".street").val();
        var city = $(".city").val();
        var state = $(".state").val();
        var zip = $(".zip").val();

        $(".street").attr("value", "Street Address");
        $(".city").attr("value", "City");
        $(".state").attr("value", "State");
        $(".zip").attr("value", "Zip Code");
    })


    //Search form interaction
    $(".street").focus(function() {
    	$(this).attr("value", "");
    })
    $(".city").focus(function() {
    	$(this).attr("value", "");
    })
    $(".state").focus(function() {
    	$(this).attr("value", "");
    })
    $(".zip").focus(function() {
    	$(this).attr("value", "");
    })

    $(".street").blur(function() {
    	$(this).attr("value", "Street Address");
    })
    $(".city").blur(function() {
    	$(this).attr("value", "City");
    })
    $(".state").blur(function() {
    	$(this).attr("value", "State");
    })
    $(".zip").blur(function() {
    	$(this).attr("value", "Zip Code");
    })
    //End search form interaction

//End of document ready function
})