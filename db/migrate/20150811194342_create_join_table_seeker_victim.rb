class CreateJoinTableSeekerVictim < ActiveRecord::Migration
  def change
    create_join_table :seekers, :victims do |t|
      t.index [:seeker_id, :victim_id]
      t.index [:victim_id, :seeker_id]
    end
  end
end
