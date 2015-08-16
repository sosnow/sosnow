App.Views.Modal = Backbone.View.extend({
	el: '#modal',
	initialize: function() {
		console.log('modal created');
		this.template = HandlebarsTemplates['modal'];
		// this.listenTo(this.model, 'change', this.showModal)
		this.showModal();
	},
	render: function() {
		console.log(this.model);
		this.$el.html(this.template(this.model));
	},
	showModal: function() {
		this.render();
		this.$el.fadeIn(100);
	},
	events: {
		'click .close': 'returnToSearch',
		'click .submit-comment': 'showComments'
	},
	returnToSearch: function() {
		this.$el.empty();
		this.$el.fadeOut(100);
		// this.unbind();
		// this.destroy();
		this.undelegateEvents();
		this.stopListening();
	},
	showComments: function() {
		console.log('show my comments bro!');
		var id = $('#victim-id-comment').val();
		
		 $.ajax({
              type: 'GET',
              url: '/sessions/new',
              success: function(data) {

              	console.log(data);
            var comment = $('[name=comment]').val();
		    var data1 = {
		    		description: $('[name=comment]').val(),
		    		victim_id: id,
		    		seeker_id: data		    		
		    }
            var tag = $('<p>').html(comment).addClass('showComment');

        $('#comment-box').append(tag);
        App.comments = new App.Collections.Comments();
        App.comments.create(data1);
              }
        });    

	}
});