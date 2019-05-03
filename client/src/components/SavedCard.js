import React from "react"
import { Card, Button, Row, Col } from "react-bootstrap"

function DisplayCard(props) {
    return (
        <Card className="p-1 m-1" key={props.id} id={props.id}>
            <Row className="pl-1 ml-1 pr-1 mr-1">
                <Col xs={9} className="p-1 m-1">
                    <Card.Title style={{ fontWeight: 700 }}>{props.title}</Card.Title>
                    <p>By {props.author}</p>
                </Col>
                <Col xs={2} className="p-1 m-1">
                    <div className="float-right">
                        <a target="_blank" rel="noopener noreferrer" href={props.url}><Button className="p-1 m-1 btn-info">View</Button></a>
                        <Button onClick={() => { props.delete(props.id) }} className="p-1 m-1 btn-secondary">Delete</Button>
                    </div>
                </Col>
            </Row>
            <Row className="p-1 m-1">
                <Col xs={2} className="p-1 m-1">
                    <img className="float-right" src={props.image} alt={props.title} />
                </Col>
                <Col xs={9} className="p-1 m-1">
                    <p style={{ fontSize: "14px" }}>
                        Synopsis:
                        <br />
                        {props.description}
                    </p>
                </Col>

            </Row>
        </Card>
    )
}

export default DisplayCard;