# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


40.times do 
Victim.create({
  name: FFaker::Name.name,
  description: FFaker::Lorem.sentence,
  location: FFaker::Address.city,
  geolocation: [FFaker::Geolocation.lat,FFaker::Geolocation.lng]     
  })

end

5.times do 
Seeker.create({
  name: FFaker::Name.name,
  email: FFaker::Internet.email,  
  password_digest: FFaker::NameDE.first_name,   
  phone: FFaker::PhoneNumber.phone_number  
  })

end

2.times do 
Comment.create({
  description: FFaker::Lorem.sentence,
  victim_id: 1,  
  seeker_id: 1   
  })

end