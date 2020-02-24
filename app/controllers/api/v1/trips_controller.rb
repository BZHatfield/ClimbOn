class Api::V1::TripsController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token, only: [:show, :create]
  protect_from_forgery unless: -> { request.format.json? }

  def index
    trips = current_user.trips
    render json: trips.reverse
  end

  def show
    render json: Trip.find(params["id"])
  end

  def create
    trip = Trip.new(
      elapsed_time: 0,
      location: "",
      notes: ""
    )
    trip.user = current_user
    if trip.save
      render json: trip
    else
      render json: { error: trip.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    trip = Trip.find(params["id"])
    trip.climbs.destroy_all
    trip.destroy
    trips = current_user.trips
    render json: trips.reverse
  end

  def update
    trip = Trip.find(params["id"])
    trip.update_attributes(trip_params)
    render json: trip
  end

  private

  def trip_params
    params.permit(:id, :location, :elapsed_time, :notes, :created_at)
  end
end
