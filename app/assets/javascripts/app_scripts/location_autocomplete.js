// Using the autocomplete feature of the Google Places API
var autocomplete;

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */(document.getElementById('autocomplete'))
    // , {types: ['geocode']}
  );

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', function() {
    var changedPlace = autocomplete.getPlace();
    var changedPlaceLatitude = changedPlace.geometry.location.G;
    var changedPlaceLongitude = changedPlace.geometry.location.K;
    firstPersonGeopoint = '['+ changedPlaceLatitude + ',' + changedPlaceLongitude + ']';
    $('#geopoint').val('['+ changedPlaceLatitude + ',' + changedPlaceLongitude + ']');
    $('location-from-autocomplete-confirmation').show();
    console.log('firstPersonGeopoint: ' + firstPersonGeopoint);
  });
}