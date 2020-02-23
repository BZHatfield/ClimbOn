# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(
  email: "Alex.Honnold@freesolo.com",
  username: "HonSolo",
  password: "123456",
  password_confirmation: "123456"
)

trip_1 = Trip.create(
  location: "Central Rock Gym - Boston",
  elapsed_time: "75",
  notes: "insert session notes here!",
  user: user
)
trip_2 = Trip.create(
  location: "Brooklyn Boulders - Somerville",
  elapsed_time: "90",
  notes: "insert session notes here!",
  user: user
)
trip_3 = Trip.create(
  location: "Rock Spot Climbing - Boston",
  elapsed_time: "60",
  notes: "insert session notes here!",
  user: user
)
trip_4 = Trip.create(
  location: "MetroRock Climbing - Everett",
  elapsed_time: "105",
  notes: "insert session notes here!",
  user: user
)
trip_5 = Trip.create(
  location: "Central Rock Gym - Cambridge",
  elapsed_time: "90",
  notes: "insert session notes here!",
  user: user
)

climb_1 = Climb.create(
  climb_type: "Bouldering",
  completed: true,
  grade: "V3",
  wall_type: "Vertical",
  hold_types: "Jug, Ledge",
  crux: "Good warm up, stretched out my shoulders and hip flexor.",
  user: user,
  trip: trip_2
)
climb_2 = Climb.create(
  climb_type: "Bouldering",
  completed: false,
  grade: "V5",
  wall_type: "Overhang",
  hold_types: "Sloper, Pocket",
  crux: "Surprisingly tough on footwork, the dyno to the two sloper holds is tougher than it looks.",
  user: user,
  trip: trip_2
)
climb_3 = Climb.create(
  climb_type: "Lead",
  completed: true,
  grade: "5.10-",
  wall_type: "Overhang",
  hold_types: "Ledge, Pocket",
  crux: "They make it tough to clip into the bolts with the pocket holds. Some of the bolts are so far apart that when you fall, you fall far",
  user: user,
  trip: trip_2
)
climb_4 = Climb.create(
  climb_type: "Top Rope",
  completed: false,
  grade: "5.11+",
  wall_type: "Slab",
  hold_types: "Undercling, Pinch",
  crux: "Woof this slab is crazy tough, static start almost impossible. Do dynamic starts on this one for now. Will project.",
  user: user,
  trip: trip_2
)
climb_5 = Climb.create(
  climb_type: "Top Rope",
  completed: true,
  grade: "5.10+",
  wall_type: "Vertical",
  hold_types: "Ledge, Sloper",
  crux: "Good final climb for the session. Hands were a little burnt out for the slopers but I powered through it, remember to leverage your body properly if you try this one later.",
  user: user,
  trip: trip_2
)
