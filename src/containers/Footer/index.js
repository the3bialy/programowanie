import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 5vh;
  background:#000;
  color: #bdbdbd;
  font-family: 'roboto', 'sans-serif';
  font-size: 20px;
  text-align: left;
  padding-left: 10px;
  line-height: 10vh;
`;

const Text = styled.div``;

class Footer extends Component {
  render() {
    return (
      <Container>
        <Text>Copyrights © Karol Białas | 2021</Text>
      </Container>
    );
  }
}

export default Footer;
