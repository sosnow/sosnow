App.Views.Signups = Backbone.View.extend({
  	el: '#search-bar',
  	initialize: function () {
    	console.log('signup view loaded');
    this.template = HandlebarsTemplates['seeker_signup'];
    this.render();
	},
	render: function() {
		this.$el.html(this.template);
	},
	events: {
		'click #signup-button': 'createSeeker'
	},
	createSeeker: function() {
      var data = {
            
            email: $('[name=email]').val(),
            password: $('[name=password]').val(),
            password_confirmation: $('[name=password_confirmation]').val(),
            name: $('[name=name]').val()
      };
        var templateAfterSign = HandlebarsTemplates['search_box'];

        console.log(data);

        this.collection.create(data);
        this.$el.empty();
        this.$el.html(templateAfterSign);
   
		console.log('what do you seek?');
     
	}
});

