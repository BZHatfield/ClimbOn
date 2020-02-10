require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_valid(:email).when("test@test.com") }
  it { should_not have_valid(:email).when("email") }
  it { should_not have_valid(:email).when(nil, "") }

  it { should have_valid(:username).when("testname") }
  it { should_not have_valid(:username).when(nil, "") }
  it { should validate_uniqueness_of(:username) }

  it { should have_valid(:gym).when("gym") }
  it { should_not have_valid(:gym).when(nil, "")}

end
