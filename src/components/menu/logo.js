import React, {Component} from 'react';
import styled from 'styled-components';
import logo from '../../file/logo.png';
import {Link} from 'react-router-dom'
import './logo.css';

const Logo = styled.img`
    height: 140px;
    margin-top:20px;
    margin-left: 3%;
    &:hover{
        cursor: pointer;
    }
`

class LogoArea extends Component {

    render(){
        return (
            <Link to="/" className='linkLogo'><Logo src={logo} /> </Link>
        )
    }
}

export default LogoArea;