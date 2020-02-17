class Api::V1::ClimbsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery unless: -> { request.format.json? }

  def index
    trip = Trip.find(trip_params["trip_id"])
    render json: trip.climbs
  end

  def show
    render json: Climb.find(params["id"])
  end

  def create
    trip = Trip.find(climb_params["trip_id"])
    climb = Climb.new(
      climb_type: climb_params["climbType"],
      grade: climb_params["grade"],
      wall_type: climb_params["wallType"],
      hold_types: climb_params["holdTypes"],
      crux: climb_params["crux"],
      completed: climb_params["completed"],
      trip: trip,
      user: current_user
    )
    if climb.save
      render json: climb
    else
      render json: climb.errors.full_messages.to_sentence
    end
  end

  def destroy
    trip = Trip.find(params["trip_id"])
    climb = Climb.find(params["id"])
    climb.destroy
    render json: trip.climbs
  end

  private
  def climb_params
    params.permit(:climbType, :grade, :wallType, :holdTypes, :crux, :completed, :trip_id)
  end

  def trip_params
    params.permit(:trip_id)
  end
end
