App.Views.Signlog = Backbone.View.extend({
    el: '#page',

    initialize: function() {
        console.log('sign and log in view loaded');
        console.log(gon.my_session_variable);
        $('#sign-log').html(HandlebarsTemplates['signup_login']);
        console.log(this.collection);
       
    },
    
});
