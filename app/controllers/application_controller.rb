class ApplicationController < ActionController::Base
  # this app is API only, do not verify csrf token
  protect_from_forgery with: :null_session

  http_basic_authenticate_with name: "admin", password: "password", only: [:edit, :destroy, :validate_http_auth]

  # We want Content-Type that Ember's adapters use to be recognized as :json
  before_action :determine_format

  def determine_format
    if request.format == 'application/vnd.api+json'
      request.format = :json
    end
  end
end
