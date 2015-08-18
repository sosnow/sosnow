# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


5.times do 
Victim.create({
  name: FFaker::Name.name,
  description: FFaker::Lorem.sentence,
  location: FFaker::Address.city,
  geolocation: [FFaker::Geolocation.lat,FFaker::Geolocation.lng],
  convcreateddate: "8/15/2015", 
  email: FFaker::Internet.email,
  age: "Adult",
  gender: FFaker::Gender.maybe,
  phone: FFaker::PhoneNumber.short_phone_number,
  need_rescue: false,
  injured: true,  
  })

end

5.times do 
Victim.create({
  name: FFaker::Name.name,
  description: FFaker::Lorem.sentence,
  location: FFaker::Address.city,
  geolocation: [FFaker::Geolocation.lat,FFaker::Geolocation.lng],
  convcreateddate: "8/15/2015", 
  email: FFaker::Internet.email,
  age: "Adult",
  gender: FFaker::Gender.maybe,
  phone: FFaker::PhoneNumber.short_phone_number,
  need_rescue: true,
  injured: false,  
  })

end

5.times do
Victim.create({
  name: FFaker::Name.name,
  description: FFaker::BaconIpsum.sentence,
  location: FFaker::Address.city,
  geolocation: [FFaker::Geolocation.lat,FFaker::Geolocation.lng],
  convcreateddate: "8/14/2015",
  email: FFaker::Internet.email,
  age: "Adult",
  gender: FFaker::Gender.maybe,
  phone: FFaker::PhoneNumber.short_phone_number,  
  need_rescue: false,
  injured: true,   
  })
end

5.times do
Victim.create({
  name: FFaker::Name.name,
  description: FFaker::BaconIpsum.sentence,
  location: FFaker::Address.city,
  geolocation: [FFaker::Geolocation.lat,FFaker::Geolocation.lng],
  convcreateddate: "8/14/2015",
  email: FFaker::Internet.email,
  age: "Adult",
  gender: FFaker::Gender.maybe,
  phone: FFaker::PhoneNumber.short_phone_number,  
  need_rescue: true,
  injured: false,   
  })
end

5.times do
Victim.create({
  name: FFaker::Name.name,
  description: FFaker::DizzleIpsum.sentence,
  location: FFaker::Address.city,
  geolocation: [FFaker::Geolocation.lat,FFaker::Geolocation.lng],
  convcreateddate: "8/13/2015",
  email: FFaker::Internet.email,
  age: "Adult",
  gender: FFaker::Gender.maybe,
  phone: FFaker::PhoneNumber.short_phone_number,   
  need_rescue: false,
  injured: true,   
  })
end

10.times do
Victim.create({
  name: FFaker::Name.name,
  description: FFaker::DizzleIpsum.sentence,
  location: FFaker::Address.city,
  geolocation: [FFaker::Geolocation.lat,FFaker::Geolocation.lng],
  convcreateddate: "8/13/2015",
  email: FFaker::Internet.email,
  age: "Adult",
  gender: FFaker::Gender.maybe,
  phone: FFaker::PhoneNumber.short_phone_number,   
  need_rescue: true,
  injured: false,   
  })
end

5.times do
Victim.create({
  name: FFaker::Name.name,
  description: FFaker::BaconIpsum.sentence,
  location: FFaker::Address.city,
  geolocation: [FFaker::Geolocation.lat,FFaker::Geolocation.lng],
  convcreateddate: "8/12/2015",
  email: FFaker::Internet.email,
  age: "Adult",
  gender: FFaker::Gender.maybe,
  phone: FFaker::PhoneNumber.short_phone_number,
  need_rescue: false,
  injured: true,   

  })
end

5.times do
Victim.create({
  name: FFaker::Name.name,
  description: FFaker::BaconIpsum.sentence,
  location: FFaker::Address.city,
  geolocation: [FFaker::Geolocation.lat,FFaker::Geolocation.lng],
  convcreateddate: "8/12/2015",
  email: FFaker::Internet.email,
  age: "Adult",
  gender: FFaker::Gender.maybe,
  phone: FFaker::PhoneNumber.short_phone_number,
  need_rescue: true,
  injured: false,   

  })
end

5.times do 
Seeker.create({
  name: FFaker::Name.name,
  email: FFaker::Internet.email,  
  password_digest: FFaker::NameDE.first_name,   
  phone: FFaker::PhoneNumber.short_phone_number,
  location: FFaker::Address.city,
  convcreateddate: "8/17/2015",
  })

end

5.times do 
Seeker.create({
  name: FFaker::Name.name,
  email: FFaker::Internet.email,  
  password_digest: FFaker::NameDE.first_name,   
  phone: FFaker::PhoneNumber.short_phone_number,
  location: FFaker::Address.city,
  convcreateddate: "8/15/2015",
  })

end


# Comment.create({
#   description: FFaker::Lorem.sentence,
#   victim_id: 40,  
#   seeker_id: 1   
#   })




# Comment.create({
#   description: FFaker::Lorem.sentence,
#   victim_id: 40,  
#   seeker_id: 2   
#   })

# Comment.create({
#   description: FFaker::Lorem.sentence,
#   victim_id: 40,  
#   seeker_id: 3  
#   })


# Comment.create({
#   description: FFaker::Lorem.sentence,
#   victim_id: 39,  
#   seeker_id: 4   
#   })




# Comment.create({
#   description: FFaker::Lorem.sentence,
#   victim_id: 39,  
#   seeker_id: 5   
#   })

# Comment.create({
#   description: FFaker::Lorem.sentence,
#   seeker_name: 'ruby',
#   victim_id: 39,  
#   seeker_id: 6  
#   })
