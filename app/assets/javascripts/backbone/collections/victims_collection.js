App.Collections.Victims = Backbone.Collection.extend({
    url: '/victims',
    model: App.Models.Victim,
    initialize: function() {
        console.log('New Victims Collection Created');

    },
    fetchById: function(id) {
        this.fetch({
            url: this.url + '/' + id,
            reset: false,
            success: function(coll, data) {
                console.log(data);
                
                var modal = new App.Views.Modal({model:data});
                // App.Views.Search.modal.set(data);
            }
        });
    },
   	reversed: function() {
		var models = this.models.slice().reverse().slice(0,20);
		var collection = new Backbone.Collection();
		collection.reset(models);
		return collection;
	}
});

