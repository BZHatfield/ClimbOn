class Api::V1::TripsController < ApplicationController
  before_action :authenticate_user!

  def index
    trips = current_user.trips
    render json: trips
  end

  def show
    render json: Trip.find(params["id"])
  end
end
