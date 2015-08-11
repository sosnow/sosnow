class SeekersController < ApplicationController

	def index
		render json: Seeker.all
	end

	def create
		@seeker = Seeker.create(seeker_params)
		render json: @seeker
	end

	def update
		@seeker = Seeker.find(params[:id])
		@seeker.update(seeker_params)
		render json: @seeker
	end

	def add_victim
		seeker = Seeker.find(params[:id])
		victim = Victim.find(params[:victim_id])
		seeker.add_victim(victim)
		render json: seeker
	end

	private

	def seeker_params
		params.require(:seeker).permit(:name, :email, :password_digest, :location, :phone, :ip)
	end

end