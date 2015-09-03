class AuthTokensController < ApplicationController
  skip_before_action :authenticate_by_auth_token

  respond_to :json

  def create
    user = User.find_by!(username: params[:username])

    if authenticate_by_strategy(user: user, params: params)
      respond_with user, location: nil
    else
      render nothing: true, status: 401
    end
  end
end
