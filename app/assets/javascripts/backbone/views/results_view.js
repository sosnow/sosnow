App.Views.Results = Backbone.View.extend({
	initialize: function(){
		this.template = HandlebarsTemplates['search_result'];
		this.render();
	},
	render: function(){
		var modelData = this.model.toJSON();
		var compiledTemplate = this.template(modelData);
		$('.victim-list').append(compiledTemplate);
	}

});