class CreateVictims < ActiveRecord::Migration
  def change
    create_table :victims do |t|
      t.string :name
      t.string :age
      t.string :gender
      t.string :location
      t.point :geolocation
      t.string :email
      t.string :phone
      t.text :description
      t.text :second_description
      t.boolean :need_rescue, :default => true
      t.boolean :injured, :default => false
      t.inet :ip
      t.string "convCreatedDate"


      t.timestamps null: false
    end
  end
end
