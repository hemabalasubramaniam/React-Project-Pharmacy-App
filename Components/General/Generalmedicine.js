import React, { useState} from "react";
import { generalmedicine } from "../PharmacyJson/PharmacyJson";
import {Card, Image} from 'semantic-ui-react';
import GeneralDescription from "./Generaldescription";
import './Generalstyle.css';

const GeneralMedicine = () => {
    const [general, desc1] = useState("generalmed");
    
    const viewimage = (x) =>{
        desc1(x);
    }
   
    return (
        <>
        {(general=="generalmed") ? <>
                <div className="general">
                    <p className="generaltext">
                        General Medicine
                    </p>
                    <div class="ui link cards">
                    <Card.Group itemsPerRow={3}>
                    {
                        generalmedicine.map((x) => {
                            return  <Card className="generalcard" onClick={() =>viewimage(x)}>
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
                </div> </> : <GeneralDescription general={general} /> }
        </>
    );
}

export default GeneralMedicine;