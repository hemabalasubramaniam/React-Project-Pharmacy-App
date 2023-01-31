import React, { useEffect, useState} from "react";
import './Babystyle.css';
import { Button, Segment, Image, Grid, Select } from "semantic-ui-react";
import { Link } from "react-router-dom";
import BabyMedicine from "./Babymedicine";

const getArray = () =>{
    let data=localStorage.getItem('baby');
    console.log("data..",data);
    if(data){
        return JSON.parse(data);
    }
    else{
        return [];
    }
}

const BabyDescription = (props) =>{

    const [babycart, add]=useState(getArray());

    const [babyquantity, select] =useState(1);
    const [back,backbtn] = useState();

    const loggedin =JSON.parse(localStorage.getItem('loggedin'));

    const addtocart = () =>{
        add(babycart => [...babycart, props.baby])
    }

    useEffect (() =>{
        localStorage.setItem('baby', JSON.stringify(babycart))
    },[babycart])

    useEffect (() =>{
        localStorage.setItem('babyquantity', JSON.stringify(babyquantity))
    },[babyquantity])

    const handlechange = (e) =>{
        // console.log("select" ,e.target.value);
        select(e.target.value);
    }

    
    //console.log("babycart----" ,babycart);
    return(
        <>
         {(back=="back") ? <BabyMedicine /> : <>
        <div className="medicinedesc">
            <Segment>
            <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
                <Image className="imgdesc" src={props.baby.img} />   
                <Button className="backfromdescription" onClick={() =>backbtn("back")} labelPosition='left' icon='left chevron' content='Back to Baby Medicine' color="blue"/> 
            </Grid.Column>

            <Grid.Column verticalAlign='middle'>
                <div className="description">
                <p className="name">{props.baby.medicinename}</p>
                <p className="amount">${props.baby.amount}</p>
                <p className="desc">{props.baby.description}</p>
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
        </div>  </>}
        </>
    );
}

export default BabyDescription;