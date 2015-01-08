Rails.application.routes.draw do

  root 'application#index'

  namespace :api do
    namespace :v1 do
      resources :guitars
    end
  end

end
