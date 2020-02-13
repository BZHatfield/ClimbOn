require 'rails_helper'

RSpec.describe Climb, type: :model do
  it { is_expected.to validate_presence_of(:climb_type) }
  it { is_expected.to validate_presence_of(:grade) }
  it { should have_valid(:completed).when(true, false) }
end
