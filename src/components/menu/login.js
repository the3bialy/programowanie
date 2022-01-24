import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Button = styled.button`
    background: transparent;
    color: #bdbdbd;
    width: 100%;
    font-size: 1.7em;
    border: none;
    cursor: pointer;
`






class LoginArea extends Component {

    render(){
        return (
            
            <Link to="/signin"><Button > Zaloguj się </Button></Link>
            
        )
    }
}

export default LoginArea;