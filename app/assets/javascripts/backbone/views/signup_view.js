App.Views.Signups = Backbone.View.extend({
  	el: '#search-bar',
  	initialize: function () {
    	console.log('signup view loaded');
    this.template = HandlebarsTemplates['seeker_signup'];
    this.render();
    this.form = this.$el.find('form');
    this.nameField = this.$el.find('input[name=name]');
    this.emailField = this.$el.find('input[name=email]');
    this.passwordField = this.$el.find('input[name=password]');
    this.passwordConfirmationField = this.$el.find('input[name=password_confirmation]');
    this.submitButton = this.$el.find('input[type=submit]');
	},
	render: function() {
		this.$el.html(this.template);
	},
	event: {
		'click #signup-button': 'createSeeker'
	},
	attributes: function () {
	    return {
	      name: this.nameField.val(),
	      email: this.emailField.val(),
	      password: this.passwordField.val(),
	      password_confirmation: this.passwordConfirmationField.val()
	    };
  	},
	createSeeker: function() {
		console.log('what do you seek?');
		if (this.submitButton.hasClass('disabled') && this.form.data('seeker-created') !== true) {
      return false;
    } else {
      this.submitButton.addClass('disabled');
    }

    var self = this,
        seeker = new Seeker(this.attributes());
    seeker.save(null, {
      error: function (originalModel, resp, options) {
        self.$el.find('input').removeClass('error');
        var errors = JSON.parse(resp.responseText).errors;
        _.each(errors, function(value, key) { 
          self.$el.find('input[name=' + key +']').addClass('error');
        });
        self.submitButton.removeClass('disabled');
      },
      success: function () {
        self.form.data('seeker-created', true);
        document.location.href = '/';
      }
    });

    return (this.form.data('seeker-created') === true);
  
	}
});

