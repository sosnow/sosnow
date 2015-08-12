App.Views.Victims = Backbone.View.extend({
	el: '#page',
	initialize: function() {
		console.log("New Collection Items View Created");
		this.listenTo(this.collection, 'add', this.renderItem);
		renderAllItems();
	},
	renderAllItems: function() {
		this.collection.reversed().each(this.renderItem, this);
	},
	renderItem : function(model) {
		var newVictimView = new App.Views.Victim({model : model});
		$('<tbody>').append( newVictimView.el );
	}
});