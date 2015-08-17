$(document).ready(function() {

// Event listeners:

  additionalPersonXForm = $('#additional-people-invisible').html();

  $('#autocomplete').on('keyup', function(e) {
    var keyPressed = e.keyCode || e.which;

    // keyCode 13 is return key; keyCode 9 is tab key
    if ((keyPressed !== 13) && (keyPressed !== 9)) {
      $('#geolocation').val('')
      $('#location_specific').val($('#autocomplete').val());
      console.log('geolocation: ' + $('#geolocation').val());
      console.log('location specific: ' + $('#location_specific').val());
    }
  });

  $('#first-request-help-button').on('click', function() {
    $('#help-form').hide();
    $('#help-form-submitted-message').show();
    $('#additional-people-question').show();
    $('#help-form-additional-people').show();
  });

  $('#correct-location-button').on('click', function() {
    $(this).css('background', 'yellow');
    // console.log('firstPersonGeolocation: ' + firstPersonGeolocation);
    // console.log('firstPersonLocation: ' + firstPersonLocation);
    console.log('geolocation: ' + $('#geolocation').val());
    console.log('location: ' + $('#location').val());
  });

  $('#incorrect-location-button').on('click', function() {
    $(this).css('background', 'yellow');
    $('#geolocation').val('');
    $('#location').val('');
    // firstPersonLocation = undefined;
    // firstPersonGeolocation = undefined;
    $('#location-from-ip-div').hide();
    $('#autocomplete').attr('placeholder', 'Enter location');
    $('#locationField').show();
    // console.log('firstPersonLocation: ' + firstPersonLocation);
    // console.log('firstPersonGeolocation: ' + firstPersonGeolocation);
    console.log('geolocation: ' + $('#geolocation').val());
    console.log('location: ' + $('#location').val());
  });

  $('#first-request-help-button').on('click', function() {
    var firstPersonLocationSpecific = $('#location_specific').val();
    var firstPersonName = $('#name').val();
    var firstPersonDescription = $('#description').val();
    var firstPersonPhone = $('#phone').val();
    var firstPersonEmail = $('#email').val();
    if ($('#location_specific').val() !== '') {
      additionalPeopleSecondDescription = 'Person entered into the data base by ' + firstPersonName + ', who also requested help for themselves and was likely near this person at the time the request was made. Contact info for ' + firstPersonName + ': [email: ' + firstPersonEmail + ' | phone: ' + firstPersonPhone + ']. Additional information submitted along ' + firstPersonPhone + '\'s own help request: [' + firstPersonDescription + '].'
    } else { 
      additionalPeopleSecondDescription = 'Person entered into the data base by ' + firstPersonName + ', who also requested help for themselves and was likely near this person at the time the request was made. \nContact info for ' + firstPersonName + ': [email: ' + firstPersonEmail + ' | phone: ' + firstPersonPhone + ']. Additional information submitted along ' + firstPersonPhone + '\'s own help request: [' + firstPersonDescription + ']. \n[Additional location information: ' +  $('[name=location_specific]').val() + ']'
    }
    console.log(additionalPeopleSecondDescription);
  });

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
    additionalPeople.push( new AdditionalPerson ( ($('#name_' + additionalPeopleCountNowMinusOne ).val()), ($('[name=gender_' + additionalPeopleCountNowMinusOne + ']:checked').val()), ($('[name=age_' + additionalPeopleCountNowMinusOne + ']:checked').val()), ($('[name=injured_' + additionalPeopleCountNowMinusOne + ']:checked').val()), $('[name=location]').val(), $('[name=geolocation]').val(), additionalPeopleSecondDescription) );
    $('#additional-people').append(additionalPeopleForms[additionalPeopleForms.length - 1]);
  });

  $('#submit-all-button').on('click', function () {
    var lastAdditionalPersonNumber = additionalPeople.length + 1
    additionalPeople.push( new AdditionalPerson ( ($('#name_' + lastAdditionalPersonNumber ).val()), ($('[name=gender_' + lastAdditionalPersonNumber + ']:checked').val()), ($('[name=age_' + lastAdditionalPersonNumber + ']:checked').val()), ($('[name=injured_' + lastAdditionalPersonNumber + ']:checked').val()), $('[name=location]').val(), $('[name=geolocation]').val(), additionalPeopleSecondDescription) );
    $("#all-people-submitted-button").click();
  })

  $('#all-people-submitted-button').on('click', function() {
    console.log('All people submitted.');
  });

});