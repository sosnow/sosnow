 // Getting geolocation from IP address:

  var getLocationFromIp = function() {

    var latitudeFromIp = undefined;
    var longitudeFromIp = undefined;
    var cityFromIp = undefined;
    var regionFromIp = undefined;
    var countryFromIp = undefined;
    var successGettingLocationFromIp = false;

    $('location-label').val('Trying to get location...');
    $.ajax({
      cache: false,
      type: 'GET',
      datatype: 'json',
      url: 'https://freegeoip.net/json/',
      success: function(data) {
        latitudeFromIp = data.latitude;
        longitudeFromIp = data.longitude;
        cityFromIp = data.city;
        regionFromIp = data.region_code;
        countryFromIp = data.country_name;
        successGettingLocationFromIp = true;

        firstPersonGeolocationFromIp = latitudeFromIp + ',' + longitudeFromIp;
        firstPersonLocationFromIp = cityFromIp +', ' + regionFromIp + ', ' + countryFromIp;

        console.log('Location from IP: success');
      },
      error: function() {
        console.log('Location from IP: error');
        $('#location-from-ip-div').hide();
        $('#locationField').show();
      },
      timeout: 8000,
      complete: function(jqXHR, textStatus) { 
        if (textStatus == "timeout") {
          console.log('Location from IP: timeout');
        }
      }
    }).done(function() {
      console.log('Location from IP: done');
      if (firstPersonLocationFromHtml5 && firstPersonGeolocationFromHtml5) {
        $('#location').val(firstPersonLocationFromHtml5);
        // firstPersonLocation = firstPersonLocationFromHtml5
        $('#geolocation').val(firstPersonGeolocationFromHtml5);
        // firstPersonGeolocation = firstPersonGeolocationFromHtml5;

        $('location-label').val('Location:');
        $('#location-from-ip-display-box').val(firstPersonLocationFromHtml5);
        $('#locationField').hide();
        $('#location-from-ip-div').show();
      } else {
        $('#geolocation').val(firstPersonGeolocationFromIp);
        // firstPersonLocation = firstPersonLocationFromIp;
        $('#location').val(firstPersonLocationFromIp);
        // firstPersonGeolocation = firstPersonGeolocationFromIp;

        $('location-label').val('Location:');
        $('#location-from-ip-display-box').val(firstPersonLocationFromIp);
        $('#locationField').hide();
        $('#location-from-ip-div').show();
      }
    }).fail(function() {
      console.log('Location from IP: fail');
      if (firstPersonLocationFromHtml5 && firstPersonGeolocationFromHtml5) {
        $('#location').val(firstPersonLocationFromHtml5);
        // firstPersonLocation = firstPersonLocationFromHtml5
        $('#geolocation').val(firstPersonGeolocationFromHtml5);
        // firstPersonGeolocation = firstPersonGeolocationFromHtml5;

        $('location-label').val('Location:');
        $('#location-from-ip-display-box').val(firstPersonGeolocationFromHtml5);
        $('#locationField').hide();
        $('#location-from-ip-div').show();
      } else {
        $('location-label').val('Location:');
      }
    });
  };