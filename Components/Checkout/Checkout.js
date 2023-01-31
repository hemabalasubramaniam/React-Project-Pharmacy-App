import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Form, Table, Button, Image, Label, Input, Segment } from 'semantic-ui-react';
import './Checkout.css';
import {Link} from 'react-router-dom';

const getArray = () =>{
    let data=localStorage.getItem('orderdelivery');
    console.log("data..",data);
    if(data){
        return JSON.parse(data);
    }
    else{
        return [];
    }
}

const Checkout = () => {

    const [user,append] = useState(getArray());

    const orderaddress = () =>{
       append(formik.values)
    }

    useEffect (() =>{
        localStorage.setItem('orderdelivery', JSON.stringify(user))
    },[user])



    let babycartremove1 = JSON.parse(localStorage.getItem('baby'));
    console.log("babycartremove1..." , babycartremove1);

    let generalcartremove1 = JSON.parse(localStorage.getItem('general')); 
    console.log("generalcartremove1..." , generalcartremove1);

    let prescribedcartremove1 = JSON.parse(localStorage.getItem('prescribed'));
    console.log("prescribedcartremove1..." , prescribedcartremove1);

    const babyquantity =JSON.parse(localStorage.getItem('babyquantity'));
    const generalquantity =JSON.parse(localStorage.getItem('generalquantity'));
    const prescribedquantity =JSON.parse(localStorage.getItem('prescribedquantity'));

    const validationSchema = Yup.object({
        Fname: Yup.string()
            .required("First Name is Required")
            .matches(/^[A-Za-z]+$/, "Enter a valid First name"),
        Lname: Yup.string()
            .required("Last Name is Required")
            .matches(/^[A-Za-z]+$/, "Enter a valid Last name"),
        Email: Yup.string()
            .required("Email is Required")
            .email("Invalid Email ID"),
        Phoneno: Yup.string()
            .required("Contact no is Required")
            .matches(/^[0-9]*$/, "Only numbers are allowed")
            .length(10, "Enter a valid mobile number"),
        Address: Yup.string()
            .required("Address is required"),
        Pincode : Yup.string()
                    .required("Pincode is Required")
                    .length(6, "Enter a valid pincode"),
        
    })

    const onSubmit = (value) =>{
        console.log(value);
    }

    const formik = useFormik({
        initialValues:{
            Fname: user.Fname,
            Lname: user.Lname,
            Address: user.Address,
            Pincode: user.Pincode,
            Phoneno: user.Phoneno,
            Email: user.Email,
        },
        onSubmit,
        validationSchema,
        isValid:true,
        dirty:false
    })

    console.log("dirty",formik.dirty);
    console.log("valid", formik.isValid);

    return (
        <>
        <div className='checkoutpage'>
                <div className='personaldetails'>
                <Segment >
                    <p className='text'>PERSONAL DETAILS</p>
                    {(user.length === 0 ) ?
                    <Form>
                        <Form.Field>
                            <Label>First Name</Label>
                            <Input type='text' placeholder='Enter First Name' name="Fname" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={user.Fname}/>
                            {(formik.errors.Fname && formik.touched.Fname) ? <div className="error">{formik.errors.Fname}</div> : null}
                        </Form.Field>
                        <Form.Field>
                            <Label>Last Name</Label>
                            <Input type='text' placeholder='Enter Last Name' name="Lname" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={user.Lname}/>
                            {(formik.errors.Lname && formik.touched.Lname) ? <div className="error">{formik.errors.Lname}</div> : null}
                        </Form.Field>
                        <Form.Field>
                            <Label>Email ID</Label>
                            <Input type='email' placeholder='Enter Email ID' name="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={user.Email}/>
                            {(formik.errors.Email && formik.touched.Email) ? <div className="error">{formik.errors.Email}</div> : null}
                        </Form.Field>
                        <Form.Field>
                            <Label>Address</Label>
                            <Input type='text' placeholder='Enter Address' name="Address" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={user.Address}/>
                            {(formik.errors.Address && formik.touched.Address) ? <div className="error">{formik.errors.Address}</div> : null}
                        </Form.Field>
                        <Form.Field>
                            <Label>Pincode</Label>
                            <Input type='text' placeholder='Enter Pincode' name="Pincode" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={user.Pincode}/>
                            {(formik.errors.Pincode && formik.touched.Pincode) ? <div className="error">{formik.errors.Pincode}</div> : null}
                        </Form.Field>
                        <Form.Field>
                            <Label>Contact No</Label>
                            <Input type='text' placeholder='Enter Contact No' name="Phoneno" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={user.Phoneno}/>
                            {(formik.errors.Phoneno && formik.touched.Phoneno) ? <div className="error">{formik.errors.Phoneno}</div> : null}
                        </Form.Field>
                        <Button onClick={() =>orderaddress()} content='Primary' primary className='placeorderbtn' disabled={!(formik.dirty && formik.isValid)} >Save Details</Button>  
                    </Form> : 
                    
                    <Form>
                    <Form.Field>
                        <Label>First Name</Label>
                        <Input type='text' placeholder='Enter First Name' name="Fname" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={user.Fname}/>
                    </Form.Field>
                    <Form.Field>
                        <Label>Last Name</Label>
                        <Input type='text' placeholder='Enter Last Name' name="Lname" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={user.Lname}/>
                    </Form.Field>
                    <Form.Field>
                        <Label>Email ID</Label>
                        <Input type='email' placeholder='Enter Email ID' name="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={user.Email}/>
                    </Form.Field>
                    <Form.Field>
                        <Label>Address</Label>
                        <Input type='text' placeholder='Enter Address' name="Address" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={user.Address}/>
                    </Form.Field>
                    <Form.Field>
                        <Label>Pincode</Label>
                        <Input type='text' placeholder='Enter Pincode' name="Pincode" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={user.Pincode}/>
                    </Form.Field>
                    <Form.Field>
                        <Label>Contact No</Label>
                        <Input type='text' placeholder='Enter Contact No' name="Phoneno" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={user.Phoneno}/>
                    </Form.Field>
                    <Button onClick={() =>orderaddress()} color='olive' className='placeorderbtn' >Save Details</Button>  
                    <Link to='/userverify'><Button color='teal'>Confirm and Place Order</Button></Link> 
                </Form>}
                    </Segment>
                </div>
            
                {/* <div className='orderdetails'>
                    <Segment>
                    <p className='text'>ORDER DETAILS</p>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell>PRODUCT</Table.Cell>
                                <Table.Cell>PRODUCT NAME</Table.Cell>
                                <Table.Cell>SUB TOTAL</Table.Cell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {
                                babycartremove1.map((x) =>{
                                    return <Table.Row>
                                    <Table.Cell className='imgcell'><Image className="checkoutimg" src={x.img} /></Table.Cell>
                                    <Table.Cell>{x.medicinename}</Table.Cell>
                                    <Table.Cell>$ {x.amount * babyquantity}</Table.Cell>
                                </Table.Row>
                                })
                            }
                            {
                                generalcartremove1.map((x) =>{
                                    return <Table.Row>
                                    <Table.Cell className='imgcell'><Image className="checkoutimg" src={x.img} /></Table.Cell>
                                    <Table.Cell>{x.medicinename}</Table.Cell>
                                    <Table.Cell>$ {x.amount * generalquantity}</Table.Cell>
                                </Table.Row>
                                })
                            }
                            {
                                prescribedcartremove1.map((x) =>{
                                    return <Table.Row>
                                    <Table.Cell className='imgcell'><Image className="checkoutimg" src={x.img} /></Table.Cell>
                                    <Table.Cell>{x.medicinename}</Table.Cell>
                                    <Table.Cell>$ {x.amount * prescribedquantity}</Table.Cell>
                                </Table.Row>
                                })
                            }
                        </Table.Body>
                    </Table>
                     </Segment>    
                </div>   */}
        </div>
        </>
    );
}

export default Checkout;