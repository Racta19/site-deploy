//jshint esversion:9
import { async } from "@firebase/util";
import { useState} from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInWithGooglePopup,signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";



import './sign-in-form.styles.scss';

const defaultFormFields = { email: '',password:''};

const SignIn = () =>{
    //using useState hooks for taking the data input
    const[fromFields, setFromFields] = useState(defaultFormFields);
    const {email,password} = fromFields;
  
    //clear input fields after submit
    const resetFormFields = () => {
        setFromFields(defaultFormFields);
    };
    //handle submit 
    const handleSubmit = async(event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();
        } catch(error){
            if(error.code === 'auth/wrong-password'){
                alert('incorrect Password');
            }else if(error.code === 'auth/user-not-found'){
                alert('email not found');
            }else {
                console.log(error);
            }
        }
    };
    //Authentication
    const signInWithGoogle = async() => {
        await signInWithGooglePopup();
        
    };
    //handle change for updating the state of the input
    const handleChange = (event) => {
        const {name,value} = event.target;
        setFromFields({...fromFields, [name]: value}); //...formFields is used because they are duplicated version of the same state 
    };
    return(
        <div className="sign-up-container">
            <h2>Already have an Account?</h2>
            <span>Sign in with Email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput Label='Email' type='email' required onChange={handleChange} name="email" value={email}/>
                             
                <FormInput Label='Password' type='password' required onChange={handleChange} name="password" value={password}/>

                <div className="buttons-container"> 
                    <Button type="submit">Sign In</Button>
                    <Button type= 'button' buttonType='google' onClick={signInWithGoogle}>Google Sign in</Button>
                </div>            
            </form>
        </div>
    );
};

export default SignIn;