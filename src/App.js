import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Now Playing" fetchUrl={request.fetchNowPlaying} isLargeRow />
      <Row title="Top Rated Movies" fetchUrl={request.fetchTopRated} />
      <Row title="Popular Movies" fetchUrl={request.fetchPopular} />
      <Row title="Upcoming Movies" fetchUrl={request.fetchUpcoming} />
    </div>
  );
}

export default App;
