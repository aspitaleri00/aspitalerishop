const [producto,setProducto]= useState ([ 


    

    {
        denominación: "FourSuperCheese",
        precio: "$1100",
        categoria: "Burguers",
    },
    
    { 
        denominación: "BigPapas",
        precio: "$700",
        categoria: "Entrada"
     },
    
     {  
        denominación: "LaFrutillaDelPostre",
        precio: "$690",
        categoria: "Postre"
     },
    
     { 
        denominación: "CreamCoco",
        precio: "$650",
        categoria: "Postre"
    
        }
    
    ]); 


    {producto.map(producto=><Producto nombre= {producto.denominación} precio={producto.precio} categoria={producto.categoria} />)}
    
    newFunction();

function Array() {
    <Producto nombre="Fourcheese" categoria="Hamburguesa" precio="$40 "></Producto>,
    <Producto nombre="Ketchup" categoria="Hamburguesa" precio="$48 "></Producto>,
    <Producto nombre= "Cuadruple" categoria="Hamburguesa" precio= "$52 " ></Producto>
    console.log({producto});
}


export async function getAllProductos(){
    const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod");
   return await res.json();
    

}

export async  function getByIdProductos(){
    
    const res= await await fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod");
    return await res.json();

}
export async function crearProductos(data){
    const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod", data, {
      method: "POST",
      headers: {
         autorization: 'Bearer token'
      }
   });
   return await res.json();
}



function Detalle() {
    const [producto,setProducto] = useState({})
    const [loading,setLoading] = useState(true)
    const {id} = useParams();
    console.log("id",id)
    
    
    useEffect(
      ()=>{
  
        
        getByIdProductos(id)
        .then(data=>{
          console.log("data",data)
          if(data.results){
            setProducto(data.results)
            setLoading(false)
          }
        })
        .catch(e=>{
          console.log(e)
        })
  
        
        console.log("Hola")
      },
      []
  
     
  
  
    )
        
    if(loading){
      return (
        <div>
          Cargando ...
    
        </div>
      );
    }else{
      return (
        <div>
          <p>{producto.title}</p>
          <p>{producto.price}</p>
        </div>
      );
    }
    
  }
  
  export default Detalle;
  



















//Headers
/*fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod",{
    
    headers:{
        autorization:'Bearer token'
    }
})

instance.get("sites/MLA/search?q=ipod",{
    
    headers:{
        autorization:'Bearer token'
    }
})
fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod",{
    method:"DELETE",
    headers:{
        autorization:'Bearer token'
    }
})
instance.delete("/10",{
    
    headers:{
        autorization:'Bearer token'
    }
})
fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod",data,{
    method:"POST",
    headers:{
        autorization:'Bearer token'
    }
})
instance.post("sites/MLA/search?q=ipod",data,{
    
    headers:{
        autorization:'Bearer token'
    }
})
fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod",data,{
    method:"PUT",
    headers:{
        autorization:'Bearer token'
    }
})
instance.put("sites/MLA/search?q=ipod",data,{
    
    headers:{
        autorization:'Bearer token'
    }
})*/

