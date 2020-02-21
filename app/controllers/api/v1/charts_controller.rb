class Api::V1::ChartsController < ApplicationController

  def show
    user = User.find(params["id"])
    render json: user.climbs
  end
end
