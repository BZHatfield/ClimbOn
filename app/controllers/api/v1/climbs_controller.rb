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

  def create
    if create_hold_types != nil
      hold_types = create_hold_types.join(', ')
    else
      hold_types = ""
    end
    trip = Trip.find(params["trip_id"])
    climb = Climb.new(
      climb_type: create_climb_params["climbType"],
      grade: create_climb_params["grade"],
      wall_type: create_climb_params["wallType"],
      hold_types: hold_types,
      crux: create_climb_params["crux"],
      completed: create_climb_params["completed"],
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

  def update
    trip = Trip.find(params["trip_id"])
    climb = Climb.find(params["id"])
    climb.update_attributes(edit_climb_params)
    render json: climb
  end

  private
  def create_climb_params
    params.require(:climbData).permit(:climbType, :grade, :wallType, :crux, :completed)
  end

  def create_hold_types
    if params[:holdTypes] != []
      params.require[:holdTypes]
    else
      params.permit[:holdTypes]
    end
  end

  def edit_climb_params
    params.permit(:id, :climb_type, :grade, :wall_type, :hold_types, :crux, :completed, :trip_id, :user_id)
  end
end
