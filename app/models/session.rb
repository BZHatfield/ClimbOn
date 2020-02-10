class Session < ApplicationRecord
  validates :elapsed_time, numericality: true

  belongs_to :user
  has_many :climbs
end
