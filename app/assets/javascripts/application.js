// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars
//= require_self
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./templates
//= require_tree ./app_scripts
//= require_tree .
//= require_tree ./document_ready



var App = {
	Models: {}, 
	Collections: {}, 
	Views: {}, 
	Routers: {}
};


$(function() {
	
    App.victims = new App.Collections.Victims();
	App.form = new App.Views.Forms({collection: App.victims});
	App.victims.fetch();
    // App.seekers = new App.Collections.Seekers();
    // App.signlog = new App.Views.Signlog({collection: App.seekers});
    // App.seekers.fetch();

	
	$('#seek-someone-button').click(goToSearch);
	$('#i-need-help-button').click(goToAdd);
});


var goToSearch = function(){
    	$('#page').empty();
    	// App.form.remove();
    	// console.log('removing form view');
    	App.victims.fetch();
        // App.seekers.fetch();
        App.search = new App.Views.Search({collection: App.victims});
        App.signlog = new App.Views.Signlog({collection: App.seekers});

    };
var goToAdd = function(){
    	$('#page').empty();
    	// App.search.remove();
    	// console.log('removing search view');
    	App.form = new App.Views.Forms({collection: App.victims});
    };
