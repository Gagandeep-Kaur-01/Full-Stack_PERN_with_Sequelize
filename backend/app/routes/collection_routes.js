module.exports = app => {
    const collections = require("../controllers/collection_controller");

    var router = require("express").Router();

    // Create a new Collection
    router.post("/", collections.create);

     //Retrieve all Collections
    router.get("/", collections.findAll);

    // Retrieve all published Collections
    router.get("/published", collections.findAllPublished);

    // Retrieve a single Collection with id
    router.get("/:id", collections.findOne);

    // Update a Collection with id
    router.put("/:id", collections.update);

    // Delete a Collection with id
    router.delete("/:id", collections.delete);

    // Create a new Collection
    router.delete("/", collections.deleteAll);

    app.use('/api/collections', router);
};