 // Getting geolocation from IP address:

  var latitudeFromIp = undefined;
  var longitudeFromIp = undefined;
  var cityFromIp = undefined;
  var regionFromIp = undefined;
  var countryFromIp = undefined;
  var successGettingLocationFromIp = false;

  var getLocationFromIp = function() {
    $.ajax({
      cache: false,
      type: 'GET',
      datatype: 'json',
      url: 'https://freegeoip.net/json/',
      success: function(data) {
        $('#location-label').html('Trying to get location...');

        latitudeFromIp = data.latitude;
        longitudeFromIp = data.longitude;
        cityFromIp = data.city;
        regionFromIp = data.region_code;
        countryFromIp = data.country_name;
        successGettingLocationFromIp = true;

        $('#geolocation').val(latitudeFromIp + ',' + longitudeFromIp);
        firstPersonGeolocation = latitudeFromIp + ',' + longitudeFromIp;
        $('#location').val(cityFromIp +', ' + regionFromIp + ', ' + countryFromIp);
        firstPersonLocation = cityFromIp +', ' + regionFromIp + ', ' + countryFromIp;
        $('#location-from-ip-display-box').val(cityFromIp +', ' + regionFromIp + ', ' + countryFromIp);
        $('#location-label').html('Location:');
        $('#locationField').hide();
        $('#location-from-ip-div').show();

        console.log('Location from HTML5: success');
      },
      error: function() {
        console.log('Location from HTML5: error');
        $('#location-label').html('Location:');
        $('#location-from-ip-div').hide();
        $('#locationField').show();
      },
      timeout: 8000,
      complete: function(jqXHR, textStatus) { 
        if (textStatus == "timeout") {
          console.log('Location from HTML5: timeout');
        }
      }
    });
  };
  getLocationFromIp();