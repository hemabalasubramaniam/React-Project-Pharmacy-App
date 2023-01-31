import React, { useState, useEffect } from "react";
import Prescribedmedicine from './Prescribedmedicine';
import { Button, Image, Grid,Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import './Prescribedstyle.css';

const getArray = () =>{
    let data=localStorage.getItem('prescribed');
    console.log("data..",data);
    if(data){
        return JSON.parse(data);
    }
    else{
        return [];
    }
}

const PrescribedDescription = (props) =>{
    const[prescribedcart, add2] =useState(getArray());
    const [prescribedquantity, select]=useState(1);
    const [back,backbtn] = useState();

    const loggedin =JSON.parse(localStorage.getItem('loggedin'));

    const addtocart = () =>{
        add2(prescribedcart => [...prescribedcart, props.presc])
    }

    useEffect (() =>{
        localStorage.setItem('prescribed', JSON.stringify(prescribedcart))
    },[prescribedcart])

    useEffect (() =>{
        localStorage.setItem('prescribedquantity', JSON.stringify(prescribedquantity))
    },[prescribedquantity])

    const handlechange = (e) =>{
        select(e.target.value);
    }

    //console.log(props);
    return(
        <>
         {(back === "back") ? <Prescribedmedicine /> : <>
            <div className="medicinedesc">
                <Segment>
                <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Image className="imgdesc" src={props.presc.img} />   
                    <Button className="backfromdescription" onClick={() =>backbtn("back")} labelPosition='left' icon='left chevron' content='Back to Prescribed Medicine' color="blue"/> 
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                    <div className="description">
                    <p className="name">{props.presc.medicinename}</p>
                    <p className="amount">${props.presc.amount}</p>
                    <p className="desc">{props.presc.description}</p>
                    <select onChange={(e) => handlechange(e)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    { (loggedin === "userexist" )? <>
                    <Button className="cart" onClick={() => addtocart()} color="teal">ADD To CART</Button> <br/>
                    <Link to='/viewcart'><Button className="viewcart" color="olive">ViewCart</Button> </Link> </>: <p className="addtocartenable">Please Login to enable ADD TO CART</p>}
                    </div> 
                </Grid.Column>
                </Grid>
                </Segment>
        </div> </> }
        </>
    );
}

export default PrescribedDescription;