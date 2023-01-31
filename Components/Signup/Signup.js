import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { userdetails } from "../PharmacyJson/PharmacyJson";
import {Form,Button, Segment} from 'semantic-ui-react';
import './Signup.css';

const initialValues = {
    name: '',
    Lname: '',
    email: '',
    Contactno: '',
    password: '',
    RetypePassword: ''

}
const onSubmit = (value) => {
    // console.log(value);
}
const validationSchema = Yup.object({
    name: Yup.string()
        .required("First Name is Required"),
    Lname: Yup.string()
        .required("Last Name is Required"),
    email: Yup.string()
        .required("Email is Required")
        .email("Invalid Email ID"),
    Contactno: Yup.string()
        .required("Contact no is Required")
        .matches(/^[0-9]*$/, "Only numbers are allowed")
        .length(10, "Enter a valid mobile number"),
    password: Yup.string()
        .required("Password is required")
        .length(8, "Password should be 8 characters long"),
    RetypePassword: Yup.string()
        .required("ConformPassword is Required")
        .oneOf([Yup.ref("password")], "Password do not match")
})


const Signup = () => {

    const[user, append] =useState(userdetails)

    useEffect (() =>{
        localStorage.setItem('users', JSON.stringify(user))
    },[user])

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
        isValid:true,
        dirty:false
    })

    return (
        <>
                <div className="signupform">
                    <Segment>
                        <h1 className="signuptext">SIGNUP FORM</h1>
                        <Form onSubmit={formik.handleSubmit}> 
                            <Form.Field>
                            <label>First Name</label>
                            <input type="text" placeholder='Enter First Name' name="name" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {(formik.errors.name && formik.touched.name) ? <div className="error">{formik.errors.name}</div> : null}
                            </Form.Field>
                            <Form.Field>
                            <label>Last Name</label>
                            <input type="text" placeholder='Enter Last Name' name="Lname" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {(formik.errors.Lname && formik.touched.Lname) ? <div className="error">{formik.errors.Lname}</div> : null}
                            </Form.Field>
                            <Form.Field>
                            <label>Email ID</label>
                            <input type="email" placeholder='Enter Email ID' name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {(formik.errors.email && formik.touched.email) ? <div className="error">{formik.errors.email}</div> : null}
                            </Form.Field>
                            <Form.Field>
                            <label>Contact No</label>
                            <input type="text" placeholder='Enter Contact No' name="Contactno" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {(formik.errors.Contactno && formik.touched.Contactno) ? <div className="error">{formik.errors.Contactno}</div> : null}
                            </Form.Field>
                            <Form.Field>
                            <label>Password</label>
                            <input type="password" placeholder='Enter Password' name="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {(formik.errors.password && formik.touched.password) ? <div className="error">{formik.errors.password}</div> : null}
                            </Form.Field>
                            <Form.Field>
                            <label>Confirm Password</label>
                            <input type="password" placeholder='Enter confirm Password' name="RetypePassword" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {(formik.errors.RetypePassword && formik.touched.RetypePassword) ? <div className="error">{formik.errors.RetypePassword}</div> : null}
                            </Form.Field>
                            <Button type='submit' onClick={() =>append(user =>[...user, formik.values])} primary disabled={!(formik.dirty && formik.isValid)}>Register</Button>
                        </Form>
                    </Segment>

                </div>
        </>
    );
}

export default Signup;