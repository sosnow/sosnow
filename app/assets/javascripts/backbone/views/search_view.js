App.Views.Search = Backbone.View.extend({
	el:'#page',
	initialize: function(){
		console.log('search view loaded');
    this.template = HandlebarsTemplates['search_box'];
    this.render();
    this.renderAllItems();
	},
	renderAllItems: function() {
		var newest = this.collection.reversed();
		var firstTwenty = newest.first(20);
		console.log(firstTwenty);
		firstTwenty.each(this.renderItem, this);
	},
	renderItem : function(model) {
		var newVictimView = new App.Views.Victim({model : model});
	},
	render: function(){
		this.$el.html(this.template);
	},
	events: {
		'click .search': 'goSearch',
		'click .sign-up': 'loadSignup'
	},
	goSearch: function(){},
	loadSignup: function(){
		$('#search-bar').empty();
		App.signup = new App.Views.Signups();
	}
});