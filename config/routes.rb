Rails.application.routes.draw do
  resource :auth_token, only: [:create, :destroy]
  resources :comments, only: [:create, :destroy, :update]
  resources :posts, except: [:new, :edit]
end
