App.Models.Seeker = Backbone.Model.extend({
	urlRoot: '/seekers',
	initialize: function() {
		console.log('new seeker created');
	}
});