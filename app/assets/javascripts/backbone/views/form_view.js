App.Views.Forms = Backbone.View.extend({
    el: '#page',
    events: {
        'click #first-request-help-button': 'addVictim',
        'click #all-people-submitted-button': 'addAdditionalVictims'
    },
    initialize: function() {
        console.log('Form View Loaded');
        this.template = HandlebarsTemplates['help_form'];
        this.render();
    },
    render: function() {
        this.$el.html(this.template);
    },
    addVictim: function() {
        var data = {
            name: $('[name=name]').val(),
            age: $('[name=age]:checked').val(),
            gender: $('[name=gender]:checked').val(),
            location: $('[name=location]').val(),
            geolocation: $('[name=geolocation').val(),
            description: $('[name=description]').val(),
            injured: $('[name=injured]').val(),
            email: $('[name=email]').val(),
            phone: $('[name=phone]').val()
        };
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
    }
});
