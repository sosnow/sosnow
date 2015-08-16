// Counter for the added people:

var additionalPeopleCount = 0;

// Store the HTML form for each person to add

var additionalPeopleForms = [];
var additionalPersonXForm = undefined;
var additionalPeopleSecondDescription = undefined;


var additionalPeople = [];
var AdditionalPerson = function(name, gender, age, injured, location, geolocation, second_description) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.injured = injured;
	this.location =location;
	this.geolocation = geolocation;
	this.second_description = second_description
}