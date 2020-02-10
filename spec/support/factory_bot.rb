require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@example.com" }
    sequence(:username) { |n| "username#{n}" }
    gym { 'gym' }
    password { 'password' }
    password_confirmation { 'password' }
  end

end
