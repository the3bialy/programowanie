import React, { Component } from 'react';
import styled from 'styled-components';


const FieldSearch = styled.div`
  height: 50%;
  width: 40%;
  display: flex;
  justify-content: space-between;
  

`;

const IconLoupe = styled.img`
  max-width: 10%;
`;

const TextInput = styled.input`
  height: 100%;
  flex-basis: 88%;
  border: none;
  box-sizing: border-box;
  padding-left: 2%;
  font-family: FontAwesome;
  font-size: 20px;
  cursor: pointer;
  background: #bdbdbd;
  
`;

class SearchArea extends Component {
  render() {
    return (
      <FieldSearch>

        <TextInput
          onChange={(e) => this.props.setDraftValue(e.target.value)}
          value={this.props.draftValue}
          type="text"
          placeholder="Szukaj filmów"
        />
      </FieldSearch>
    );
  }
}

export default SearchArea;
