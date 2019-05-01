import React, { Component } from "react";
import API from "../../utils/API";
import { Row, Col, Container } from 'react-bootstrap'
import SavedCard from "../SavedCard"



class Saved extends Component {
  state = {
    results: []
  }

  getBooks() {
    API.loadBooks()
      .then(res => {
        this.setState({ results: res.data })
        console.log(this.state)
      }).catch(error => console.log(error))
  }

  componentDidMount() {
    this.getBooks();
  }


  handleView(url) {
    window.location.href = url;
  }
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => {
        this.getBooks();
        console.log(res)
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              {this.state.results.map(book => {
                return (
                  <SavedCard
                    url={book.link}
                    id={book._id}
                    image={book.image}
                    title={book.title}
                    description={book.description}
                    key={book._id}
                    delete={this.deleteBook}
                    view={this.handleView}

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

export default Saved;
