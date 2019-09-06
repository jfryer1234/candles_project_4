Rails.application.routes.draw do
  # root route
  root "site#index"

  # candles routes
  get "candles", to:"candles#index"
  get "candles/:id", to:"candles#show"
  post "candles", to:"candles#create"
  delete "candles/:id", to:"candles#delete"
  put "candles/:id", to:"candles#update"

end
