App.Views.Modal = Backbone.View.extend({
	el: '#modal',
	initialize: function() {
		console.log('modal created');
		this.template = HandlebarsTemplates['modal'];
		this.listenTo(this.model, 'change', this.showModal)
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},
	showModal: function() {
		this.render();
		this.$el.fadeIn(100);
	},
	events: {
		'click .close': 'returnToSearch'
	},
	returnToSearch: function() {
		this.$el.empty();
		this.$el.fadeOut(100);
	}
});