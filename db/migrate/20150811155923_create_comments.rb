class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :description
      t.references :seeker
      t.references :victim
      t.string "convCreatedDate"

      t.timestamps null: false
    end
  end
end
