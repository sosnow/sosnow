App.Views.Forms = Backbone.View.extend({
	el:'#page',
	initialize: function(){
		console.log('Form View Loaded');
		this.template = HandlebarsTemplates['help_form'];
		this.render();
	},
	render: function(){
		this.$el.html(this.template);
	},
});