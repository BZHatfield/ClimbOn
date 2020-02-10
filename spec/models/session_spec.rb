require 'rails_helper'

RSpec.describe Session, type: :model do
  it { is_expected.to validate_numericality_of(:elapsed_time) }
end
