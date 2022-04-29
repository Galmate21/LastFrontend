import React from 'react'
import { Row, Form,Button,CloseButton, Card} from 'react-bootstrap'
import {useState,useEffect} from 'react';
import axios from 'axios';

function Uj() {
  const [leiras,setleiras]=useState("");
  const [megnevezes,setmegnevezes]=useState("");
  const [kepek,setkepek]=useState("");

   const handleSubmit=async(e)=>{
e.preventDefault();
 var body={
    id:0,
    kepek:kepek,
    megnevezes:megnevezes,
    leiras:leiras
  }
try {
 
  const config={
    headers:{
      "Content-type":"application/json"
    }
  }
  const {data}=await axios.post(`https://localhost:7082/api/UjKategoriak`,JSON.stringify(body),config)

  
} catch (error) {
  alert("Hiba!")
}


   }


        
    
      
    return (
        <div className="d-flex justify-content-center">
          <Card style={{height:"200px"}}  border="dark">
            <Card.Title className="text-center">Kategória hozzáadása</Card.Title>
             <Form style={{width:"400px",height:"200px"}} onSubmit={handleSubmit}>
          
        <Form.Group id="ep" size="md" controlId="termekNev">
         
          <Form.Control
            autoFocus
            placeholder="megnevezés"
            type="text"
            value={megnevezes}
            onChange={(e) => setmegnevezes(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group id="ep" size="md" controlId="Ar">
          
          <Form.Control
            autoFocus
            placeholder="leiras"
            type="text"
            value={leiras}
            onChange={(e) => setleiras(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group id="ep" size="md" controlId="meret">
      
        <Form.Control
            autoFocus
            placeholder="Kép link"
            type="text"
            value={kepek}
            onChange={(e) => setkepek(e.target.value)}
          />
   
  </Form.Group>
  <br />
  <Button type="submit">Küldés</Button>
        </Form>
        </Card>
        </div>
        
    )
}

export default Uj
