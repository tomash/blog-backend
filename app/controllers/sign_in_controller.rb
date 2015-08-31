class SignInController < ApplicationController
  http_basic_authenticate_with name: "admin", password: "password", only: :validate_http_auth

  respond_to :json

  def validate_http_auth
    # only respond status, that will be 401 in case of failed http auth,
    # is relevant, hence this can render anything really
    render nothing: true
  end
end
