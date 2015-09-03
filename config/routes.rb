Rails.application.routes.draw do
  get 'current_user', to: 'users#show_current'

  resource :auth_token, only: [:create, :destroy]
  resources :comments, only: [:create, :destroy, :update]
  resources :posts, except: [:new, :edit]
end
