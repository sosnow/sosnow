class SeekersController < ApplicationController
	
	
	def index
		# gon.seekers = Seeked.find_by_id(gon.my_session_variable)
		render json: Seeker.all
	end

	def show
		@seeker = Seeker.find(params[:id])
		render json: @seeker
	end

	def new
		@seeker = Seeker.new
	end

	def create
		@seeker = Seeker.new(seeker_params)
		@seeker.password=(params[:password])
		if @seeker.save
			flash[:notice] = 'Account created'
			session[:current_seeker_id] = @seeker.id
			
		end
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
      params.require(:seeker).permit(:name, :email, :password, :password_confirmation)
   end
end