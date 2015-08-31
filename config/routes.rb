Rails.application.routes.draw do
  resources :comments
  resources :posts

  # this is a dummy route required only for its return status
  post 'sign_in' => 'sign_in#validate_http_auth'
end
