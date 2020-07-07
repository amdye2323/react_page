import React, { Component } from 'react';
import logo from 'image/logo3.png';
import { Link } from 'react-router-dom';

import { Button,Form,Grid,Header,Image,Message,Segment } from 'semantic-ui-react';

class login extends Component{
    render(){
        return(
            <div className='login-form'>
                {
                /*
                    Heads up! The styles below are necessary for the correct render of this example.
                    You can do same with CSS, the main idea is that all the elements up to the `Grid`
                    below must have a height of 100%.
                */
                }
                <style>{`
                    body > div,
                    body > div > div ,
                    body > div > div > div.login-form {
                        height : 100%;
                    }                    
                    `}
                </style>
                <Grid textAlign="center" style={{height:'100%'}} verticalAlign="middel">
                    <Grid.Column style={{maxWidth : 500 }}>
                        <Header as="h2" color="teal" textAlign="center">
                            <Image style={{width:150}} src={logo}/> Log-in to your account
                        </Header>
                        <Form size="large">
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Your Login Id' />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password' />

                                <Button color='teal' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            Join or Create Your CompanyCode <br />
                            <Link to="/signup" >Sign Up</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default login;