import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GeneralMedicine from "./Generalmedicine";
import { Grid, Button, Image, Segment } from "semantic-ui-react";
import './Generalstyle.css';

const getArray = () =>{
    let data=localStorage.getItem('general');
    console.log("data..",data);
    if(data){
        return JSON.parse(data);
    }
    else{
        return [];
    }
}

const GeneralDescription = (props) =>{
    const[generalcart, add1] =useState(getArray());
    
    const [generalquantity, select]=useState(1);
    const [back,backbtn] = useState();


    const loggedin =JSON.parse(localStorage.getItem('loggedin'));

    const addtocart = () =>{
        add1(generalcart => [...generalcart, props.general])
    }

    useEffect (() =>{
        localStorage.setItem('general', JSON.stringify(generalcart))
    },[generalcart])

    useEffect (() =>{
        localStorage.setItem('generalquantity', JSON.stringify(generalquantity))
    },[generalquantity])


    const handlechange = (e) =>{
        select(e.target.value);
    }


    return(
        <>
        {(back=="back") ? <GeneralMedicine /> :<>
        <div className="medicinedesc">
            <Segment>
            <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
                <Image className="imgdesc" src={props.general.img} />   
                <Button className="backfromdescription" onClick={() =>backbtn("back")} labelPosition='left' icon='left chevron' content='Back to General Medicine' color="blue"/> 
            </Grid.Column>

            <Grid.Column verticalAlign='middle'>
                <div className="description">
                <p className="name">{props.general.medicinename}</p>
                <p className="amount">${props.general.amount}</p>
                <p className="desc">{props.general.description}</p>
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
                { (loggedin=="userexist" )? <>
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

export default GeneralDescription;