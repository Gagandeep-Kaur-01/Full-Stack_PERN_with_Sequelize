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

//Retrieve objects (with condition) **********************
//Retrieve all Collections from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Collection.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving collections."
      });
    });
};

// Retrieve a single object ******************************
//Find a single Collection with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Collection.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Collection with id=" + id
        });
      });
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