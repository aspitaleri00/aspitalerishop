import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'


const styles = {
        cardContainer : {
            
                backGroundColor: "#333",
                padding:"25px",
                maxWidht:"350px",
                width:"100%",
                textAlign:"center",
                borderRadius:"5px",
                margin:"0 auto",
                marginTop:"15%",

        }


}


const date = new Date();

function Reloj() {
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });


  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  
  return (


    <div className="App">
      <div>
     <h1 style={styles.cardContainer}> {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds} </h1>

        <Card style={styles.cardContainer}></Card>
      </div>
    </div>
  );
}

export default Reloj ;