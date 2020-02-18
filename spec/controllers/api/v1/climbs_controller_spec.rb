require "rails_helper"

RSpec.describe Api::V1::ClimbsController, type: :controller do
  let!(:user_1) { FactoryBot.create(:user) }

  let!(:trip_1) { Trip.create(
    location: "test gym",
    elapsed_time: "45",
    notes: "These are test notes",
    user: user_1
  ) }

  let!(:trip_2) { Trip.create(
    location: "other gym",
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
    trip: trip_1
  ) }

  let!(:climb_2) { Climb.create(
    climb_type: "Bouldering",
    completed: false,
    grade: "V7",
    wall_type: "Vertical",
    hold_types: "Sloper, Crimp",
    crux: "I could not even start this route.",
    user: user_1,
    trip: trip_1
  ) }

  let!(:climb_3) { Climb.create(
    climb_type: "Top Rope",
    completed: true,
    grade: "5.10",
    wall_type: "Slab",
    hold_types: "Pinch, Sloper",
    crux: "Being lanky helps so much with this one.",
    user: user_1,
    trip: trip_1
  ) }

  describe "GET#index" do
    it "should return a list of all the climb attempts for this session" do
      sign_in user_1

      get :index, params: { trip_id: trip_1.id }
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
      get :index, params: { trip_id: trip_2.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 0
    end
  end

  describe "GET#show" do
    it "should return all the information for one climb attempt" do
      sign_in user_1

      get :show, params: { trip_id: trip_1.id, id: climb_1.id }
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

  describe "POST#create" do
    context "when a user is signed in and provides proper climb params" do
      let!(:new_climb) {{
        climbType: "Lead",
        completed: true,
        grade: "5.11c",
        wallType: "Cave",
        holdTypes: "Pinch, Sloper",
        crux: "Being lanky helps so much with this one.",
        user: user_1,
        trip_id: trip_1.id
      }}

      it "adds a new climb to the database" do
        sign_in user_1

        prev_count = Climb.count
        post :create, params: new_climb, format: :json
        expect(Climb.count).to eq(prev_count + 1)
      end

      it "returns the new climb as JSON" do
        sign_in user_1

        post :create, params: new_climb, format: :json
        response_body = JSON.parse(response.body)

        expect(response_body["trip"]["climbs"].length).to eq 4
        expect(response_body["trip"]["climbs"][3]["climb_type"]).to eq "Lead"
        expect(response_body["trip"]["climbs"][3]["completed"]).to eq true
        expect(response_body["trip"]["climbs"][3]["grade"]).to eq "5.11c"
        expect(response_body["trip"]["climbs"][3]["wall_type"]).to eq "Cave"
        expect(response_body["trip"]["climbs"][3]["hold_types"]).to eq "Pinch, Sloper"
        expect(response_body["trip"]["climbs"][3]["crux"]).to eq "Being lanky helps so much with this one."
      end
    end

    context "When a user submits a climb without required params" do
      let!(:bad_climb) {{
        climbType: "",
        completed: nil,
        grade: "",
        wallType: "",
        holdTypes: "",
        crux: "",
        user: user_1,
        trip_id: trip_1.id
      }}

      it "does not add the new climb to the database" do
        sign_in user_1
        prev_count = Climb.count
        post :create, params: bad_climb, format: :json
        expect(Climb.count).to eq(prev_count)
      end
    end
  end

  describe "DELETE#destroy" do
    it "should delete the climb" do
      sign_in user_1
      prev_count = Climb.count

      delete :destroy, params: { user: user_1, trip_id: trip_1.id, climb: climb_1, id: climb_1.id }, format: :json
      expect(Climb.count).to eq(prev_count - 1)
    end
  end
end
