import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'
import "./Producto.css"



const styles = {
  cardContainer:{
    marginBottom:"10px",
    width: "18rem"
    

  },
  cardBody:{
    
  }

}




function Producto(props) {
  const {datos} = props
  //const datos = props.datos
  return (

      <Card style={styles.cardContainer}>
        <Card.Img className="imgProducto" variant="top" src={datos.thumbnail} />
        <Card.Body>
          <Card.Title>{datos.name}</Card.Title>
          <Card.Subtitle>Categoria: {datos.category_id}</Card.Subtitle>
          <Card.Text>
            <p>$ {datos.price}</p>
          </Card.Text>
          <Button variant="primary" as={Link} to={'/producto/'+datos.id}>Ver Detalle</Button>
        </Card.Body>
      </Card>
  );
}

export default Producto;
