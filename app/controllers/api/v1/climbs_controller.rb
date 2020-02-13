class Api::V1::ClimbsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery unless: -> { request.format.json? }

  def index
    session = Session.find(params["session_id"])
    render json: session.climbs
  end

  def show
    render json: Climb.find(params["id"])
  end
end
