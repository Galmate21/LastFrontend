import "../Css/Home.css";
import axios from "axios";
import { useEffect,useState } from "react";
import {Card, Row } from 'react-bootstrap'
import { Button } from "bootstrap";

function Home() {
 
  const [kategoriak,setkategoriak]=useState([])
useEffect(()=>{
  axios({
    method: 'get',
    url: `https://localhost:7082/api/Kategoriak`,
    responseType: 'json'
  })
    .then((response)=> {
    setkategoriak(response.data)
      //console.log(response.data);
    });
 
},[]);

  return (
    <div>
      <h1 className="text-center">Kategóriák</h1>
     <hr />
      <Row  xs={1} sm={2} md={3} className="g-4">
       {kategoriak.map((value,key)=>{
         return(<div key={key}>
           
             <Card onClick={()=>window.location .assign("/single/"+value.id)} style={{height:"400px"}} border="dark">
              <Card.Title className="text-center">{value.megnevezes}</Card.Title>
              <Card.Body>
              <Card.Text className="text-center">{value.leiras}</Card.Text>
              <Card.Img style={{height:"100px",width:"100%",objectFit:"contain"}} src={`./images/${value.kepek}`} alt={value.kepek}/>
              
              </Card.Body>
              
             </Card>
           
           
         </div>)
       })}
      </Row>
    </div>
  );
}

export default Home;