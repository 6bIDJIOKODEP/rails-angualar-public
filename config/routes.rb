Rails.application.routes.draw do
  resources :cars, :defaults => { :format => :json }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'application#index'


end
