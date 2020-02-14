Rails.application.routes.draw do
  root 'static_pages#index'

  get '/', to: 'static_pages#index'
  get '/trips', to: 'static_pages#index'
  get '/trips/:id', to: 'static_pages#index'
  get '/trips/:trip_id/climbs/:climb_id', to: 'static_pages#index'

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :trips, only: [:index, :show] do
        resources :climbs, only: [:index, :show]
      end
    end
  end
end
