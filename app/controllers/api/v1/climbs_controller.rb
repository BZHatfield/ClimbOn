class Api::V1::ClimbsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery unless: -> { request.format.json? }

  def index
    trip = Trip.find(params["trip_id"])
    render json: trip.climbs
  end

  def show
    render json: Climb.find(params["id"])
  end
end
