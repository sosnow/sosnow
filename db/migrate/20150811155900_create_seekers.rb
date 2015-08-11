class CreateSeekers < ActiveRecord::Migration
  def change
    create_table :seekers do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :location
      t.integer :phone
      t.inet :ip

      t.timestamps null: false
    end
  end
end
