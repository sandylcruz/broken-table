# frozen_string_literal: true

# This is the ApplicationController
class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token, if: :json_request?
  helper_method :current_user, :logged_in?

  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
    return nil unless session[:session_token]

    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !current_user.nil?
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end

  protected

  def json_request?
    request.format.json?
  end
end
