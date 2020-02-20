class Api::V1::UsersController < ApplicationController

  def show
    render json: { user_id: current_user.id, username: current_user.username }
  end
end
