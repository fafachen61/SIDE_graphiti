Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'images/index'
      post 'images/create'
      get '/show/:id', to: 'images#show'
      delete '/destroy/:id', to: 'images#destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'image/index'
      get 'image/create'
      get 'image/show'
      get 'image/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      post '/users',         to: 'users#create'
      get '/users/:user_id', to: 'users#show'
      get '/users',          to: 'users#index'

      post '/login',    to: 'sessions#create'
      post '/logout',   to: 'sessions#destroy'
      get '/logged_in', to: 'sessions#is_logged_in?'

      resources :users, only: [:create, :show, :index] do 
        resources :items, only: [:create, :show, :index, :destroy]
      end
    end
  end

  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
