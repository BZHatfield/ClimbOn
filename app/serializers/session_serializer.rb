class SessionSerializer < ActiveModel::Serializer
  attributes :id, :gym, :elapsed_time, :notes, :created_at

  belongs_to :user
  # has_many :climbs
end
