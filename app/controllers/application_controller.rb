class ApplicationController < ActionController::Base
  include JumpIn::Authentication

  before_action :authenticate_by_auth_token, only: [:create, :destroy, :update]

  # this app is API only, do not verify csrf token
  protect_from_forgery with: :null_session

  private

  attr_reader :current_user # override `jump_in` variation that uses session/cookies

  def authenticate_by_auth_token
    auth_token = request.headers['HTTP_X_TOKEN'].presence
    user       = auth_token && User.find_by(auth_token: auth_token)

    if user
      @current_user = user
    else
      render nothing: true, status: 401
    end
  end
end
