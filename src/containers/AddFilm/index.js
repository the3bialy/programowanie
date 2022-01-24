import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  width: 100vw;
  min-height: 80vh;
  padding: 10vh 20vw 0 20vw;
  background: #5e5e5e;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  min-height: 60vh;
  background-color: #bdbdbd;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Button = styled.button`
  border: none;
  height: 60px;
  margin: 30px 0;
  font-size: 20px;
  background-color: #5e5e5e;
  color: white;
  cursor: pointer;
  transition: 0.1s linear;
 
`;

const Input = styled.input`
  height: 50px;
  border: none;
  border-bottom: 2px solid #5e5e5e;
  margin: 10px 0;
  font-size: 20px;
  padding-left: 10px;
 
`;

const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: 'center';
  width: 50%;
  flex-grow: 1;
  height: 100%;
  border-right: 2px solid #5e5e5e;
  padding: 4% 6%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 100%;
  padding: 2% 5%;
`;
const AddFilmForm = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const TextAreaPlace = styled.textarea`
  height: 300px;
  width: 100%;
  margin: 10px 0;
  border: none;
  border: 2px solid #bbb;
  font-size: 20px;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 26px;
  margin-bottom: 30px;
  font-weight: bold;
`;

export const api = axios.create({
  baseURL: 'https://pr-movies.herokuapp.com/api',
});

function AddFilm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleCreateUser = async (event) => {
    try {
      event.preventDefault();
      await api.post('/movies', { title, image, content });
      navigate('/');
      setTitle('');
      setContent('');
      setImage('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Content>
        <Form onSubmit={handleCreateUser}>
          <AddFilmForm>
            <Left>
              <Title>Informacje o Fimie</Title>
              <BoxInput>
                <Input
                  type="text"
                  placeholder="Tytuł Filmu"
                  value={title}
                  onChange={(evt) => {
                    setTitle(evt.target.value);
                  }}
                ></Input>
                <Input
                  type="text"
                  placeholder="Link do zdjęcia"
                  value={image}
                  onChange={(evt) => {
                    setImage(evt.target.value);
                  }}
                ></Input>
              </BoxInput>
              <Button type="submit">Dodaj film</Button>
            </Left>
            <Right>
              <Title>Dodaj Opis Fimu</Title>
              <TextAreaPlace
                placeholder="Opis filmu"
                value={content}
                onChange={(evt) => {
                  setContent(evt.target.value);
                }}
              ></TextAreaPlace>
            </Right>
          </AddFilmForm>
        </Form>
      </Content>
    </Container>
  );
}

export default AddFilm;
