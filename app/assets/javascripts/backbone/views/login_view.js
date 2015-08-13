App.Views.Logins = Backbone.View.extend({
  	el: '#search-bar',
  	initialize: function () {
    	console.log('login view loaded');
    this.template = HandlebarsTemplates['seeker_login'];
    this.render();
	},
	render: function() {
		this.$el.html(this.template);
	},
	events: {
		'click #login-button': 'loginSeeker'
	},
	loginSeeker: function() {
      var data = {
            
            email: $('[name=email]').val(),
            password: $('[name=password]').val()
      };
        var templateAfterSign = HandlebarsTemplates['search_box'];

        console.log(data);

        this.collection.create(data);
        this.$el.empty();
        this.$el.html(templateAfterSign);
   
		console.log('what do you seek?');
     
	}
});

