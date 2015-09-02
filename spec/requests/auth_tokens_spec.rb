require 'rails_helper'

RSpec.describe "AuthTokens", type: :request do
  describe 'POST /auth_token' do
    let!(:user) { User.create! username: 'username', password: 'password' }

    specify 'can get token when using valid credentials' do
      post '/auth_token', username: 'username', password: 'password'

      expect(response).to have_http_status(200)

      auth_token = JSON.parse(response.body)['auth_token']

      expect(auth_token).to be_present
      expect(auth_token).to eq user.auth_token
    end

    specify 'cannot get token when using invalid credentials' do
      post '/auth_token', username: 'username', password: 'invalid_password'

      expect(response).to have_http_status(401)
      expect(response.body).to be_blank
    end
  end
end
