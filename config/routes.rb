Rails.application.routes.draw do
  resources :comments
  resources :posts

  post 'sign_in' => 'sign_in#validate_http_auth'
end
