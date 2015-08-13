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

         
        // this.collection.loginSeeker(data, function (err, seeker) {
        //   if (err) { self.loginFailure(); }
        //   else { self.loginSuccess(); }
        // });
          
          $.ajax({
            type: "POST",
            url: '/sessions',
            data: data
           
          });

          debugger;
        // this.collection.create(data);
        this.$el.empty();
        this.$el.html(templateAfterSign);
   
		console.log('logged in man!');
     
	},
  loginSuccess: function () {
    // this.form.data('user-authorized', true);
    // this.form.submit();
    console.log('logged in');
  },

  loginFailure: function () {
    console.log('failed!!');
  }

});

