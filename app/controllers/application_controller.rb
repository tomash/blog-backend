class ApplicationController < ActionController::Base
  include JumpIn::Authentication

  before_action :authenticate_by_auth_token, only: [:create, :destroy, :update]

  # this app is API only, do not verify csrf token
  protect_from_forgery with: :null_session

  # We want Content-Type that Ember's adapters use to be recognized as :json
  before_action :determine_format

  private

  attr_reader :current_user # override `jump_in` variation that uses session/cookies

  def determine_format
    if request.format == 'application/vnd.api+json'
      request.format = :json
    end
  end

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
