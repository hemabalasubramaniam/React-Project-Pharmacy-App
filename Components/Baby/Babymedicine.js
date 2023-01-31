import React, { useState} from "react";
import { babymedicine } from "../PharmacyJson/PharmacyJson";
import {Card, Image} from 'semantic-ui-react';
import './Babystyle.css';
import BabyDescription from "./Babydescription";

const BabyMedicine = () => {
    const [baby, desc] = useState("babymed")
    
    const viewimage = (x) =>{
        desc(x);
    }

    return (
        <>
        {(baby=="babymed") ? <>
                <div className="baby">
                    <p className="babytext">
                        Baby Products/Medicine
                    </p>
                    <div class="ui link cards">
                    <Card.Group itemsPerRow={3}>
                    {
                        babymedicine.map((x) => {
                            return  <Card className="babycard" onClick={() =>viewimage(x)}>
                                       <Image className="img" src={x.img} wrapped ui={false} />
                                        <Card.Content>
                                        <Card.Header>{x.medicinename}</Card.Header>
                                        <Card.Description> $ {x.amount}</Card.Description>
                                        </Card.Content>
                                    </Card> 
                        }) 
                    } 
                    </Card.Group>
                    </div>
                </div> </>: <BabyDescription baby={baby}/> }
        </>
    );
}

export default BabyMedicine;


