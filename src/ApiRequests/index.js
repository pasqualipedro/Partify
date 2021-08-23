import SpotifyWebApi from "spotify-web-api-node";

class ApiRequests {
  constructor() {
    this.spotifyApi = new SpotifyWebApi({
      clientId: "3b8aed36648c478882c6f606dc906e72",
      clientSecret: "7890e522333d4947bc6d68c20e6d57a5",
      redirectUri: "http://www.example.com/callback",
    });
    

  }

  ArtistTopTenTracks = async (name) => {
    try {
      await this.spotifyApi.setAccessToken(
        `BQDCVtkRAQI_30ynbrBruf82DQ_7oKwYNZua_2Sym6qtgC00E_8vcH6Hy4b5No8Br7SDpzv_HdtHK-m7zJo`
      );
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

  ArtistTopTenAlbums = async (name) => {
    try {
      await this.spotifyApi.setAccessToken(
        `BQDCVtkRAQI_30ynbrBruf82DQ_7oKwYNZua_2Sym6qtgC00E_8vcH6Hy4b5No8Br7SDpzv_HdtHK-m7zJo`
      );
      const artist = await this.spotifyApi.searchArtists(name);
      const topAlbums = await this.spotifyApi.getArtistAlbums(
        artist.body.artists.items[0].id,
        `GB`
      );
      console.log(artist);
      /* const topTracks = await this.spotifyApi.getArtistAlbums(
        artist.body.artists.items[0].id,
        `GB`
      );
      return topTracks.body.tracks; */
    } catch (error) {
      console.log(error);
    }
  };

  PlaylistMoodCards = async (mood) => {
    try {
      await this.spotifyApi.setAccessToken(
        `BQDCVtkRAQI_30ynbrBruf82DQ_7oKwYNZua_2Sym6qtgC00E_8vcH6Hy4b5No8Br7SDpzv_HdtHK-m7zJo`
      );
      const moodPlaylist = await this.spotifyApi.searchPlaylists(`rock`);
      return moodPlaylist.body.playlists.items;
    } catch (error) {
      console.log(error);
    }
  }


  
}

export default new ApiRequests();
