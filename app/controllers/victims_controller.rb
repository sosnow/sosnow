class VictimsController < ApplicationController

	def index
		render json: Victim.all
	end

	def show
		@victim = Victim.find(params[:id])
		
		@comment = @victim.comments
		@seeker = @victim.seekers
		# @seeker = Seeker.joins(:comment).where(comments: { seeker_id: id})


		# seeker = Seeker.all(:select => '*', :joins => :comment)
				
		render json: [@victim, @comment, @seeker]

	end

	def create
		@victim = Victim.create(victim_params)
		geo = victim_params['geolocation'].split(",")
		googMap = 'https://www.google.com/maps?q=' + victim_params['geolocation']
		$twitter.update(victim_params['name'] + " just posted an alert. For more information search for the user on Sos.now #sosnow \nLocation Map: " + googMap, {:lat => geo[0].to_f, :long => geo[1].to_f})
		render json: @victim
	end

	def update
		@victim = Victim.find(params[:id])
		@victim.update(victim_params)
		render json: @victim
	end

	private

	def victim_params
		params.require(:victim).permit(:name, :age, :gender, :location, :geolocation, :email, :phone, :description, :second_description, :need_rescue, :ip, :convcreateddate, :injured)
	end

end