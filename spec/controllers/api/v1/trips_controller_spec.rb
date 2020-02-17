require 'rails_helper'

RSpec.describe Api::V1::TripsController, type: :controller do
  let!(:user_1) { FactoryBot.create(:user) }
  let!(:user_2) { FactoryBot.create(:user) }

  let!(:trip_1) { Trip.create(
    location: "test gym",
    elapsed_time: "45",
    notes: "These are test notes",
    user: user_1
  ) }

  let!(:trip_2) { Trip.create(
    location: "new gym",
    elapsed_time: "60",
    notes: "These are also test notes",
    user: user_1
  ) }

  describe "GET#index" do
    it "should return a list of specific sessions for that user" do
      sign_in user_1

      get :index, params: { user: user_1 }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')
      expect(returned_json.length).to eq 2

      expect(returned_json[0]["location"]).to eq "test gym"
      expect(returned_json[0]["elapsed_time"]).to eq 45
      expect(returned_json[0]["notes"]).to eq "These are test notes"
      expect(returned_json[0]["user"]["id"]).to eq user_1.id

      expect(returned_json[1]["location"]).to eq "new gym"
      expect(returned_json[1]["elapsed_time"]).to eq 60
      expect(returned_json[1]["notes"]).to eq "These are also test notes"
      expect(returned_json[1]["user"]["id"]).to eq user_1.id
    end

    it "should not include any sessions" do
      sign_in user_2

      get :index, params: { user: user_2 }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 0
    end
  end

  describe "GET#show" do
    it "should return all the information for one session" do
      sign_in user_1
      get :show, params: { id: trip_2.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 9

      expect(returned_json["location"]).to eq "new gym"
      expect(returned_json["elapsed_time"]).to eq 60
      expect(returned_json["notes"]).to eq "These are also test notes"
      expect(returned_json["user"]["id"]).to eq user_1.id
    end
  end

  describe "DELETE#destroy" do
    it "should delete the trip" do
      sign_in user_1
      prev_count = Trip.count

      delete :destroy, params: { user: user_1, id: trip_1.id }, format: :json
      expect(Trip.count).to eq(prev_count - 1)
    end
  end
end
