// Getting geolocation from HTML5:


var showPosition = function(position) {

  var latitudeFromHtml5 = position.coords.latitude;
  var longitudeFromHtml5 = position.coords.longitude;

  $.ajax({
    cache: false,
    type: 'GET',
    dataType: 'json',
    url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitudeFromHtml5 + ',' + longitudeFromHtml5 + '&sensor=true',
    success: function(data) {
      var locality = undefined;
      var administrativeAreaLevel1 = undefined;
      var administrativeAreaLevel2 = undefined;
      var country = undefined;

      for (var i = 0; i < (data.results).length; i++) {
        for (var j = 0; j < (data.results[i].address_components).length; j++) {
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

      firstPersonGeolocationFromHtml5 = latitudeFromHtml5 + ',' + longitudeFromHtml5;
      firstPersonLocationFromHtml5 = locationComponentsString;

      console.log('Location from HTML5: success');
    },
    error: function() {
      console.log('Location from HTML5: error');
    },
    timeout: 6000,
    complete: function(jqXHR, textStatus) { 
      if (textStatus == "timeout") {
        console.log('Location from HTML5: timeout');
      }
    }
  }).done(function() {
    console.log('Location from HTML5: done');
  }).fail(function() {
    console.log('Location from HTML5: fail');
  });
}

var showError = function() {
  console.log('showError');
  $('#location-from-ip-div').hide();
  $('#locationField').show();
}

var getLocationFromHtml5 = function() {
  if (navigator.geolocation) {
    console.log('getLocationFromHtml5 if is true')
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  }
}