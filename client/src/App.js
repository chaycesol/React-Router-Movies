import React, { useState, useEffect } from 'react';
import { Switch, Link, Route}  from 'react-router-dom';
import axios from 'axios';

import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';

const App = (props) => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <div>
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/movies-list'>Movies List</Link>
        <Link to='/movies/'>Movies</Link>
        </nav>
      </div>
      <Switch>
      <Route path='/movies/:movieId'>
        <Movie movies={movieList} />
        </Route>
        <Route path='/movies-list'>
          <MovieList movies={movieList} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
