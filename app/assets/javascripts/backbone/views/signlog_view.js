App.Views.Signlog = Backbone.View.extend({
    el: '#page',

    initialize: function() {
        console.log('sign and log in view loaded');
        console.log(gon.my_session_variable);
        
        
        console.log(this.collection);
  
		this.getData();


    },
    current_user: function(data) {
        	
        	console.log(data);
        	var id = data.responseJSON;
        	console.log(id);
        	
        	return data;

    },
    getData: function() {
    	var data = $.ajax({
		    url: '/sessions/new',
		    type: 'GET',
		    success: function(data) {
		        console.log('log me out bro!');
		        console.log(data);
		        
		        return data;
		    }
		});
		this.current_user(data);

    },
    events: {
		'click .log-out': 'logOut'
	},
	logOut: function() {
		console.log('log me out bro!');
		$.ajax({
		    url: '/sessions',
		    type: 'DELETE'
		   
		});
		this.login();
	},
	login: function() {
		console.log('log me in!');
		
        $.ajax({
        type: 'GET',
        url: 'seekers/'+gon.my_session_variable,
        success: function(data) {
          console.log('hello');
          console.log(data);
          var template = HandlebarsTemplates['signup_login']
          $('#sign-log').html(template(data));
          
        }

      }).fail(function() {
      		var template = HandlebarsTemplates['signup_login']
          $('#sign-log').html(template);
          
      });     

	}


});
