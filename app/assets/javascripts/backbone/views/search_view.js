App.Views.Search = Backbone.View.extend({
    el: '#page',
    initialize: function() {
        console.log('search view loaded');
        this.template = HandlebarsTemplates['search_box'];
        this.listenTo(this.collection, 'add', console.log('new vic added'));
        this.render();
        this.renderAllItems();
    },
    renderAllItems: function() {
    	$('#victim-box').empty();
        $('#victim-box').html(HandlebarsTemplates['search_table']);
        console.log(this.collection);
        this.collection.reversed().each(this.renderItem, this);
    },
    renderItem: function(model) {
        var newVictimView = new App.Views.Victim({
            model: model
        });
    },
    render: function() {
        this.$el.html(this.template);
    },
    events: {
        'click .search': 'goSearch',
        'click .sign-up': 'loadSignup'
    },
    goSearch: function() {
        var data = {
            name: $('[name=name]').val(),
            location: $('[name=location]').val(),
            date: $('#datepicker').val(),
            need_Rescue: $('[name=safe]').val()
        };
        $('#victim-box').empty();
        $('#victim-box').html(HandlebarsTemplates['search_table']);
        for (var i = 0; i < this.collection.length; i++) {
        	this.collection.models[i].attributes.created_at = new Date(this.collection.models[i].attributes.created_at);
        	console.log(this.collection.models[i].attributes.created_at);
        	var searchName = this.collection.models[i].attributes.name.toLowerCase();
        	// var searchlocation = 
        	var searchDate = this.collection.models[i].attributes.created_at;
        	console.log();
            if (searchName.match(data.name.toLowerCase())) {
                var newResultView = new App.Views.Results({
                    model: this.collection.models[i]
                });
            }
        }
    },
    loadSignup: function() {
        $('#search-bar').empty();
        App.signup = new App.Views.Signups();
    }
});
