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
          
          $.ajax({
            type: "POST",
            url: '/sessions',
            data: data,
           success: function(){
              App.signlog = new App.Views.Signlog({collection: App.seekers});
              App.search = new App.Views.Search({collection: App.victims});
           },
           fail: function(){
           }
          });

   
    console.log('logged in man!');
    console.log(data);

    // this.loginSuccess();
     
  },
});

