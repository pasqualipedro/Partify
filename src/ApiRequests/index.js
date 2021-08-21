import axios from "axios";
import SpotifyWebApi from 'spotify-web-api-node';


class ApiRequests {

    
    constructor() {
    this.spotifyApi = new SpotifyWebApi({
          clientId: '3b8aed36648c478882c6f606dc906e72',
          clientSecret: '7890e522333d4947bc6d68c20e6d57a5',
          redirectUri: 'http://www.example.com/callback'
        });
/*         this.spotifyApi.setAccessToken('BQBCThVB5OWVMxIhy839qr6TYAzst5BKs4nVsZBMnDniN-G7vo6EV3ifEm6Q28r6P_zh3xAt8-VWr_uhxBU'); */

    
    /* this.auth = axios.create({
          baseURL: `https://accounts.spotify.com/api/token`,
          params: {
            grant_type: "client_credentials",
          },
          headers: {
            Authorization: `Basic M2I4YWVkMzY2NDhjNDc4ODgyYzZmNjA2ZGM5MDZlNzI6Nzg5MGU1MjIzMzNkNDk0N2JjNmQ2OGMyMGU2ZDU3YTU=`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          }, 
        });*/
        /* this.api = axios.create({
          baseURL: `https://api.spotify.com/v1`,
          headers: {
            Authorization: `Bearer ${this.getToken()}`,
          },
        });*/
  }; 

  fetchArtistAlbums = async (name) => {
   try {
      
      
      await this.spotifyApi.setAccessToken(`BQCZRct4umHehaY3H0va0pi2-38ny6OB-HFP7cU6dJGpl5HpQ9ifu6ca_fr7NZJ5AVqi63NmF5dMjG8L6kY`);
      const artist = await this.spotifyApi.searchArtists(name);
      const topTracks = await this.spotifyApi.getArtistTopTracks(artist.body.artists.items[0].id, `BR`);
      return topTracks.body.tracks;
   } catch (error) {
      console.log(error);
   }

  };

  getTeste = async () => {
    try {
      const data = await this.spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE');
      return data;
    } catch (error) {
      console.log(`Auth error`, error);
    }
  };


};

export default new ApiRequests();
