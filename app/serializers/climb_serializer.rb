class ClimbSerializer < ActiveModel::Serializer
  attributes :id, :climb_type, :completed, :grade, :wall_type, :hold_types, :crux

  belongs_to :user
  belongs_to :trip
end
