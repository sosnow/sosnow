class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :set_gon

  


  def index
  	render layout: 'application', text: ''
  end

  helper_method :current_seeker

  private

  def require_seeker
    return if current_seeker

    respond_to do |format|
      format.all  { render :text => 'unauthorized', :status => :unauthorized }
    end
  end

  def current_seeker
    return @current_seeker if @current_seeker

    if session[:seeker_id]
      @current_seeker = Seeker.find(session[:seeker_id])
    elsif (header = request.headers['Authorization'].to_s.sub('Basic ','')) != ''
      header = Base64.decode64(header).split(':')
      username = header.shift
      password = header.join(':')
      @current_seeker = Seeker.authenticate(username, password)
    end
  end

  def create_seeker_session(seeker)
    session[:seeker_id] = seeker.id
  end

  def destroy_seeker_session

    session[:seeker_id] = nil
    
  end


protected

  def set_gon
  	gon.my_session_variable = session[:seeker_id]
  end

end
