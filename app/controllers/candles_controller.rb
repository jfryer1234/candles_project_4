class CandlesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Candle.all
  end

  def show
    render json: Candle.find(params["id"])
  end

  def create
    render json: Candle.create(params["candle"])
  end

  def delete
    render json: Candle.delete(params["id"])
  end

  def update
    render json: Candle.update(params["id"], params["candle"])
  end
end
