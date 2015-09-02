class AuthTokensController < ApplicationController
  skip_before_action :authenticate_by_auth_token

  def create
    user = User.find_by!(username: params[:username])

    if authenticate_by_strategy(user: user, params: params)
      render json: { auth_token: user.auth_token }
    else
      render nothing: true, status: 401
    end
  end
end
