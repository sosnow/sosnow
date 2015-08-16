class VictimsController < ApplicationController

	def index
		render json: Victim.all
	end

	def show
		@victim = Victim.find(params[:id])
		# @seeker = @victim.seekers
		@comment = @victim.comments
		# @seeker = Comment.joins(:victim, :seeker)
		@seeker = Comment.joins('seeker_id' => 'seekers.id')
		render json: [@seeker]
	end

	def create
		@victim = Victim.create(victim_params)
		render json: @victim
	end

	def update
		@victim = Victim.find(params[:id])
		@victim.update(victim_params)
		render json: @victim
	end

	private

	def victim_params
		params.require(:victim).permit(:name, :age, :gender, :location, :geolocation, :email, :phone, :description, :second_description, :need_rescue, :ip, :convCreatedDate, :injured)
	end

end