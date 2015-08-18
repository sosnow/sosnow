App.Views.Forms = Backbone.View.extend({
    el: '#page',
    events: {
        'click #first-request-help-button': 'addVictim',
        'click #all-people-submitted-button': 'addAdditionalVictims',
        'keyup #autocomplete': 'geoAutocomplete',
        'click #correct-location-button': 'correctLocationCss',
        'click #incorrect-location-button': 'incorrectLocationCss',
        'click #first-additional-person-button': 'firstAddPerson',
        'click #subsequent-additional-person-button': 'subsequentAddPerson',
        'click #submit-all-button': 'submitAll',
        'click #no-additional-person-button': 'backToSearchPage'


    },
    initialize: function() {
        console.log('Form View Loaded');
        this.template = HandlebarsTemplates['help_form'];
        this.render();
    },
    render: function() {
        this.$el.html(this.template);
    },
    geolocCheck: function (){
        if ($('[name=geolocation').val().length>4){
            return $('[name=geolocation').val();
        }
    },
    specificLocCheck: function() {
       if ( $('[name=location_specific]').val() !== 'no-indiv1dual-d3scription-4-th!s-p3erson') {
           return $('[name=description]').val()
       } else {
           if ($('[name=location_specific]').val() !== '' ) {
               return ($('[name=description]').val() + '\n[Additional location information: ' +  $('[name=location_specific]').val() + ']') 
           } else {
               return $('[name=description]').val()
           }
       }
   },
    addVictim: function() {
        console.log('clicked');
        $('#help-form').hide();
        var data = {
            name: $('[name=name]').val(),
            age: $('[name=age]:checked').val(),
            gender: $('[name=gender]:checked').val(),
            location: $('[name=location]').val(),
            geolocation: this.geolocCheck(),
            description: this.specificLocCheck(),
            injured: $('[name=injured]').val(),
            email: $('[name=email]').val(),
            phone: $('[name=phone]').val(),
            convcreateddate: this.dateConversion()
        };
            var firstPersonLocationSpecific = $('#location_specific').val();
            var firstPersonName = $('#name').val();
            var firstPersonDescription = $('#description').val();
            var firstPersonPhone = $('#phone').val();
            var firstPersonEmail = $('#email').val();
            if ($('#location_specific').val() !== '') {
              additionalPeopleSecondDescription = 'Person entered into the database by ' + firstPersonName + ', who also requested help for themselves and was likely near this person at the time the request was made. Contact info for ' + firstPersonName + ': [email: ' + firstPersonEmail + ' | phone: ' + firstPersonPhone + ']. Additional information submitted along ' + firstPersonPhone + '\'s own help request: [' + firstPersonDescription + '].'
            } else { 
              additionalPeopleSecondDescription = 'Person entered into the database by ' + firstPersonName + ', who also requested help for themselves and was likely near this person at the time the request was made. \nContact info for ' + firstPersonName + ': [email: ' + firstPersonEmail + ' | phone: ' + firstPersonPhone + ']. Additional information submitted along ' + firstPersonPhone + '\'s own help request: [' + firstPersonDescription + ']. \n[Additional location information: ' +  $('[name=location_specific]').val() + ']'
            }
        console.log(data);
        this.collection.create(data);
        $('#help-form-submitted-message').show();
        $('#additional-people-question').show();
        $('#help-form-additional-people').show();
    },
    addAdditionalVictims: function() {
        var additionalPeopleCount = additionalPeople.length;
        for (i = 0; i < additionalPeopleCount; i++) {
            var data = {
                name: additionalPeople[i].name,
                gender: additionalPeople[i].gender,
                age: additionalPeople[i].age,
                injured: additionalPeople[i].injured,
                location: additionalPeople[i].location,
                geolocation: additionalPeople[i].geolocation,
                second_description: additionalPeople[i].second_description,
                convcreateddate: this.dateConversion()
            };
            this.collection.create(data);
        }
            console.log('All people submitted.');
    },
    dateConversion: function(){
        //Adds date in Western Format
        var currentDate = new Date();
        var mmMonth = function (m){
            if (m.getMonth()<9){
                var incrementer = m.getMonth() + 1;
                return "0" + incrementer;
            }
            else
                return m.getMonth() + 1;
        };
        return mmMonth(currentDate) + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();
    },
    destroyView: function() {
    // COMPLETELY UNBIND THE VIEW
    this.undelegateEvents();
    this.$el.removeData().unbind(); 
    // Remove view from DOM
    // this.remove();  
    // Backbone.View.prototype.remove.call(this);
},
geoAutocomplete: function(e) {
    var keyPressed = e.keyCode || e.which;

    // keyCode 13 is return key; keyCode 9 is tab key
    if ((keyPressed !== 13) && (keyPressed !== 9)) {
      $('#geolocation').val('')
      $('#location_specific').val($('#autocomplete').val());
      console.log('geolocation: ' + $('#geolocation').val());
      console.log('location specific: ' + $('#location_specific').val());
    }
  },
  correctLocationCss: function() {
    $(this).css('background', 'yellow');
    // console.log('firstPersonGeolocation: ' + firstPersonGeolocation);
    // console.log('firstPersonLocation: ' + firstPersonLocation);
    console.log('geolocation: ' + $('#geolocation').val());
    console.log('location: ' + $('#location').val());
  },
  incorrectLocationCss: function() {
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
  },
  firstRequestHelpButton: function() {
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
  },
  firstAddPerson: function() {
    additionalPeopleCount++;
    var additionalPersonXForm = $('#additional-people-invisible').html();
    var additionalPersonForm = additionalPersonXForm.replace(/#num/g, '#' + (additionalPeopleCount + 1)).replace(/_person_/g, '_' + additionalPeopleCount);
    additionalPeopleForms.push(additionalPersonForm);
    $('#help-form-submitted-message').hide();
    $('#additional-people-question').hide();
    $('#first-additional-person-button').hide();
    $('#no-additional-person-button').hide();
    $('#additional-people').append(additionalPeopleForms[additionalPeopleForms.length - 1]);
    $('#subsequent-additional-person-button').show();
    $('#submit-all-button').show();
  },
  subsequentAddPerson: function() {
    additionalPeopleCount++;
    var additionalPersonXForm = $('#additional-people-invisible').html();
    var additionalPeopleCountNowMinusOne = additionalPeopleCount - 1;
    var additionalPersonForm = additionalPersonXForm.replace(/#num/g, '#' + (additionalPeopleCount + 1)).replace(/_person_/g, '_' + additionalPeopleCount);
    additionalPeopleForms.push(additionalPersonForm);
    additionalPeople.push( new AdditionalPerson ( ($('#name_' + additionalPeopleCountNowMinusOne ).val()), ($('[name=gender_' + additionalPeopleCountNowMinusOne + ']:checked').val()), ($('[name=age_' + additionalPeopleCountNowMinusOne + ']:checked').val()), ($('[name=injured_' + additionalPeopleCountNowMinusOne + ']:checked').val()), $('[name=location]').val(), $('[name=geolocation]').val(), additionalPeopleSecondDescription) );
    $('#additional-people').append(additionalPeopleForms[additionalPeopleForms.length - 1]);
  },
  submitAll: function () {
    var lastAdditionalPersonNumber = additionalPeople.length + 1;
    additionalPeople.push( new AdditionalPerson ( ($('#name_' + lastAdditionalPersonNumber ).val()), ($('[name=gender_' + lastAdditionalPersonNumber + ']:checked').val()), ($('[name=age_' + lastAdditionalPersonNumber + ']:checked').val()), ($('[name=injured_' + lastAdditionalPersonNumber + ']:checked').val()), $('[name=location]').val(), $('[name=geolocation]').val(), additionalPeopleSecondDescription) );
    $("#all-people-submitted-button").click();
    this.destroyView();
    goToSearch();

  },
  backToSearchPage: function(){
    this.destroyView();
    goToSearch();
  }


});
