import React from "react";
import './Userverify.css';
import { Button,Table,Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Userverify = () =>{
    const userorder = JSON.parse(localStorage.getItem('orderdelivery'));
    console.log("userorder---" ,userorder);
    return(
        <div className="userverify">
            <Segment>
                   <h1 className="verifydetails">Please Verify Your Details</h1>
                   <Table>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Name</Table.Cell>
                                <Table.Cell>{userorder.Fname}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Email Id</Table.Cell>
                                <Table.Cell>{userorder.Email}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Address</Table.Cell>
                                <Table.Cell>{userorder.Address}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Pincode</Table.Cell>
                                <Table.Cell>{userorder.Pincode}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Mobile Number</Table.Cell>
                                <Table.Cell>{userorder.Phoneno}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Link to='/checkout'>
                        <Button labelPosition='left' className="edit" icon='left chevron' color="red" content='Edit Your details' />
                    </Link>
            <Link to='/orderconfirmation'>
                <Button labelPosition='right' className="proceedbtn" icon='right chevron' color="teal" content='Proceed to Checkout' />
            </Link>
            </Segment>
        </div>
    );
}

export default Userverify;