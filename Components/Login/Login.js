import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {Form, Button, Segment} from 'semantic-ui-react';
import './Login.css';
import * as Yup from 'yup';
import { Link } from "react-router-dom";


const Login = () => {
    const userinfo = JSON.parse(localStorage.getItem('users'))
    const [users, userValidate] = useState("");
    
    const initialValues = {
        EmailId: '',
        Password: ''
    }

    const UserValidation = () => {
        const email = formik.values.EmailId;
        console.log("email", email)
        const pass = formik.values.Password;
        userinfo.map((x, index) => {
            return (x.email === email) ? ((pass === userinfo[index].password) ? userValidate("userexist") : userValidate("Invalid Email Id or Password")) : null;
        })
    }

    useEffect (() =>{
        localStorage.setItem("loggedin" ,JSON.stringify(users))
    },[users])


    console.log("users", users);

    const onSubmit = (values) => {
        //console.log(values);
    }

    const validationSchema = Yup.object({
        EmailId:Yup.string()
                .required('Email Id is required'),
        Password:Yup.string()
                 .required('Password is required')
    })




    // console.log("signup props",props);
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
        isValid: true,
        isDirty: false
    })
    console.log("isvalid " , formik.isValid);

    return (
        <>
        {(users === "userexist") ? window.location.pathname="/":
        <div className="login">
                <div className="loginpage">
                    <p className="logintext">LOGIN FORM</p>
                    <Segment>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Field>
                        <label>Email ID</label>
                        <input type="email" placeholder='Enter Email ID' name="EmailId" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {(formik.errors.EmailId && formik.touched.EmailId) ? <div className="error">{formik.errors.EmailId}</div> : null}
                        </Form.Field>
                        <Form.Field>
                        <label>Password</label>
                        <input type="password" name="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter Password' />
                        {(formik.errors.Password && formik.touched.Password) ? <div className="error">{formik.errors.Password}</div> : 
                         (users!=="" && users!=="userexist") ? <div className="error">Invalid Username or Password</div> : null}
                        </Form.Field>
                        <Form.Field>
                        </Form.Field>
                        <Button type='submit' className="loginbtn" onClick={() =>{UserValidation() }} color="blue" disabled={!(formik.isValid && formik.dirty) } >Login Here</Button> 
                    </Form>
                    </Segment>
                    <div className="newmember">
                        <p>Don't have an account? </p>
                        <Link to='/signup'>
                            <Button color="teal">Signin</Button>
                        </Link>
                    </div>
                </div>
            </div> }
        </>        
    );
}

export default Login;

