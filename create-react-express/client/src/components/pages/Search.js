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
                this.setState({ results: res.data.items })
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
                            <Card>
                                <Card.Body>
                                    <Card.Title>Search for a book!</Card.Title>
                                    <Form.Control name="search"
                                        value={this.state.search}
                                        onChange={this.handleInputChange}
                                        type="text"
                                        variant="primary"
                                        size="lg"
                                        className="p-2 m-2"
                                        placeholder="Enter a book title!" />
                                    <Button onClick={this.handleFormSubmit}>
                                        Search
                                    </Button>
                                </Card.Body>
                            </Card>
                            {this.state.results.map(book => {
                                let auth;
                                if (book.volumeInfo.authors[0]) {
                                    auth = book.volumeInfo.authors[0]
                                } else { auth = "No Author Listed"}
                                let myBook = {
                                    "title" : book.volumeInfo.title,
                                    "authors" : auth,
                                    "description" : book.volumeInfo.description,
                                    "image" : book.volumeInfo.imageLinks.thumbnail || "No Image Available",
                                    "link" : book.volumeInfo.infoLink
                                }
                                return (
                                    <DisplayCard
                                        url={myBook.link}
                                        id={book.id}
                                        title={myBook.title}
                                        description={myBook.description}
                                        key={book.id}
                                        view={this.handleView}
                                        image={myBook.image}
                                        save={() => {this.handleSave(myBook)}}
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
