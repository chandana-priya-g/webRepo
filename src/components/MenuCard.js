import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from "../imgs/chicken.jpg";
import "./MenuCard.css";

function MenuCard(props) {
  return (
    <div>
        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={img1} height="100px" width="180px"/>
        <Card.Body>
            <Card.Title>{props.data.title}</Card.Title>
            <Card.Text>
            {props.data.decription}
            </Card.Text>
            <Card.Text> Price: {props.data.price}</Card.Text>
        </Card.Body>
        </Card>
    </div>
  );
}

export default MenuCard;