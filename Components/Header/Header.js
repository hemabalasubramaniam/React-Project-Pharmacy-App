import React, {useEffect, useState} from 'react';
import './Header.css';
import { Header, Segment,Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Headers = () =>{ 

    const loggedin =JSON.parse(localStorage.getItem('loggedin'));
    const [logout, click] = useState(loggedin);

    useEffect (() =>{
        localStorage.setItem('loggedin', JSON.stringify(logout));
    },[logout])

    const loggedout = () =>{
        click("yes");
        alert("you have been loggedout !!")
    }

    const signup = () =>{
        click(JSON.parse(localStorage.getItem('loggedin')));
    }

    console.log("loggedin....." ,logout);
    return(
        <>
        <div className='header'>
        <Segment clearing className='headersegment'>
            <Header as='h2' floated='right'>
                {(logout === "userexist") && (logout !== "yes" )? <>
                <Link to='/viewcart'>
                <Button className='signup' onClick={() =>signup()} content='VIEWCART' color='teal'/> 
                </Link>
                <Link to='/'>
                <Button className='logout' content='LOGOUT' color='blue' onClick={() =>loggedout()} />
                </Link></>  :
                <Link to='/login'>
                <Button className='signup' content='SIGNUP/LOGIN' color='blue'/> 
                </Link>} 

            </Header>
            <Header as='h2' floated='left'>
            <img className="logoimg" src={require('../Images/logo.jpg')}/>
            <Link to='/' className='logoname'>
                    Pharmacy
            </Link>
            </Header>
        </Segment>
        </div>
        </>
    );
}

export default Headers;