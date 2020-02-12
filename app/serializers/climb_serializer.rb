class ClimbSerializer < ActiveModel::Serializer
  attributes :id, :climb_type, :completed, :grade, :wall_type, :hold_types, :crux
  
end
