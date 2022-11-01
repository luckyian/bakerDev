import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import example1 from "./cupcake1.jpeg";
import example2 from "./cupcake2.jpg";
import example3 from "./cupcake3.jpg";
import example4 from "./cupcake4.jpg";
import example5 from "./cupcake5.jpg";

function Cupcakes() {


  return (

    <Container>
      <br/>
      <h1 className="cupcakes">Cupcakes</h1>
      <br/>
      <Card>


      <Card.Img src={example1} alt="TheGoods"></Card.Img>

      </Card>
      <br/>
      <Card>

      <Card.Img src={example4} alt="TheGoods"></Card.Img>

      </Card >
<br/>
      <Card>

      <Card.Img src={example2} alt="TheGoods"></Card.Img>
      </Card >
      <br/>
      <Card>

      
      <Card.Img src={example3} alt="TheGoods"></Card.Img>
      
      </Card >
      <br/>
      <Card>

      <Card.Img src={example5} alt="TheGoods"></Card.Img>
      </Card >
      
      

    </Container >

  );

}

export default Cupcakes;
