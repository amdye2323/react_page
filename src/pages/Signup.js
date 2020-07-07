import React, { Component } from 'react';
import {PersonalInput} from 'components/Register';
import {DevelopInput} from 'components/Register';
import {ExperienceInput} from 'components/Register';
import {CompleteRegister} from 'components/Register';
import {RegisterHeader} from 'components/Register';

import{
    Container
} from 'semantic-ui-react';

class Signup extends Component{
    render(){
        const { match } = this.props;
        const number = match.params.number;
        return(
            <div>
                <RegisterHeader number={number}/>
                <Container style={{marginBottom: '2rem'}}>
                { (number === '1' || number === undefined && <PersonalInput />)}
                { (number === '2' && <DevelopInput />)}
                { (number === '3' && <ExperienceInput />)}
                { (number === '4' && <CompleteRegister />)}
                </Container>
            </div>
        );
    }
}

export default Signup;