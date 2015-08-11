# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150811194342) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "description"
    t.integer  "seeker_id"
    t.integer  "victim_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "seekers", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.string   "location"
    t.integer  "phone"
    t.inet     "ip"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "seekers_victims", id: false, force: :cascade do |t|
    t.integer "seeker_id", null: false
    t.integer "victim_id", null: false
  end

  add_index "seekers_victims", ["seeker_id", "victim_id"], name: "index_seekers_victims_on_seeker_id_and_victim_id", using: :btree
  add_index "seekers_victims", ["victim_id", "seeker_id"], name: "index_seekers_victims_on_victim_id_and_seeker_id", using: :btree

  create_table "victims", force: :cascade do |t|
    t.string   "name"
    t.string   "age"
    t.string   "gender"
    t.string   "location"
    t.point    "geolocation"
    t.string   "email"
    t.integer  "phone"
    t.text     "description"
    t.boolean  "need_rescue", default: true
    t.inet     "ip"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

end
