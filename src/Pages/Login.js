 
import React from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/FormGroup';
import { Button } from 'react-bootstrap';
import firebase from '../Config/firebase'

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) =>{
      try{
        const responseUser = await firebase.auth.signInWithEmailAndPassword (data.email,data.password)
        console.log(responseUser.user.uid)
        
        
      }catch(e){
        console.log(e.code)
   
     }
    
    
    
    
    } 
    
    return (
      <div>
        <h1>Ingresa a Nuestro Portal</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <FormGroup label="Email" type="email" register={{...register("email")}} />
          <FormGroup label="Contraseña" type="password" register={{...register("password",{required:true,minLength:6})}} />
          {errors.password?.type==="required" &&  <div>El campo Contraseña es Obligatorio</div>}
            {errors.password?.type==="minLength" &&  <div>Completa la Contraseña con al menos 6 caracteres</div>}
          
            <Button type="submit" variant="primary">Ingresar</Button>
        </form>
  
      </div>
    );
  
  
}

export default Login;
