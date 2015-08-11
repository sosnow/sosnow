class VictimsController < ApplicationController

	def index
		render json: Victim.all
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
		params.require(:victim).permit(:name, :age, :gender, :location, :geolocation, :email, :phone, :description, :need_rescue, :ip)
	end

end