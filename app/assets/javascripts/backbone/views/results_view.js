App.Views.Results = Backbone.View.extend({
	initialize: function(){
		console.log('listing results');
		this.template = HandlebarsTemplates['search_result'];
		// this.listenTo(this.collection, 'add', render);
		this.render();
	},
	render: function(){
		console.log('rendering');
		var modelData = this.model.toJSON();
		var compiledTemplate = this.template(modelData);
		$('.victim-list').append(compiledTemplate);
	}

});