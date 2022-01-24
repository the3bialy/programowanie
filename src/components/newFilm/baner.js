import React from 'react';
import styled from 'styled-components';

const Baner = styled.img`
  min-width: 250px;
  width: 100%;
  cursor: pointer;
`;

const Image = styled.div`
  width: 50%;
  overflow: hidden;
`;

function BanerFilm({ image }) {
  return (
    <Image>
      <Baner src={image} />
    </Image>
  );
}

export default BanerFilm;
