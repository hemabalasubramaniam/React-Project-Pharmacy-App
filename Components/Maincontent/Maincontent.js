import React from "react";
import './Maincontent.css';
import {Card, Image, Container} from 'semantic-ui-react';
import { Link } from "react-router-dom";

const Maincontent = () =>{

    return(
      <div className='home'>
             <Container>
                <Image className="fimg" src={require('../Images/home.jpg')}  alt="home"/>
             </Container>
             {/* <div className='text'>
               <h3>ONLINE MEDICAL SUPPLIES</h3>
               <h2>Get Your Vitamins and Minerals</h2>
               <button>Medicine Types</button>
             </div> */}

             <div className='medicinetypes' id="meditypes">
             <div class="ui link cards">
                <Card.Group itemsPerRow={3}>
                  <Link className="medtype" to='/generalmedicine'>
                  <Card> 
                    <Image className="homeimg" src={require('../Images/generalmedicine.jpg')} / >
                    <Card.Content>
                        <Card.Header>General Medicine</Card.Header>
                        <Card.Description>
                            General Medicine includes medicines that does not require any prescribtion and safe to use for everyone
                        </Card.Description>
                    </Card.Content>
                  </Card>
                  </Link>

                  <Link className="medtype" to='/babymedicine'>
                  <Card>
                    <Image className="homeimg" src={require('../Images/babymedicine.jpg')} / >
                    <Card.Content>
                        <Card.Header>Baby Medicine</Card.Header>
                        <Card.Description>
                            Baby Medicine section contains Baby products and other medicines particularly for kids
                        </Card.Description>
                    </Card.Content>
                  </Card>
                  </Link>

                  <Link className="medtype" to='/prescribedmedicine'>
                  <Card>
                    <Image className="homeimg" src={require('../Images/prescribed.jpg')} / >
                    <Card.Content>
                        <Card.Header>Prescribed Medicine</Card.Header>
                        <Card.Description>
                            Prescribed Medicine section allows to order medicine only if the prescribtion is available
                        </Card.Description>
                    </Card.Content>
                  </Card>
                  </Link>

                </Card.Group>
                </div>
              </div>
      </div>
    );
}

export default Maincontent;