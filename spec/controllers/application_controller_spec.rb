require 'rails_helper'

RSpec.describe ApplicationController, type: :controller do
  controller do
    def index; render nothing: true, status: 200; end
    def show; render nothing: true, status: 200; end

    def create; render nothing: true, status: 200; end
    def destroy; render nothing: true, status: 200; end
    def update; render nothing: true, status: 200; end
  end

  let!(:user) { User.create! username: 'username', password: 'password' }

  context "given valid auth token" do
    before { request.headers['X-Token'] = user.auth_token }

    specify { expect(get :index).to be_success }
    specify { expect(get :show, id: 1).to be_success }

    specify { expect(post :create).to be_success }
    specify { expect(delete :destroy, id: 1).to be_success }
    specify { expect(patch :update, id: 1).to be_success }
  end

  context "given invalid auth token" do
    before { request.headers['X-Token'] = 'invalid_token' }

    specify { expect(get :index).to be_success }
    specify { expect(get :show, id: 1).to be_success }

    specify do
      post :create
      expect(response.status).to eq 401
    end

    specify do
      delete :destroy, id: 1
      expect(response.status).to eq 401
    end

    specify do
      patch :update, id: 1
      expect(response.status).to eq 401
    end
  end
end
