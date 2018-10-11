class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :gender
      t.integer :birthyear
      t.integer :deathyear
      t.string :hometown
      t.string :location
      t.string :nationality
      t.string :thumbnail
      t.string :url

      t.timestamps
    end
  end
end
