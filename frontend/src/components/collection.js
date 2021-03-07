import React, { Component } from "react";
import CollectionDataService from "../services/collection_service";

export default class Collection extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getCollection = this.getCollection.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateCollection = this.updateCollection.bind(this);
    this.deleteCollection = this.deleteCollection.bind(this);

    this.state = {
      currentCollection: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getCollection(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCollection: {
          ...prevState.currentCollection,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentCollection: {
        ...prevState.currentCollection,
        description: description
      }
    }));
  }

  getCollection(id) {
    CollectionDataService.get(id)
      .then(response => {
        this.setState({
          currentCollection: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentCollection.id,
      title: this.state.currentCollection.title,
      description: this.state.currentCollection.description,
      published: status
    };

    CollectionDataService.update(this.state.currentCollection.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentCollection: {
            ...prevState.currentCollection,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateCollection() {
    CollectionDataService.update(
      this.state.currentCollection.id,
      this.state.currentCollection
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The Collection was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteCollection() {    
    CollectionDataService.delete(this.state.currentCollection.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/collections')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentCollection } = this.state;

    return (
      <div>
        {currentCollection ? (
          <div className="edit-form">
            <h4>Collection</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentCollection.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentCollection.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentCollection.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentCollection.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteCollection}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateCollection}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Collection...</p>
          </div>
        )}
      </div>
    );
  }
}