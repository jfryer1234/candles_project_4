Rails.application.routes.draw do
  # root route
  root "site#index"

  # candles routes
  get "api/candles", to:"candles#index"
  get "api/candles/:id", to:"candles#show"
  post "api/candles", to:"candles#create"
  delete "api/candles/:id", to:"candles#delete"
  put "api/candles/:id", to:"candles#update"

end
