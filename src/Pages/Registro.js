
import React from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/FormGroup';
import { Button } from 'react-bootstrap';
import firebase from '../Config/firebase'

function Registro() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) =>{
      
      
      try{
        console.log('Estos son los datos',data,data.email,data.password);
        const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
        console.log(responseUser)
       
       
        if(responseUser.user.uid){

          const document = await firebase.db.collection("usuarios")
          
          .add({
            name:data.name,
            lastname:data.lastname,
            userId:responseUser.user.uid,

          })
        }
        
      }catch(e){
        console.log(e)
   
     }
    
    
    
    
    } 
    
    return (
      
      <div>
        <h1>Registrate en Nuestro Portal</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup label="Nombre" register={{...register("name",{required:true})}} />
          {errors.name && <div>El campo nombre es Obligatorio</div>}
          <FormGroup label="Apellido" register={{...register("lastname")}} />
          <FormGroup label="Email" type="email" register={{...register("email")}} />
          <FormGroup label="Contraseña" type="password" register={{...register("password",{required:true,minLength:6})}} />
          {errors.password?.type==="required" &&  <div>El campo Contraseña es Obligatorio</div>}
            {errors.password?.type==="minLength" &&  <div>Completa la Contraseña con al menos 6 caracteres</div>}
          
            <Button type="submit" variant="primary">Registrarme</Button>
        </form>
  
      </div>
    );
  
  
}

export default Registro;
