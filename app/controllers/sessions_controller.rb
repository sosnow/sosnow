class SessionsController < ApplicationController

  def create
    seeker = Seeker.find_by(username: params[:username])
    if seeker && seeker.authenticate(params[:password])
      session[:current_user_id] = seeker.id
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  def destroy
    session[:current_user_id] = nil
    redirect_to root_path
  end

end
