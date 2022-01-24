import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Title from '../../components/newFilm/titleFilm';
import BanerFilm from '../../components/newFilm/baner';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-shrink: shrink;
  flex-grow: 1;
  flex-wrap: wrap;
  flex-basis: 500px;
  box-sizing: border-box;
  margin: 20px 0.5%;
  height: 30vh;
  max-width: 600px;
  background: #bdbdbd;
  border: 4px solid #000;
  overflow: hidden;
`;

const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #5e5e5e;
  padding: 5px;
  justify-content: space-around;
  align-items: center;
  padding: 60px 100px;
  min-height: 80vh;
`;

const FilmData = styled.div`
  position: relative;
  box-sizing: border-box;
  min-width: 250px;
  width: 50%;
  text-align: left;
  padding: 10px 10px;
`;
const ReadMore = styled.div`
  position: absolute;
  top: 24vh;
  left: 6%;
  width: 80%;
  border: 2px solid black;
  color: black;
  background: #5e5e5e;
  text-align: center;
  line-height: 32px;
  font-weight: bold;
  cursor: pointer;
`;

function FilmList(props) {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    axios.get('https://pr-movies.herokuapp.com/api/movies').then((res) => {
      console.log('data', res.data);
      setFilmList(res.data);
    });
    // setFilmList(res.data);
  }, []);

  return (
    <Content>
      {filmList.map((film) => {
        let link = '/details/' + film.id;
        let str = '';
        if (props.draftValue.length > 0) {
          if (
            film.title != null &&
            film.id != null &&
            film.image != null &&
            film.content != null
          ) {
            for (let i = 0; i < props.draftValue.length; i++) {
              console.log(props.draftValue.length);
              console.log(film.title[i]);
              str += film.title[i];
            }
            console.log('łańcuch', str);
            if (str.toUpperCase() === props.draftValue.toUpperCase()) {
              return (
                <Container>
                  <BanerFilm image={film.image} />
                  <FilmData>
                    <Title title={film.title} />
                    
                    
                    <Link to={link}>
                      <ReadMore> Czytaj więcej </ReadMore>
                    </Link>
                  </FilmData>
                </Container>
              );
            }
          }
        } else {
          return (
            <Container>
              <BanerFilm image={film.image} />
              <FilmData>
                <Title title={film.title} />
                
                
                <Link to={link}>
                  <ReadMore> Opis </ReadMore>
                </Link>
              </FilmData>
            </Container>
          );
        }
      })}
    </Content>
  );
}

export default FilmList;
