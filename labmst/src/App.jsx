import { HashRouter, Routes, Route, Link, useParams } from "react-router-dom";

const movies = [
  { id: 1, title: "Inception", year: 2010, director: "abc" },
  { id: 2, title: "Interstellar", year: 2014, director: "def" },
  { id: 3, title: "Avengers Endgame", year: 2019, director: "ghi" },
  { id: 4, title: "Joker", year: 2019, director: "jkl" },
  { id: 5, title: "The Batman", year: 2022, director: "mno" }
];

function Home() {
  return (
    <div>
      <h1>Movie Application</h1>
      <p>Welcome to Movie List</p>
      <Link to="/movies">View Movies</Link>
    </div>
  );
}

function MovieList() {
  return (
    <div>
      <h2>Movie List</h2>

      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      <p>Director: {movie.director}</p>

      <Link to="/movies">Back</Link>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/movies">Movies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;