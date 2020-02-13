require "rails_helper"

RSpec.describe Api::V1::ClimbsController, type: :controller do
  let!(:user_1) { FactoryBot.create(:user) }

  let!(:session_1) { Session.create(
    gym: "test gym",
    elapsed_time: "45",
    notes: "These are test notes",
    user: user_1
  ) }

  let!(:session_2) { Session.create(
    gym: "other gym",
    elapsed_time: "90",
    notes: "This is the other set of test notes",
    user: user_1
  ) }

  let!(:climb_1) { Climb.create(
    climb_type: "Bouldering",
    completed: true,
    grade: "V5",
    wall_type: "Cave",
    hold_types: "Pinch, Sloper",
    crux: "Good foot work is the key to this climb.",
    user: user_1,
    session: session_1
  ) }

  let!(:climb_2) { Climb.create(
    climb_type: "Bouldering",
    completed: false,
    grade: "V7",
    wall_type: "Vertical",
    hold_types: "Sloper, Crimp",
    crux: "I could not even start this route.",
    user: user_1,
    session: session_1
  ) }

  let!(:climb_3) { Climb.create(
    climb_type: "Top Rope",
    completed: true,
    grade: "5.10",
    wall_type: "Slab",
    hold_types: "Pinch, Sloper",
    crux: "Being lanky helps so much with this one.",
    user: user_1,
    session: session_1
  ) }

  describe "GET#index" do
    it "should return a list of all the climb attempts for this session" do
      sign_in user_1

      get :index, params: { session_id: session_1.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 3

      expect(returned_json[0]["climb_type"]).to eq "Bouldering"
      expect(returned_json[0]["completed"]).to eq true
      expect(returned_json[0]["grade"]).to eq "V5"
      expect(returned_json[0]["wall_type"]).to eq "Cave"
      expect(returned_json[0]["hold_types"]).to eq "Pinch, Sloper"
      expect(returned_json[0]["crux"]).to eq "Good foot work is the key to this climb."

      expect(returned_json[1]["climb_type"]).to eq "Bouldering"
      expect(returned_json[1]["completed"]).to eq false
      expect(returned_json[1]["grade"]).to eq "V7"
      expect(returned_json[1]["wall_type"]).to eq "Vertical"
      expect(returned_json[1]["hold_types"]).to eq "Sloper, Crimp"
      expect(returned_json[1]["crux"]).to eq "I could not even start this route."

      expect(returned_json[2]["climb_type"]).to eq "Top Rope"
      expect(returned_json[2]["completed"]).to eq true
      expect(returned_json[2]["grade"]).to eq "5.10"
      expect(returned_json[2]["wall_type"]).to eq "Slab"
      expect(returned_json[2]["hold_types"]).to eq "Pinch, Sloper"
      expect(returned_json[2]["crux"]).to eq "Being lanky helps so much with this one."
    end

    it "should not include climbs in the second session" do
      sign_in user_1
      get :index, params: { session_id: session_2.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 0
    end
  end

  describe "GET#show" do
    it "should return all the information for one climb attempt" do
      sign_in user_1

      get :show, params: { session_id: session_1.id, id: climb_1.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 9

      expect(returned_json["climb_type"]).to eq "Bouldering"
      expect(returned_json["completed"]).to eq true
      expect(returned_json["grade"]).to eq "V5"
      expect(returned_json["wall_type"]).to eq "Cave"
      expect(returned_json["hold_types"]).to eq "Pinch, Sloper"
      expect(returned_json["crux"]).to eq "Good foot work is the key to this climb."
    end
  end
end
