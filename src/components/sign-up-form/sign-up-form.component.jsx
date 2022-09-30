//jshint esversion:9
import { async } from "@firebase/util";
import { useState } from "react";
import {  createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


import './sign-up-form.styles.scss';

const defaultFormFields = { displayName: '',email: '',password:'', conformPassword:''};

const SignUp = () =>{
    //using useState hooks for taking the data input
    const[fromFields, setFromFields] = useState(defaultFormFields);
    const {displayName,email,password, conformPassword} = fromFields;

    //clear input fields after submit
    const resetFormFields = () => {
        setFromFields(defaultFormFields);
    };
    //handle submit 
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== conformPassword){
            alert("Passwords do not match");
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch(error){
            if(error.code === 'auth/emial-already-in-use'){
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error',error);
            } 
        }
    };
    //handle change for updating the state of the input
    const handleChange = (event) => {
        const {name,value} = event.target;
        setFromFields({...fromFields, [name]: value}); //...formFields is used because they are duplicated version of the same state 
    };
    return(
        <div className="sign-up-container">
            <h2>No Account?</h2>
            <span>Sign up with Email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput Label='Display Name' type='text' required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput Label='Email' type='email' required onChange={handleChange} name="email" value={email}/>
                             
                <FormInput Label='Password' type='password' required onChange={handleChange} name="password" value={password}/>
                               
                <FormInput Label='Conform Password' type='password' required onChange={handleChange} name="conformPassword" value={conformPassword}/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUp;