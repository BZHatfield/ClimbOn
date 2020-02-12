require 'rails_helper'

RSpec.describe Api::V1::SessionsController, type: :controller do
  let!(:user_1) { FactoryBot.create(:user) }
  let!(:user_2) { FactoryBot.create(:user) }

  let!(:session_1) { Session.create(
    gym: "test gym",
    elapsed_time: "45",
    notes: "These are test notes",
    user_id: user_1.id
  ) }

  let!(:session_2) { Session.create(
    gym: "new gym",
    elapsed_time: "60",
    notes: "These are also test notes",
    user_id: user_1.id
  ) }

  describe "GET#index" do
    it "should return a list of specific sessions for that user" do
      sign_in user_1

      get :index, params: { user_id: user_1.id, session_id: session_1.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')
      expect(returned_json.length).to eq 2

      expect(returned_json[0]["gym"]).to eq "test gym"
      expect(returned_json[0]["elapsed_time"]).to eq 45
      expect(returned_json[0]["notes"]).to eq "These are test notes"
      expect(returned_json[0]["user_id"]).to eq user_1.id

      expect(returned_json[1]["gym"]).to eq "new gym"
      expect(returned_json[1]["elapsed_time"]).to eq 60
      expect(returned_json[1]["notes"]).to eq "These are also test notes"
      expect(returned_json[1]["user_id"]).to eq user_1.id
    end

    it "should not include the third session" do
      sign_in user_2

      get :index, params: { user_id: user_2.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 0
    end
  end
end
