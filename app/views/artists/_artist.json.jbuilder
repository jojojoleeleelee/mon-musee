json.extract! artist, :id, :name, :gender, :birthyear, :deathyear, :hometown, :location, :nationality, :thumbnail, :url, :created_at, :updated_at
json.url artist_url(artist, format: :json)
