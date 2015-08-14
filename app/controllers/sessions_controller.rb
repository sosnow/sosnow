class SessionsController < ApplicationController

  def new
    render json: session[:seeker_id]
  end
  

  def create
    @seeker = Seeker.find_by_email(params[:email])
    @seeker.authenticate(params[:email], params[:password])

    if @seeker
      create_seeker_session(@seeker)
      # session[:current_seeker_id] = @seeker.id

      render json: @seeker
    else
      respond_to do |format|  #CHANGE THAT STUPID RESPOND_TO
        format.json { render :json => {:error => "Invalid email or password."} }
      end
    end
  end

  def destroy
    # session[:current_seeker_id] = nil
    session[:seeker_id] = nil
    destroy_seeker_session
    render json: @seeker
    
  end



end



  