class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  # Launch point for Angular App
  def index
   redirect_to '/index.html'
  end


end
