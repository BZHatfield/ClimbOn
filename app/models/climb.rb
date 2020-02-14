class Climb < ApplicationRecord
  belongs_to :user
  belongs_to :trip

  validates :climb_type, presence: true
  validates :grade, presence: true
  validates_inclusion_of :completed, in: [true, false]
end
