class TripSerializer < ActiveModel::Serializer
  attributes :id, :location, :elapsed_time, :notes, :created_at, :climbs

  belongs_to :user
  has_many :climbs
end
