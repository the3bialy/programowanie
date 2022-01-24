import React, {Component} from 'react';
import styled from 'styled-components';

const Text = styled.div`
font-size: 30px;
`

class Title extends Component {

    state = {
        title: this.props.title,
    }

    render(){
        return (
            <Text>{this.props.title}</Text>
        )
    }
}

export default Title;