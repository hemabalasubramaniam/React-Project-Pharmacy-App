import React from "react";
import { Segment,Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Loginheader = () =>{
    return(
        <Segment clearing>
            <Header as='h2' floated='left'>
                <img className="logoimg" src={require('../Images/logo.jpg')}/>
                <Link to='/' className='logoname'>
                        Pharmacy
                </Link>
            </Header>
        </Segment>
    );
} 

export default Loginheader;