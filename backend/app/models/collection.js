module.exports = (sequelize, Sequelize) => {
    const Collection = sequelize.define("collection", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return Collection;
};

/*
Sequelize Model represents collections table in PostgreSQL database. 
These columns will be generated automatically: id, title, description, published, createdAt, updatedAt.
*/