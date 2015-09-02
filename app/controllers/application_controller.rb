class ApplicationController < ActionController::Base
  include JumpIn::Authentication

  before_action :authenticate_by_auth_token, only: [:create, :destroy, :update]

  # this app is API only, do not verify csrf token
  protect_from_forgery with: :null_session

  # We want Content-Type that Ember's adapters use to be recognized as :json
  before_action :determine_format

  private

  def determine_format
    if request.format == 'application/vnd.api+json'
      request.format = :json
    end
  end

  def authenticate_by_auth_token
    auth_token = request.headers['HTTP_X_TOKEN']

    if auth_token.present?
      user = self.class.find_by(auth_token: auth_token)
      @current_user = user if user
    end
  end
end
