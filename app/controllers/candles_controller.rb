class CandlesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Candle.all
  end

  def show
  end

  def create
  end

  def delete
  end

  def update
  end
end
