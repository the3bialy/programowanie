import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 1%;
  padding-bottom: 1%;
  height: 80vh;
  background: #5e5e5e;
`;

const Baner = styled.div`
  height: 100%;
  background-color: #000;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const DescriptionPlace = styled.div`
  display: grid;
  grid-template-rows: 2fr 5fr;
  background-color: #bdbdbd;
  width: 60%;
  padding: 40px 30px;
`;

const Desc = styled.p`
  color: white;
  text-align: right;
  margin-top: 30px;
  font-size: 24px;
  text-align: justify;
  color: #222;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
`;
const Title = styled.p`
  font-size: 44px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 10px;
  text-align: right;
  width: 70%;
  color: #222;
`;
function Details() {
  const { id } = useParams();
  const [filmDetail, setFilmDetail] = useState('');

  useEffect(() => {
    axios
      .get('https://pr-movies.herokuapp.com/api/movies/' + id)
      .then((res) => {
        console.log('data', res.data);
        setFilmDetail(res.data);
      });
  });

  return (
    <Container>
      
      <DescriptionPlace>
        <Header>
          <Title>{filmDetail.title}</Title>
          
        </Header>
        <Desc>{filmDetail.content}</Desc>
      </DescriptionPlace>
      <Baner>
        <Image src={filmDetail.image}></Image>
      </Baner>
    </Container>
  );
}

export default Details;
