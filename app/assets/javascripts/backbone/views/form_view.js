App.Views.Forms = Backbone.View.extend({
    el: '#page',
    events: {
        'click #first-request-help-button': 'addVictim',
        'click #all-people-submitted-button': 'addAdditionalVictims',
        'keyup #autocomplete': 'geoAutocomplete',
        'click #first-request-help-button': 'firstHelpRequest',
        'click #correct-location-button': 'correctLocationCss',
        
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
        if ( $('[name=location_specific]').val() !== '') {
            return $('[name=description]').val()
        } else {
            return ($('[name=description]').val() + '\n[Additional location information: ' +  $('[name=location_specific]').val() + ']') 
        }
    },
    addVictim: function() {
        console.log('clicked');

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
        console.log(data);
        this.collection.create(data);
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
            };
            this.collection.create(data);
        }
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
geoAutocomplete: function() {
    $('#geolocation').val('');
    $('#location_specific').val('');
    $('#location_specific').val($('#autocomplete').val());
    // firstPersonGeolocation = undefined;
    // firstPersonLocation = undefined;
    console.log('geolocation: ' + $('#geolocation').val());
    console.log('location specific: ' + $('#location_specific').val());
  },
  firstHelpRequest: function() {
    $('#help-form').hide();
    $('#help-form-submitted-message').show();
    $('#additional-people-question').show();
    $('#help-form-additional-people').show();
  },
  correctLocationCss: function() {
    $(this).css('background', 'yellow');
    // console.log('firstPersonGeolocation: ' + firstPersonGeolocation);
    // console.log('firstPersonLocation: ' + firstPersonLocation);
    console.log('geolocation: ' + $('#geolocation').val());
    console.log('location: ' + $('#location').val());
  },

});
