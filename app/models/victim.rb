class Victim < ActiveRecord::Base
	has_many :comments
	has_and_belongs_to_many :seekers
	# has_many :seekers_victims
end
