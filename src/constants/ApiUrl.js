export default class ApiUrl {
  static baseURL = process.env.REACT_APP_BASE_URL;
  static apiKey = process.env.REACT_APP_API_KEY;

  static getTopArtists = (page, limit = 5) => {
    return `${ApiUrl.baseURL}?method=chart.gettopartists&api_key=${ApiUrl.apiKey}&page=${page}&limit=${limit}&format=json`;
  };

  static getTopAlbums = (mbid, page = 1, limit = 10) => {
    return `${ApiUrl.baseURL}?method=artist.gettopalbums&api_key=${ApiUrl.apiKey}&mbid=${mbid}&page=${page}&limit=${limit}&format=json`;
  };

  static getTopTracks = (mbid, page = 1, limit = 10) => {
    return `${ApiUrl.baseURL}?method=artist.gettoptracks&api_key=${ApiUrl.apiKey}&mbid=${mbid}&page=${page}&limit=${limit}&format=json`;
  };
}
