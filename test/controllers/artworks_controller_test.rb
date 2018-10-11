require 'test_helper'

class ArtworksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @artwork = artworks(:one)
  end

  test "should get index" do
    get artworks_url
    assert_response :success
  end

  test "should get new" do
    get new_artwork_url
    assert_response :success
  end

  test "should create artwork" do
    assert_difference('Artwork.count') do
      post artworks_url, params: { artwork: { artist: @artwork.artist, category: @artwork.category, date: @artwork.date, genre: @artwork.genre, medium: @artwork.medium, similar: @artwork.similar, slug: @artwork.slug, thumbnail: @artwork.thumbnail, title: @artwork.title, url: @artwork.url } }
    end

    assert_redirected_to artwork_url(Artwork.last)
  end

  test "should show artwork" do
    get artwork_url(@artwork)
    assert_response :success
  end

  test "should get edit" do
    get edit_artwork_url(@artwork)
    assert_response :success
  end

  test "should update artwork" do
    patch artwork_url(@artwork), params: { artwork: { artist: @artwork.artist, category: @artwork.category, date: @artwork.date, genre: @artwork.genre, medium: @artwork.medium, similar: @artwork.similar, slug: @artwork.slug, thumbnail: @artwork.thumbnail, title: @artwork.title, url: @artwork.url } }
    assert_redirected_to artwork_url(@artwork)
  end

  test "should destroy artwork" do
    assert_difference('Artwork.count', -1) do
      delete artwork_url(@artwork)
    end

    assert_redirected_to artworks_url
  end
end