import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Badge, Button } from 'reactstrap';
import { Link } from "react-router-dom";

const PersonajeDetails = () => {

  const { id } = useParams();
  const [details, setDetails] = useState({});

  const getDetails = async (id) => {
    const URL = 'https://rickandmortyapi.com/api/character/'+id;
    await axios.get(URL)
      .then(response => {
        setDetails(response.data);
      })
      .catch(err => console.log(err));
  }
  useEffect(() => getDetails(id), [id]);

  const isAlive = (condition) => {
    if(condition === 'Alive') return <Badge color="success">{condition}</Badge>
    else if (condition === 'Dead') return <Badge color="danger">{condition}</Badge>
    else return <Badge color="secondary">{condition}</Badge>
  }

  return (
    <>
      <div className="text-center">
        <div className="container">
          <img src={details.image} alt="rick y morty" width="400px" className="img-thumbnail"/>
        </div>
        <h1 className="display-4 m-3">{details.name}</h1>
        <p className="lead">{details.species}</p>
        <p className="lead">{details.gender}</p>
        <p className="lead">{ isAlive(details.status) }</p>
        <p className="lead">
          <Link to={'/personajes'}>
            <Button className="mt-3" size="lg">Regresar</Button>
          </Link>
        </p>
      </div>
    </>
  );
};

export default PersonajeDetails;
