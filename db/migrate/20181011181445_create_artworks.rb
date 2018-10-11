class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :slug
      t.string :category
      t.string :medium
      t.integer :date
      t.string :thumbnail
      t.string :genre
      t.string :url
      t.string :artist
      t.string :similar

      t.timestamps
    end
  end
end
