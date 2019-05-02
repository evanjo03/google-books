import React from "react"
import { Card, Button, Row, Col } from "react-bootstrap"

function DisplayCard(props) {
    return (
        <Card className="p-2 m-2" key={props.id} id={props.id}>
            <Row className="pl-2 ml-2 pr-2 mr-2">
                <Col xs={9} className="p-2 m-2">
                    <Card.Title style={{fontWeight: 700}}>{props.title}</Card.Title>
                    <p>By {props.authors}</p>
                </Col>
                <Col xs={2} className="p-2 m-2">
                    <div className="float-right">
                        <Button onClick={() => { props.save() }} className="p-2 m-2 btn-info">Save</Button>
                        <Button onClick={() => { props.view(props.url) }} className="p-2 m-2 btn-secondary">View</Button>
                    </div>
                </Col>
            </Row>
            <Row className="p-2 m-2">
                <Col xs={2} className="p-2 m-2">
                    <img className="float-right" src={props.image} alt={props.title} />
                </Col>
                <Col xs={9} className="p-2 m-2">
                    <p style={{ fontSize: "14px" }}>
                        {props.description}
                    </p>
                </Col>

            </Row>
        </Card>
    )
}

export default DisplayCard;