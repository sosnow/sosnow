App.Views.Signlog = Backbone.View.extend({
    el: '#page',

    initialize: function() {
        console.log('sign and log in view loaded');
        console.log(gon.my_session_variable);
    	$.ajax({
		    url: '/sessions/new',
		    type: 'GET',
		    success: function(data) {
		        if (data){
              $.ajax({
              type: 'GET',
              url: 'seekers/'+ data,
              success: function(data) {
                console.log('hello');
                console.log(data);
                var template = HandlebarsTemplates['signup_login'];
                $('#sign-log').html(template(data));   
              }
                });
		          }
            else{
              var template = HandlebarsTemplates['signup_login']
              $('#sign-log').html(template);
            }
          }
		});
    },
    events: {
		'click .log-out': 'logOut',
    'click .seeker' : 'loadSeekerPage'
	},
	logOut: function() {
		console.log('log me out bro!');
		$.ajax({
		    url: '/sessions',
		    type: 'DELETE',
		    success: function(){
              var template = HandlebarsTemplates['signup_login']
              $('#sign-log').html(template);
        }
		});
	},
  loadSeekerPage: function() {
    console.log('hello Seeker');
   $.ajax({
        url: '/sessions/new',
        type: 'GET',
        success: function(data) {
            if (data){
              $.ajax({
              type: 'GET',
              url: 'seekers/'+ data,
              success: function(data) {
                console.log('hello');
                console.log(data);
                var template = HandlebarsTemplates['seeker'];
                $('#search-bar').empty();
                $('#search-bar').html(template(data));   
              }
                });
              }
            }
    });
  }
});



