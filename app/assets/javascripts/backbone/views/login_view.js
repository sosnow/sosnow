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
          
          $.ajax({
            type: "POST",
            url: '/sessions',
            data: data
           
          });
        this.$el.empty();
        this.$el.html(templateAfterSign);
   
		console.log('logged in man!');
    console.log(data);

    this.loginSuccess();
     
	},
  loginSuccess: function () {
    console.log('logged in');

      $.ajax({
        type: 'GET',
        url: 'seekers/'+gon.my_session_variable,
        success: function(data) {
          console.log('hello');
          console.log(data);
          
        }
      });

  },

  loginFailure: function () {
    console.log('failed!!');
  }

});

