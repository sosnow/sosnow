App.Views.Forms = Backbone.View.extend({
	el:'#page',
	events: {
    'submit form#help-needed': 'addVictim'
  },
	initialize: function(){
		console.log('Form View Loaded');
		this.template = HandlebarsTemplates['help_form'];
		this.render();
	},
	render: function(){
		this.$el.html(this.template);
	},
	addVictim: function(){
		alert('this is working');
		var data = { 
			name: $('[name=name]').val(),
			age: $('[name=age]').val(),
			gender: $('[name=gender]').val(),
			location: $('[name=location]').val()
		 };
		// this.collection.create(data);
	}
});