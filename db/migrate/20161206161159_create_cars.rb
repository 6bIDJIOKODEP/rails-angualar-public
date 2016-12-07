class CreateCars < ActiveRecord::Migration[5.0]
  def change
    create_table :cars do |t|
      t.string :name
      t.string :producer
      t.text :description
      t.boolean :presence
      t.date :release
      t.integer :cost

      t.timestamps
    end
  end
end
