/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import axios from 'axios';
import { Poster } from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';
const API_KEY = require('../constants')

class MovieDetail extends Component {
  state = {
    movie: {},
  }

  componentDidMount() {
    // try {
    //   const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY.MOVIE_DB_API}&language=en-US`);
    //   const movie = await res.json();
    //   this.setState({
    //     movie,
    //   });
    // } catch (e) {
    //   console.log(e);
    // }

    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY.MOVIE_DB_API}&language=en-US`)
      .then((resp) => resp.data)
      .then((movie) => this.setState({movie}))
      .catch((e) => console.log(e));
  }

  render() {
    const { movie } = this.state;

    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={`${movie.id}`}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
