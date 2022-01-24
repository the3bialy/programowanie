import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  background: transparent;
  color: #bdbdbd;
  width: 100%;
  font-size: 1.7em;
  border: none;
  cursor: pointer;
`;

const Container = styled.div`
    position: relative;
    width: 200px;
    &:after {
        position: absolute;
        bottom: -8px;
        left: 10%;
        content: "";
        border: 0px solid black;
        width: 0%;
        transition: .3s linear;
      }

    &:hover:after {
        width: 80%;
        border: 2px solid black;
        background: black;
      }
      
`;

class AddFilmBtn extends Component {
  render() {
    return (
      <Container>
        <Link to="/addfilm">
          <Button>
            Dodaj film
          </Button>
        </Link>
      </Container>
    );
  }
}

export default AddFilmBtn;
