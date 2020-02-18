Rails.application.routes.draw do
  root 'static_pages#index'

  get '/', to: 'static_pages#index'
  get '/trips', to: 'static_pages#index'
  get '/trips/new', to: 'static_pages#index'
  get '/trips/:id', to: 'static_pages#index'
  get '/trips/:trip_id/climbs/new', to: 'static_pages#index'
  get '/trips/:trip_id/climbs/:climb_id', to: 'static_pages#index'

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :trips, only: [:index, :show, :create, :destroy, :update] do
        resources :climbs, only: [:index, :show, :create, :destroy, :update]
      end
    end
  end
end
