import React, { useState} from "react";
import { prescribedmedicine } from "../PharmacyJson/PharmacyJson";
import {Card, Image} from 'semantic-ui-react';
import './Prescribedstyle.css';
import PrescribedDescription from "./Prescribeddescription";

const Prescribedmedicine = () => {
    const [presc, desc2] = useState("Prescribed")
    
    const viewimage = (x) =>{
        desc2(x);
    }
   
    return (
        <>
        {(presc === "Prescribed") ? <>
                 <div className="prescribed">
                    <p className="prescribedtext">
                        Prescribed Medicine
                    </p>
                    <div class="ui link cards">
                    <Card.Group itemsPerRow={3}>
                    {
                        prescribedmedicine.map((x) => {
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
                </div>  </>: <PrescribedDescription presc ={presc} />  }
        </>
    );
}

export default Prescribedmedicine;
