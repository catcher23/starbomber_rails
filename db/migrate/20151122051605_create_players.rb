class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.string :name
      t.integer :score

      t.timestamps null: false
    end
  end
end
