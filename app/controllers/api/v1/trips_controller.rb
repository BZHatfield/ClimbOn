class Api::V1::TripsController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token, only: [:show, :create]
  protect_from_forgery unless: -> { request.format.json? }

  def index
    trips = current_user.trips
    render json: trips
  end

  def show
    render json: Trip.find(params["id"])
  end

  def create
    trip = Trip.new(trip_params)
    trip.elapsed_time = 0
    trip.user = current_user
    if trip.save
      render json: trip
    else
      render json: { error: trip.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    trip = Trip.find(params["id"])
    trip.destroy
    trips = Trip.all
    render json: trips
  end

  private

  def trip_params
    params.permit(:trip)
  end
end
