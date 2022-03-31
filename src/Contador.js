import {useState} from "react";

function Contador(){
    const [Contador,setContador] = useState(1)


    
    
return ( 
    <div>
        
    <span>El contador esta a{Contador}</span>
    <button onClick={() => setContador( setContador + 10)}>
       
       Incrementar numero
    
    </button>
    <button onClick={() => setContador( setContador - 10)}>
        Decrementar numero
    </button>



    </div>



)


 }
export default Contador 