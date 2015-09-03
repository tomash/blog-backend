class UserController < ApplicationController
  before_action :authenticate_by_auth_token, only: [:show_current]

  respond_to :json

  def show_current
    respond_with current_user
  end
end
