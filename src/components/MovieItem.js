import './MovieItem.css'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react'
export default function MovieItem(props) {
  var cartItem = function() {
    this.name = props.name;
    this.runtime = props.runtime;
  }
  let item = new cartItem()
  const [selected, setSelected] = useState(false);
  function adder() {
    props.setCart([
        ...props.cart, {id: item.name, name: item}
    ]);
    props.setTotal(props.total + item.runtime);
    setSelected(true)
  }
  function remover() {
    props.setCart(props.cart.filter(a => a.id !== item.name));
    props.setTotal(props.total - item.runtime);
    setSelected(false)
  }

    return (
    <Card id="card2" bg="light" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        <p>Name: {props.name}</p>
        <p>Director: {props.director}</p>
        <p>Release Year: {props.release_year}</p>
        <p>Runtime: {props.runtime}</p>
      </Card.Text>
      {selected ? 
    <Button onClick={remover} variant="warning" className="btn-warning">Unfavorite</Button> :
      <Button onClick={adder} variant="info" className="btn-info">Favorite</Button>}
    </Card.Body>
  </Card>
    );
  }