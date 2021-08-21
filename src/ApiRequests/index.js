import SpotifyWebApi from "spotify-web-api-node";

class ApiRequests {
  constructor() {
    this.spotifyApi = new SpotifyWebApi({
      clientId: "3b8aed36648c478882c6f606dc906e72",
      clientSecret: "7890e522333d4947bc6d68c20e6d57a5",
      redirectUri: "http://www.example.com/callback",
    });
  }

  TenTopArtistTracks = async (name) => {
    try {
      await this.spotifyApi.setAccessToken(
        `BQBQjIMIgCBbFuhGNTprYIIUXxE70a8PFzDdKIsH1ITWiWU3imyolFuNmhiywqnFyarwrjoXNz3oqRH89A4`
      );
      const artist = await this.spotifyApi.searchArtists(name);
      const topTracks = await this.spotifyApi.getArtistTopTracks(
        artist.body.artists.items[0].id,
        `BR`
      );
      return topTracks.body.tracks;
    } catch (error) {
      console.log(error);
    }
  };




  
}

export default new ApiRequests();
