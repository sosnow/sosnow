App.Views.Search = Backbone.View.extend({
    //sets id of div where main rendering will take place
    el: '#page',
    initialize: function() {
        //sets template
        this.template = HandlebarsTemplates['search_box'];
        this.render();
        this.renderAllItems();

    },
    renderAllItems: function() {
        //Empties div, inserts table template and then sends each model in the collection to the render function, from newest to oldest
        $('#victim-box').empty();
        $('#victim-box').html(HandlebarsTemplates['search_table']);
        this.collection.reversed().each(this.renderItem, this);
    },
    renderItem: function(model) {
        //Sends each model into the View to be rendered
        var newVictimView = new App.Views.Victim({
            model: model
        });
    },
    render: function() {
        //renders search page
        this.$el.html(this.template);

    },
    events: {
        //click event for search button
        // 'click .search': 'goSearch',
        'keyup': 'goSearch',
        'click [type="radio"]': 'goSearch',
        //click event for sign up button
        'click .sign-up': 'loadSignup',
        //click event for log in button  
        'click .log-in': 'loadLogin'

    },
    goSearch: function() {
        //extracts values from search fields
        var data = {
            name: $('[name=name]').val(),
            location: $('[name=location]').val(),
            date: $('#datepicker').val(),
            need_Rescue: $('input[name="safe"]:checked').val()
        };
        //Empties div and mounts table for results
        $('#victim-box').empty();
        $('#victim-box').html(HandlebarsTemplates['search_table']);


        //Loops through collection, adding results to new collections. Cascades need_rescue->name->location->date
        var nameFilter = new Backbone.Collection();
        var locationFilter = new Backbone.Collection();
        var dateFilter = new Backbone.Collection();
        var safeFilter = new Backbone.Collection();


        for (var l = 0; l < this.collection.length; l++) {
            var searchSafe = this.collection.models[l].attributes.need_rescue;
            if (searchSafe.toString() == data.need_Rescue) {
                safeFilter.add(this.collection.models[l]);
            }
        }
        for (var i = 0; i < safeFilter.length; i++) {
            var searchName = safeFilter.models[i].attributes.name.toLowerCase();
            if (searchName.match(data.name.toLowerCase())) {
                nameFilter.add(safeFilter.models[i]);
            }
        }
        for (var k = 0; k < nameFilter.length; k++) {
            var searchLoc = nameFilter.models[k].attributes.location.toLowerCase();
            if (searchLoc.match(data.location.toLowerCase())) {
                locationFilter.add(nameFilter.models[k]);
            }
        }
        for (var j = 0; j < locationFilter.length; j++) {
            var searchDate = locationFilter.models[j].attributes.convCreatedDate;
            if ((searchDate == data.date) || (data.date === "")) {
                dateFilter.add(locationFilter.models[j]);
                var newResultView = new App.Views.Results({
                    model: dateFilter.models[j]
                });
            }
        }


    },
    loadSignup: function() {
        $('#search-bar').empty();
        App.seekers = new App.Collections.Seekers();
        App.signup = new App.Views.Signups({
            collection: App.seekers
        });
    },
    loadLogin: function() {
        $('#search-bar').empty();
        App.seekers = new App.Collections.Seekers();
        App.login = new App.Views.Logins({
            collection: App.seekers
        });
    }
});
