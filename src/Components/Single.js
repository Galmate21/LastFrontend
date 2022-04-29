import React from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import {useState,useEffect} from 'react'
import {Card} from 'react-bootstrap';
function Single(props) {
    const params = useParams();
    const id = params.termekId;
    const [megnevezes, setmegnevezes] = useState("");
    const [kepek, setkepek] = useState("");
    const [leiras, setleiras] = useState("");

    
    const [kategoriak,setkategoriak]=useState([])
    useEffect(()=>{
      axios({
        method: 'get',
        url: `https://localhost:7082/api/Kategoriak/${id}`,
        responseType: 'json'
      })
        .then((response)=> {
        setkategoriak(response.data)
        setmegnevezes(response.data.megnevezes)
        setleiras(response.data.leiras)
        setkepek(response.data.kepek)

          //console.log(response.data);
        });
     
    },[]);
    return (
        <div className="d-flex justify-content-center">
            <Card style={{height:"400px",width:"400px",marginTop:"25px"}} border="dark">
              <Card.Title className="text-center">{megnevezes}</Card.Title>
              <Card.Body>
              <Card.Text className="text-center">{leiras}</Card.Text>
              <Card.Img style={{height:"100px",width:"100%",objectFit:"contain"}} src={`../images/${kepek}`} alt={kepek}/>
              </Card.Body>
             </Card>
        </div>
    )
}

export default Single
