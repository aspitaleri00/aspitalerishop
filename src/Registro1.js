function Registro(){
    return (
 <div>
<form>
    <br/>
    <label>Nombre</label>
    <br/>
    <input type='text'name= "nombre"></input>
    <br/>
    <label>Apellido</label>
    <br/>
    <input type='text' name='Apellido'></input>
    <br/>
    <label>Email</label>
    <br/>
    <input type='text' name='Email'></input>
    <br/>
    <label>Teléfono</label>
    <br/>
    <input type='number' name='Teléfono'></input>
    <br/>
    <label>Password</label>
    <br/>
    <input type='Password' name='Password'></input>
    <br/>
    <label>Confirmar Password</label>
    <br/>
    <input type='Password' name='Confirmar Password'></input>
    <br/>
    <br/>
    <input type='button' name='Enviar' value='enviar' onClick='enviar'></input>

   




</form>
 </div>

    )


}

export default Registro

