class CreateSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :sessions do |t|
      t.string :gym
      t.integer :elapsed_time
      t.text :notes

      t.timestamps null: false

      t.belongs_to :user, null: false
    end
  end
end
