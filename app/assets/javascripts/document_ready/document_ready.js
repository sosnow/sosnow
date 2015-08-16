$(document).ready(function() {

// Event listeners:

  additionalPersonXForm = $('#additional-people-invisible').html();

  $('#autocomplete').on('keyup', function(e) {
    if (( $('#autocomplete').val() ).length > 0) {
      $('#location-from-autocomplete-confirmation').show(); 
      $('#ok-location-button').css('background', '');
    }
  });

  $('#description').on('keyup', function() {
    firstPersonDescription = $('#description').val();
  });

  $('#phone').on('keyup', function() {
    firstPersonPhone = $('#phone').val();
  });

  $('#email').on('keyup', function() {
    firstPersonEmail = $('#email').val();
  });

  $('#first-request-help-button').on('click', function() {
    $('#help-form').hide();
    $('#help-form-submitted-message').show();
    $('#additional-people-question').show();
    $('#help-form-additional-people').show();
  });

  $('#correct-location-button').on('click', function() {
    $(this).css('background', 'yellow');
    console.log('firstPersonGeolocation: ' + firstPersonGeolocation);
    console.log('firstPersonLocation: ' + firstPersonLocation);
  });

  $('#incorrect-location-button').on('click', function() {
    $(this).css('background', 'yellow');
    firstPersonLocation = undefined;
    firstPersonGeolocation = undefined;
    $('#location-from-ip-div').hide();
    $('#autocomplete').attr('placeholder', 'Enter location');
    $('#locationField').show();
    console.log('firstPersonLocation: ' + firstPersonLocation);
    console.log('firstPersonGeolocation: ' + firstPersonGeolocation);
  });

  $('#ok-location-button').on('click', function() {
    $('#change-location-button').css('background', '');
    $(this).css('background', 'yellow');
    firstPersonLocation = $('#autocomplete').val();
    var confirmedPlace = autocomplete.getPlace();
    var confirmedPlaceLatitude = confirmedPlace.geometry.location.G;
    var confirmedPlaceLongitude = confirmedPlace.geometry.location.K;
    firstPersonGeolocation = '['+ confirmedPlaceLatitude + ',' + confirmedPlaceLongitude + ']';
    $('#geolocat').val('['+ confirmedPlaceLatitude + ',' + confirmedPlaceLongitude + ']');
    console.log('firstPersonLocation: ' + firstPersonLocation);
    console.log('firstPersonGeolocation: ' + firstPersonGeolocation);
  });

  $('#change-location-button').on('click', function() {
    firstPersonLocation = undefined;
    firstPersonGeolocation = undefined;
    $('#autocomplete').val('');
    $('#ok-location-button').css('background', '');
    console.log('firstPersonLocation: ' + firstPersonLocation);
    console.log('firstPersonGeolocation: ' + firstPersonGeolocation);
  });

  $('#first-request-help-button').on('click', function() {
    additionalPeopleSecondDescription = 'Person entered into the data base by ' + firstPersonName + ', who also requested help for themselves and was likely near this person at the time the request was made. Contact info for ' + firstPersonName + ': ' + firstPersonEmail + ' (email), ' + firstPersonPhone + ' (phone). Additional information submitted along ' + firstPersonPhone + '\'s own help request: [' + firstPersonDescription + '].';
      console.log(additionalPeopleSecondDescription);
  })

  $('#first-additional-person-button').on('click', function() {
    additionalPeopleCount++;
    var additionalPersonForm = additionalPersonXForm.replace(/#num/g, '#' + (additionalPeopleCount + 1)).replace(/_person_/g, '_' + additionalPeopleCount);
    additionalPeopleForms.push(additionalPersonForm);
    $('#help-form-submitted-message').hide();
    $('#additional-people-question').hide();
    $('#first-additional-person-button').hide();
    $('#no-additional-person-button').hide();
    $('#additional-people').append(additionalPeopleForms[additionalPeopleForms.length - 1]);
    $('#subsequent-additional-person-button').show();
    $('#submit-all-button').show();
  });

  $('#subsequent-additional-person-button').on('click', function() {
    additionalPeopleCount++;
    var additionalPeopleCountNowMinusOne = additionalPeopleCount - 1;
    var additionalPersonForm = additionalPersonXForm.replace(/#num/g, '#' + (additionalPeopleCount + 1)).replace(/_person_/g, '_' + additionalPeopleCount);
    additionalPeopleForms.push(additionalPersonForm);
    additionalPeople.push( new AdditionalPerson ( ($('#name_' + additionalPeopleCountNowMinusOne ).val()), ($('[name=gender_' + additionalPeopleCountNowMinusOne + ']:checked').val()), ($('[name=age_' + additionalPeopleCountNowMinusOne + ']:checked').val()), ($('[name=injured_' + additionalPeopleCountNowMinusOne + ']:checked').val()), firstPersonLocation, firstPersonGeolocation, additionalPeopleSecondDescription) );
    $('#additional-people').append(additionalPeopleForms[additionalPeopleForms.length - 1]);
  });

  $('#submit-all-button').on('click', function () {
    var lastAdditionalPersonNumber = additionalPeople.length + 1
    additionalPeople.push( new AdditionalPerson ( ($('#name_' + lastAdditionalPersonNumber ).val()), ($('[name=gender_' + lastAdditionalPersonNumber + ']:checked').val()), ($('[name=age_' + lastAdditionalPersonNumber + ']:checked').val()), ($('[name=injured_' + lastAdditionalPersonNumber + ']:checked').val()), firstPersonLocation, firstPersonGeolocation, additionalPeopleSecondDescription) );
    $("#all-people-submitted-button").click();
  })

  $('#all-people-submitted-button').on('click', function() {
    console.log('All people submitted.');
  });

});