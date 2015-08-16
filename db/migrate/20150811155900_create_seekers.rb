class CreateSeekers < ActiveRecord::Migration
  def change
    create_table :seekers do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :location
      t.string :phone
      t.inet :ip
      t.string "convcreateddate"
      t.timestamps null: false
    end
  end
end
