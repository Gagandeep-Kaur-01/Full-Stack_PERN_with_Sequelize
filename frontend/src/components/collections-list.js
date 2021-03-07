import React, { Component } from "react";
import CollectionDataService from "../services/collection_service";
import { Link } from "react-router-dom";

export default class CollectionsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveCollections = this.retrieveCollections.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCollection = this.setActiveCollection.bind(this);
    this.removeAllCollections = this.removeAllCollections.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      collections: [],
      currentCollection: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveCollections();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveCollections() {
    CollectionDataService.getAll()
      .then(response => {
        this.setState({
          collections: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveCollections();
    this.setState({
      currentCollection: null,
      currentIndex: -1
    });
  }

  setActiveCollection(collection, index) {
    this.setState({
      currentCollection: collection,
      currentIndex: index
    });
  }

  removeAllCollections() {
    CollectionDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    CollectionDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          collections: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, collections, currentCollection, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Collections List</h4>

          <ul className="list-group">
            {collections &&
              collections.map((collection, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveCollection(collection, index)}
                  key={index}
                >
                  {collection.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllCollections}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentCollection ? (
            <div>
              <h4>Collection</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentCollection.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentCollection.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentCollection.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/collections/" + currentCollection.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Collection...</p>
            </div>
          )}
        </div>
      </div>
    );
  }

}