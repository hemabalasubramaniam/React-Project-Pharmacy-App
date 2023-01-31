import React from "react";
import { Table, Icon, Image } from "semantic-ui-react";
import './OrderConfirmation.css';

const Orderconfirmation = () =>{

    const babycartremove1 = JSON.parse(localStorage.getItem('baby'));

    const generalcartremove1 = JSON.parse(localStorage.getItem('general')); 

    const prescribedcartremove1 = JSON.parse(localStorage.getItem('prescribed'));

    const babyquantity =JSON.parse(localStorage.getItem('babyquantity'));
    const generalquantity =JSON.parse(localStorage.getItem('generalquantity'));
    const prescribedquantity =JSON.parse(localStorage.getItem('prescribedquantity'));

    let babymedamount = 0 ;
    let generalmedamount = 0;
    let prescribedmedamount = 0;

    babycartremove1.map((x) =>{
        babymedamount += x.amount * babyquantity;
    })

    generalcartremove1.map((x) =>{
        generalmedamount += x.amount * generalquantity;
    })

    prescribedcartremove1.map((x) =>{
        prescribedmedamount += x.amount * prescribedquantity
    })

    return(
        <>
        <div className="orderconfirmation">
            <Image className="confirmimg" src={'https://cdn.pixabay.com/photo/2018/05/13/18/06/natural-cosmetics-3397277_960_720.jpg'} />
            <br/><p className="orderconform">Your order has been received successfully  : )</p>
            <div className="conformmessage">
            <p className="orderdetailstext">Your Order details</p>
            <Table border="1">
                    <Table.Header>
                        <Table.Row>
                            <Table.Cell>PRODUCT</Table.Cell>
                            <Table.Cell>SUB TOTAL</Table.Cell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            babycartremove1.map((x) =>{
                                return <Table.Row>
                                <Table.Cell>{x.medicinename}</Table.Cell>
                                <Table.Cell>$ {x.amount * babyquantity}</Table.Cell>
                            </Table.Row>
                            })
                        }
                        {
                            generalcartremove1.map((x) =>{
                                return <Table.Row>
                                <Table.Cell>{x.medicinename}</Table.Cell>
                                <Table.Cell>$ {x.amount * generalquantity}</Table.Cell>
                            </Table.Row>
                            })
                        }
                        {
                            prescribedcartremove1.map((x) =>{
                                return <Table.Row>
                                <Table.Cell>{x.medicinename}</Table.Cell>
                                <Table.Cell>$ {x.amount * prescribedquantity}</Table.Cell>
                            </Table.Row>
                            })
                        }
                        </Table.Body>
                        <Table.Header>
                            <Table.Row negative> 
                                <Table.Cell>Total Amount</Table.Cell>
                                <Table.Cell>$ {babymedamount + generalmedamount + prescribedmedamount}</Table.Cell>
                            </Table.Row>
                        </Table.Header>

            </Table>
            </div>
            <p className="happyshopping">Happy Shopping !!</p>
        </div> 
        </>
    );
}

export default Orderconfirmation;