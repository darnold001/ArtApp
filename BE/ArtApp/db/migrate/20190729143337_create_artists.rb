class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :artist_name
      t.string :medium
      t.string :comments
      t.string :likes
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
