App.Models.Victim = Backbone.Model.extend({
	initialize: function() {
		console.log('new victim created');
		this.dateConversion();
        this.convCreatedDate();
	},
	dateConversion: function(){
		//Converts Date from PostgreSQL timestamp to Western Format
    	var rawSearchDate = this.attributes.created_at;
    	var jsSearchDate = new Date(rawSearchDate);
    	var mmMonth = function (m){
    		if (m.getMonth()<9){
    			var incrementer = m.getMonth() + 1;
    			return "0" + incrementer;
    		}
    		else
    			return m.getMonth() + 1;
    	};
        this.attributes.convCreatedDate = mmMonth(jsSearchDate) + '/' + jsSearchDate.getDate() + '/' + jsSearchDate.getFullYear();
    },
    convCreatedDate: function(){
        //saves converted date to database
        this.save({convCreatedDate: this.attributes.convCreatedDate}, {patch: true});
    }

});