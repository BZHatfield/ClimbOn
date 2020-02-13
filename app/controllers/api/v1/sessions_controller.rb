class Api::V1::SessionsController < ApplicationController
  before_action :authenticate_user!

  def index
    sessions = current_user.sessions
    render json: sessions
  end

  def show
    render json: Session.find(params["id"])
  end
end
