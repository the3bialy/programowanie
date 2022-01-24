import styled from 'styled-components';
import pictureActor from '../../file/tomKar.jpg';
import pictureActorCharacter from '../../file/tomKarMik.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 220px;
  margin: 0 10% 5%;
`;

const PicturePlaceActor = styled.div`
  background-image: url(${pictureActor});
  overflow: hidden;
  height: 180px;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
`;

const PicturePlaceCharacter = styled.div`
  background-image: url(${pictureActorCharacter});
  overflow: hidden;
  height: 180px;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 40px;
  color: #ccc;
`;

const Character = styled.div`
  width: 45%;
  border: 1px solid #444;
`;


function NewActor() {
  //<img src={picture}></img>
  return (
    <Container>
      <Character>
        <PicturePlaceActor></PicturePlaceActor>
        <Name>Tomasz Karolak</Name>
      </Character>
      <Character>
        <PicturePlaceCharacter></PicturePlaceCharacter>
        <Name>Święty Mikołaj</Name>
      </Character>
    </Container>
  );
}

export default NewActor;
