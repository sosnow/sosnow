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
                App.modal.model.set(data);
            }
        });
    }
});
