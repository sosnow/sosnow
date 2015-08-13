App.Views.Search = Backbone.View.extend({
	el:'#page',
	initialize: function(){
		console.log('search view loaded');
    this.template = HandlebarsTemplates['search_box'];
    this.render();
	},
	render: function(){
		this.$el.html(this.template);
		
	},
	events: {
		'click .search': 'goSearch',
		'click .sign-up': 'loadSignup',
		'click .log-in': 'loadLogin'
	},
	goSearch: function(){

	},
	loadSignup: function(){
        $('#search-bar').empty();
        App.seekers = new App.Collections.Seekers();
        App.signup = new App.Views.Signups({collection: App.seekers});
    },
    loadLogin: function(){
        $('#search-bar').empty();
        App.seekers = new App.Collections.Seekers();
        App.login = new App.Views.Logins({collection: App.seekers});
    }
});