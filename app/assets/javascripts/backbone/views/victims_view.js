App.Views.Victims = Backbone.View.extend({
	el: '#page',
	initialize: function() {
		console.log("New Collection Items View Created");
		this.listenTo(this.collection, 'reset', this.renderAllItems);
		this.listenTo(this.collection, 'add', this.renderItem);
	},
	renderAllItems: function() {
		this.collection.reversed().each(this.renderItem, this);
	},
	renderItem : function(model) {
		var newItemView = new App.Views.Item({model : model});
		this.$el.append( newItemView.el );
	},
	events: {
		'click #submit': 'newTodo'
	},
	newTodo: function() {
		var data = { description: $('[name=description]').val() };
		this.collection.create(data);
		$('input').val('');
	}
});