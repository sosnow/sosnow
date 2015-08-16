App.Models.Comment = Backbone.Model.extend({
	urlRoot: '/comments',
	initialize: function() {
		console.log('new comment created');
	}
});