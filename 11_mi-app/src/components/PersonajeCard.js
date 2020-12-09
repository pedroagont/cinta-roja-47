import React from 'react';
import { Link } from "react-router-dom";
import { Badge, Button,
  Card, CardImg, CardText,
  CardBody, CardTitle
} from 'reactstrap';

const PersonajeCard = (props) => {
  const { id, name, species, image, gender, status } = props;

  const isAlive = (condition) => {
    if(condition === 'Alive') return <Badge color="success">{condition}</Badge>
    else if (condition === 'Dead') return <Badge color="danger">{condition}</Badge>
    else return <Badge color="secondary">{condition}</Badge>
  }

  return (
    <Card className="m-2 text-center">
      <CardImg top width="100%" src={image} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>{species}</CardText>
        <CardText>{gender}</CardText>
        {
          isAlive(status)
        }
        <CardText>
          <Link to={`/personajes/${id}`}>
            <Button className="mt-3" size="sm">Ver más</Button>
          </Link>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default PersonajeCard;
