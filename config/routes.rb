Rails.application.routes.draw do
  root 'static_pages#index'

  get '/', to: 'static_pages#index'
  get '/sessions', to: 'static_pages#index'
  get '/sessions/:id', to: 'static_pages#index'
  get '/sessions/:session_id/climbs/:climb_id', to: 'static_pages#index'

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :sessions, only: [:index, :show] do
        resources :climbs, only: [:index, :show]
      end
    end
  end
end
