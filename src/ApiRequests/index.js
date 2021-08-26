import SpotifyWebApi from "spotify-web-api-node";

class ApiRequests {
  constructor() {
    this.spotifyApi = new SpotifyWebApi({
      clientId: "3b8aed36648c478882c6f606dc906e72",
      clientSecret: "7890e522333d4947bc6d68c20e6d57a5",
      redirectUri: "http://www.example.com/callback",
    });
    this.spotifyApi.setAccessToken(
      `BQAnpv7WbIEX0xKqrl-HLiUvbKRoIenNVUzhdqsPS5TAchOcwRLP6sMm6P6WOoJVx93jsWgyLf805aJfCs0`
    );
  }

  TopTenTracks = async (name) => {
    try {
      const artist = await this.spotifyApi.searchArtists(name);
      const topTracks = await this.spotifyApi.getArtistTopTracks(
        artist.body.artists.items[0].id,
        `GB`
      );
      return topTracks.body.tracks;
    } catch (error) {
      console.log(error);
    }
  };

  TopTenArtists = async (name) => {
    try {
      const artist = await this.spotifyApi.searchArtists(name);
      console.log(artist.body);
      return artist.body
    } catch (error) {
      console.log(error);
    }
  };

  TopTenAlbums = async (name) => {
    try {
      const artist = await this.spotifyApi.searchArtists(name);
      const topAlbums = await this.spotifyApi.getArtistAlbums(
        artist.body.artists.items[0].id,
        `GB`
      );
      console.log(topAlbums);
      return topAlbums
    } catch (error) {
      console.log(error);
    }
  };




  randomPlaylistInfo = async (mood) => {
    try {
      const moodPlaylist = await this.spotifyApi.searchPlaylists(mood);
      const playlists = moodPlaylist.body.playlists.items;
      const randomPlaylist =
        playlists[Math.floor(Math.random() * playlists.length)];
      const playlistDetails = await this.spotifyApi.getPlaylist(
        randomPlaylist.id
      );
      return playlistDetails.body;
    } catch (error) {
      console.log(error);
    }
  };
}

export default new ApiRequests();
