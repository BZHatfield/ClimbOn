Rails.application.routes.draw do
  root 'static_pages#index'

  get '/', to: 'static_pages#index'
  get '/sessions', to: 'static_pages#index'

  devise_for :users

end
