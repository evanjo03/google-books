import React from "react"
import { Card, Button } from "react-bootstrap"

function DisplayCard(props) {
    return (
        <Card key={props.id} id={props.id}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <img src={props.image} alt={props.title}/>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button onClick={() => { props.save() }} className="p-2, m-2">Save</Button>
                <Button onClick={() => { props.view(props.url) }} className="p-2, m-2">View</Button>
            </Card.Body>
        </Card>
    )
}

export default DisplayCard;