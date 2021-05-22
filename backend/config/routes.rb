# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create show destroy]
    resource :session, only: %i[create destroy]
    resources :reservations, only: %i[create destroy]
    resources :restaurants, only: %i[index create show] do
      resource :favorite, only: %i[create destroy]
      resource :reservations, only: %i[create destroy]
    end
    resource :reviews, only: %i[create]
  end
  root 'static_pages#root'
end
