import React from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";
import './Footer.css'

const Footer = () =>{
    return(
        <div className="footer">
            <Segment>
                <div className="footercontent">
                        <Grid columns={2} relaxed='very'>
                        <Grid.Column>
                            <p>
                                <Icon name="map marker alternate" size='large' />
                                <span>
                                    coimbatore
                                </span>
                            </p>
                            <p>
                                <Icon name="phone" size="large"/>
                                <span>+1 555 123456</span>
                            </p>
                            <p>
                                <Icon name="mail" size="large" />
                                <span>medpharm@gmail.com</span>
                            </p>
                        </Grid.Column>
                        <Grid.Column>  
                            <p className="about">About the Pharmacy</p>  
                            <p className="aboutdesc">Pharmed provides various medicines includes general baby and prescribed medicines it is userfriendly.so, that everyone can buy it without any complication</p>
                        </Grid.Column>
                        </Grid>
                </div>
            </Segment>
        </div>
        );
}

export default Footer;