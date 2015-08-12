App.Collections.Seekers = Backbone.Collection.extend({
	url: '/seekers',
	model: App.Models.Seeker,
	initialize: function(){
		console.log('New Seekers Collection Created');
	},
    fetchById: function(id) {
        this.fetch({
            url: this.url + '/' + id,
            reset: false,
            success: function(coll, data) {
                App.modal.model.set(data);
            }
        });
    }
});