const db = require("../models");
const Collection = db.collections;
const Op = db.Sequelize.Op;

// Create a new Object ************************************
//Create and Save a new Collection
exports.create = (req, res) => {
    console.log(req.body);
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Collection
    const collection = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Save Collection in the database
    Collection.create(collection)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Collection."
        });
      });
  };

// Retrieve all Collections from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Collection with an id
exports.findOne = (req, res) => {
  
};

// Update a Collection by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Collection with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Collections from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Collections
exports.findAllPublished = (req, res) => {
  
};