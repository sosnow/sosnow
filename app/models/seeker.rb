class Seeker < ActiveRecord::Base
	validates :email, :password_digest, presence: true, uniqueness: true
	validates :name, presence: true
	has_many :comments
	has_and_belongs_to_many :victims
	# has_many :seekers_victims

	def authenticate(email, pass)
	    seeker = Seeker.where(:email => email).first
	    seeker && BCrypt::Password.new(seeker.password_digest) == pass ? seeker : nil
  	end
  	
	def password=(pass)
	    return if pass.blank?
	    self.password_digest = BCrypt::Password.create(pass)
	end

	def add_victim(victim)
    	self.victims.push(victim) unless self.victims.include? victim
  	end

end
