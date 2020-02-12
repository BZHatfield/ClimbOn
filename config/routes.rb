Rails.application.routes.draw do
  root 'static_pages#index'

  get '/', to: 'static_pages#index'
  get '/sessions', to: 'static_pages#index'

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :sessions, only: [:index]
    end
  end

end
