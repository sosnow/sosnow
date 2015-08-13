App.Views.Forms = Backbone.View.extend({
    el: '#page',
    events: {
        'click #submit': 'addVictim',
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
            age: $('[name=age]').val(),
            gender: $('[name=gender]').val(),
            location: $('[name=location]').val(),
            description: $('[name=description]').val(),
            email: $('[name=email]').val(),
            phone: $('[name=phone]').val()
        };
        var templateTwo = HandlebarsTemplates['help_form_submitted'];
        this.collection.create(data);
        this.$el.empty();
        this.$el.html(templateTwo);
        this.childElement();
    },
    childElement: function() {
        $("#help-form-after-submission").html(this.template);
        // var data = {
        //     name: $('[name=name]').val(),
        //     age: $('[name=age]').val(),
        //     gender: $('[name=gender]').val(),
        //     location: $('[name=location]').val(),
        //     description: $('[name=description]').val(),
        //     email: $('[name=email]').val(),
        //     phone: $('[name=phone]').val()
        // };
        // for (var key in data) {
        //     key.empty();
        // }
    }

});
