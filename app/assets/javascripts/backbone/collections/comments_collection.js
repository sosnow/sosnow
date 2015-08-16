App.Collections.Comments = Backbone.Collection.extend({
	url: '/comments',
	model: App.Models.Comment,
	initialize: function(){
		console.log('New Comments Collection Created');
        
        
	}
    // fetchById: function(id) {
    //     this.fetch({
    //         url: this.url + '/' + id,
    //         reset: false,
    //         success: function(coll, data) {
    //             console.log(data);
    //             App.model.set(data);
    //         }
    //     });
    // }
});