class CreateGuitars < ActiveRecord::Migration
  def change
    create_table :guitars do |t|
      t.text :name
      t.timestamps
    end
  end
end
