import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";
import frontpage from "./cake1.jpeg"
import ending from "./merryGnomeClose.jpg"


function Goods() {



    return (
        <Card className="aboutBack">
        <Card.Body className="text">
        <p className="tourWords">
          <h1 className="tourWords">Cakes</h1>
          <div >
            <Card.Img src={frontpage} alt="TheGoods"></Card.Img>
          </div>
          </p>
          <div>
          
         <p className="tourWords">

           {/* <h3>TBD</h3> */}
           {/* <h3>Check Back Soon for Upcoming Shows</h3> */}
         <h1 className="tourWords">Cupcakes</h1>
         <br></br>
         <h4>
          <Card.Img src={ending} alt="Piggy"></Card.Img> 
         </h4>
         
         <br></br>
         
        
              
             

          </p>

        </div>

        </Card.Body>
      </Card>
  )
}
export default Goods;