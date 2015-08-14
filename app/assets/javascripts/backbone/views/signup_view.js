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
            name: $('[name=name]').val(),
            location: $('[name=location]').val(),
            phone: $('[name=phone]').val()
      };

       var data1 = {
            
            email: $('[name=email]').val(),
            password: $('[name=password]').val()
      };

        this.collection.create(data);


        var templateAfterSign = HandlebarsTemplates['search_box'];
          
          $.ajax({
            type: "POST",
            url: '/sessions',
            data: data1,
           success: function(){
              App.signlog = new App.Views.Signlog({collection: App.seekers});
              App.search = new App.Views.Search({collection: App.victims});
           },
           fail: function(){
           }
          });

   
    console.log('logged in man!');
    console.log(data);
           
   
		console.log('what do you seek?');
     
	}
});

