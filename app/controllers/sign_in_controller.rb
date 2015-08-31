class SignInController < ApplicationController
  respond_to :json

  def validate_http_auth
    # this is a dummy action, so we have a concrete endpoint to hit
    # and get either 200 or 401 status
    render nothing: true
  end
end
