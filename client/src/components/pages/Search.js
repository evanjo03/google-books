import React, { Component } from "react";
import API from "../../utils/API";
import { Row, Col, Container, Card, Form, Button, Modal } from 'react-bootstrap'
import DisplayCard from "../DisplayCard"

class Search extends Component {

    //our constructor to handle our modal event binding
    constructor(props, context) {
        super(props, context);

        //binding
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        //state
        this.state = {
            results: [],
            search: "",
            show: false,
            modalTitle: "",
            modalInfo: ""
        };
    }

    //input handler
    handleInputChange = event => {

        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value,

        });
    };

    //search handler
    handleFormSubmit = event => {

        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        //search
        API.searchBooks(this.state.search)
            .then(res => {

                //set an array variable where we will push our altered results
                var safeResults = [];

                // Clean up / unify API results 
                res.data.items.forEach((book) => {
                    if (book.volumeInfo.authors === undefined) {
                        book.volumeInfo.authors = "No Author Provided";
                    } else {
                        book.volumeInfo.authors = book.volumeInfo.authors[0]
                        if (book.volumeInfo.imageLinks.thumbnail === undefined) {
                            book.volumeInfo.imageLinks.thumbnail = "No Image Provided";
                        }
                        if (book.volumeInfo.imageLinks === undefined) {
                            book.volumeInfo.imageLinks.thumbnail = "No Image Provided";
                        }
                        if (book.volumeInfo.description === undefined) {
                            book.volumeInfo.description = "No Description Provided";
                        }

                        //push the end product into our safe results object
                        safeResults.push(book);
                    }
                });

                //set the state to our clean results
                this.setState({ results: safeResults })
                console.log("Current state: " + JSON.stringify(this.state))
            })

            .catch(err => {
                console.log("Current state:" + JSON.stringify(this.state))
                console.log(err + this.state.results)

                //change our modal states so the modal displays the correct error response
                this.setState({
                    modalTitle: "Invalid Search",
                    modalInfo: "The search entered was invalid! Please try again."
                })

                //show the modal
                this.handleShow()
            });
    };

    //function to create new book object
    handleSave = (ob) => {
        console.log("Book object to add to DB:" + JSON.stringify(ob))

        //save call
        API.saveBook(ob)
            .then(res => {
                console.log("Result:" + res)

                //change modal
                this.setState({
                    modalTitle: "Book Saved",
                    modalInfo: "You added the book to your list! Select 'Saved' to see your saved books!"
                })

                //show modal
                this.handleShow();
            })
            .catch(err => {
                console.log("Error:" + err)

                //change modal
                this.setState({
                    modalTitle: "Already Saved",
                    modalInfo: "You already added this Book to your list!"
                })

                //show modal
                this.handleShow();
            });
    }

    //functions to handle modal changes
    handleClose() {
        this.setState({ show: false });
    }
    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ height: "40vh" }} className="p-1 m-1">
                                <Card.Body >
                                    <Card.Title className="pl-3" style={{ textAlign: "center" }}>Search for a book:</Card.Title>
                                    <Row>
                                        <Col xs={10}>
                                            <Form.Control name="search"
                                                value={this.state.search}
                                                onChange={this.handleInputChange}
                                                type="text"
                                                variant="primary"
                                                size="lg"
                                                className="p-2 m-2"
                                                placeholder="Enter a book title!" />
                                        </Col>

                                        {/* here is our modal */}
                                        <Modal show={this.state.show} onHide={this.handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{this.state.modalTitle}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>{this.state.modalInfo}</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={this.handleClose}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>

                                        <Col xs={2}>
                                            <Button size="lg" className="float-right m-2" onClick={this.handleFormSubmit}>
                                                Search
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            {this.state.results.map(book => {
                                
                                //created an object to store our book info
                                let myBook = {
                                    "title": book.volumeInfo.title,
                                    "authors": book.volumeInfo.authors,
                                    "description": book.volumeInfo.description,
                                    "image": book.volumeInfo.imageLinks.thumbnail,
                                    "link": book.volumeInfo.previewLink
                                }

                                return (
                                    <DisplayCard
                                        url={myBook.link}
                                        id={book.id}
                                        title={myBook.title}
                                        authors={myBook.authors}
                                        description={myBook.description}
                                        key={book.id}
                                        image={myBook.image}
                                        save={() => { this.handleSave(myBook) }}
                                    />
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default Search;
