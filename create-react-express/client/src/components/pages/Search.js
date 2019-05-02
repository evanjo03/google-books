import React, { Component } from "react";
import API from "../../utils/API";
import { Row, Col, Container, Card, Form, Button } from 'react-bootstrap'
import DisplayCard from "../DisplayCard"




class Search extends Component {
    state = {
        results: [],
        search: ""
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        //search
        API.searchBooks(this.state.search)
            .then(res => {
                var safeResults = [];
                // Clean up / unify API results 
                res.data.items.forEach((book) => {
                    if (book.volumeInfo.authors === undefined) {
                        book.volumeInfo.authors = "No Author";
                    } else {
                        book.volumeInfo.authors = book.volumeInfo.authors[0]

                        if (book.volumeInfo.imageLinks === undefined) {
                            book.volumeInfo.imageLinks.thumbnail = "No Image";
                        }
                        safeResults.push(book);
                    }
                });
                this.setState({ results: safeResults })
                console.log(this.state)
            })
            .catch(err => {
                console.log(this.state)
                console.log(err)
            });
    };

    handleView(url) {
        window.location.href = url;
    }


    handleSave = (ob) => {
        console.log(ob)
        API.saveBook(ob)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card className="p-2 m-2">
                                <Card.Body >
                                    <Card.Title className="pl-3" style={{ textAlign: "left" }}>Search for a book!</Card.Title>
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
                                        <Col xs={2}>
                                            <Button size="lg" className="float-right m-2" onClick={this.handleFormSubmit}>
                                                Search
                                            </Button>
                                        </Col>
                                    </Row>


                                </Card.Body>
                            </Card>
                            {this.state.results.map(book => {
                                //let title, authors, description, image, link;

                                let myBook = {
                                    "title": book.volumeInfo.title,
                                    "authors": book.volumeInfo.authors,
                                    "description": book.volumeInfo.description,
                                    "image": book.volumeInfo.imageLinks.thumbnail,
                                    "link": book.volumeInfo.previewLInk
                                }

                                return (
                                    <DisplayCard
                                        url={myBook.link}
                                        id={book.id}
                                        title={myBook.title}
                                        authors={myBook.authors}
                                        description={myBook.description}
                                        key={book.id}
                                        view={this.handleView}
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
