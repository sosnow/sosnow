  // Getting geolocation from HTML5:

  var latitudeFromHtml5 = undefined;
  var longitudeFromHtml5 = undefined;

  var showPosition = function(position) {
    $('#location-label').html('Getting location...');
    latitudeFromHtml5 = position.coords.latitude;
    longitudeFromHtml5 = position.coords.longitude;
    $.ajax({
      cache: false,
      type: 'GET',
      dataType: 'json',
      url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitudeFromHtml5 + ',' + longitudeFromHtml5 + '&sensor=true',
      success: function(data) {
        $('#geolocation').val('['+ latitudeFromHtml5 + ',' + longitudeFromHtml5 + ']');

        var locality = undefined;
        var administrativeAreaLevel1 = undefined;
        var administrativeAreaLevel2 = undefined;
        var country = undefined;

        for (var i = 0; i < (data.results).length; i++) {
          for (var j = 0; j < (data.results[i].address_components).length; j++) {
            var localityString = 'locality'
            if ((data.results[i].address_components[j].types).indexOf('locality') !== -1) {
              locality = data.results[i].address_components[j].long_name
            }
            break;
          }
          for (var j = 0; j < (data.results[i].address_components).length; j++) {
            if ((data.results[i].address_components[j].types).indexOf('administrative_area_level_1') !== -1) {
              administrativeAreaLevel1 = data.results[i].address_components[j].short_name
            }
            break;
          }
          for (var j = 0; j < (data.results[i].address_components).length; j++) {
            if ((data.results[i].address_components[j].types).indexOf('administrative_area_level_2') !== -1) {
              administrativeAreaLevel2 = data.results[i].address_components[j].long_name
            }
            break;
          }
          for (var j = 0; j < (data.results[i].address_components).length; j++) {
            if ((data.results[i].address_components[j].types).indexOf('country') !== -1) {
              country = data.results[i].address_components[j].long_name
            }
            break;
          }
        }

        var locationComponentsArray = [];
        var locationComponentsString = '';

        if (locality) {
          locationComponentsArray.push(locality);
        } else if (administrativeAreaLevel2) {
          locationComponentsArray.push(administrativeAreaLevel2);
        }
        if (administrativeAreaLevel1) {
          locationComponentsArray.push(administrativeAreaLevel1);
        }
        if (country) {
          locationComponentsArray.push(country);
        }
        locationComponentsString = locationComponentsArray.join(', ');

        firstPersonGeolocation = '['+ latitudeFromHtml5 + ',' + longitudeFromHtml5 + ']';
        $('#geolocation').val('['+ latitudeFromHtml5 + ',' + longitudeFromHtml5 + ']');
        firstPersonLocation = locationComponentsString;
        $('#location-from-ip-display-box').val(locationComponentsString);
        $('#location-label').html('Location:');
        $('#locationField').hide();
        $('#location-from-ip-div').show();

        console.log('showPosition AJAX request: success');
        console.log('geolocation from HTML5: ['+ latitudeFromHtml5 + ',' + longitudeFromHtml5 + ']');
        console.log('location found via HTML5: ' + $('#location-from-ip-display-box').val() );
        console.log('firstPersonGeolocation: ' + firstPersonGeolocation);
        console.log('firstPersonLocation: ' + firstPersonLocation);

      },
      error: function() {
        console.log('showPosition AJAX request: error');
        $('#location-label').html('Location:');
        if (successGettingLocationFromIp === false) {
          $('#location-from-ip-div').hide();
          $('#locationField').show();
        }
      },
      timeout: 10000,
      complete: function(jqXHR, textStatus) { 
        if (textStatus == "timeout") {
          console.log('showPosition AJAX request: timeout');
        }
      }
    });
  }

  var showError = function() {
    console.log('showError');
    $('#location-label').html('Location:');
    $('#location-from-ip-div').hide();
    $('#locationField').show();
  }

  var getLocationFromHtml5 = function() {
    $('#location-label').html('Trying to get location...');
    if (navigator.geolocation) {
      console.log('getLocationFromHtml5 if is true')
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
  }
  getLocationFromHtml5();