import React from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/FormGroup';
import { Button } from 'react-bootstrap';
import firebase from '../Config/firebase'

function AltaProductos() {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    
    const onSubmit = async (data) =>{
      try{
       const document = await firebase.db.collection("productos")
          .add(data)
            console.log(document)

          
        
        
      }catch(e){
        console.log(e.code)
   
     }
    
    
    
    
    } 
    
    return (
      <div>
         <h1>Ingresa el Producto</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup label="Nombre" register={{...register("name",{required:true})}} />
          {errors.name && <div>El campo nombre es Obligatorio</div>}
          <FormGroup label="Precio" register={{...register("price",{required:true})}} />
          {errors.price &&  <div>El campo Contraseña es Obligatorio</div>}
          <FormGroup label="Descripcion" type="text" register={{...register("description")}} />
          
          
            {errors.password?.type==="minLength" &&  <div>Completa la Contraseña con al menos 6 caracteres</div>}
       
          
          
          
          
            <Button type="submit" variant="primary">Guardar</Button>
        </form>
  
      </div>
    );
  
  
}

export default AltaProductos;
