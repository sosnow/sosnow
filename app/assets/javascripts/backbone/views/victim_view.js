App.Views.Victim = Backbone.View.extend({
	initialize: function(){
		console.log("New Victim View Created");
		this.template = HandlebarsTemplates['search_result'];
		this.render();
	},
	render: function() {
		var modelData = this.model.toJSON();
		var compiledTemplate = this.template(modelData);
		$('.victim-list').append(compiledTemplate);
		// this.model.get('completed') ? this.$el.addClass('done') : this.$el.removeClass('done');
	},
	events: {
		'click .see-victim': 'showModal'
	},
	showModal: function() {
		console.log('hello modal');
		var id = this.$('td').data('value');
		console.log(id);
		var result = App.collection.fetchById(id);
	}
});


