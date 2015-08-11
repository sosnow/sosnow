class CreateVictims < ActiveRecord::Migration
  def change
    create_table :victims do |t|
      t.string :name
      t.string :age
      t.string :gender
      t.string :location
      t.point :geolocation
      t.string :email
      t.integer :phone
      t.text :descripion
      t.boolean :need_rescue
      t.inet :ip

      t.timestamps null: false
    end
  end
end
