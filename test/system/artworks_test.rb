require "application_system_test_case"

class ArtworksTest < ApplicationSystemTestCase
  setup do
    @artwork = artworks(:one)
  end

  test "visiting the index" do
    visit artworks_url
    assert_selector "h1", text: "Artworks"
  end

  test "creating a Artwork" do
    visit artworks_url
    click_on "New Artwork"

    fill_in "Artist", with: @artwork.artist
    fill_in "Category", with: @artwork.category
    fill_in "Date", with: @artwork.date
    fill_in "Genre", with: @artwork.genre
    fill_in "Medium", with: @artwork.medium
    fill_in "Similar", with: @artwork.similar
    fill_in "Slug", with: @artwork.slug
    fill_in "Thumbnail", with: @artwork.thumbnail
    fill_in "Title", with: @artwork.title
    fill_in "Url", with: @artwork.url
    click_on "Create Artwork"

    assert_text "Artwork was successfully created"
    click_on "Back"
  end

  test "updating a Artwork" do
    visit artworks_url
    click_on "Edit", match: :first

    fill_in "Artist", with: @artwork.artist
    fill_in "Category", with: @artwork.category
    fill_in "Date", with: @artwork.date
    fill_in "Genre", with: @artwork.genre
    fill_in "Medium", with: @artwork.medium
    fill_in "Similar", with: @artwork.similar
    fill_in "Slug", with: @artwork.slug
    fill_in "Thumbnail", with: @artwork.thumbnail
    fill_in "Title", with: @artwork.title
    fill_in "Url", with: @artwork.url
    click_on "Update Artwork"

    assert_text "Artwork was successfully updated"
    click_on "Back"
  end

  test "destroying a Artwork" do
    visit artworks_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Artwork was successfully destroyed"
  end
end
