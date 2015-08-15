// App.Views.Seeker = Backbone.View.extend({
// 	el: '#search-bar',
// 	initialize: function() {
// 		console.log('New seeker View');
// 		this.template = HandlebarsTemplates['seeker'];
// 		this.render();
// 	},
// 	render: function() {
// 		this.$el.html(this.template(this.model.toJSON()));
// 	},
// 	events: {
// 		'click .view': 'showModal'
// 	},
// 	showModal: function() {
// 		var id = this.$('button').data('imdb');
// 		var result = App.collection.fetchById(id);
// 	}
// });