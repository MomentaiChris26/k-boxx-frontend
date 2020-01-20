import React from 'react';
import {Accordion,Card} from 'react-bootstrap'

 const Song=()=> {
    return (
        <Accordion>
        <Card className="songCard">
          <Accordion.Toggle as={Card.Header} eventKey="0"  className="toggleStyle">
              <span style={{fontSize:'20px'}}> Bye Bye Bye</span>
              <span style={{fontSize:'13px'}}>NSYNC*</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="accordionBody">
                <span style={{fontWeight:'bold'}}>Prioritize</span>
                <span style={{color:'red'}}>Delete</span>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="songCard">
          <Accordion.Toggle as={Card.Header} eventKey="1" className="toggleStyle">
          <span style={{fontSize:'20px'}}> Everybody</span>
              <span style={{fontSize:'13px'}}>Backstreet Boys</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
          <Card.Body className="accordionBody">
                <span style={{fontWeight:'bold'}}>Prioritize</span>
                <span style={{color:'red'}}>Delete</span>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="songCard">
          <Accordion.Toggle as={Card.Header} eventKey="2" className="toggleStyle">
          <span style={{fontSize:'20px'}}> 5,6,7,8</span>
              <span style={{fontSize:'13px'}}>Steps</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
          <Card.Body className="accordionBody">
                <span style={{fontWeight:'bold'}}>Prioritize</span>
                <span style={{color:'red'}}>Delete</span>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
}
export default Song