import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import{
    Button,
    Form,
    Label,
    Segment,
    Message
} from 'semantic-ui-react';

const style ={
    base : {
        marign : '0.5rem',
        padding : '0.5rem'
    },
    paddinglr : {
        paddingLeft : '6%',
        paddingRight : '6%'
    }
};

class PersonalInput extends Component{
    render(){
        return(
            <div>
                <Form>
                    <Segment piled style={style.paddinglr}>
                        <Label style={style.base}> NickName</Label>
                        <Form.Input name='nickname' placeholder='NickName'/>
                        <Label style={style.base}>Email</Label>
                        <Form.Input name='email' fluid icon='at' placeholder='E-mail address '/>

                        <Label style={style.base}>Password</Label>
                        <Form.Input name='password' fluid icon='lock'
                        placeholder='Password' type='password'/>
                         <Label style={style.base}> Password Check </Label>
                        <Form.Input name='pcheck' fluid icon='check' 
                        placeholder='Password Check' type='password'/>
                        <Label style={style.base}> Email Authentication </Label>
                        <div>
                            <Form.Input name='certification_number' fluid icon='at' placeholder='Certification Number'/>
                            <Message style={{fontSize:'1rem'}} content="If you don't receive our mail, click 're-send' button" icon='info circle' info />
                            <Button> Send email </Button>
                            <Button primary>confirm</Button>
                        </div>
                    </Segment>
                    <Button disabled={true} color='teal' fluid size='large'>Next</Button>
                </Form>
            </div>
        );
    }
}


export default PersonalInput;