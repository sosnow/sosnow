class Comment < ActiveRecord::Base
	belongs_to :victim
	belongs_to :seeker

end
