import React from 'react';
import styled from 'styled-components';
import LoginArea from '../../components/menu/login';
import LogoArea from '../../components/menu/logo';
import SearchArea from '../../components/menu/search';
import AddFilmBtn from '../../components/menu/addFilmBtn';
import LogoutArea from '../../components/menu/logout';

const Container = styled.div`
  background: #000000;
  margin: 0 auto;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const ButtonsPlace = styled.div`
  display: flex;
`;

function MenuList(props) {
  return (
    <Container>
      <LogoArea />
      <SearchArea
        draftValue={props.draftValue}
        setDraftValue={props.setDraftValue}
      />
      <ButtonsPlace>
        {props.token != null ? <AddFilmBtn /> : null}
        {props.token === null ? (
          <LoginArea />
        ) : (
          <LogoutArea setToken={props.setToken} />
        )}
      </ButtonsPlace>
    </Container>
  );
}

export default MenuList;
