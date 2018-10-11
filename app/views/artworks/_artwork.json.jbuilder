json.extract! artwork, :id, :title, :slug, :category, :medium, :date, :thumbnail, :genre, :url, :artist, :similar, :created_at, :updated_at
json.url artwork_url(artwork, format: :json)
