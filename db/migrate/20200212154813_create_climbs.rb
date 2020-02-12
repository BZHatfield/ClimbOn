class CreateClimbs < ActiveRecord::Migration[5.2]
  def change
    create_table :climbs do |t|
      t.string :climb_type, null: false
      t.boolean :completed, null: false
      t.string :grade, null: false
      t.string :wall_type
      t.string :hold_types
      t.text :crux

      t.timestamps null: false

      t.belongs_to :user, null: false
      t.belongs_to :session, null: false
    end
  end
end
