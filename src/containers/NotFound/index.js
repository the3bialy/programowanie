import styled from 'styled-components';
import '../SignIn/signin.css';


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
  flex-wrap: wrap;
  width: 60vw;
  height: 60vh;
  background-color: #ddd;
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled.div`
  font-family: roboto, sans-serif;
  font-size: 154px;
  width: 100%;
  height: 30vh;
  line-height: 40vh;
`;

const DescErrorText = styled.div`
  font-family: roboto, sans-serif;
  font-size: 62px;
  width: 100%;
  height: 30vh;
  line-height: 15vh;
`;

function NotFound(props) {
  return (
    <Container>
      <Content>
        <ErrorText>404</ErrorText>
        <DescErrorText>Page not found</DescErrorText>
      </Content>
    </Container>
  );
}

export default NotFound;
