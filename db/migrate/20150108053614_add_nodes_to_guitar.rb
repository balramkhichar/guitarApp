class AddNodesToGuitar < ActiveRecord::Migration
  def change
    add_column :guitars, :s1, :string
    add_column :guitars, :s2, :string
    add_column :guitars, :s3, :string
    add_column :guitars, :s4, :string
    add_column :guitars, :s5, :string
    add_column :guitars, :s6, :string
  end
end
