class Seeker < ActiveRecord::Base

	has_many :comments
	has_and_belongs_to_many :victims
	

  	

	

	def password=(pass)
	    return if pass.blank?
	    self.password_digest = BCrypt::Password.create(pass)
	end

	def add_victim(victim)
    	self.victims.push(victim) unless self.victims.include? victim
  	end

end
