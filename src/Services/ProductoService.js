
import firebase from '../Config/firebase';

export async function getAllProductos(){
    const querySnapshot = await firebase.db.collection("productos")
          .get()
    return querySnapshot.docs
}
export async function getByIdProductos(id){
    return await firebase.db.doc("productos/"+id)
          .get()
    
}
export async function crearProducto(data){
    return await firebase.db.collection("productos")
        .add(data)
}
































//export async function getAllProductos() { 

//const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod");
  // return await res.json();
    

//}

//export async  function getByIdProductos(){
    
  //  const res= await fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod");
    //return await res.json();

//}
//export async function crearProductos(data){
  //  const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod", data, {
    //  method: "POST",
      //headers: {
        // autorization: 'Bearer token'
      //}
   //});
   //return await res.json();
//}























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

