import React, { useEffect, useState } from "react";
import { Table, Image, Button } from "semantic-ui-react";
import './Viewcart.css';
import { Link } from "react-router-dom";

const ViewCart = () => {

    let babycartremove1 = JSON.parse(localStorage.getItem('baby'));
    console.log("babycartremove1..." , babycartremove1);

    let generalcartremove1 = JSON.parse(localStorage.getItem('general')); 
    console.log("generalcartremove1..." , generalcartremove1);

    let prescribedcartremove1 = JSON.parse(localStorage.getItem('prescribed'));
    console.log("prescribedcartremove1..." , prescribedcartremove1);


    const [babycartremove , remove1] = useState(babycartremove1)
    const [generalcartremove, remove2] = useState(generalcartremove1)
    const [prescribedcartremove, remove3] = useState(prescribedcartremove1)

    const babyremove = (e) =>{
        console.log("index",e);
        const babycart = babycartremove.filter((x,index) => index!==e);
        remove1(babycart);
    }

    // const placeorder = () =>{
    //     localStorage.setItem('babyorders', JSON.stringify(babycartremove))
    //     localStorage.setItem('generalorders', JSON.stringify(generalcartremove))
    //     localStorage.setItem('prescribedorders', JSON.stringify(generalcartremove))
    //     navigate('/checkout');
    // }

    useEffect (() =>{
        localStorage.setItem('baby',JSON.stringify(babycartremove));
    }, [babycartremove])


    const generalremove = (e) =>{
        const generalcart = generalcartremove.filter((x,index) => index!==e);
        remove2(generalcart);
    }

    useEffect (() =>{
        localStorage.setItem('general', JSON.stringify(generalcartremove));
    }, [generalcartremove])
    


    const prescribedremove = (e) =>{
        const prescribedcart = prescribedcartremove.filter((x,index) => index!==e);
        remove3(prescribedcart);
    }
    
    useEffect (() =>{
        localStorage.setItem('prescribed' , JSON.stringify(prescribedcartremove));
    }, [prescribedcartremove])

    const babyquantity =JSON.parse(localStorage.getItem('babyquantity'));
    const generalquantity =JSON.parse(localStorage.getItem('generalquantity'));
    const prescribedquantity =JSON.parse(localStorage.getItem('prescribedquantity'));
    

    // console.log("localstorage-babycart",babycartremove);
    // console.log("localstorage-generalcart",generalcart);
    // console.log("localstorage-prescribedcart",prescribedcart);
    //console.log("babycart",babycart);
    // console.log("generalcart",props.generalcart);
    // console.log("prescribedcart", props.prescribedcart);
    //console.log("quantity", quantity);
    return (
        <>
        <div className="viewcart">
        {(babycartremove.length === 0 && generalcartremove.length === 0 && prescribedcartremove.length === 0) ? <div className="emptycart">Your Cart is Empty</div> :
            <>  
               <Table celled>
               <Table.Header>
                 <Table.Row>
                   <Table.HeaderCell>PRODUCT IMAGE</Table.HeaderCell>
                   <Table.HeaderCell>PRODUCT ID</Table.HeaderCell>
                   <Table.HeaderCell>PRODUCT NAME</Table.HeaderCell>
                   <Table.HeaderCell>QUANTITY</Table.HeaderCell>
                   <Table.HeaderCell>SUB TOTAL</Table.HeaderCell>
                   <Table.HeaderCell></Table.HeaderCell>
                 </Table.Row>
               </Table.Header>
           
               <Table.Body>
                {
                    generalcartremove.map((x,index) =>{
                        return <Table.Row>
                        <Table.Cell>
                            <Image className="cartimg" src={x.img} />
                        </Table.Cell>
                        <Table.Cell>{x.medicineid}</Table.Cell>
                        <Table.Cell>{x.medicinename}</Table.Cell>
                        <Table.Cell>{generalquantity}</Table.Cell>
                        <Table.Cell>$ {x.amount * generalquantity}</Table.Cell>
                        <Table.Cell><Button className="removebtn" onClick={() =>generalremove(index)}>Remove</Button></Table.Cell>
                        </Table.Row>
                    })
                }
                {
                    babycartremove.map((x,index) =>{
                        return <Table.Row>
                        <Table.Cell>
                            <Image className="cartimg" src={x.img} />
                        </Table.Cell>
                        <Table.Cell>{x.medicineid}</Table.Cell>
                        <Table.Cell>{x.medicinename}</Table.Cell>
                        <Table.Cell>{babyquantity}</Table.Cell>
                        <Table.Cell>$ {x.amount * babyquantity}</Table.Cell>
                        <Table.Cell><Button className="removebtn" onClick={() =>babyremove(index)}>Remove</Button></Table.Cell>
                        </Table.Row>
                    })
                }
                {
                    prescribedcartremove.map((x,index) =>{
                        return <Table.Row>
                        <Table.Cell>
                            <Image className="cartimg" src={x.img} />
                        </Table.Cell>
                        <Table.Cell>{x.medicineid}</Table.Cell>
                        <Table.Cell>{x.medicinename}</Table.Cell>
                        <Table.Cell>{prescribedquantity}</Table.Cell>
                        <Table.Cell>$ {x.amount * prescribedquantity}</Table.Cell>
                        <Table.Cell><Button className="removebtn" onClick={() =>prescribedremove(index)}>Remove</Button></Table.Cell>
                        </Table.Row>
                    })
                }
               </Table.Body>
             </Table>
             <Link to='/checkout'>
                <Button className="checkout" color="teal" >Place Order</Button>
             </Link>
            </> }
            </div>
        </>
           
    );
}

export default ViewCart;