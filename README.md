# README

[![Codeship Status for BZHatfield/ClimbOn](https://app.codeship.com/projects/56d83c00-2e55-0138-4264-6693da41f57b/status?branch=master)](https://app.codeship.com/projects/384827)

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version 2.6.3

* System dependencies:
  active_model_serializers
  capybara
  database_cleaner
  devise
  dotenv-rails
  factory_bot
  foundation-rails (~> 6.5)
  jbuilder (~> 2.5)
  jquery-rails
  launchy
  listen (>= 3.0.5, < 3.2)
  pg (>= 0.18, < 2.0)
  pry-rails
  puma (~> 3.11)
  rails (~> 5.2.3)
  redis (~> 4.0)
  rspec-rails (= 3.8.2)
  sass-rails (~> 5.0)
  shoulda-matchers
  tzinfo-data
  uglifier (>= 1.3.0)
  valid_attribute
  web-console (>= 3.3.0)
  webpacker (~> 3.3)

* Configuration
  use make_it_so gem
  bundle install
  yarn install

* Database creation
  bundle exec rake db:create
  bundle exec rake db:migrate

* Database initialization
  bundle exec rake db:seed

* How to run the test suite
  rspec
  yarn run test

* Deployment instructions
  rails s
  yarn run start

  then visit http://localhost:3000
