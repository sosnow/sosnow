class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :description
      t.string :seeker_name
      t.references :seeker
      t.references :victim
      t.string 'convcreateddate'

      t.timestamps null: false
    end
  end
end
