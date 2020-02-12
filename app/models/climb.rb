class Climb < ApplicationRecord
  belongs_to :user
  belongs_to :session

  validates :climb_type, presence: true
  validates :grade, presence: true
  validates :completed, presence: true, inclusion: { in: [true, false] }
  validates :completed, exclusion: { in: [nil] }
end
