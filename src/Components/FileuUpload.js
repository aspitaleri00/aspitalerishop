import { Component, useState } from "react";
import firebase from 'firebase';
import { propTypes } from "react-bootstrap/esm/Image";

function FileUpload (){
const [uploadValue,setPicture] = useState(0)


return (

<div>
<progress value={uploadValue} max="100"></progress>
<br/>
<imput type="file" onChange={props.onUpload}/>
<br/>
<img widht="320" src={picture} alt="" /> 

</div>


)



}
export default FileUpload;