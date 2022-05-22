const APIKey = "d4cf9397b9e4cf872d28efb270798446";

const requests = {
  fetchNowPlaying: `movie/now_playing?api_key=${APIKey}&language=en-US&page=1`,
  fetchPopular: `/movie/popular?api_key=${APIKey}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKey}&language=en-US&page=1`,
  fetchUpcoming: `/movie/upcoming?api_key=${APIKey}&language=en-US&page=1`,
};

export default requests;
