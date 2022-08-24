export default class ApiUrl {
  static baseURL = process.env.REACT_APP_BASE_URL;
  static apiKey = process.env.REACT_APP_API_KEY;

  static getTopArtists = (page, limit = 5) => {
    return `${ApiUrl.baseURL}?method=chart.gettopartists&api_key=${ApiUrl.apiKey}&page=${page}&limit=${limit}&format=json`;
  };

  static getTopAlbums = (artist, page, limit = 7) => {
    return `${ApiUrl.baseURL}?method=artist.gettopalbums&artist=${artist}&api_key=${ApiUrl.apiKey}&page=${page}&limit=${limit}&format=json`;
  };

  static getTopTracks = (artist, page, limit = 7) => {
    return `${ApiUrl.baseURL}?method=artist.gettoptracks&artist=${artist}&api_key=${ApiUrl.apiKey}&page=${page}&limit=${limit}&format=json`;
  };
}
