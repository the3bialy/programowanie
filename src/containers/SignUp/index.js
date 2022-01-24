import styled from 'styled-components';
import { useState } from 'react';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
  width: 100vw;
  min-height: 80vh;
  background: white;
  padding: 10vh 20vw 0 20vw;
  background: #bdbdbd;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  min-height: 60vh;
  // border: 4px solid #F2CC0C;
  background-color: #5e5e5e;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 7% 5% 7%;
  justify-content: space-between;
`;

const Button = styled.button`
  border: 2px solid #666;
  height: 50px;
  margin: 10px 0;
  font-size: 20px;
  background-color: #fff;
  cursor: pointer;
`;

const Input = styled.input`
  height: 50px;
  border: none;
  border-bottom: 2px solid grey;
  margin: 10px 0;
  font-size: 20px;
  padding-left: 10px;
  &:active {
  }
  &:focus {
    border: none;
  }
`;
const Text = styled.div`
  font-family: sans-serif;
  font-size: 18px;
  height: 30px;
  padding: 5px 0;
`;

const Title = styled.div`
  font-size: 26px;
  margin-bottom: 30px;
  font-weight: bold;
`;

const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ErrorMessage = styled.div`
  height: auto;
  width: 100%;
  font-size: 24px;
  font-family: robot, sans-serif;
  margin: 10px 0;
  padding: 10px 20px;
  background: 5e5e5e;
  text-align: center;
  // border: 2px solid #ddd;
  border-radius: 10px;
  color: red;
`;

export const api = axios.create({
  baseURL: 'https://pr-movies.herokuapp.com/api',
});

function SignUp(props) {
  // function goToSingIn(){

  // }
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleCreateUser = async (event) => {
    try {
      event.preventDefault();
      await api.post('/user/create', { name, email, password });
      navigate('/signin');
      setName('');
      setPassword('');
      setEmail('');
    } catch (err) {
      console.log(err);
      setError('Wystąpił problem z rejestracją!');
    }
  };
  return (
    <Container>
      <Content>
        <Form onSubmit={handleCreateUser}>
          <ErrorMessage>{error}</ErrorMessage>
          <BoxInput>
            <Title> ZAREJESTRUJ SIĘ </Title>
            <Input
              type="text"
              placeholder="Nazwa użytkownika"
              value={name}
              onChange={(evt) => {
                setName(evt.target.value);
              }}
            ></Input>
            <Input
              type="text"
              placeholder="Hasło"
              value={password}
              onChange={(evt) => {
                setPassword(evt.target.value);
              }}
            ></Input>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(evt) => {
                setEmail(evt.target.value);
              }}
            ></Input>
          </BoxInput>
          <BoxButton>
            <Button type="submit">Zarejestruj się</Button>
            <Text>lub</Text>
            <Link to="/signin" className="link">
              <p>Zaloguj się</p>
            </Link>
          </BoxButton>
        </Form>
      </Content>
    </Container>
  );
}

export default SignUp;
