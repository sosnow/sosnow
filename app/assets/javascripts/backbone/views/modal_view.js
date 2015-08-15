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
	},
	showComments: function() {
		console.log('show my comments bro!');
		var data = {
                description: $('[name=comment]').val()
            };
            var comment = $('[name=comment]').val();
            var tag = $('<div>').html(comment).addClass('showComment');
        $('#comment-list').append(tag);

	}
});