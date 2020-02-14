class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.string :location
      t.integer :elapsed_time
      t.text :notes

      t.timestamps null: false

      t.belongs_to :user, null: false
    end
  end
end
