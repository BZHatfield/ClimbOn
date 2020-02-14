class TripSerializer < ActiveModel::Serializer
  attributes :id, :location, :elapsed_time, :notes, :created_at, :climbs, :total, :types

  belongs_to :user
  has_many :climbs

  def total
    total = 0
    completed = 0
    object.climbs.each do |climb|
      total += 1
      if climb.completed == true
        completed += 1
      end
    end
    return "#{completed} / #{total} Complete"
  end

  def types
    types = []
    object.climbs.each do |climb|
      types << climb.climb_type
    end
    return types.join(', ')
  end
end
