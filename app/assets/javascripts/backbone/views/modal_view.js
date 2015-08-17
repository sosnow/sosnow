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
		
		var modelData = this.model;
		var template = HandlebarsTemplates['modal'];
		$.ajax({
            type: 'GET',
            url: '/sessions/new',
            success: function(data) {
            	if (data) {
	              	var data1 = {
	              		modelData: modelData,
	              		data: data
	              	}
	              	
	              	$('#modal').html(template(data1));
	            }
	            	else {
	            		var data1 = {
	              		modelData: modelData,
	              		data: null
	              		}
	            		$('#modal').html(template(data1));
          			}
	        }
		   	              
        });    
	},
	showModal: function() {
		this.render();
		this.$el.fadeIn(100);
	},
	events: {
		'click .close': 'returnToSearch',
		'click .submit-comment': 'showComments',
		'click .add': 'addVictims',
		'click .mark-safe': 'markSafe'
	},
	addVictims: function() {
		console.log('seeker added victim');
		var victimId = this.$('.add').data('value');
		$.ajax({
	        url: '/sessions/new',
	        type: 'GET',
	        success: function(data) {

	        	var data1 = {
	        		seeker_id: data,
	        		victim_id: victimId
	        	}

	        	$.ajax({
	        		url: '/seekers/'+data+'/'+victimId,
	        		type: 'POST',
	        		success: function(data) {
	        			console.log(data);
	        			debugger;
	        		}
	        	})
	        	
	        }
    	});

	},
	markSafe: function() {
		console.log('victim was marked safe by the seeker');
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
		// $('.comment-box').val('');
		// $('.seeker').val('')
		console.log('show my comments bro!');
		var id = $('#victim-id-comment').val();
		

		$.ajax({
            type: 'GET',
            url: '/sessions/new',
            success: function(data) {
            	if (data) {
	              	$.ajax({
	             		type: 'GET',
	             		url: 'seekers/'+ data,
	              		success: function(data1) {
	                        
		                  	console.log(data1);
		                  	
		            	var comment = $('[name=comment]').val();
				    	var data2 = {
				    		description: $('[name=comment]').val(),
				    		victim_id: id,
				    		seeker_id: data,
				    		seeker_name: data1[0].name		    		
				   			}

	           			 var tag = $('<div>').html(comment).addClass('comment-box');
	           			 var seekername = $('<div>').html(data1[0].name).addClass('seeker');
	           			 	var box = $('#comment-list');
					        
					        box.prepend(seekername);
					        box.prepend(tag);

					        App.comments = new App.Collections.Comments();
					         $('.textbox').val('');
					        App.comments.create(data2);
	              		}
	                });
	            }
	            	else {
	            		var comment = $('[name=comment]').val();
		            	var data2 = {
				    		description: $('[name=comment]').val(),
				    		victim_id: id	
				   			}
	           			 var tag = $('<p>').html(comment).addClass('showComment');

					        $('#comment-box').append(tag);
					        App.comments = new App.Collections.Comments();
					        $('.textbox').val('');
					        App.comments.create(data2);
          			}
	        }
		   	              
        });    

	}
});